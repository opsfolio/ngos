import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import {
  CheckSquare,
  Plus,
  Users,
  Building2,
  Calendar,
  Clock,
  FileText,
  Shield,
  Database,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Home,
  ChevronRight
} from 'lucide-react';

export default function AuditCenter() {
  const stats = [
    { label: 'Total Audits', value: '24', trend: '+3 this quarter', icon: CheckSquare },
    { label: 'Active Sessions', value: '6', trend: '2 mock, 4 external', icon: Clock },
    { label: 'Compliance Score', value: '89%', trend: '+5% this month', icon: Shield },
    { label: 'Controls Tested', value: '142/180', trend: '79% complete', icon: Database },
  ];

  const recentAudits = [
    {
      id: 1,
      name: 'SOC 2 Type II Annual',
      type: 'External',
      auditor: 'Ernst & Young',
      status: 'In Progress',
      progress: 65,
      startDate: '2024-01-15',
      endDate: '2024-03-15',
      controlsTested: 89,
      totalControls: 142,
      findings: 3
    },
    {
      id: 2,
      name: 'ISO 27001 Pre-Assessment',
      type: 'Mock',
      auditor: 'Internal Team',
      status: 'In Progress',
      progress: 45,
      startDate: '2024-02-01',
      endDate: '2024-02-28',
      controlsTested: 34,
      totalControls: 76,
      findings: 8
    },
    {
      id: 3,
      name: 'HIPAA Compliance Review',
      type: 'External',
      auditor: 'Deloitte',
      status: 'Completed',
      progress: 100,
      startDate: '2023-11-01',
      endDate: '2024-01-31',
      controlsTested: 56,
      totalControls: 56,
      findings: 2
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'In Progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Scheduled': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      case 'Overdue': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'External' 
      ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
      : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
  };

  return (
    <main className="flex-1 px-6 py-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">Audit Center</h1>
                  <p className="text-lg text-muted-foreground">
                    Manage internal mock audits and external certification processes
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link to="/audits/browse">
                    <Button variant="outline">
                      <CheckSquare className="w-4 h-4 mr-2" />
                      Browse Audits
                    </Button>
                  </Link>
                  <Link to="/audits/create">
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      New Audit
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                      <stat.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-muted-foreground">{stat.trend}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Quick Actions */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Quick Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                      <CardDescription>Start a new audit or manage existing ones</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link to="/audits/create/mock">
                          <Card className="cursor-pointer hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                              <div className="flex items-center space-x-3">
                                <Users className="w-8 h-8 text-orange-500" />
                                <div>
                                  <h3 className="font-semibold">Create Mock Audit</h3>
                                  <p className="text-sm text-muted-foreground">Internal audit for preparation</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>

                        <Link to="/audits/create/external">
                          <Card className="cursor-pointer hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                              <div className="flex items-center space-x-3">
                                <Building2 className="w-8 h-8 text-purple-500" />
                                <div>
                                  <h3 className="font-semibold">Create External Audit</h3>
                                  <p className="text-sm text-muted-foreground">Official certification audit</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>

                        <Link to="/audits/browse">
                          <Card className="cursor-pointer hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                              <div className="flex items-center space-x-3">
                                <CheckSquare className="w-8 h-8 text-blue-500" />
                                <div>
                                  <h3 className="font-semibold">Browse All Audits</h3>
                                  <p className="text-sm text-muted-foreground">View and manage audits</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>

                        <Link to="/audits/templates">
                          <Card className="cursor-pointer hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                              <div className="flex items-center space-x-3">
                                <FileText className="w-8 h-8 text-green-500" />
                                <div>
                                  <h3 className="font-semibold">Audit Templates</h3>
                                  <p className="text-sm text-muted-foreground">Manage audit frameworks</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Audits */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Audit Sessions</CardTitle>
                      <CardDescription>Latest audit activities and progress</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {recentAudits.map((audit) => (
                          <div key={audit.id} className="border rounded-lg p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="font-semibold text-foreground">{audit.name}</h3>
                                <p className="text-sm text-muted-foreground">{audit.auditor}</p>
                              </div>
                              <div className="flex gap-2">
                                <Badge className={getTypeColor(audit.type)}>
                                  {audit.type}
                                </Badge>
                                <Badge className={getStatusColor(audit.status)}>
                                  {audit.status}
                                </Badge>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                              <div>
                                <span className="text-muted-foreground">Progress</span>
                                <div className="font-medium">{audit.progress}%</div>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Controls</span>
                                <div className="font-medium">{audit.controlsTested}/{audit.totalControls}</div>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Findings</span>
                                <div className="font-medium flex items-center gap-1">
                                  {audit.findings}
                                  {audit.findings > 0 && <AlertCircle className="w-3 h-3 text-amber-500" />}
                                </div>
                              </div>
                              <div>
                                <span className="text-muted-foreground">End Date</span>
                                <div className="font-medium">{audit.endDate}</div>
                              </div>
                            </div>

                            <Progress value={audit.progress} className="mb-3" />
                            
                            <div className="flex justify-end">
                              <Link to={`/audits/${audit.id}`}>
                                <Button variant="outline" size="sm">
                                  View Details
                                </Button>
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column - Insights */}
                <div className="space-y-6">
                  {/* Compliance Insights */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Compliance Insights</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Controls Readiness</span>
                        <span className="text-sm font-medium">89%</span>
                      </div>
                      <Progress value={89} />

                      <Separator />

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">Ready for Audit</span>
                          </div>
                          <span className="text-sm font-medium">142</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-amber-500" />
                            <span className="text-sm">Needs Attention</span>
                          </div>
                          <span className="text-sm font-medium">23</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-red-500" />
                            <span className="text-sm">Not Ready</span>
                          </div>
                          <span className="text-sm font-medium">15</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Upcoming Deadlines */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Deadlines</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm">SOC 2 Type II</div>
                            <div className="text-xs text-muted-foreground">Ernst & Young</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">Mar 15</div>
                            <div className="text-xs text-red-600">2 weeks left</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm">ISO 27001 Mock</div>
                            <div className="text-xs text-muted-foreground">Internal Team</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">Feb 28</div>
                            <div className="text-xs text-amber-600">5 days left</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
    </main>
  );
}