import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Link2, 
  Search, 
  Filter,
  FileText,
  Shield,
  CheckCircle,
  AlertTriangle,
  Eye,
  Plus,
  Home,
  ChevronRight,
  Database,
  CheckSquare,
  XCircle,
  HeadphonesIcon,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const mockMappings = [
  {
    id: 1,
    policy: "Information Security Policy",
    framework: "SOC 2 Type II",
    control: "CC6.1",
    controlName: "Logical and physical access controls",
    category: "Access Controls",
    status: "Mapped",
    coverage: "Full",
    lastReviewed: "2024-01-15",
    evidenceStatus: {
      hasEvidence: true,
      evidenceCount: 5,
      lastEvidenceUpdate: "2024-03-10",
      complianceScore: 95
    }
  },
  {
    id: 2,
    policy: "Information Security Policy",
    framework: "ISO 27001",
    control: "A.9.1.1",
    controlName: "Access control policy",
    category: "Access Controls",
    status: "Mapped",
    coverage: "Full",
    lastReviewed: "2024-01-15",
    evidenceStatus: {
      hasEvidence: true,
      evidenceCount: 4,
      lastEvidenceUpdate: "2024-03-08",
      complianceScore: 88
    }
  },
  {
    id: 3,
    policy: "Data Privacy Policy",
    framework: "GDPR",
    control: "Art. 5",
    controlName: "Principles relating to processing of personal data",
    category: "Data Protection",
    status: "Mapped",
    coverage: "Partial",
    lastReviewed: "2024-02-10",
    evidenceStatus: {
      hasEvidence: true,
      evidenceCount: 3,
      lastEvidenceUpdate: "2024-02-28",
      complianceScore: 72
    }
  },
  {
    id: 4,
    policy: "Access Control Policy",
    framework: "NIST CSF",
    control: "PR.AC-1",
    controlName: "Identities and credentials are issued, managed, verified",
    category: "Identity Management",
    status: "In Progress",
    coverage: "None",
    lastReviewed: "2024-03-01",
    evidenceStatus: {
      hasEvidence: false,
      evidenceCount: 1,
      lastEvidenceUpdate: "2024-01-15",
      complianceScore: 25
    }
  },
  {
    id: 5,
    policy: "Business Continuity Policy",
    framework: "ISO 22301",
    control: "8.4.1",
    controlName: "Business continuity procedures",
    category: "Business Continuity",
    status: "Mapped",
    coverage: "Full",
    lastReviewed: "2023-12-15",
    evidenceStatus: {
      hasEvidence: true,
      evidenceCount: 3,
      lastEvidenceUpdate: "2024-02-20",
      complianceScore: 85
    }
  }
];

const unmappedControls = [
  {
    framework: "SOC 2 Type II",
    control: "CC7.2",
    controlName: "System monitoring activities",
    category: "Monitoring",
    priority: "High"
  },
  {
    framework: "ISO 27001",
    control: "A.12.4.1",
    controlName: "Event logging",
    category: "Logging",
    priority: "Medium"
  },
  {
    framework: "NIST CSF",
    control: "DE.CM-1",
    controlName: "Network is monitored to detect potential cybersecurity events",
    category: "Detection",
    priority: "High"
  }
];

