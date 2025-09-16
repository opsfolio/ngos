import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress as ProgressBar } from '@/components/ui/progress';
import { 
  BarChart3, 
  Calendar, 
  Clock, 
  TrendingUp,
  Target,
  Users,
  CheckCircle,
  AlertTriangle,
  Activity,
  ChevronRight,
  Home,
  Shield,
  FileText,
  ExternalLink,
  Plus,
  Filter,
  Search
} from 'lucide-react';

const Progress = () => {
  const [activeTab, setActiveTab] = useState('poams');

  // POAMs (Plan of Action and Milestones) - cybersecurity corrective action tracking
  const poams = [
    {
      id: 'POAM-001',
      title: 'Implement Multi-Factor Authentication',
      description: 'Deploy MFA across all privileged accounts to meet SOC 2 requirements',
      finding: 'SOC 2 Type II - CC6.1 Logical Access Controls',
      priority: 'High',
      status: 'In Progress',
      assignee: 'Security Team',
      dueDate: '2024-03-15',
      progress: 65,
      estimatedEffort: '120 hours',
      milestones: [
        { task: 'Vendor selection', completed: true, dueDate: '2024-02-01' },
        { task: 'Pilot deployment', completed: true, dueDate: '2024-02-15' },
        { task: 'Training materials', completed: false, dueDate: '2024-03-01' },
        { task: 'Full rollout', completed: false, dueDate: '2024-03-15' }
      ],
      riskLevel: 'High',
      complianceFramework: 'SOC 2 Type II'
    },
    {
      id: 'POAM-002',
      title: 'Update Incident Response Procedures',
      description: 'Revise and test incident response plan per NIST guidelines',
      finding: 'NIST CSF - RS.RP Response Planning',
      priority: 'Medium',
      status: 'Planning',
      assignee: 'Compliance Team',
      dueDate: '2024-04-20',
      progress: 25,
      estimatedEffort: '80 hours',
      milestones: [
        { task: 'Current state assessment', completed: true, dueDate: '2024-02-10' },
        { task: 'Updated procedures draft', completed: false, dueDate: '2024-03-15' },
        { task: 'Stakeholder review', completed: false, dueDate: '2024-04-01' },
        { task: 'Testing and approval', completed: false, dueDate: '2024-04-20' }
      ],
      riskLevel: 'Medium',
      complianceFramework: 'NIST CSF'
    },
    {
      id: 'POAM-003',
      title: 'Encrypt Data at Rest',
      description: 'Implement encryption for all databases containing PII',
      finding: 'HIPAA - 164.312(a)(2)(iv) Encryption and Decryption',
      priority: 'Critical',
      status: 'Delayed',
      assignee: 'Infrastructure Team',
      dueDate: '2024-02-28',
      progress: 15,
      estimatedEffort: '200 hours',
      milestones: [
        { task: 'Encryption strategy', completed: true, dueDate: '2024-01-15' },
        { task: 'Key management setup', completed: false, dueDate: '2024-02-01' },
        { task: 'Database encryption', completed: false, dueDate: '2024-02-20' },
        { task: 'Testing and validation', completed: false, dueDate: '2024-02-28' }
      ],
      riskLevel: 'Critical',
      complianceFramework: 'HIPAA'
    },
    {
      id: 'POAM-004',
      title: 'Implement Access Review Process',
      description: 'Establish quarterly access reviews for all user accounts',
      finding: 'ISO 27001 - A.9.2.5 Review of user access rights',
      priority: 'Medium',
      status: 'Completed',
      assignee: 'Identity Team',
      dueDate: '2024-01-31',
      progress: 100,
      estimatedEffort: '60 hours',
      milestones: [
        { task: 'Process documentation', completed: true, dueDate: '2024-01-10' },
        { task: 'Tool configuration', completed: true, dueDate: '2024-01-20' },
        { task: 'First review cycle', completed: true, dueDate: '2024-01-31' }
      ],
      riskLevel: 'Medium',
      complianceFramework: 'ISO 27001'
    }
  ];

  // Compliance Tasks beyond POAMs
  const complianceTasks = [
    {
      id: 'CT-001',
      title: 'Annual Risk Assessment Update',
      category: 'Risk Management',
      dueDate: '2024-03-31',
      status: 'In Progress',
      assignee: 'Risk Team',
      progress: 40,
      framework: 'SOC 2'
    },
    {
      id: 'CT-002',
      title: 'Security Training Completion',
      category: 'Training & Awareness',
      dueDate: '2024-02-29',
      status: 'At Risk',
      assignee: 'HR & Security',
      progress: 78,
      framework: 'Multiple'
    },
    {
      id: 'CT-003',
      title: 'Vendor Security Assessments',
      category: 'Third Party Risk',
      dueDate: '2024-04-15',
      status: 'On Track',
      assignee: 'Procurement',
      progress: 60,
      framework: 'SOC 2'
    }
  ];

  // Overall metrics combining POAMs and compliance tasks
  const overallMetrics = [
    { label: 'Active POAMs', value: '3', trend: '-1', icon: AlertTriangle },
    { label: 'Compliance Progress', value: '73%', trend: '+8%', icon: Shield },
    { label: 'On-Time Completion', value: '85%', trend: '+5%', icon: Clock },
    { label: 'Critical Findings', value: '1', trend: '0', icon: Target }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'in progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'on track': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'at risk': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'delayed': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'planning': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">Progress & POAMs</h1>
                    <p className="text-muted-foreground">
                      Track Plan of Action and Milestones (POAMs) and compliance task progress
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      New POAM
                    </Button>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {overallMetrics.map((metric, index) => (
                    <Card key={index} className="bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">{metric.label}</p>
                            <p className="text-2xl font-bold">{metric.value}</p>
                            <p className="text-sm text-green-600 font-medium">{metric.trend}</p>
                          </div>
                          <metric.icon className="w-8 h-8 text-primary" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Tabs Navigation */}
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="poams" className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>POAMs</span>
                    </TabsTrigger>
                    <TabsTrigger value="compliance" className="flex items-center space-x-2">
                      <Shield className="w-4 h-4" />
                      <span>Compliance Tasks</span>
                    </TabsTrigger>
                    <TabsTrigger value="overview" className="flex items-center space-x-2">
                      <BarChart3 className="w-4 h-4" />
                      <span>Overview</span>
                    </TabsTrigger>
                    <TabsTrigger value="activity" className="flex items-center space-x-2">
                      <Activity className="w-4 h-4" />
                      <span>Recent Activity</span>
                    </TabsTrigger>
                  </TabsList>

                  {/* POAMs Tab */}
                  <TabsContent value="poams" className="space-y-6">
                    <div className="space-y-6">
                      {poams.map((poam) => (
                        <Card key={poam.id} className="bg-card/50 backdrop-blur-sm">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <Badge variant="outline">{poam.id}</Badge>
                                  <Badge className={getPriorityColor(poam.priority)}>
                                    {poam.priority}
                                  </Badge>
                                  <Badge className={getStatusColor(poam.status)}>
                                    {poam.status}
                                  </Badge>
                                </div>
                                <CardTitle className="text-lg">{poam.title}</CardTitle>
                                <CardDescription className="mt-1">{poam.description}</CardDescription>
                                <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    Due: {poam.dueDate}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    {poam.assignee}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {poam.estimatedEffort}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right ml-6">
                                <div className="text-2xl font-bold text-foreground">{poam.progress}%</div>
                                <div className="text-sm text-muted-foreground">Complete</div>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="p-3 bg-muted/30 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                  <FileText className="w-4 h-4 text-muted-foreground" />
                                  <span className="text-sm font-medium">Finding Details</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{poam.finding}</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <Badge variant="secondary" className="text-xs">
                                    {poam.complianceFramework}
                                  </Badge>
                                  <Badge variant="secondary" className="text-xs">
                                    Risk: {poam.riskLevel}
                                  </Badge>
                                </div>
                              </div>
                              
                              <div>
                                <div className="flex justify-between text-sm mb-2">
                                  <span>Overall Progress</span>
                                  <span>{poam.progress}%</span>
                                </div>
                                <ProgressBar value={poam.progress} className="h-2 mb-4" />
                              </div>

                              <div>
                                <h4 className="text-sm font-medium mb-3">Milestones</h4>
                                <div className="space-y-2">
                                  {poam.milestones.map((milestone, index) => (
                                    <div key={index} className="flex items-center gap-3 text-sm">
                                      {milestone.completed ? (
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                      ) : (
                                        <Clock className="w-4 h-4 text-muted-foreground" />
                                      )}
                                      <span className={milestone.completed ? 'line-through text-muted-foreground' : ''}>
                                        {milestone.task}
                                      </span>
                                      <span className="text-muted-foreground ml-auto">
                                        {milestone.dueDate}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Compliance Tasks Tab */}
                  <TabsContent value="compliance" className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {complianceTasks.map((task) => (
                        <Card key={task.id} className="bg-card/50 backdrop-blur-sm">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div>
                                <Badge variant="outline" className="mb-2">{task.id}</Badge>
                                <CardTitle className="text-base">{task.title}</CardTitle>
                                <CardDescription>{task.category}</CardDescription>
                              </div>
                              <Badge className={getStatusColor(task.status)}>
                                {task.status}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="flex justify-between text-sm">
                                <span>Progress</span>
                                <span>{task.progress}%</span>
                              </div>
                              <ProgressBar value={task.progress} className="h-2" />
                              
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Due Date</span>
                                <span>{task.dueDate}</span>
                              </div>
                              
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Assignee</span>
                                <span>{task.assignee}</span>
                              </div>
                              
                              <Badge variant="secondary" className="text-xs">
                                {task.framework}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Overview Tab */}
                  <TabsContent value="overview" className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <Card className="bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle>POAM Progress Summary</CardTitle>
                          <CardDescription>Overall progress across all active POAMs</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {poams.filter(p => p.status !== 'Completed').map((poam) => (
                              <div key={poam.id} className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span className="font-medium">{poam.title}</span>
                                  <span>{poam.progress}%</span>
                                </div>
                                <ProgressBar value={poam.progress} className="h-2" />
                                <div className="flex justify-between text-xs text-muted-foreground">
                                  <span>{poam.complianceFramework}</span>
                                  <Badge className={getStatusColor(poam.status)} variant="secondary">
                                    {poam.status}
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle>Upcoming Deadlines</CardTitle>
                          <CardDescription>Critical milestones and due dates</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-center space-x-3 p-3 rounded-lg bg-red-50 border border-red-200">
                              <AlertTriangle className="w-5 h-5 text-red-600" />
                              <div className="flex-1">
                                <p className="font-medium text-red-800">POAM-003: Encrypt Data at Rest</p>
                                <p className="text-sm text-red-600">Overdue - Critical finding</p>
                              </div>
                              <span className="text-sm text-red-600">Feb 28</span>
                            </div>
                            <div className="flex items-center space-x-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                              <Clock className="w-5 h-5 text-yellow-600" />
                              <div className="flex-1">
                                <p className="font-medium text-yellow-800">POAM-001: MFA Implementation</p>
                                <p className="text-sm text-yellow-600">Due in 12 days</p>
                              </div>
                              <span className="text-sm text-yellow-600">Mar 15</span>
                            </div>
                            <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                              <CheckCircle className="w-5 h-5 text-blue-600" />
                              <div className="flex-1">
                                <p className="font-medium text-blue-800">Training Completion</p>
                                <p className="text-sm text-blue-600">On track - 78% complete</p>
                              </div>
                              <span className="text-sm text-blue-600">Feb 29</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  {/* Activity Tab */}
                  <TabsContent value="activity" className="space-y-6">
                    <Card className="bg-card/50 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>Latest updates on POAMs and compliance tasks</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3 p-4 rounded-lg bg-green-50 border border-green-200">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                            <div className="flex-1">
                              <p className="font-medium text-green-800">POAM-004 Completed</p>
                              <p className="text-sm text-green-600">Access Review Process successfully implemented</p>
                              <p className="text-xs text-green-500 mt-1">2 hours ago</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 p-4 rounded-lg bg-blue-50 border border-blue-200">
                            <Activity className="w-5 h-5 text-blue-600 mt-0.5" />
                            <div className="flex-1">
                              <p className="font-medium text-blue-800">MFA Pilot Deployment</p>
                              <p className="text-sm text-blue-600">POAM-001 milestone completed - proceeding to training phase</p>
                              <p className="text-xs text-blue-500 mt-1">4 hours ago</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 p-4 rounded-lg bg-red-50 border border-red-200">
                            <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                            <div className="flex-1">
                              <p className="font-medium text-red-800">Critical POAM Overdue</p>
                              <p className="text-sm text-red-600">POAM-003 Data Encryption - immediate attention required</p>
                              <p className="text-xs text-red-500 mt-1">1 day ago</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                            <Clock className="w-5 h-5 text-yellow-600 mt-0.5" />
                            <div className="flex-1">
                              <p className="font-medium text-yellow-800">Training Progress Update</p>
                              <p className="text-sm text-yellow-600">Security training completion at 78% - on track for deadline</p>
                              <p className="text-xs text-yellow-500 mt-1">6 hours ago</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Progress;