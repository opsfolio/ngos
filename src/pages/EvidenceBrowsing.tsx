import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Filter, Download, Eye, Calendar, FileText, Shield, Zap, Home, ChevronRight } from 'lucide-react';

const EvidenceBrowsing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterSource, setFilterSource] = useState('all');

  const evidenceItems = [
    {
      id: 'EV-001',
      name: 'Security Assessment Report Q4 2024',
      type: 'Assessment',
      source: 'Manual Upload',
      policy: 'Information Security Policy',
      uploadDate: '2024-01-15',
      size: '2.4 MB',
      status: 'Approved',
      compliance: ['SOC 2', 'ISO 27001']
    },
    {
      id: 'EV-002',
      name: 'AWS CloudTrail Logs - December',
      type: 'System Log',
      source: 'AWS Integration',
      policy: 'Access Control Policy',
      uploadDate: '2024-01-01',
      size: '156 MB',
      status: 'Processing',
      compliance: ['SOC 2']
    },
    {
      id: 'EV-003',
      name: 'Employee Security Training Certificates',
      type: 'Training Record',
      source: 'HR System',
      policy: 'Security Awareness Policy',
      uploadDate: '2024-01-10',
      size: '890 KB',
      status: 'Approved',
      compliance: ['SOC 2', 'PCI DSS']
    },
    {
      id: 'EV-004',
      name: 'Vulnerability Scan Results',
      type: 'Security Scan',
      source: 'Nessus Integration',
      policy: 'Vulnerability Management Policy',
      uploadDate: '2024-01-14',
      size: '5.2 MB',
      status: 'Review Required',
      compliance: ['ISO 27001']
    },
    {
      id: 'EV-005',
      name: 'Data Backup Verification Report',
      type: 'Backup Report',
      source: 'Manual Upload',
      policy: 'Data Protection Policy',
      uploadDate: '2024-01-12',
      size: '1.1 MB',
      status: 'Approved',
      compliance: ['SOC 2', 'GDPR']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800 border-green-200';
      case 'Processing': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Review Required': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Assessment': return Shield;
      case 'System Log': return Zap;
      case 'Training Record': return FileText;
      case 'Security Scan': return Search;
      case 'Backup Report': return FileText;
      default: return FileText;
    }
  };

  const filteredEvidence = evidenceItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.policy.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || item.type === filterType;
    const matchesSource = filterSource === 'all' || item.source === filterSource;
    
    return matchesSearch && matchesType && matchesSource;
  });

  return (
    <div className="px-6 py-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">Evidence Browser</h1>
                  <p className="text-muted-foreground">
                    Search, filter, and manage all collected evidence
                  </p>
                </div>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export Results
                </Button>
              </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="mr-2 h-5 w-5" />
              Search & Filter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search evidence..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Assessment">Assessment</SelectItem>
                  <SelectItem value="System Log">System Log</SelectItem>
                  <SelectItem value="Training Record">Training Record</SelectItem>
                  <SelectItem value="Security Scan">Security Scan</SelectItem>
                  <SelectItem value="Backup Report">Backup Report</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterSource} onValueChange={setFilterSource}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  <SelectItem value="Manual Upload">Manual Upload</SelectItem>
                  <SelectItem value="AWS Integration">AWS Integration</SelectItem>
                  <SelectItem value="HR System">HR System</SelectItem>
                  <SelectItem value="Nessus Integration">Nessus Integration</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="w-full">
                <Filter className="mr-2 h-4 w-4" />
                Advanced Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredEvidence.length} of {evidenceItems.length} evidence items
          </p>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">{filteredEvidence.filter(e => e.status === 'Approved').length} Approved</Badge>
            <Badge variant="secondary">{filteredEvidence.filter(e => e.status === 'Processing').length} Processing</Badge>
            <Badge variant="secondary">{filteredEvidence.filter(e => e.status === 'Review Required').length} Review Required</Badge>
          </div>
        </div>

        {/* Evidence Table */}
        <Card>
          <CardHeader>
            <CardTitle>Evidence Items</CardTitle>
            <CardDescription>
              All collected evidence with mapping to policies and compliance frameworks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Evidence</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Mapped Policy</TableHead>
                  <TableHead>Upload Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Compliance</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEvidence.map((item) => {
                  const TypeIcon = getTypeIcon(item.type);
                  return (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <TypeIcon className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="font-medium text-foreground">{item.name}</p>
                            <p className="text-xs text-muted-foreground">{item.id} • {item.size}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{item.type}</Badge>
                      </TableCell>
                      <TableCell className="text-sm">{item.source}</TableCell>
                      <TableCell className="text-sm">{item.policy}</TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" />
                          {item.uploadDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {item.compliance.map((framework) => (
                            <Badge key={framework} variant="secondary" className="text-xs">
                              {framework}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
              </Card>
    </div>
  );
};

export default EvidenceBrowsing;