import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Search, 
  Plus, 
  Filter,
  Download,
  Edit,
  Eye,
  Calendar,
  User,
  Shield,
  Link2,
  Home,
  ChevronRight,
  Database,
  CheckSquare,
  XCircle,
  MinusCircle,
  CheckCircle,
  HeadphonesIcon,
  ArrowRight,
  Code2,
  GitBranch,
  FileCode,
  Settings,
  Play,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const mockPolicies = [
  {
    id: 1,
    title: "AI Model Governance Policy",
    description: "Comprehensive policy governing AI model development, deployment, monitoring, and risk management",
    version: "1.2",
    status: "Active",
    lastReviewed: "2024-01-15",
    nextReview: "2025-01-15",
    owner: "AI Governance Office",
    frameworks: ["ISO/IEC 42001", "NIST AI RMF", "EU AI Act"],
    category: "AI Governance",
    approvalStatus: "Approved",
    isExecutable: true,
    aiSpecific: true,
    policyAsCode: {
      hasSchema: true,
      enforcement: "Automated",
      lastValidation: "2024-03-10",
      validationStatus: "Passing"
    },
    aiContext: {
      linkedPrompts: 8,
      linkedModels: 12,
      linkedFlows: 6,
      linkedDatasets: 15,
      riskTier: "High",
      lifecycleStage: "Production"
    },
    complianceStatus: {
      hasEvidence: true,
      evidenceCount: 12,
      controlsMapped: 8,
      controlsTotal: 10,
      overallCompliance: 85,
      lastEvidenceUpdate: "2024-03-10"
    }
  },
  {
    id: 2,
    title: "Prompt Engineering Standards",
    description: "Standards for prompt design, testing, version control, and security in AI systems",
    version: "2.0",
    status: "Active",
    lastReviewed: "2024-02-10",
    nextReview: "2025-02-10",
    owner: "AI Engineering Team",
    frameworks: ["ISO/IEC 42001", "ISO/IEC 23894", "NIST AI RMF"],
    category: "AI Context Engineering",
    approvalStatus: "Approved",
    isExecutable: true,
    aiSpecific: true,
    policyAsCode: {
      hasSchema: true,
      enforcement: "Semi-Automated",
      lastValidation: "2024-03-05",
      validationStatus: "Passing"
    },
    aiContext: {
      linkedPrompts: 45,
      linkedModels: 8,
      linkedFlows: 12,
      linkedDatasets: 6,
      riskTier: "Medium",
      lifecycleStage: "Production"
    },
    complianceStatus: {
      hasEvidence: true,
      evidenceCount: 8,
      controlsMapped: 6,
      controlsTotal: 8,
      overallCompliance: 92,
      lastEvidenceUpdate: "2024-03-05"
    }
  },
  {
    id: 3,
    title: "Information Security Policy",
    description: "Comprehensive security policy covering data protection, access controls, and incident response",
    version: "2.1",
    status: "Active",
    lastReviewed: "2024-01-15",
    nextReview: "2025-01-15",
    owner: "CISO Office",
    frameworks: ["SOC 2", "ISO 27001", "NIST"],
    category: "Security",
    approvalStatus: "Approved",
    isExecutable: false,
    aiSpecific: false,
    complianceStatus: {
      hasEvidence: true,
      evidenceCount: 12,
      controlsMapped: 8,
      controlsTotal: 10,
      overallCompliance: 85,
      lastEvidenceUpdate: "2024-03-10"
    }
  },
  {
    id: 2,
    title: "Data Privacy Policy",
    description: "Privacy policy governing collection, use, and protection of personal data",
    version: "1.4",
    status: "Active",
    lastReviewed: "2024-02-10",
    nextReview: "2025-02-10",
    owner: "Legal Team",
    frameworks: ["GDPR", "CCPA", "SOC 2"],
    category: "Privacy",
    approvalStatus: "Approved",
    complianceStatus: {
      hasEvidence: true,
      evidenceCount: 8,
      controlsMapped: 6,
      controlsTotal: 8,
      overallCompliance: 92,
      lastEvidenceUpdate: "2024-03-05"
    }
  },
  {
    id: 3,
    title: "Access Control Policy",
    description: "Policy defining user access management, privileged access, and authentication requirements",
    version: "3.0",
    status: "Draft",
    lastReviewed: "2024-03-01",
    nextReview: "2024-06-01",
    owner: "IT Security",
    frameworks: ["SOC 2", "ISO 27001"],
    category: "Security",
    approvalStatus: "Under Review",
    complianceStatus: {
      hasEvidence: false,
      evidenceCount: 2,
      controlsMapped: 3,
      controlsTotal: 12,
      overallCompliance: 25,
      lastEvidenceUpdate: "2024-01-20"
    }
  },
  {
    id: 4,
    title: "Business Continuity Policy",
    description: "Framework for maintaining business operations during disruptions and disasters",
    version: "2.3",
    status: "Active",
    lastReviewed: "2023-12-15",
    nextReview: "2024-12-15",
    owner: "Risk Management",
    frameworks: ["ISO 22301", "SOC 2"],
    category: "Business Continuity",
    approvalStatus: "Approved",
    complianceStatus: {
      hasEvidence: true,
      evidenceCount: 6,
      controlsMapped: 5,
      controlsTotal: 6,
      overallCompliance: 78,
      lastEvidenceUpdate: "2024-02-15"
    }
  },
  {
    id: 5,
    title: "Change Management Policy",
    description: "Policy governing changes to IT systems, applications, and infrastructure",
    version: "1.8",
    status: "Active",
    lastReviewed: "2024-01-30",
    nextReview: "2025-01-30",
    owner: "IT Operations",
    frameworks: ["ITIL", "SOC 2"],
    category: "Operations",
    approvalStatus: "Approved",
    complianceStatus: {
      hasEvidence: true,
      evidenceCount: 4,
      controlsMapped: 4,
      controlsTotal: 5,
      overallCompliance: 70,
      lastEvidenceUpdate: "2024-03-01"
    }
  }
];

