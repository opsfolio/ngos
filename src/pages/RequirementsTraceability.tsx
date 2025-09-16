import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  Target, 
  Search, 
  Filter, 
  Plus,
  Link2,
  CheckCircle,
  AlertTriangle,
  FileText,
  ArrowRight,
  GitBranch
} from 'lucide-react';

const RequirementsTraceability = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const requirements = [
    {
      id: 'REQ-001',
      title: 'User Authentication Security',
      description: 'System shall implement secure user authentication with multi-factor support',
      category: 'Security',
      priority: 'Critical',
      status: 'Approved',
      coverage: 95,
      testCases: ['TC-001', 'TC-002', 'TC-003'],
      designSpecs: ['DS-001', 'DS-002'],
      riskAssessments: ['RA-001'],
      parent: null,
      children: ['REQ-001.1', 'REQ-001.2']
    },
    {
      id: 'REQ-002',
      title: 'Data Encryption at Rest',
      description: 'All sensitive data must be encrypted using AES-256 when stored',
      category: 'Security',
      priority: 'High',
      status: 'Approved',
      coverage: 88,
      testCases: ['TC-004', 'TC-005'],
      designSpecs: ['DS-003'],
      riskAssessments: ['RA-002'],
      parent: null,
      children: []
    },
    {
      id: 'REQ-003',
      title: 'System Response Time',
      description: 'System response time shall not exceed 2 seconds for 95% of requests',
      category: 'Performance',
      priority: 'Medium',
      status: 'In Review',
      coverage: 72,
      testCases: ['TC-006', 'TC-007'],
      designSpecs: ['DS-004'],
      riskAssessments: [],
      parent: null,
      children: []
    },
    {
      id: 'REQ-004',
      title: 'FDA 21 CFR Part 11 Compliance',
      description: 'System must comply with FDA electronic records regulations',
      category: 'Compliance',
      priority: 'Critical',
      status: 'Approved',
      coverage: 91,
      testCases: ['TC-008', 'TC-009', 'TC-010', 'TC-011'],
      designSpecs: ['DS-005', 'DS-006'],
      riskAssessments: ['RA-003', 'RA-004'],
      parent: null,
      children: ['REQ-004.1', 'REQ-004.2', 'REQ-004.3']
    }
  ];

  const traceabilityMatrix = [
    {
      requirement: 'REQ-001',
      businessReq: 'BR-001',
      functionalSpec: 'FS-001',
      designSpec: 'DS-001',
      testCase: 'TC-001',
      implementation: 'IMPL-001',
      validation: 'VAL-001'
    },
    {
      requirement: 'REQ-002',
      businessReq: 'BR-002',
      functionalSpec: 'FS-002',
      designSpec: 'DS-003',
      testCase: 'TC-004',
      implementation: 'IMPL-002',
      validation: 'VAL-002'
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      'Approved': 'bg-green-100 text-green-800 border-green-200',
      'In Review': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Draft': 'bg-gray-100 text-gray-800 border-gray-200',
      'Rejected': 'bg-red-100 text-red-800 border-red-200'
    };
    return <Badge className={variants[status] || 'bg-gray-100 text-gray-800 border-gray-200'}>{status}</Badge>;
  };

  const getPriorityBadge = (priority: string) => {
    const variants: Record<string, string> = {
      'Critical': 'bg-red-100 text-red-800 border-red-200',
      'High': 'bg-orange-100 text-orange-800 border-orange-200',
      'Medium': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Low': 'bg-green-100 text-green-800 border-green-200'
    };
    return <Badge className={variants[priority] || 'bg-gray-100 text-gray-800 border-gray-200'}>{priority}</Badge>;
  };

  const getCategoryBadge = (category: string) => {
    const variants: Record<string, string> = {
      'Security': 'bg-blue-100 text-blue-800 border-blue-200',
      'Performance': 'bg-purple-100 text-purple-800 border-purple-200',
      'Compliance': 'bg-teal-100 text-teal-800 border-teal-200',
      'Functional': 'bg-indigo-100 text-indigo-800 border-indigo-200'
    };
    return <Badge className={variants[category] || 'bg-gray-100 text-gray-800 border-gray-200'}>{category}</Badge>;
  };

  const filteredRequirements = requirements.filter(req =>
    req.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    req.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    req.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                    <Target className="h-8 w-8" />
                    Requirements Traceability
                  </h1>
                  <p className="text-muted-foreground mt-2">
                    Track requirements through the complete development lifecycle
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Requirement
                  </Button>
                  <Button variant="outline">
                    <GitBranch className="h-4 w-4 mr-2" />
                    Trace Matrix
                  </Button>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Requirements</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">379</div>
                    <p className="text-xs text-muted-foreground">+23 from last sprint</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Fully Traced</CardTitle>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">347</div>
                    <p className="text-xs text-muted-foreground">91.6% coverage</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Partial Coverage</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">Needs attention</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Untraced</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground">Critical issues</p>
                  </CardContent>
                </Card>
              </div>

              {/* Requirements Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Requirements Repository</CardTitle>
                  <CardDescription>Manage and track all system requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Search requirements..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button variant="outline">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>

                  <div className="border rounded-lg">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Requirement ID</TableHead>
                          <TableHead>Title</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Priority</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Coverage</TableHead>
                          <TableHead>Linked Items</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredRequirements.map((req) => (
                          <TableRow key={req.id} className="hover:bg-muted/50">
                            <TableCell className="font-medium">{req.id}</TableCell>
                            <TableCell>
                              <div className="max-w-xs">
                                <p className="font-semibold">{req.title}</p>
                                <p className="text-sm text-muted-foreground line-clamp-2">{req.description}</p>
                              </div>
                            </TableCell>
                            <TableCell>{getCategoryBadge(req.category)}</TableCell>
                            <TableCell>{getPriorityBadge(req.priority)}</TableCell>
                            <TableCell>{getStatusBadge(req.status)}</TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <Progress value={req.coverage} className="h-2" />
                                <div className="text-sm text-muted-foreground">{req.coverage}%</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="flex gap-1">
                                  <Badge variant="outline" className="text-xs">
                                    {req.testCases.length} Tests
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    {req.designSpecs.length} Designs
                                  </Badge>
                                </div>
                                {req.riskAssessments.length > 0 && (
                                  <Badge variant="outline" className="text-xs">
                                    {req.riskAssessments.length} Risks
                                  </Badge>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm">
                                <Link2 className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              {/* Traceability Matrix */}
              <Card>
                <CardHeader>
                  <CardTitle>Traceability Matrix</CardTitle>
                  <CardDescription>End-to-end traceability from business requirements to validation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Requirement</TableHead>
                          <TableHead>Business Req</TableHead>
                          <TableHead>Functional Spec</TableHead>
                          <TableHead>Design Spec</TableHead>
                          <TableHead>Test Case</TableHead>
                          <TableHead>Implementation</TableHead>
                          <TableHead>Validation</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {traceabilityMatrix.map((trace, index) => (
                          <TableRow key={index} className="hover:bg-muted/50">
                            <TableCell className="font-medium">{trace.requirement}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">{trace.businessReq}</Badge>
                                <ArrowRight className="h-3 w-3 text-muted-foreground" />
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">{trace.functionalSpec}</Badge>
                                <ArrowRight className="h-3 w-3 text-muted-foreground" />
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">{trace.designSpec}</Badge>
                                <ArrowRight className="h-3 w-3 text-muted-foreground" />
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">{trace.testCase}</Badge>
                                <ArrowRight className="h-3 w-3 text-muted-foreground" />
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">{trace.implementation}</Badge>
                                <ArrowRight className="h-3 w-3 text-muted-foreground" />
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-xs">{trace.validation}</Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              {/* Requirements Hierarchy */}
              <Card>
                <CardHeader>
                  <CardTitle>Requirements Hierarchy</CardTitle>
                  <CardDescription>Parent-child relationships and requirements decomposition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {requirements.filter(req => req.children.length > 0).map((req) => (
                      <div key={req.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            <span className="font-semibold">{req.id}</span>
                            <span>{req.title}</span>
                          </div>
                          {getPriorityBadge(req.priority)}
                        </div>
                        <div className="ml-6 space-y-2">
                          {req.children.map((childId) => (
                            <div key={childId} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-4 h-px bg-border"></div>
                              <FileText className="h-3 w-3" />
                              <span>{childId}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
    </div>
  );
};

export default RequirementsTraceability;