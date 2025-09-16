import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  TestTube, 
  Search, 
  Filter, 
  Plus,
  Play,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  FileText,
  Users,
  Calendar
} from 'lucide-react';

const TestManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('test-cases');

  const testPlans = [
    {
      id: 'TP-001',
      name: 'User Authentication Module',
      status: 'Active',
      progress: 75,
      totalTests: 45,
      passedTests: 34,
      failedTests: 2,
      blockedTests: 1,
      notRunTests: 8,
      assignee: 'QA Team Alpha',
      dueDate: '2024-02-15'
    },
    {
      id: 'TP-002',
      name: 'Payment Gateway Integration',
      status: 'In Progress',
      progress: 60,
      totalTests: 32,
      passedTests: 19,
      failedTests: 1,
      blockedTests: 0,
      notRunTests: 12,
      assignee: 'QA Team Beta',
      dueDate: '2024-02-20'
    }
  ];

  const testCases = [
    {
      id: 'TC-001',
      title: 'Verify user login with valid credentials',
      priority: 'High',
      status: 'Passed',
      automationStatus: 'Automated',
      lastRun: '2024-01-15 14:30',
      assignee: 'John Doe',
      requirements: ['REQ-001', 'REQ-002']
    },
    {
      id: 'TC-002',
      title: 'Verify password reset functionality',
      priority: 'Medium',
      status: 'Failed',
      automationStatus: 'Manual',
      lastRun: '2024-01-15 13:45',
      assignee: 'Jane Smith',
      requirements: ['REQ-003']
    },
    {
      id: 'TC-003',
      title: 'Verify account lockout after failed attempts',
      priority: 'Critical',
      status: 'Blocked',
      automationStatus: 'In Progress',
      lastRun: '2024-01-14 16:20',
      assignee: 'Mike Johnson',
      requirements: ['REQ-004', 'REQ-005']
    }
  ];

  const testRuns = [
    {
      id: 'TR-001',
      name: 'Regression Test Run - Sprint 24',
      plan: 'TP-001',
      status: 'In Progress',
      progress: 68,
      startDate: '2024-01-15',
      endDate: '2024-01-20',
      executor: 'QA Team Alpha',
      passed: 24,
      failed: 3,
      blocked: 1,
      notRun: 17
    },
    {
      id: 'TR-002',
      name: 'Smoke Test - Build 1.2.3',
      plan: 'TP-002',
      status: 'Completed',
      progress: 100,
      startDate: '2024-01-14',
      endDate: '2024-01-14',
      executor: 'QA Team Beta',
      passed: 28,
      failed: 0,
      blocked: 0,
      notRun: 0
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      'Passed': 'bg-green-100 text-green-800 border-green-200',
      'Failed': 'bg-red-100 text-red-800 border-red-200',
      'Blocked': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Not Run': 'bg-gray-100 text-gray-800 border-gray-200',
      'Active': 'bg-blue-100 text-blue-800 border-blue-200',
      'In Progress': 'bg-orange-100 text-orange-800 border-orange-200',
      'Completed': 'bg-green-100 text-green-800 border-green-200'
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

  const getAutomationBadge = (status: string) => {
    const variants: Record<string, string> = {
      'Automated': 'bg-blue-100 text-blue-800 border-blue-200',
      'Manual': 'bg-purple-100 text-purple-800 border-purple-200',
      'In Progress': 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    return <Badge className={variants[status] || 'bg-gray-100 text-gray-800 border-gray-200'}>{status}</Badge>;
  };

  return (
    <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                    <TestTube className="h-8 w-8" />
                    Test Management
                  </h1>
                  <p className="text-muted-foreground mt-2">
                    Comprehensive test planning, execution, and reporting platform
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Test Case
                  </Button>
                  <Button variant="outline">
                    <Play className="h-4 w-4 mr-2" />
                    Execute Test Run
                  </Button>
                </div>
              </div>

              {/* Test Management Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="test-cases">Test Cases</TabsTrigger>
                  <TabsTrigger value="test-plans">Test Plans</TabsTrigger>
                  <TabsTrigger value="test-runs">Test Runs</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>

                {/* Test Cases Tab */}
                <TabsContent value="test-cases" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Test Cases Repository</CardTitle>
                      <CardDescription>Manage and execute individual test cases</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative flex-1">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            placeholder="Search test cases..."
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
                              <TableHead>Test Case ID</TableHead>
                              <TableHead>Title</TableHead>
                              <TableHead>Priority</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Automation</TableHead>
                              <TableHead>Assignee</TableHead>
                              <TableHead>Last Run</TableHead>
                              <TableHead>Requirements</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {testCases.map((testCase) => (
                              <TableRow key={testCase.id} className="hover:bg-muted/50">
                                <TableCell className="font-medium">{testCase.id}</TableCell>
                                <TableCell>
                                  <div className="max-w-xs">
                                    <p className="font-semibold">{testCase.title}</p>
                                  </div>
                                </TableCell>
                                <TableCell>{getPriorityBadge(testCase.priority)}</TableCell>
                                <TableCell>{getStatusBadge(testCase.status)}</TableCell>
                                <TableCell>{getAutomationBadge(testCase.automationStatus)}</TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                    {testCase.assignee}
                                  </div>
                                </TableCell>
                                <TableCell className="text-sm">{testCase.lastRun}</TableCell>
                                <TableCell>
                                  <div className="flex gap-1">
                                    {testCase.requirements.map((req) => (
                                      <Badge key={req} variant="outline" className="text-xs">
                                        {req}
                                      </Badge>
                                    ))}
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Test Plans Tab */}
                <TabsContent value="test-plans" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Test Plans</CardTitle>
                      <CardDescription>Organize test cases into comprehensive test plans</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {testPlans.map((plan) => (
                          <Card key={plan.id} className="border">
                            <CardHeader>
                              <div className="flex items-center justify-between">
                                <div>
                                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                                  <CardDescription>{plan.id}</CardDescription>
                                </div>
                                {getStatusBadge(plan.status)}
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-green-600">{plan.passedTests}</div>
                                  <div className="text-sm text-muted-foreground">Passed</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-red-600">{plan.failedTests}</div>
                                  <div className="text-sm text-muted-foreground">Failed</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-yellow-600">{plan.blockedTests}</div>
                                  <div className="text-sm text-muted-foreground">Blocked</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-gray-600">{plan.notRunTests}</div>
                                  <div className="text-sm text-muted-foreground">Not Run</div>
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Progress</span>
                                  <span>{plan.progress}%</span>
                                </div>
                                <Progress value={plan.progress} className="h-2" />
                              </div>
                              
                              <div className="flex items-center justify-between mt-4 text-sm">
                                <div className="flex items-center gap-2">
                                  <Users className="h-4 w-4" />
                                  {plan.assignee}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" />
                                  Due: {plan.dueDate}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Test Runs Tab */}
                <TabsContent value="test-runs" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Test Execution Runs</CardTitle>
                      <CardDescription>Track test execution sessions and results</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="border rounded-lg">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Run ID</TableHead>
                              <TableHead>Name</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Progress</TableHead>
                              <TableHead>Results</TableHead>
                              <TableHead>Executor</TableHead>
                              <TableHead>Duration</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {testRuns.map((run) => (
                              <TableRow key={run.id} className="hover:bg-muted/50">
                                <TableCell className="font-medium">{run.id}</TableCell>
                                <TableCell>
                                  <div>
                                    <p className="font-semibold">{run.name}</p>
                                    <p className="text-sm text-muted-foreground">Plan: {run.plan}</p>
                                  </div>
                                </TableCell>
                                <TableCell>{getStatusBadge(run.status)}</TableCell>
                                <TableCell>
                                  <div className="space-y-1">
                                    <Progress value={run.progress} className="h-2" />
                                    <div className="text-sm text-muted-foreground">{run.progress}%</div>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex gap-2 text-sm">
                                    <span className="text-green-600">✓ {run.passed}</span>
                                    <span className="text-red-600">✗ {run.failed}</span>
                                    <span className="text-yellow-600">⚠ {run.blocked}</span>
                                    <span className="text-gray-600">- {run.notRun}</span>
                                  </div>
                                </TableCell>
                                <TableCell>{run.executor}</TableCell>
                                <TableCell>
                                  <div className="text-sm">
                                    <div>{run.startDate}</div>
                                    <div className="text-muted-foreground">to {run.endDate}</div>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Reports Tab */}
                <TabsContent value="reports" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Test Execution Summary</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span>Total Test Cases</span>
                            <span className="font-semibold">156</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Passed</span>
                            <span className="font-semibold text-green-600">134</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Failed</span>
                            <span className="font-semibold text-red-600">8</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Blocked</span>
                            <span className="font-semibold text-yellow-600">3</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Not Run</span>
                            <span className="font-semibold text-gray-600">11</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Quality Metrics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span>Test Coverage</span>
                              <span>87%</span>
                            </div>
                            <Progress value={87} />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span>Pass Rate</span>
                              <span>94.2%</span>
                            </div>
                            <Progress value={94.2} />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span>Automation Rate</span>
                              <span>73%</span>
                            </div>
                            <Progress value={73} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
    </div>
  );
};

export default TestManagement;