const PoliciesLibrary = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories = ['All', 'AI Governance', 'AI Context Engineering', 'Model Governance', 'Security', 'Privacy', 'Business Continuity', 'Operations'];
  const statuses = ['Active', 'Draft', 'Under Review', 'Archived'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 border-green-200';
      case 'Draft': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Under Review': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getApprovalColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800 border-green-200';
      case 'Under Review': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getComplianceStatusIcon = (hasEvidence: boolean) => {
    if (hasEvidence) {
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    } else {
      return <XCircle className="w-4 h-4 text-red-600" />;
    }
  };

  const getComplianceStatusColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const filteredPolicies = mockPolicies.filter(policy => {
    const matchesSearch = policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         policy.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || policy.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="flex-1 px-6 py-8">
              {/* Header Section */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">Policies Library</h1>
                    <p className="text-lg text-muted-foreground">
                      Manage organizational policies, procedures, and their compliance mappings
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link to="/policies/author">
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        New Policy
                      </Button>
                    </Link>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export All
                    </Button>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-2xl font-bold">24</p>
                          <p className="text-sm text-muted-foreground">Total Policies</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-2xl font-bold">18</p>
                          <p className="text-sm text-muted-foreground">Active</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <Database className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-2xl font-bold">18</p>
                          <p className="text-sm text-muted-foreground">With Evidence</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <CheckSquare className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-2xl font-bold">78%</p>
                          <p className="text-sm text-muted-foreground">Avg Compliance</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Tabs defaultValue="browse" className="space-y-6">
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="browse">Browse Policies</TabsTrigger>
                  <TabsTrigger value="ai-crosswalk">AI Crosswalk</TabsTrigger>
                  <TabsTrigger value="mapping">
                    <Link to="/policies/mapping" className="flex items-center gap-2">
                      Control Mapping
                    </Link>
                  </TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="policies-as-code">
                    <Code2 className="w-4 h-4 mr-2" />
                    Policies as Code
                  </TabsTrigger>
                  <TabsTrigger value="caas">Help with CaaS</TabsTrigger>
                </TabsList>

                <TabsContent value="browse" className="space-y-6">
                  {/* Search and Filters */}
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          placeholder="Search policies..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <select 
                        className="px-3 py-2 border border-border rounded-md bg-background"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      >
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                      <Button variant="outline" size="icon">
                        <Filter className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* AI Context Quick Link */}
                  <div className="mb-6">
                    <Card className="border border-primary/20 bg-primary/5">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <Zap className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground">AI Context Assets</h3>
                              <p className="text-sm text-muted-foreground">
                                Manage prompts, models, and flows linked to your policies
                              </p>
                            </div>
                          </div>
                          <Link to="/asset-ai-context">
                            <Button variant="outline">
                              View AI Context
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Policies Grid */}
                  <div className="grid gap-6">
                    {filteredPolicies.map((policy) => (
                      <Card key={policy.id} className="hover:shadow-lg transition-all duration-200">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <CardTitle className="text-xl">{policy.title}</CardTitle>
                                  <Badge variant="outline" className={getStatusColor(policy.status)}>
                                    {policy.status}
                                  </Badge>
                                  <Badge variant="outline" className={getApprovalColor(policy.approvalStatus)}>
                                    {policy.approvalStatus}
                                  </Badge>
                                  {getComplianceStatusIcon(policy.complianceStatus.hasEvidence)}
                                </div>
                              <CardDescription className="text-base">
                                {policy.description}
                              </CardDescription>
                            </div>
                            <div className="flex gap-2 ml-4">
                              <Button variant="ghost" size="icon">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">Version</p>
                              <p className="text-sm">{policy.version}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">Owner</p>
                              <p className="text-sm flex items-center gap-1">
                                <User className="w-3 h-3" />
                                {policy.owner}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">Last Reviewed</p>
                              <p className="text-sm flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {policy.lastReviewed}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">Next Review</p>
                              <p className="text-sm flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {policy.nextReview}
                              </p>
                            </div>
                          </div>

                          {/* AI-specific metadata */}
                          {policy.aiSpecific && (
                            <div className="border-t pt-4 mb-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div>
                                  <p className="text-sm font-medium text-muted-foreground">Risk Tier</p>
                                  <Badge variant={policy.aiContext?.riskTier === 'High' ? 'destructive' : 
                                                policy.aiContext?.riskTier === 'Medium' ? 'default' : 'secondary'}>
                                    {policy.aiContext?.riskTier}
                                  </Badge>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-muted-foreground">Lifecycle Stage</p>
                                  <p className="text-sm">{policy.aiContext?.lifecycleStage}</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-muted-foreground">Linked Assets</p>
                                  <p className="text-sm">
                                    {policy.aiContext?.linkedPrompts + policy.aiContext?.linkedModels + 
                                     policy.aiContext?.linkedFlows + policy.aiContext?.linkedDatasets} total
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-muted-foreground">Enforcement</p>
                                  <div className="flex items-center gap-1">
                                    {policy.isExecutable && <Play className="w-3 h-3 text-green-600" />}
                                    <p className="text-sm">{policy.policyAsCode?.enforcement || 'Manual'}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {/* Compliance Status Section */}
                          <div className="border-t pt-4 mb-4">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Overall Compliance</span>
                                <span className={`text-sm font-semibold ${getComplianceStatusColor(policy.complianceStatus.overallCompliance)}`}>
                                  {policy.complianceStatus.overallCompliance}%
                                </span>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-1">
                                  <Database className="w-3 h-3 text-muted-foreground" />
                                  <span className="text-xs text-muted-foreground">Evidence</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  {policy.complianceStatus.hasEvidence ? (
                                    <CheckSquare className="w-4 h-4 text-green-600" />
                                  ) : (
                                    <XCircle className="w-4 h-4 text-red-600" />
                                  )}
                                  <span className="text-xs font-medium">{policy.complianceStatus.evidenceCount}</span>
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-1">
                                  <Link2 className="w-3 h-3 text-muted-foreground" />
                                  <span className="text-xs text-muted-foreground">Controls</span>
                                </div>
                                <span className="text-xs">
                                  {policy.complianceStatus.controlsMapped}/{policy.complianceStatus.controlsTotal}
                                </span>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-muted-foreground">Last Evidence Update</span>
                                <span className="text-xs">
                                  {policy.complianceStatus.lastEvidenceUpdate}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-2">Compliance Frameworks</p>
                            <div className="flex flex-wrap gap-2">
                              {policy.frameworks.map((framework) => (
                                <Badge key={framework} variant="secondary">
                                  {framework}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="ai-crosswalk" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        AI Governance Framework Crosswalk
                      </CardTitle>
                      <CardDescription>
                        Compare AI governance requirements across different frameworks and standards
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-4 font-medium">Control Domain</th>
                              <th className="text-left p-4 font-medium">ISO/IEC 42001</th>
                              <th className="text-left p-4 font-medium">NIST AI RMF</th>
                              <th className="text-left p-4 font-medium">EU AI Act</th>
                              <th className="text-left p-4 font-medium">ISO/IEC 23894</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b hover:bg-muted/30">
                              <td className="p-4 font-medium">AI Context Engineering</td>
                              <td className="p-4">
                                <div className="text-sm">
                                  <div className="font-medium">7.3.1 - Data Management</div>
                                  <div className="text-muted-foreground">Input data quality & validation</div>
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="text-sm">
                                  <div className="font-medium">MAP 1.1 - Context Definition</div>
                                  <div className="text-muted-foreground">Define AI system context</div>
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="text-sm">
                                  <div className="font-medium">Art. 10 - Data Governance</div>
                                  <div className="text-muted-foreground">Training data requirements</div>
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="text-sm">
                                  <div className="font-medium">5.1 - Risk Assessment</div>
                                  <div className="text-muted-foreground">AI risk identification</div>
                                </div>
                              </td>
                            </tr>
                            <tr className="border-b hover:bg-muted/30">
                              <td className="p-4 font-medium">Model Governance</td>
                              <td className="p-4">
                                <div className="text-sm">
                                  <div className="font-medium">7.4 - AI System Development</div>
                                  <div className="text-muted-foreground">Model lifecycle management</div>
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="text-sm">
                                  <div className="font-medium">MEASURE 2.3 - Model Testing</div>
                                  <div className="text-muted-foreground">Model performance validation</div>
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="text-sm">
                                  <div className="font-medium">Art. 15 - Accuracy</div>
                                  <div className="text-muted-foreground">Model accuracy requirements</div>
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="text-sm">
                                  <div className="font-medium">6.2 - AI System Testing</div>
                                  <div className="text-muted-foreground">Testing & validation</div>
                                </div>
                              </td>
                            </tr>
                            <tr className="border-b hover:bg-muted/30">
                              <td className="p-4 font-medium">AI Risk Management</td>
                              <td className="p-4">
                                <div className="text-sm">
                                  <div className="font-medium">6.2 - Risk Assessment</div>
                                  <div className="text-muted-foreground">AI-specific risk management</div>
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="text-sm">
                                  <div className="font-medium">GOVERN 1.1 - Risk Strategy</div>
                                  <div className="text-muted-foreground">AI risk management strategy</div>
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="text-sm">
                                  <div className="font-medium">Art. 9 - Risk Assessment</div>
                                  <div className="text-muted-foreground">High-risk AI systems</div>
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="text-sm">
                                  <div className="font-medium">5 - Risk Management</div>
                                  <div className="text-muted-foreground">AI risk management process</div>
                                </div>
                              </td>
                            </tr>
                            <tr className="border-b hover:bg-muted/30">
                              <td className="p-4 font-medium">Algorithmic Transparency</td>
                              <td className="p-4">
                                <div className="text-sm">
                                  <div className="font-medium">7.6 - Transparency</div>
                                  <div className="text-muted-foreground">AI system explainability</div>
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="text-sm">
                                  <div className="font-medium">MANAGE 4.1 - Transparency</div>
                                  <div className="text-muted-foreground">Model transparency practices</div>
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="text-sm">
                                  <div className="font-medium">Art. 13 - Transparency</div>
                                  <div className="text-muted-foreground">User transparency obligations</div>
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="text-sm">
                                  <div className="font-medium">7.1 - Documentation</div>
                                  <div className="text-muted-foreground">AI system documentation</div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="border border-border/50">
                          <CardHeader>
                            <CardTitle className="text-lg">Gap Analysis</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Fully Covered</span>
                                <Badge className="bg-green-100 text-green-800">12 domains</Badge>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Partially Covered</span>
                                <Badge className="bg-yellow-100 text-yellow-800">5 domains</Badge>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Not Covered</span>
                                <Badge className="bg-red-100 text-red-800">2 domains</Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border border-border/50">
                          <CardHeader>
                            <CardTitle className="text-lg">Implementation Priority</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm">High Priority</span>
                                <span className="text-sm font-medium">AI Context Engineering</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Medium Priority</span>
                                <span className="text-sm font-medium">Model Governance</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Low Priority</span>
                                <span className="text-sm font-medium">Transparency</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="analytics" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Policy Distribution by Category</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Security</span>
                            <span className="text-sm font-medium">12 policies</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Privacy</span>
                            <span className="text-sm font-medium">5 policies</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Operations</span>
                            <span className="text-sm font-medium">4 policies</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Business Continuity</span>
                            <span className="text-sm font-medium">3 policies</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Review Status</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Up to Date</span>
                            <span className="text-sm font-medium">18 policies</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-yellow-600">Due Soon</span>
                            <span className="text-sm font-medium">3 policies</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-red-600">Overdue</span>
                            <span className="text-sm font-medium">2 policies</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-blue-600">Under Review</span>
                            <span className="text-sm font-medium">1 policy</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="policies-as-code" className="space-y-6">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Code2 className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle>Policies as Code</CardTitle>
                            <CardDescription>
                              Manage policies as code, connect with evidence, and automate compliance workflows
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <Card className="border border-border/50">
                            <CardContent className="p-4">
                              <div className="flex items-center space-x-2 mb-3">
                                <GitBranch className="w-5 h-5 text-blue-600" />
                                <h4 className="font-medium">Repository Connections</h4>
                              </div>
                              <p className="text-sm text-muted-foreground mb-4">
                                Connect GitHub, GitLab, and other repositories to manage policies as code
                              </p>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                  <span>GitHub</span>
                                  <Badge variant="secondary">3 repos</Badge>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span>GitLab</span>
                                  <Badge variant="outline">Not connected</Badge>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span>Bitbucket</span>
                                  <Badge variant="outline">Not connected</Badge>
                                </div>
                              </div>
                              <Link to="/evidence/integrations">
                                <Button size="sm" className="w-full mt-4">
                                  <Settings className="w-4 h-4 mr-2" />
                                  Configure Connections
                                </Button>
                              </Link>
                            </CardContent>
                          </Card>

                          <Card className="border border-border/50">
                            <CardContent className="p-4">
                              <div className="flex items-center space-x-2 mb-3">
                                <FileCode className="w-5 h-5 text-green-600" />
                                <h4 className="font-medium">Policy File Conventions</h4>
                              </div>
                              <p className="text-sm text-muted-foreground mb-4">
                                Define conventions for policy files, versioning, and metadata
                              </p>
                              <div className="space-y-2 text-xs font-mono bg-muted/30 p-3 rounded">
                                <div>📁 policies/</div>
                                <div className="ml-4">📄 security-policy.md</div>
                                <div className="ml-4">📄 privacy-policy.yaml</div>
                                <div className="ml-4">📄 access-control.json</div>
                                <div>📁 templates/</div>
                                <div>📁 frameworks/</div>
                              </div>
                              <Button size="sm" variant="outline" className="w-full mt-4">
                                <FileCode className="w-4 h-4 mr-2" />
                                View Templates
                              </Button>
                            </CardContent>
                          </Card>

                          <Card className="border border-border/50">
                            <CardContent className="p-4">
                              <div className="flex items-center space-x-2 mb-3">
                                <Zap className="w-5 h-5 text-yellow-600" />
                                <h4 className="font-medium">Auto-Mapping Rules</h4>
                              </div>
                              <p className="text-sm text-muted-foreground mb-4">
                                Automatically map policy changes to controls and evidence
                              </p>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                  <span>Framework Detection</span>
                                  <Badge variant="secondary">Active</Badge>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span>Control Mapping</span>
                                  <Badge variant="secondary">Active</Badge>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span>Evidence Linking</span>
                                  <Badge variant="outline">Configured</Badge>
                                </div>
                              </div>
                              <Button size="sm" variant="outline" className="w-full mt-4">
                                <Settings className="w-4 h-4 mr-2" />
                                Configure Rules
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <Play className="w-5 h-5 text-green-600" />
                            <span>CI/CD Policy Checks</span>
                          </CardTitle>
                          <CardDescription>
                            Automated policy validation and compliance checks in your CI/CD pipeline
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-medium">Policy Syntax Validation</span>
                              </div>
                              <Badge variant="secondary">Enabled</Badge>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <MinusCircle className="w-4 h-4 text-yellow-600" />
                                <span className="text-sm font-medium">Framework Compliance Check</span>
                              </div>
                              <Badge variant="outline">Partial</Badge>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <XCircle className="w-4 h-4 text-red-600" />
                                <span className="text-sm font-medium">Evidence Validation</span>
                              </div>
                              <Badge variant="outline">Disabled</Badge>
                            </div>
                          </div>
                          <Button className="w-full mt-4">
                            <Play className="w-4 h-4 mr-2" />
                            Setup CI/CD Integration
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <Database className="w-5 h-5 text-blue-600" />
                            <span>Active Code Connections</span>
                          </CardTitle>
                          <CardDescription>
                            Live connections between your policy code and compliance evidence
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 border rounded-lg">
                              <div>
                                <p className="text-sm font-medium">security-policy.md</p>
                                <p className="text-xs text-muted-foreground">SOC 2 Type II • 8 controls mapped</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span className="text-xs">Synced</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 border rounded-lg">
                              <div>
                                <p className="text-sm font-medium">access-control.yaml</p>
                                <p className="text-xs text-muted-foreground">ISO 27001 • 12 controls mapped</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span className="text-xs">Synced</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 border rounded-lg">
                              <div>
                                <p className="text-sm font-medium">privacy-policy.json</p>
                                <p className="text-xs text-muted-foreground">GDPR • 6 controls mapped</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MinusCircle className="w-4 h-4 text-yellow-600" />
                                <span className="text-xs">Pending</span>
                              </div>
                            </div>
                          </div>
                          <Link to="/evidence/mapping">
                            <Button variant="outline" className="w-full mt-4">
                              <Link2 className="w-4 h-4 mr-2" />
                              View Evidence Mapping
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardContent className="p-6">
                        <div className="text-center space-y-4">
                          <div className="flex items-center justify-center space-x-2">
                            <Code2 className="w-6 h-6 text-primary" />
                            <h3 className="text-lg font-semibold">Ready to implement Policies as Code?</h3>
                          </div>
                          <p className="text-muted-foreground max-w-2xl mx-auto">
                            Transform your policy management with version control, automated validation, and seamless evidence integration. 
                            Connect your repositories and start managing policies like code today.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                            <Link to="/evidence/integrations">
                              <Button>
                                <GitBranch className="w-4 h-4 mr-2" />
                                Connect Repository
                              </Button>
                            </Link>
                            <Button variant="outline">
                              <FileText className="w-4 h-4 mr-2" />
                              View Documentation
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="caas" className="space-y-6">
                  <Card className="max-w-2xl mx-auto">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-full">
                            <HeadphonesIcon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2">Need help with policy management?</h3>
                            <p className="text-muted-foreground leading-relaxed">
                              Our white-glove Compliance-as-a-Service (CaaS) team provides expert assistance with policy authoring, 
                              control mapping, evidence collection, and audit preparation. Let our compliance experts handle the 
                              complex work so you can focus on your business.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/30 rounded-lg p-6 mb-6">
                        <h4 className="font-medium mb-3">Our CaaS experts can help with:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-primary" />
                            <span><strong>AI Governance:</strong> ISO/IEC 42001 policy development and AI risk management</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Policy authoring and framework alignment</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Control mapping and gap analysis</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Evidence collection and documentation</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Audit preparation and remediation</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Continuous compliance monitoring</span>
                          </li>
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="flex-1">
                          <HeadphonesIcon className="w-4 h-4 mr-2" />
                          Talk to our team
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <FileText className="w-4 h-4 mr-2" />
                          Learn more about CaaS
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>

                      <div className="mt-6 pt-4 border-t text-center">
                        <p className="text-xs text-muted-foreground">
                          Trusted by 500+ organizations for compliance excellence
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
    </main>
  );
};

export default PoliciesLibrary;