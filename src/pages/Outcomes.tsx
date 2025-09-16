import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Package, 
  TrendingUp, 
  MessageSquare, 
  Award,
  Plus,
  Download,
  Eye,
  Star,
  CheckCircle,
  Clock,
  AlertCircle,
  ChevronRight,
  Home
} from 'lucide-react';

const Outcomes = () => {
  const [activeTab, setActiveTab] = useState('deliverables');

  const deliverables = [
    {
      id: 1,
      title: 'Security Assessment Report',
      project: 'Enterprise Security Assessment',
      type: 'Document',
      status: 'Delivered',
      deliveryDate: '2024-02-20',
      version: '2.1',
      size: '2.4 MB',
      approvedBy: 'John Smith'
    },
    {
      id: 2,
      title: 'Implementation Roadmap',
      project: 'Enterprise Security Assessment',
      type: 'Document',
      status: 'In Review',
      deliveryDate: '2024-02-25',
      version: '1.0',
      size: '1.8 MB',
      approvedBy: 'Pending'
    },
    {
      id: 3,
      title: 'Security Training Materials',
      project: 'Enterprise Security Assessment',
      type: 'Training Package',
      status: 'In Progress',
      deliveryDate: '2024-03-10',
      version: 'Draft',
      size: '15.2 MB',
      approvedBy: 'Pending'
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Infrastructure Assessment Completed',
      project: 'Enterprise Security Assessment',
      date: '2024-02-15',
      impact: 'Identified 15 critical vulnerabilities',
      metrics: '95% coverage achieved'
    },
    {
      id: 2,
      title: 'Multi-Factor Authentication Deployed',
      project: 'Enterprise Security Assessment',
      date: '2024-02-10',
      impact: 'Enhanced security for 500+ users',
      metrics: '100% user adoption in 48 hours'
    },
    {
      id: 3,
      title: 'Compliance Gap Analysis',
      project: 'Compliance Framework Implementation',
      date: '2024-02-08',
      impact: 'Mapped 85 compliance requirements',
      metrics: '73% current compliance rate'
    }
  ];

  const metrics = [
    { label: 'Customer Satisfaction', value: 4.8, max: 5, unit: '/5', color: 'text-green-600' },
    { label: 'On-Time Delivery', value: 94, max: 100, unit: '%', color: 'text-blue-600' },
    { label: 'Budget Efficiency', value: 98, max: 100, unit: '%', color: 'text-purple-600' },
    { label: 'Quality Score', value: 92, max: 100, unit: '%', color: 'text-orange-600' }
  ];

  const feedback = [
    {
      id: 1,
      client: 'Acme Corp',
      project: 'Enterprise Security Assessment',
      rating: 5,
      comment: 'Exceptional work on the security assessment. The team identified critical vulnerabilities we were unaware of.',
      date: '2024-02-22',
      reviewer: 'Sarah Johnson, CISO'
    },
    {
      id: 2,
      client: 'TechStart Inc',
      project: 'Compliance Framework Implementation',
      rating: 4,
      comment: 'Great progress on compliance mapping. Looking forward to the implementation phase.',
      date: '2024-02-18',
      reviewer: 'Mike Chen, CTO'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'in review': return 'bg-yellow-100 text-yellow-800';
      case 'in progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <main className="flex-1 p-6">
              <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-foreground mb-2">Outcomes & Results</h1>
                  <p className="text-muted-foreground">
                    Track deliverables, measure success, and showcase achievements
                  </p>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {metrics.map((metric, index) => (
                    <Card key={index} className="bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm text-muted-foreground">{metric.label}</p>
                          <TrendingUp className={`w-4 h-4 ${metric.color}`} />
                        </div>
                        <div className="space-y-2">
                          <p className="text-2xl font-bold text-foreground">
                            {metric.value}{metric.unit}
                          </p>
                          <Progress value={(metric.value / metric.max) * 100} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Tabs Navigation */}
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="deliverables" className="flex items-center space-x-2">
                      <Package className="w-4 h-4" />
                      <span>Deliverables</span>
                    </TabsTrigger>
                    <TabsTrigger value="achievements" className="flex items-center space-x-2">
                      <Award className="w-4 h-4" />
                      <span>Achievements</span>
                    </TabsTrigger>
                    <TabsTrigger value="metrics" className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>Performance</span>
                    </TabsTrigger>
                    <TabsTrigger value="feedback" className="flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>Feedback</span>
                    </TabsTrigger>
                  </TabsList>

                  {/* Deliverables Tab */}
                  <TabsContent value="deliverables" className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-semibold">Project Deliverables</h2>
                      <Button className="flex items-center space-x-2">
                        <Plus className="w-4 h-4" />
                        <span>Add Deliverable</span>
                      </Button>
                    </div>
                    
                    <div className="grid gap-6">
                      {deliverables.map((deliverable) => (
                        <Card key={deliverable.id} className="bg-card/50 backdrop-blur-sm">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-lg">{deliverable.title}</CardTitle>
                                <CardDescription>{deliverable.project}</CardDescription>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Badge className={getStatusColor(deliverable.status)}>
                                  {deliverable.status}
                                </Badge>
                                <Button variant="ghost" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Download className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              <div>
                                <p className="text-sm text-muted-foreground">Type</p>
                                <p className="font-medium">{deliverable.type}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Delivery Date</p>
                                <p className="font-medium">{deliverable.deliveryDate}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Version</p>
                                <p className="font-medium">{deliverable.version}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Size</p>
                                <p className="font-medium">{deliverable.size}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Achievements Tab */}
                  <TabsContent value="achievements" className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-semibold">Key Achievements</h2>
                      <Button className="flex items-center space-x-2">
                        <Plus className="w-4 h-4" />
                        <span>Add Achievement</span>
                      </Button>
                    </div>
                    
                    <div className="grid gap-6">
                      {achievements.map((achievement) => (
                        <Card key={achievement.id} className="bg-card/50 backdrop-blur-sm">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="p-2 rounded-full bg-green-100">
                                <Award className="w-6 h-6 text-green-600" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                                <p className="text-sm text-muted-foreground mb-2">{achievement.project}</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                  <div>
                                    <span className="text-muted-foreground">Date: </span>
                                    <span className="font-medium">{achievement.date}</span>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">Impact: </span>
                                    <span className="font-medium">{achievement.impact}</span>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">Metrics: </span>
                                    <span className="font-medium">{achievement.metrics}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Performance Metrics Tab */}
                  <TabsContent value="metrics" className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-semibold">Performance Analytics</h2>
                      <Button variant="outline">Export Report</Button>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <Card className="bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle>Project Success Rate</CardTitle>
                          <CardDescription>Percentage of projects delivered on time and within budget</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">On-Time Delivery</span>
                              <span className="font-semibold">94%</span>
                            </div>
                            <Progress value={94} className="h-3" />
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Within Budget</span>
                              <span className="font-semibold">98%</span>
                            </div>
                            <Progress value={98} className="h-3" />
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Quality Standards</span>
                              <span className="font-semibold">92%</span>
                            </div>
                            <Progress value={92} className="h-3" />
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle>Client Satisfaction Trends</CardTitle>
                          <CardDescription>Average satisfaction scores over time</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="text-center">
                              <div className="text-4xl font-bold text-green-600 mb-2">4.8</div>
                              <div className="text-sm text-muted-foreground">Average Rating</div>
                              <div className="flex justify-center space-x-1 mt-2">
                                {renderStars(5)}
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-center">
                              <div>
                                <div className="text-2xl font-bold">12</div>
                                <div className="text-sm text-muted-foreground">Total Reviews</div>
                              </div>
                              <div>
                                <div className="text-2xl font-bold">100%</div>
                                <div className="text-sm text-muted-foreground">Would Recommend</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  {/* Feedback Tab */}
                  <TabsContent value="feedback" className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-semibold">Client Feedback</h2>
                      <Button className="flex items-center space-x-2">
                        <Plus className="w-4 h-4" />
                        <span>Request Feedback</span>
                      </Button>
                    </div>
                    
                    <div className="grid gap-6">
                      {feedback.map((item) => (
                        <Card key={item.id} className="bg-card/50 backdrop-blur-sm">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="font-semibold text-lg">{item.client}</h3>
                                <p className="text-sm text-muted-foreground">{item.project}</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="flex space-x-1">
                                  {renderStars(item.rating)}
                                </div>
                                <span className="text-sm font-medium">{item.rating}/5</span>
                              </div>
                            </div>
                            <blockquote className="text-muted-foreground italic mb-4">
                              "{item.comment}"
                            </blockquote>
                            <div className="flex justify-between items-center text-sm">
                              <span className="font-medium">{item.reviewer}</span>
                              <span className="text-muted-foreground">{item.date}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
    </main>
  );
};

export default Outcomes;