const PolicyMapping = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedFramework, setSelectedFramework] = React.useState('All');
  const [selectedStatus, setSelectedStatus] = React.useState('All');

  const frameworks = ['All', 'ISO/IEC 42001', 'ISO/IEC 23894', 'NIST AI RMF', 'EU AI Act', 'SOC 2 Type II', 'ISO 27001', 'GDPR', 'NIST CSF', 'ISO 22301'];
  const statuses = ['All', 'Mapped', 'In Progress', 'Not Mapped'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Mapped': return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Not Mapped': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCoverageColor = (coverage: string) => {
    switch (coverage) {
      case 'Full': return 'bg-green-100 text-green-800 border-green-200';
      case 'Partial': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'None': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getComplianceScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getEvidenceIcon = (hasEvidence: boolean) => {
    return hasEvidence ? 
      <CheckSquare className="w-4 h-4 text-green-600" /> : 
      <XCircle className="w-4 h-4 text-red-600" />;
  };

  const filteredMappings = mockMappings.filter(mapping => {
    const matchesSearch = mapping.policy.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mapping.control.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mapping.controlName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFramework = selectedFramework === 'All' || mapping.framework === selectedFramework;
    const matchesStatus = selectedStatus === 'All' || mapping.status === selectedStatus;
    return matchesSearch && matchesFramework && matchesStatus;
  });

  return (
    <div className="px-6 py-8">
              {/* Header */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">Policy Control Mapping</h1>
                    <p className="text-lg text-muted-foreground">
                      Map policies to compliance framework controls and track coverage
                    </p>
                  </div>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Mapping
                  </Button>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <Link2 className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-2xl font-bold">156</p>
                          <p className="text-sm text-muted-foreground">Total Mappings</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-2xl font-bold">142</p>
                          <p className="text-sm text-muted-foreground">Complete</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <Database className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-2xl font-bold">128</p>
                          <p className="text-sm text-muted-foreground">With Evidence</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-2xl font-bold">84%</p>
                          <p className="text-sm text-muted-foreground">Avg Compliance</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Tabs defaultValue="mappings" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="mappings">Current Mappings</TabsTrigger>
                  <TabsTrigger value="gaps">Coverage Gaps</TabsTrigger>
                  <TabsTrigger value="matrix">Mapping Matrix</TabsTrigger>
                  <TabsTrigger value="caas">Help with CaaS</TabsTrigger>
                </TabsList>

                <TabsContent value="mappings" className="space-y-6">
                  {/* Search and Filters */}
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          placeholder="Search mappings..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Select value={selectedFramework} onValueChange={setSelectedFramework}>
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {frameworks.map(framework => (
                            <SelectItem key={framework} value={framework}>{framework}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {statuses.map(status => (
                            <SelectItem key={status} value={status}>{status}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button variant="outline" size="icon">
                        <Filter className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Mappings Table */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Policy-Control Mappings</CardTitle>
                      <CardDescription>
                        Current mappings between policies and compliance controls
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {filteredMappings.map((mapping) => (
                          <div key={mapping.id} className="p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <FileText className="w-4 h-4 text-muted-foreground" />
                                  <h4 className="font-medium">{mapping.policy}</h4>
                                  <Badge variant="outline" className={getStatusColor(mapping.status)}>
                                    {mapping.status}
                                  </Badge>
                                  {getEvidenceIcon(mapping.evidenceStatus.hasEvidence)}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
                                  <div>
                                    <p className="text-muted-foreground">Framework</p>
                                    <p className="font-medium">{mapping.framework}</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Control</p>
                                    <p className="font-medium">{mapping.control}</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Coverage</p>
                                    <Badge variant="outline" className={getCoverageColor(mapping.coverage)}>
                                      {mapping.coverage}
                                    </Badge>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Evidence Count</p>
                                    <div className="flex items-center space-x-1">
                                      <Database className="w-3 h-3 text-muted-foreground" />
                                      <span className="font-medium">{mapping.evidenceStatus.evidenceCount}</span>
                                    </div>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Compliance Score</p>
                                    <span className={`font-semibold ${getComplianceScoreColor(mapping.evidenceStatus.complianceScore)}`}>
                                      {mapping.evidenceStatus.complianceScore}%
                                    </span>
                                  </div>
                                </div>
                                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-muted-foreground">
                                  <p>Last Reviewed: {mapping.lastReviewed}</p>
                                  <p>Last Evidence Update: {mapping.evidenceStatus.lastEvidenceUpdate}</p>
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">
                                  {mapping.controlName}
                                </p>
                              </div>
                              <Button variant="ghost" size="icon">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="gaps" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Unmapped Controls</CardTitle>
                      <CardDescription>
                        Compliance controls that haven't been mapped to policies yet
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {unmappedControls.map((control, index) => (
                          <div key={index} className="p-4 border border-dashed rounded-lg">
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <AlertTriangle className="w-4 h-4 text-yellow-600" />
                                  <h4 className="font-medium">{control.framework} - {control.control}</h4>
                                  <Badge variant="outline" className={getPriorityColor(control.priority)}>
                                    {control.priority} Priority
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">
                                  {control.controlName}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Category: {control.category}
                                </p>
                              </div>
                              <Button variant="outline" size="sm">
                                <Plus className="w-4 h-4 mr-2" />
                                Map to Policy
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="matrix" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Mapping Matrix</CardTitle>
                      <CardDescription>
                        Visual overview of policy-to-framework coverage
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-3 font-medium">Policy</th>
                              <th className="text-center p-3 font-medium">SOC 2</th>
                              <th className="text-center p-3 font-medium">ISO 27001</th>
                              <th className="text-center p-3 font-medium">GDPR</th>
                              <th className="text-center p-3 font-medium">NIST CSF</th>
                              <th className="text-center p-3 font-medium">Coverage</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b hover:bg-muted/30">
                              <td className="p-3 font-medium">Information Security Policy</td>
                              <td className="text-center p-3">
                                <Badge className="bg-green-100 text-green-800">✓</Badge>
                              </td>
                              <td className="text-center p-3">
                                <Badge className="bg-green-100 text-green-800">✓</Badge>
                              </td>
                              <td className="text-center p-3">
                                <Badge className="bg-yellow-100 text-yellow-800">~</Badge>
                              </td>
                              <td className="text-center p-3">
                                <Badge className="bg-green-100 text-green-800">✓</Badge>
                              </td>
                              <td className="text-center p-3">
                                <Badge className="bg-green-100 text-green-800">85%</Badge>
                              </td>
                            </tr>
                            <tr className="border-b hover:bg-muted/30">
                              <td className="p-3 font-medium">Data Privacy Policy</td>
                              <td className="text-center p-3">
                                <Badge className="bg-yellow-100 text-yellow-800">~</Badge>
                              </td>
                              <td className="text-center p-3">
                                <Badge className="bg-green-100 text-green-800">✓</Badge>
                              </td>
                              <td className="text-center p-3">
                                <Badge className="bg-green-100 text-green-800">✓</Badge>
                              </td>
                              <td className="text-center p-3">
                                <Badge className="bg-red-100 text-red-800">✗</Badge>
                              </td>
                              <td className="text-center p-3">
                                <Badge className="bg-yellow-100 text-yellow-800">75%</Badge>
                              </td>
                            </tr>
                            <tr className="border-b hover:bg-muted/30">
                              <td className="p-3 font-medium">Access Control Policy</td>
                              <td className="text-center p-3">
                                <Badge className="bg-green-100 text-green-800">✓</Badge>
                              </td>
                              <td className="text-center p-3">
                                <Badge className="bg-green-100 text-green-800">✓</Badge>
                              </td>
                              <td className="text-center p-3">
                                <Badge className="bg-red-100 text-red-800">✗</Badge>
                              </td>
                              <td className="text-center p-3">
                                <Badge className="bg-yellow-100 text-yellow-800">~</Badge>
                              </td>
                              <td className="text-center p-3">
                                <Badge className="bg-yellow-100 text-yellow-800">65%</Badge>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-100 text-green-800">✓</Badge>
                          <span>Fully Mapped</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-yellow-100 text-yellow-800">~</Badge>
                          <span>Partially Mapped</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-red-100 text-red-800">✗</Badge>
                          <span>Not Mapped</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
                            <h3 className="text-xl font-semibold mb-2">Need help with compliance mapping?</h3>
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
    </div>
  );
};

export default PolicyMapping;