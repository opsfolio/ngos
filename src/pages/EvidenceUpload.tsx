import React, { useState, useRef, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { 
  Upload, File, X, Check, AlertCircle, FileText, Image, Archive, 
  Search, Tag, Eye, Download, Share2, Clock, Users, Settings, 
  Zap, Database, Globe, Filter, SortAsc, Grid, List, Hash,
  Scan, FileSearch, Bot, Mail, FolderOpen, Terminal
} from 'lucide-react';

interface DocumentFile {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  status: 'pending' | 'uploading' | 'uploaded' | 'processing' | 'processed';
  progress: number;
  evidenceType: string;
  tags: string[];
  policies: string[];
  compliance: string[];
  description: string;
  extractedText?: string;
  organization?: string;
  isProcessingText?: boolean;
  uploadedAt?: Date;
  metadata?: {
    author?: string;
    createdDate?: string;
    modifiedDate?: string;
    pageCount?: number;
  };
}

const EvidenceUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<DocumentFile[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [sortBy, setSortBy] = useState<'name' | 'date' | 'size' | 'type'>('date');
  const [filterType, setFilterType] = useState<string>('all');
  const [isProcessingEnabled, setIsProcessingEnabled] = useState(true);
  const [autoTaggingRules, setAutoTaggingRules] = useState<Array<{rule: string, tags: string[]}>>([]);
  const [selectedOrganization, setSelectedOrganization] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Papra-inspired features
  const organizations = [
    'Security Team',
    'Compliance Department', 
    'IT Operations',
    'Risk Management',
    'Legal Department',
    'External Auditors'
  ];

  const policies = [
    'Information Security Policy',
    'Access Control Policy',
    'Data Protection Policy', 
    'Incident Response Policy',
    'Business Continuity Policy',
    'Risk Management Policy',
    'Security Awareness Policy',
    'Vulnerability Management Policy'
  ];

  const complianceFrameworks = [
    'SOC 2 Type I',
    'SOC 2 Type II', 
    'ISO 27001',
    'PCI DSS',
    'HIPAA',
    'GDPR',
    'NIST',
    'FedRAMP'
  ];

  const evidenceTypes = [
    'Security Assessment',
    'Training Record',
    'System Log',
    'Configuration Document',
    'Incident Report', 
    'Audit Report',
    'Policy Document',
    'Procedure Document',
    'Certificate',
    'Screenshot',
    'Vulnerability Scan',
    'Penetration Test',
    'Code Review',
    'Other'
  ];

  // Common tags for auto-suggestions
  const commonTags = [
    'security', 'compliance', 'audit', 'training', 'incident', 'vulnerability',
    'assessment', 'policy', 'procedure', 'certificate', 'log', 'configuration',
    'backup', 'monitoring', 'access-control', 'encryption', 'authentication',
    'authorization', 'data-protection', 'privacy', 'risk-management'
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = useCallback((files: FileList) => {
    const newFiles = Array.from(files).map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'pending' as const,
      progress: 0,
      evidenceType: '',
      tags: autoGenerateTags(file.name),
      policies: [],
      compliance: [],
      description: '',
      organization: selectedOrganization,
      uploadedAt: new Date(),
      metadata: extractMetadata(file)
    }));
    
    setUploadedFiles(prev => [...prev, ...newFiles]);
    
    // Auto-process text extraction if enabled
    if (isProcessingEnabled) {
      newFiles.forEach(file => {
        if (file.type.includes('pdf') || file.type.includes('text') || file.type.includes('document')) {
          simulateTextExtraction(file.id);
        }
      });
    }
    
    toast.success(`Added ${newFiles.length} file(s) to upload queue`);
  }, [selectedOrganization, isProcessingEnabled]);

  const autoGenerateTags = (filename: string): string[] => {
    const tags: string[] = [];
    const lowercaseName = filename.toLowerCase();
    
    // Auto-tag based on filename patterns
    if (lowercaseName.includes('audit')) tags.push('audit');
    if (lowercaseName.includes('security')) tags.push('security');
    if (lowercaseName.includes('scan') || lowercaseName.includes('vulnerability')) tags.push('vulnerability');
    if (lowercaseName.includes('training')) tags.push('training');
    if (lowercaseName.includes('log')) tags.push('log');
    if (lowercaseName.includes('policy')) tags.push('policy');
    if (lowercaseName.includes('incident')) tags.push('incident');
    if (lowercaseName.includes('certificate') || lowercaseName.includes('cert')) tags.push('certificate');
    if (lowercaseName.includes('backup')) tags.push('backup');
    if (lowercaseName.includes('config')) tags.push('configuration');
    
    return tags;
  };

  const extractMetadata = (file: File) => {
    return {
      author: 'Unknown',
      createdDate: new Date().toISOString(),
      modifiedDate: file.lastModified ? new Date(file.lastModified).toISOString() : new Date().toISOString(),
      pageCount: file.type.includes('pdf') ? Math.floor(Math.random() * 50) + 1 : undefined
    };
  };

  const simulateTextExtraction = (fileId: string) => {
    setUploadedFiles(prev => prev.map(file => 
      file.id === fileId ? { ...file, isProcessingText: true } : file
    ));

    // Simulate text extraction process
    setTimeout(() => {
      const sampleExtractedText = "This document contains security policies and procedures for access control, incident response, and compliance requirements. Key topics include authentication protocols, authorization frameworks, and audit procedures.";
      
      setUploadedFiles(prev => prev.map(file => 
        file.id === fileId ? { 
          ...file, 
          isProcessingText: false,
          extractedText: sampleExtractedText,
          tags: [...file.tags, ...autoGenerateTagsFromText(sampleExtractedText)]
        } : file
      ));
      
      toast.success('Text extraction completed');
    }, 3000);
  };

  const autoGenerateTagsFromText = (text: string): string[] => {
    const tags: string[] = [];
    const lowercaseText = text.toLowerCase();
    
    commonTags.forEach(tag => {
      if (lowercaseText.includes(tag.replace('-', ' ')) || lowercaseText.includes(tag)) {
        if (!tags.includes(tag)) tags.push(tag);
      }
    });
    
    return tags.slice(0, 5); // Limit to 5 auto-generated tags
  };

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id));
  };

  const updateFileMetadata = useCallback((id: string, field: string, value: any) => {
    setUploadedFiles(prev => prev.map(file => 
      file.id === id ? { ...file, [field]: value } : file
    ));
  }, []);

  const addTagToFile = (fileId: string, tag: string) => {
    if (!tag.trim()) return;
    
    setUploadedFiles(prev => prev.map(file => 
      file.id === fileId ? { 
        ...file, 
        tags: file.tags.includes(tag) ? file.tags : [...file.tags, tag]
      } : file
    ));
  };

  const removeTagFromFile = (fileId: string, tagToRemove: string) => {
    setUploadedFiles(prev => prev.map(file => 
      file.id === fileId ? { 
        ...file, 
        tags: file.tags.filter(tag => tag !== tagToRemove)
      } : file
    ));
  };

  const filteredFiles = uploadedFiles.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.extractedText?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = filterType === 'all' || file.evidenceType === filterType;
    
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.every(tag => file.tags.includes(tag));
    
    return matchesSearch && matchesFilter && matchesTags;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'date':
        return (b.uploadedAt?.getTime() || 0) - (a.uploadedAt?.getTime() || 0);
      case 'size':
        return b.size - a.size;
      case 'type':
        return a.type.localeCompare(b.type);
      default:
        return 0;
    }
  });

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return Image;
    if (type.includes('pdf') || type.includes('document')) return FileText;
    if (type.includes('zip') || type.includes('archive')) return Archive;
    return File;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const simulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadedFiles(prev => prev.map(file => ({ 
            ...file, 
            status: 'uploaded',
            uploadedAt: new Date()
          })));
          toast.success('All files uploaded successfully!');
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const generateEmailAddress = () => {
    const randomId = Math.random().toString(36).substr(2, 8);
    return `evidence-${randomId}@your-organization.com`;
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const allTags = Array.from(new Set(uploadedFiles.flatMap(file => file.tags)));

  const quickTemplates = [
    { name: 'Security Assessment Report', tags: ['security', 'assessment', 'audit'], type: 'Security Assessment' },
    { name: 'Employee Training Certificates', tags: ['training', 'certificate', 'compliance'], type: 'Training Record' },
    { name: 'System Configuration Backup', tags: ['configuration', 'backup', 'system'], type: 'Configuration Document' },
    { name: 'Incident Response Documentation', tags: ['incident', 'response', 'security'], type: 'Incident Report' },
    { name: 'Vulnerability Scan Results', tags: ['vulnerability', 'scan', 'security'], type: 'Security Assessment' }
  ];

  const applyTemplate = (template: typeof quickTemplates[0]) => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
      // Store template to apply when files are selected
      setTimeout(() => {
        setUploadedFiles(prev => prev.map((file, index) => 
          index >= prev.length - 1 ? {
            ...file,
            evidenceType: template.type,
            tags: [...file.tags, ...template.tags],
            description: `${template.name} - Auto-configured from template`
          } : file
        ));
      }, 100);
    }
  };

  return (
    <main className="flex-1 px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Document Upload & Management</h1>
          <p className="text-muted-foreground">
            Papra-inspired document management for evidence collection, processing, and organization
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Settings</DialogTitle>
                <DialogDescription>
                  Configure automatic processing and organization features
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Auto text extraction</Label>
                  <Checkbox 
                    checked={isProcessingEnabled}
                    onCheckedChange={(checked) => setIsProcessingEnabled(checked === true)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Default Organization</Label>
                  <Select value={selectedOrganization} onValueChange={setSelectedOrganization}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select organization" />
                    </SelectTrigger>
                    <SelectContent>
                      {organizations.map((org) => (
                        <SelectItem key={org} value={org}>
                          {org}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Bulk Upload
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search documents by name, content, tags, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-48">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {evidenceTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
              <SelectTrigger className="w-32">
                <SortAsc className="mr-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="size">Size</SelectItem>
                <SelectItem value="type">Type</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            >
              {viewMode === 'grid' ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Tag Filters */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-muted-foreground">Filter by tags:</span>
            {allTags.slice(0, 10).map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => toggleTag(tag)}
              >
                <Hash className="mr-1 h-3 w-3" />
                {tag}
              </Badge>
            ))}
            {allTags.length > 10 && (
              <Badge variant="outline">+{allTags.length - 10} more</Badge>
            )}
          </div>
        )}
      </div>

      <Tabs defaultValue="upload" className="space-y-6">
        <TabsList>
          <TabsTrigger value="upload">Upload Documents</TabsTrigger>
          <TabsTrigger value="manage">Manage Documents ({uploadedFiles.length})</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Enhanced Upload Area */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Upload className="mr-2 h-5 w-5" />
                    Document Upload
                  </CardTitle>
                  <CardDescription>
                    Advanced document management with automatic processing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                      dragActive 
                        ? 'border-primary bg-primary/5 scale-[1.02]' 
                        : 'border-muted-foreground/25 hover:border-muted-foreground/50 hover:bg-muted/20'
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <div className="flex flex-col items-center">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-lg font-medium text-foreground mb-2">
                        Drop documents here or click to browse
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Auto-processing: text extraction, tagging, and organization
                      </p>
                      <div className="flex gap-2 mb-4">
                        <Badge variant="secondary">PDF</Badge>
                        <Badge variant="secondary">DOC</Badge>
                        <Badge variant="secondary">XLS</Badge>
                        <Badge variant="secondary">Images</Badge>
                        <Badge variant="secondary">+More</Badge>
                      </div>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      onChange={handleChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <Button asChild>
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <FolderOpen className="mr-2 h-4 w-4" />
                        Browse Files
                      </label>
                    </Button>
                  </div>

                  {/* Additional upload methods */}
                  <div className="mt-6 space-y-4">
                    <div className="text-sm font-medium text-muted-foreground">Alternative Methods:</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="p-4">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-5 w-5 text-blue-500" />
                          <div>
                            <div className="font-medium text-sm">Email Import</div>
                            <div className="text-xs text-muted-foreground">Send to: {generateEmailAddress()}</div>
                          </div>
                        </div>
                      </Card>
                      <Card className="p-4">
                        <div className="flex items-center space-x-2">
                          <FolderOpen className="h-5 w-5 text-green-500" />
                          <div>
                            <div className="font-medium text-sm">Folder Sync</div>
                            <div className="text-xs text-muted-foreground">Auto-import from folder</div>
                          </div>
                        </div>
                      </Card>
                      <Card className="p-4">
                        <div className="flex items-center space-x-2">
                          <Terminal className="h-5 w-5 text-purple-500" />
                          <div>
                            <div className="font-medium text-sm">CLI Upload</div>
                            <div className="text-xs text-muted-foreground">Command line interface</div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Templates */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Templates</CardTitle>
                  <CardDescription>
                    Pre-configured templates for common evidence types
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {quickTemplates.map((template) => (
                    <Button 
                      key={template.name} 
                      variant="outline" 
                      size="sm" 
                      className="w-full justify-start text-left"
                      onClick={() => applyTemplate(template)}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span>{template.name}</span>
                        <div className="flex gap-1">
                          {template.tags.slice(0, 2).map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Papra-inspired Guidelines */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="mr-2 h-5 w-5" />
                    Processing Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Scan className="h-4 w-4" />
                      <span className="text-sm">Text Extraction</span>
                    </div>
                    <Badge variant={isProcessingEnabled ? "default" : "secondary"}>
                      {isProcessingEnabled ? "Enabled" : "Disabled"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Tag className="h-4 w-4" />
                      <span className="text-sm">Auto Tagging</span>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FileSearch className="h-4 w-4" />
                      <span className="text-sm">Full-text Search</span>
                    </div>
                    <Badge variant="default">Ready</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">Organization</span>
                    </div>
                    <Badge variant="outline">{selectedOrganization || "None"}</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Supported Formats</h4>
                    <div className="flex flex-wrap gap-1">
                      {['PDF', 'DOC', 'DOCX', 'XLS', 'XLSX', 'PPT', 'PPTX', 'TXT', 'CSV', 'JSON', 'PNG', 'JPG', 'ZIP'].map((format) => (
                        <Badge key={format} variant="secondary" className="text-xs">
                          {format}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">File Limits</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Max file size: 100 MB</li>
                      <li>• Max total upload: 1 GB</li>
                      <li>• Bulk upload: Up to 50 files</li>
                      <li>• Long-term storage included</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">Best Practices</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Use descriptive filenames</li>
                      <li>• Add relevant tags</li>
                      <li>• Include detailed descriptions</li>
                      <li>• Select appropriate organization</li>
                      <li>• Enable text extraction for searchability</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="manage" className="space-y-6">
          {filteredFiles.length > 0 ? (
            <div className="space-y-4">
              {filteredFiles.map((file) => {
                const FileIcon = getFileIcon(file.type);
                return (
                  <Card key={file.id} className="p-6">
                    <div className="flex items-start space-x-4">
                      <FileIcon className="h-10 w-10 text-muted-foreground mt-1" />
                      <div className="flex-1 space-y-3">
                        {/* File Header */}
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium text-foreground">{file.name}</h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>{formatFileSize(file.size)}</span>
                              <span>•</span>
                              <span>{file.type}</span>
                              {file.uploadedAt && (
                                <>
                                  <span>•</span>
                                  <span>{file.uploadedAt.toLocaleDateString()}</span>
                                </>
                              )}
                              {file.organization && (
                                <>
                                  <span>•</span>
                                  <Badge variant="outline" className="text-xs">
                                    <Users className="mr-1 h-3 w-3" />
                                    {file.organization}
                                  </Badge>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {file.status === 'uploaded' && (
                              <Badge variant="default">
                                <Check className="mr-1 h-3 w-3" />
                                Uploaded
                              </Badge>
                            )}
                            {file.isProcessingText && (
                              <Badge variant="secondary">
                                <Bot className="mr-1 h-3 w-3" />
                                Processing...
                              </Badge>
                            )}
                            <Button variant="outline" size="sm">
                              <Eye className="mr-2 h-4 w-4" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                            <Button variant="outline" size="sm">
                              <Share2 className="mr-2 h-4 w-4" />
                              Share
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(file.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-1">
                            {file.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="text-xs cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                                onClick={() => removeTagFromFile(file.id, tag)}
                              >
                                <Hash className="mr-1 h-3 w-3" />
                                {tag}
                                <X className="ml-1 h-3 w-3" />
                              </Badge>
                            ))}
                            <div className="flex items-center gap-2">
                              <Input
                                placeholder="Add tag..."
                                value={newTag}
                                onChange={(e) => setNewTag(e.target.value)}
                                onKeyPress={(e) => {
                                  if (e.key === 'Enter') {
                                    addTagToFile(file.id, newTag);
                                    setNewTag('');
                                  }
                                }}
                                className="w-24 h-6 text-xs"
                              />
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => {
                                  addTagToFile(file.id, newTag);
                                  setNewTag('');
                                }}
                                className="h-6 px-2"
                              >
                                <Tag className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        {file.description && (
                          <p className="text-sm text-muted-foreground bg-muted/30 p-2 rounded">
                            {file.description}
                          </p>
                        )}

                        {/* Extracted Text Preview */}
                        {file.extractedText && (
                          <div className="bg-muted/30 p-3 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-sm font-medium flex items-center">
                                <FileSearch className="mr-2 h-4 w-4" />
                                Extracted Content
                              </h4>
                              <Badge variant="outline" className="text-xs">
                                Searchable
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-3">
                              {file.extractedText}
                            </p>
                          </div>
                        )}

                        {/* Metadata */}
                        {file.metadata && (
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-muted-foreground">
                            {file.metadata.author && (
                              <div>
                                <span className="font-medium">Author:</span> {file.metadata.author}
                              </div>
                            )}
                            {file.metadata.pageCount && (
                              <div>
                                <span className="font-medium">Pages:</span> {file.metadata.pageCount}
                              </div>
                            )}
                            <div>
                              <span className="font-medium">Evidence Type:</span> {file.evidenceType || 'Not set'}
                            </div>
                            <div>
                              <span className="font-medium">Status:</span> {file.status}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}

              {/* Upload Progress */}
              {isUploading && (
                <Card className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Uploading files...</span>
                      <span className="text-sm text-muted-foreground">{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} />
                  </div>
                </Card>
              )}

              {/* Action Bar */}
              <Card className="p-4">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    {filteredFiles.length} of {uploadedFiles.length} documents shown
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" onClick={() => setUploadedFiles([])}>
                      Clear All
                    </Button>
                    <Button onClick={simulateUpload} disabled={isUploading}>
                      {isUploading ? 'Uploading...' : 'Upload All Files'}
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ) : (
            <Card className="p-12 text-center">
              <Database className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No documents yet</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Upload your first document to get started with Papra-inspired management
              </p>
              <Button onClick={() => fileInputRef.current?.click()}>
                <Upload className="mr-2 h-4 w-4" />
                Upload Documents
              </Button>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Email Integration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-blue-500" />
                  Email Import
                </CardTitle>
                <CardDescription>
                  Forward emails to automatically import attachments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-muted p-3 rounded text-sm font-mono">
                    {generateEmailAddress()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Send emails with attachments to this address for automatic processing
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Settings className="mr-2 h-4 w-4" />
                    Configure
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Folder Sync */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FolderOpen className="mr-2 h-5 w-5 text-green-500" />
                  Folder Sync
                </CardTitle>
                <CardDescription>
                  Automatically import from network folders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    Monitor folders for new documents and auto-import
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <FolderOpen className="mr-2 h-4 w-4" />
                    Setup Folder
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* CLI */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Terminal className="mr-2 h-5 w-5 text-purple-500" />
                  CLI Tools
                </CardTitle>
                <CardDescription>
                  Command line interface for bulk operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-muted p-3 rounded text-xs font-mono">
                    npm install -g papra-cli
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Terminal className="mr-2 h-4 w-4" />
                    View Docs
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* API */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-orange-500" />
                  API & Webhooks
                </CardTitle>
                <CardDescription>
                  Build custom integrations with our API
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    REST API and webhook endpoints available
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Globe className="mr-2 h-4 w-4" />
                    API Docs
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Automation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                  Auto-Tagging Rules
                </CardTitle>
                <CardDescription>
                  Set up rules for automatic document tagging
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    Create rules to automatically tag incoming documents
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Zap className="mr-2 h-4 w-4" />
                    Create Rules
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Processing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bot className="mr-2 h-5 w-5 text-cyan-500" />
                  AI Processing
                </CardTitle>
                <CardDescription>
                  Advanced AI features for document analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    Text extraction, content analysis, and smart categorization
                  </div>
                  <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default EvidenceUpload;