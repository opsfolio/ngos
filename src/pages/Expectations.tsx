import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  FileText, 
  Target, 
  Calendar, 
  Users, 
  Plus,
  Edit,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Home,
  Gauge,
  Shield,
  TrendingUp,
  Activity
} from 'lucide-react';

const Expectations = () => {
  const [activeTab, setActiveTab] = useState('slas');

  // SLA data
  const slas = [
    {
      id: 1,
      service: 'Web Application Uptime',
      level: '99.9%',
      measurement: 'Monthly Uptime',
      penalty: '10% service credit',
      currentPerformance: 99.95,
      status: 'Meeting',
      lastBreach: null,
      stakeholders: ['IT Operations', 'Business Unit']
    },
    {
      id: 2,
      service: 'Customer Support Response',
      level: '< 2 hours',
      measurement: 'First Response Time',
      penalty: '5% service credit',
      currentPerformance: 1.8,
      status: 'Meeting',
      lastBreach: null,
      stakeholders: ['Support Team', 'Customer Success']
    },
    {
      id: 3,
      service: 'Data Backup Completion',
      level: '100%',
      measurement: 'Daily Backup Success Rate',
      penalty: 'Immediate escalation',
      currentPerformance: 98.5,
      status: 'At Risk',
      lastBreach: '2024-01-10',
      stakeholders: ['IT Operations', 'Data Management']
    }
  ];

  // SLO data
  const slos = [
    {
      id: 1,
      objective: 'API Response Time',
      target: '< 200ms',
      currentValue: 180,
      unit: 'ms',
      timeWindow: '30 days',
      status: 'Healthy',
      trend: 'improving',
      errorBudget: 85,
      alerts: 0
    },
    {
      id: 2,
      objective: 'Database Query Performance',
      target: '< 500ms',
      currentValue: 650,
      unit: 'ms',
      timeWindow: '7 days',
      status: 'Breached',
      trend: 'degrading',
      errorBudget: 15,
      alerts: 3
    },
    {
      id: 3,
      objective: 'System Availability',
      target: '99.95%',
      currentValue: 99.98,
      unit: '%',
      timeWindow: '30 days',
      status: 'Healthy',
      trend: 'stable',
      errorBudget: 92,
      alerts: 0
    },
    {
      id: 4,
      objective: 'Error Rate',
      target: '< 0.1%',
      currentValue: 0.05,
      unit: '%',
      timeWindow: '24 hours',
      status: 'Healthy',
      trend: 'improving',
      errorBudget: 78,
      alerts: 0
    }
  ];

  const sows = [
    {
      id: 1,
      title: 'Enterprise Security Assessment - Phase 1',
      client: 'Acme Corp',
      status: 'Active',
      startDate: '2024-01-15',
      endDate: '2024-03-15',
      progress: 75,
      deliverables: 8,
      budget: '$125,000'
    },
    {
      id: 2,
      title: 'Compliance Framework Implementation',
      client: 'TechStart Inc',
      status: 'In Review',
      startDate: '2024-02-01',
      endDate: '2024-04-20',
      progress: 0,
      deliverables: 12,
      budget: '$85,000'
    },
    {
      id: 3,
      title: 'Risk Management Strategy Development',
      client: 'GlobalBank',
      status: 'Draft',
      startDate: '2024-03-01',
      endDate: '2024-05-30',
      progress: 0,
      deliverables: 6,
      budget: '$150,000'
    }
  ];

  const objectives = [
    {
      id: 1,
      title: 'Establish comprehensive security baseline',
      project: 'Enterprise Security Assessment',
      priority: 'High',
      owner: 'Security Team',
      dueDate: '2024-02-28',
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Implement multi-factor authentication',
      project: 'Enterprise Security Assessment',
      priority: 'Critical',
      owner: 'IT Operations',
      dueDate: '2024-03-10',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Document compliance procedures',
      project: 'Compliance Framework Implementation',
      priority: 'Medium',
      owner: 'Compliance Team',
      dueDate: '2024-04-15',
      status: 'Not Started'
    }
  ];

  const milestones = [
    {
      id: 1,
      title: 'Security Assessment Kickoff',
      project: 'Enterprise Security Assessment',
      date: '2024-01-15',
      status: 'Completed',
      description: 'Project initiation and stakeholder alignment'
    },
    {
      id: 2,
      title: 'Infrastructure Analysis Complete',
      project: 'Enterprise Security Assessment',
      date: '2024-02-15',
      status: 'Completed',
      description: 'Complete analysis of current security infrastructure'
    },
    {
      id: 3,
      title: 'Vulnerability Assessment',
      project: 'Enterprise Security Assessment',
      date: '2024-02-28',
      status: 'In Progress',
      description: 'Comprehensive vulnerability testing and analysis'
    },
    {
      id: 4,
      title: 'Final Report Delivery',
      project: 'Enterprise Security Assessment',
      date: '2024-03-15',
      status: 'Pending',
      description: 'Delivery of final assessment report and recommendations'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in progress': return 'bg-blue-100 text-blue-800';
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'not started': return 'bg-gray-100 text-gray-800';
      case 'draft': return 'bg-orange-100 text-orange-800';
      case 'in review': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <main className="flex-1 p-6">
              <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-foreground mb-2">Expectations, SLOs & SLAs Management</h1>
                  <p className="text-muted-foreground">
                    Manage service level agreements, objectives, project expectations, and performance metrics
                  </p>
                </div>

                {/* Tabs Navigation */}
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-6">
                    <TabsTrigger value="slas" className="flex items-center space-x-2">
                      <Shield className="w-4 h-4" />
                      <span>SLAs</span>
                    </TabsTrigger>
                    <TabsTrigger value="slos" className="flex items-center space-x-2">
                      <Gauge className="w-4 h-4" />
                      <span>SLOs</span>
                    </TabsTrigger>
                    <TabsTrigger value="sows" className="flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span>SOWs</span>
                    </TabsTrigger>
                    <TabsTrigger value="objectives" className="flex items-center space-x-2">
                      <Target className="w-4 h-4" />
                      <span>Objectives</span>
                    </TabsTrigger>
                    <TabsTrigger value="milestones" className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Milestones</span>
                    </TabsTrigger>
                    <TabsTrigger value="roles" className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>Roles</span>
                    </TabsTrigger>
                  </TabsList>

                  {/* SLAs Tab */}
                  <TabsContent value="slas" className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-semibold">Service Level Agreements</h2>
                      <Button className="flex items-center space-x-2">
                        <Plus className="w-4 h-4" />
                        <span>Create New SLA</span>
                      </Button>
                    </div>
                    
                    <div className="grid gap-6">
                      {slas.map((sla) => (
                        <Card key={sla.id} className="bg-card/50 backdrop-blur-sm">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-lg">{sla.service}</CardTitle>
                                <CardDescription>Target: {sla.level}</CardDescription>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Badge className={sla.status === 'Meeting' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                                  {sla.status}
                                </Badge>
                                <Button variant="ghost" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                              <div>
                                <p className="text-sm text-muted-foreground">Measurement</p>
                                <p className="font-medium">{sla.measurement}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Current Performance</p>
                                <p className="font-medium">{sla.currentPerformance}{sla.service.includes('Uptime') ? '%' : sla.service.includes('Response') ? 'h' : '%'}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Penalty</p>
                                <p className="font-medium">{sla.penalty}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Last Breach</p>
                                <p className="font-medium">{sla.lastBreach || 'None'}</p>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Stakeholders</span>
                                <span className="font-medium">{sla.stakeholders.join(', ')}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* SLOs Tab */}
                  <TabsContent value="slos" className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-semibold">Service Level Objectives</h2>
                      <Button className="flex items-center space-x-2">
                        <Plus className="w-4 h-4" />
                        <span>Create New SLO</span>
                      </Button>
                    </div>
                    
                    <div className="grid gap-4">
                      {slos.map((slo) => (
                        <Card key={slo.id} className="bg-card/50 backdrop-blur-sm">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-2">{slo.objective}</h3>
                                <p className="text-sm text-muted-foreground">Target: {slo.target}</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Badge className={
                                  slo.status === 'Healthy' ? 'bg-green-100 text-green-800' :
                                  slo.status === 'At Risk' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'
                                }>
                                  {slo.status}
                                </Badge>
                                <div className="flex items-center gap-1">
                                  {slo.trend === 'improving' ? (
                                    <TrendingUp className="h-4 w-4 text-green-600" />
                                  ) : slo.trend === 'degrading' ? (
                                    <TrendingUp className="h-4 w-4 text-red-600 rotate-180" />
                                  ) : (
                                    <Activity className="h-4 w-4 text-gray-600" />
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                              <div>
                                <p className="text-sm text-muted-foreground">Current Value</p>
                                <p className="font-medium">{slo.currentValue}{slo.unit}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Time Window</p>
                                <p className="font-medium">{slo.timeWindow}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Error Budget</p>
                                <p className="font-medium">{slo.errorBudget}%</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Active Alerts</p>
                                <p className="font-medium">{slo.alerts}</p>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Error Budget Usage</span>
                                <span className="font-medium">{100 - slo.errorBudget}%</span>
                              </div>
                              <Progress value={100 - slo.errorBudget} className="h-2" />
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* SOWs Tab */}
                  <TabsContent value="sows" className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-semibold">Statements of Work</h2>
                      <Button className="flex items-center space-x-2">
                        <Plus className="w-4 h-4" />
                        <span>Create New SOW</span>
                      </Button>
                    </div>
                    
                    <div className="grid gap-6">
                      {sows.map((sow) => (
                        <Card key={sow.id} className="bg-card/50 backdrop-blur-sm">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-lg">{sow.title}</CardTitle>
                                <CardDescription>Client: {sow.client}</CardDescription>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Badge className={getStatusColor(sow.status)}>
                                  {sow.status}
                                </Badge>
                                <Button variant="ghost" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                              <div>
                                <p className="text-sm text-muted-foreground">Start Date</p>
                                <p className="font-medium">{sow.startDate}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">End Date</p>
                                <p className="font-medium">{sow.endDate}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Budget</p>
                                <p className="font-medium">{sow.budget}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Deliverables</p>
                                <p className="font-medium">{sow.deliverables}</p>
                              </div>
                            </div>
                            {sow.status === 'Active' && (
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">Progress</span>
                                  <span className="font-medium">{sow.progress}%</span>
                                </div>
                                <Progress value={sow.progress} className="h-2" />
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Objectives Tab */}
                  <TabsContent value="objectives" className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-semibold">Project Objectives</h2>
                      <Button className="flex items-center space-x-2">
                        <Plus className="w-4 h-4" />
                        <span>Add Objective</span>
                      </Button>
                    </div>
                    
                    <div className="grid gap-4">
                      {objectives.map((objective) => (
                        <Card key={objective.id} className="bg-card/50 backdrop-blur-sm">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-2">{objective.title}</h3>
                                <p className="text-sm text-muted-foreground">{objective.project}</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Badge className={getPriorityColor(objective.priority)}>
                                  {objective.priority}
                                </Badge>
                                <Badge className={getStatusColor(objective.status)}>
                                  {objective.status}
                                </Badge>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-muted-foreground">Owner</p>
                                <p className="font-medium">{objective.owner}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Due Date</p>
                                <p className="font-medium">{objective.dueDate}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Milestones Tab */}
                  <TabsContent value="milestones" className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-semibold">Key Milestones</h2>
                      <Button className="flex items-center space-x-2">
                        <Plus className="w-4 h-4" />
                        <span>Add Milestone</span>
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      {milestones.map((milestone, index) => (
                        <div key={milestone.id} className="flex items-start space-x-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              milestone.status === 'Completed' ? 'bg-green-100' :
                              milestone.status === 'In Progress' ? 'bg-blue-100' : 'bg-gray-100'
                            }`}>
                              {milestone.status === 'Completed' ? (
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              ) : milestone.status === 'In Progress' ? (
                                <Clock className="w-4 h-4 text-blue-600" />
                              ) : (
                                <AlertCircle className="w-4 h-4 text-gray-600" />
                              )}
                            </div>
                            {index < milestones.length - 1 && (
                              <div className="w-0.5 h-16 bg-border mt-2"></div>
                            )}
                          </div>
                          <Card className="flex-1 bg-card/50 backdrop-blur-sm">
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="font-semibold">{milestone.title}</h3>
                                <Badge className={getStatusColor(milestone.status)}>
                                  {milestone.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{milestone.description}</p>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">{milestone.project}</span>
                                <span className="font-medium">{milestone.date}</span>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Roles & Responsibilities Tab */}
                  <TabsContent value="roles" className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-semibold">Roles & Responsibilities</h2>
                      <Button className="flex items-center space-x-2">
                        <Plus className="w-4 h-4" />
                        <span>Define Role</span>
                      </Button>
                    </div>
                    
                    <Card className="bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="text-center text-muted-foreground">
                          <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                          <h3 className="text-lg font-medium mb-2">Roles & Responsibilities Coming Soon</h3>
                          <p>Define clear team and client roles to avoid confusion and ensure accountability.</p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
    </main>
  );
};

export default Expectations;
