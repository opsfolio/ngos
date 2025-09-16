import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  CheckSquare,
  Building2,
  Users,
  Calendar,
  Clock,
  FileText,
  Shield,
  Database,
  AlertCircle,
  CheckCircle,
  Download,
  Settings,
  MessageSquare,
  Eye,
  Upload,
  Home,
  ChevronRight,
  PlayCircle,
  PauseCircle,
  XCircle
} from 'lucide-react';

export default function AuditDetail() {
  const { id } = useParams();
  const [auditStatus, setAuditStatus] = useState('In Progress');

  // Mock audit data - in real app, fetch based on ID
  const audit = {
    id: 1,
    name: 'SOC 2 Type II Annual Audit',
    type: 'External',
    auditor: 'Ernst & Young',
    leadAuditor: 'Sarah Johnson, CPA',
    status: 'In Progress',
    framework: 'SOC 2',
    startDate: '2024-01-15',
    endDate: '2024-03-15',
    progress: 65,
    controlsTested: 89,
    totalControls: 142,
    findings: 3,
    evidenceItems: 156,
    lastActivity: '2024-02-20',
    description: 'Annual SOC 2 Type II audit for compliance certification and customer assurance.'
  };

  const controls = [
    {
      id: 'CC1.1',
      name: 'Logical and Physical Access Controls',
      category: 'Common Criteria',
      status: 'Tested',
      evidence: 5,
      findings: 0,
      testDate: '2024-02-15',
      notes: 'All access controls functioning as expected'
    },
    {
      id: 'CC2.1',
      name: 'Communication of Entity\'s System Description',
      category: 'Common Criteria',
      status: 'In Review',
      evidence: 3,
      findings: 1,
      testDate: '2024-02-18',
      notes: 'Minor documentation gap identified'
    },
    {
      id: 'CC3.1',
      name: 'Risk Assessment Process',
      category: 'Common Criteria',
      status: 'Pending',
      evidence: 0,
      findings: 0,
      testDate: null,
      notes: 'Scheduled for next week'
    },
    {
      id: 'CC4.1',
      name: 'Monitoring Activities',
      category: 'Common Criteria',
      status: 'Tested',
      evidence: 8,
      findings: 0,
      testDate: '2024-02-12',
      notes: 'Monitoring systems effective'
    },
    {
      id: 'A1.1',
      name: 'Availability - Infrastructure Monitoring',
      category: 'Availability',
      status: 'In Review',
      evidence: 4,
      findings: 2,
      testDate: '2024-02-19',
      notes: 'Need additional uptime documentation'
    }
  ];

  const findings = [
    {
      id: 1,
      control: 'CC2.1',
      severity: 'Medium',
      title: 'System Description Documentation Gap',
      description: 'The system description lacks details about data retention policies for customer data.',
      status: 'Open',
      assignee: 'John Doe',
      dueDate: '2024-02-25',
      evidence: 'Updated system description document needed'
    },
    {
      id: 2,
      control: 'A1.1',
      severity: 'Low',
      title: 'Incomplete Uptime Documentation',
      description: 'Uptime reports for Q4 2023 are missing from the evidence package.',
      status: 'In Progress',
      assignee: 'Jane Smith',
      dueDate: '2024-02-28',
      evidence: 'Q4 monitoring reports'
    },
    {
      id: 3,
      control: 'A1.1',
      severity: 'Low',
      title: 'Incident Response Time Tracking',
      description: 'Need to provide evidence of incident response time measurements.',
      status: 'Open',
      assignee: 'Mike Johnson',
      dueDate: '2024-03-01',
      evidence: 'Incident response metrics dashboard'
    }
  ];

  const evidence = [
    {
      id: 1,
      name: 'Access Control Policy',
      type: 'Policy Document',
      control: 'CC1.1',
      uploadDate: '2024-02-10',
      status: 'Reviewed',
      reviewer: 'Sarah Johnson'
    },
    {
      id: 2,
      name: 'System Architecture Diagram',
      type: 'Technical Documentation',
      control: 'CC2.1',
      uploadDate: '2024-02-12',
      status: 'Under Review',
      reviewer: 'Mike Davis'
    },
    {
      id: 3,
      name: 'Risk Assessment Report Q1 2024',
      type: 'Assessment Report',
      control: 'CC3.1',
      uploadDate: '2024-02-14',
      status: 'Pending Review',
      reviewer: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'In Progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Scheduled': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      case 'Overdue': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'Tested': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'In Review': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Pending': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      case 'Open': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'Reviewed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Under Review': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Pending Review': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Low': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="px-6 py-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {audit.type === 'External' ? (
                      <Building2 className="w-6 h-6 text-primary" />
                    ) : (
                      <Users className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-foreground">{audit.name}</h1>
                    <p className="text-lg text-muted-foreground">
                      {audit.auditor} • {audit.framework}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export Report
                  </Button>
                  {auditStatus === 'In Progress' && (
                    <Button>
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Continue Audit
                    </Button>
                  )}
                </div>
              </div>

              {/* Status Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold">{audit.progress}%</div>
                        <div className="text-sm text-muted-foreground">Progress</div>
                      </div>
                      <CheckSquare className="w-8 h-8 text-primary" />
                    </div>
                    <Progress value={audit.progress} className="mt-3" />
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold">{audit.controlsTested}/{audit.totalControls}</div>
                        <div className="text-sm text-muted-foreground">Controls Tested</div>
                      </div>
                      <Shield className="w-8 h-8 text-green-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold">{audit.findings}</div>
                        <div className="text-sm text-muted-foreground">Findings</div>
                      </div>
                      <AlertCircle className="w-8 h-8 text-amber-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold">{audit.evidenceItems}</div>
                        <div className="text-sm text-muted-foreground">Evidence Items</div>
                      </div>
                      <Database className="w-8 h-8 text-blue-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Badge className={getStatusColor(audit.status)} variant="secondary">
                      {audit.status}
                    </Badge>
                    <div className="text-sm text-muted-foreground mt-2">Current Status</div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content Tabs */}
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="controls">Controls</TabsTrigger>
                  <TabsTrigger value="findings">Findings</TabsTrigger>
                  <TabsTrigger value="evidence">Evidence</TabsTrigger>
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Audit Details */}
                    <div className="lg:col-span-2">
                      <Card>
                        <CardHeader>
                          <CardTitle>Audit Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="text-sm font-medium text-muted-foreground">Type</Label>
                              <div className="mt-1">{audit.type} Audit</div>
                            </div>
                            <div>
                              <Label className="text-sm font-medium text-muted-foreground">Framework</Label>
                              <div className="mt-1">{audit.framework}</div>
                            </div>
                            <div>
                              <Label className="text-sm font-medium text-muted-foreground">Start Date</Label>
                              <div className="mt-1">{audit.startDate}</div>
                            </div>
                            <div>
                              <Label className="text-sm font-medium text-muted-foreground">End Date</Label>
                              <div className="mt-1">{audit.endDate}</div>
                            </div>
                            <div>
                              <Label className="text-sm font-medium text-muted-foreground">Lead Auditor</Label>
                              <div className="mt-1">{audit.leadAuditor}</div>
                            </div>
                            <div>
                              <Label className="text-sm font-medium text-muted-foreground">Last Activity</Label>
                              <div className="mt-1">{audit.lastActivity}</div>
                            </div>
                          </div>
                          <Separator />
                          <div>
                            <Label className="text-sm font-medium text-muted-foreground">Description</Label>
                            <div className="mt-1">{audit.description}</div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Quick Actions */}
                    <div>
                      <Card>
                        <CardHeader>
                          <CardTitle>Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <Button className="w-full" variant="outline">
                            <Upload className="w-4 h-4 mr-2" />
                            Upload Evidence
                          </Button>
                          <Button className="w-full" variant="outline">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Add Comment
                          </Button>
                          <Button className="w-full" variant="outline">
                            <FileText className="w-4 h-4 mr-2" />
                            Generate Report
                          </Button>
                          <Button className="w-full" variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            Schedule Review
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="controls" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Control Testing Progress</CardTitle>
                      <CardDescription>
                        {controls.length} controls being tested for this audit
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Control ID</TableHead>
                            <TableHead>Control Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Evidence</TableHead>
                            <TableHead>Findings</TableHead>
                            <TableHead>Test Date</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {controls.map((control) => (
                            <TableRow key={control.id}>
                              <TableCell className="font-medium">{control.id}</TableCell>
                              <TableCell>{control.name}</TableCell>
                              <TableCell>{control.category}</TableCell>
                              <TableCell>
                                <Badge className={getStatusColor(control.status)}>
                                  {control.status}
                                </Badge>
                              </TableCell>
                              <TableCell>{control.evidence}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-1">
                                  {control.findings > 0 && <AlertCircle className="w-4 h-4 text-amber-500" />}
                                  <span>{control.findings}</span>
                                </div>
                              </TableCell>
                              <TableCell>{control.testDate || 'Not tested'}</TableCell>
                              <TableCell>
                                <Button variant="outline" size="sm">
                                  <Eye className="w-3 h-3 mr-1" />
                                  View
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="findings" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Audit Findings</CardTitle>
                      <CardDescription>
                        {findings.length} findings identified during the audit
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Control</TableHead>
                            <TableHead>Finding</TableHead>
                            <TableHead>Severity</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Assignee</TableHead>
                            <TableHead>Due Date</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {findings.map((finding) => (
                            <TableRow key={finding.id}>
                              <TableCell className="font-medium">{finding.control}</TableCell>
                              <TableCell>
                                <div>
                                  <div className="font-medium">{finding.title}</div>
                                  <div className="text-sm text-muted-foreground">{finding.description}</div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge className={getSeverityColor(finding.severity)}>
                                  {finding.severity}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge className={getStatusColor(finding.status)}>
                                  {finding.status}
                                </Badge>
                              </TableCell>
                              <TableCell>{finding.assignee}</TableCell>
                              <TableCell>{finding.dueDate}</TableCell>
                              <TableCell>
                                <Button variant="outline" size="sm">
                                  <Eye className="w-3 h-3 mr-1" />
                                  View
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="evidence" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Evidence Repository</CardTitle>
                      <CardDescription>
                        {evidence.length} evidence items uploaded for this audit
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Evidence Name</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Control</TableHead>
                            <TableHead>Upload Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Reviewer</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {evidence.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="font-medium">{item.name}</TableCell>
                              <TableCell>{item.type}</TableCell>
                              <TableCell>{item.control}</TableCell>
                              <TableCell>{item.uploadDate}</TableCell>
                              <TableCell>
                                <Badge className={getStatusColor(item.status)}>
                                  {item.status}
                                </Badge>
                              </TableCell>
                              <TableCell>{item.reviewer || 'Unassigned'}</TableCell>
                              <TableCell>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm">
                                    <Eye className="w-3 h-3 mr-1" />
                                    View
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <Download className="w-3 h-3 mr-1" />
                                    Download
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="timeline" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Audit Timeline</CardTitle>
                      <CardDescription>
                        Key milestones and activities for this audit
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">Audit Kickoff</div>
                            <div className="text-sm text-muted-foreground">January 15, 2024</div>
                            <div className="text-sm">Initial planning session and scope definition completed</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Clock className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">Control Testing Phase</div>
                            <div className="text-sm text-muted-foreground">February 1 - February 28, 2024</div>
                            <div className="text-sm">Currently testing controls and reviewing evidence</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <Clock className="w-4 h-4 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">Management Letter</div>
                            <div className="text-sm text-muted-foreground">March 1, 2024</div>
                            <div className="text-sm">Draft findings and recommendations</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <Clock className="w-4 h-4 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">Final Report</div>
                            <div className="text-sm text-muted-foreground">March 15, 2024</div>
                            <div className="text-sm">Final audit report and certification</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
    </div>
  );
}