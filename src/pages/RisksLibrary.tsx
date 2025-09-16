import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  Zap,
  Plus,
  Search,
  Filter,
  AlertTriangle,
  TrendingUp,
  Shield,
  FileText,
  Clock,
  Users,
  Target,
  ExternalLink,
  ChevronRight,
  Activity,
  BarChart3,
  HelpCircle,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle,
  ChevronDown
} from 'lucide-react';

export default function RisksLibrary() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [isHelpExpanded, setIsHelpExpanded] = useState(false);

  const quickActions = [
    {
      title: 'Risk Register',
      description: 'View and manage comprehensive risk register',
      href: '/risks/register',
      icon: FileText,
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      title: 'Privacy Risk Assessment',
      description: 'Conduct data privacy and protection assessments',
      href: '/risks/privacy-assessment',
      icon: Shield,
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      title: 'Audit-Related Risks',
      description: 'Manage risks from audit findings and gaps',
      href: '/risks/audit-risks',
      icon: Target,
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      title: 'POAM Risks',
      description: 'Track risks from incomplete POAMs',
      href: '/risks/poam-risks',
      icon: AlertTriangle,
      color: 'bg-orange-50 text-orange-600 border-orange-200'
    }
  ];

  const riskMetrics = [
    { label: 'Total Risks', value: '147', trend: '+8', icon: Zap },
    { label: 'Privacy Risks', value: '23', trend: '+4', icon: Shield },
    { label: 'Critical Risks', value: '12', trend: '-2', icon: AlertTriangle },
    { label: 'Mitigation Progress', value: '73%', trend: '+12%', icon: TrendingUp }
  ];

  const recentRisks = [
    {
      id: 'RISK-2024-001',
      title: 'Cross-Border Data Transfer Violations',
      description: 'EU personal data transfers to US lacking adequate safeguards under GDPR',
      category: 'Privacy Risk',
      severity: 'Critical',
      likelihood: 'High',
      impact: 'High',
      riskScore: 95,
      status: 'Open',
      owner: 'Privacy Team',
      dueDate: '2024-02-28',
      source: 'Privacy Assessment',
      framework: 'GDPR'
    },
    {
      id: 'RISK-2024-002',
      title: 'Consent Management Gaps',
      description: 'Marketing consent collection lacks proper granular controls and withdrawal mechanisms',
      category: 'Privacy Risk',
      severity: 'High',
      likelihood: 'Medium',
      impact: 'High',
      riskScore: 85,
      status: 'In Progress',
      owner: 'Privacy Team',
      dueDate: '2024-03-15',
      source: 'CCPA Audit',
      framework: 'CCPA'
    },
    {
      id: 'RISK-2024-003',
      title: 'Third-Party Vendor Privacy Assessment Overdue',
      description: 'Critical vendors processing personal data lack current privacy impact assessments',
      category: 'Privacy Risk',
      severity: 'High',
      likelihood: 'Medium',
      impact: 'High',
      riskScore: 80,
      status: 'Open',
      owner: 'Privacy Team',
      dueDate: '2024-04-30',
      source: 'Vendor Review',
      framework: 'GDPR'
    },
    {
      id: 'RISK-2024-004',
      title: 'Data Retention Policy Non-Compliance',
      description: 'Customer data retained beyond legal requirements without justification',
      category: 'Privacy Risk',
      severity: 'Medium',
      likelihood: 'High',
      impact: 'Medium',
      riskScore: 70,
      status: 'Planning',
      owner: 'Privacy Team',
      dueDate: '2024-04-20',
      source: 'Data Audit',
      framework: 'GDPR/CCPA'
    },
    {
      id: 'RISK-2024-005',
      title: 'Privileged Access Controls Gap',
      description: 'Audit finding reveals inadequate privileged access monitoring',
      category: 'Audit Finding',
      severity: 'High',
      likelihood: 'Medium',
      impact: 'High',
      riskScore: 75,
      status: 'In Progress',
      owner: 'Security Team',
      dueDate: '2024-03-15',
      source: 'SOC 2 Audit',
      framework: 'SOC 2'
    },
    {
      id: 'RISK-2024-006',
      title: 'Data Subject Rights Response Delays',
      description: 'GDPR data subject access requests consistently exceeding 30-day response time',
      category: 'Privacy Risk',
      severity: 'Medium',
      likelihood: 'High',
      impact: 'Medium',
      riskScore: 65,
      status: 'Open',
      owner: 'Privacy Team',
      dueDate: '2024-03-30',
      source: 'Privacy Audit',
      framework: 'GDPR'
    }
  ];

  const riskByCategory = [
    { category: 'Privacy Risk', count: 34, critical: 8 },
    { category: 'POAM-Related', count: 23, critical: 5 },
    { category: 'Audit Finding', count: 18, critical: 3 },
    { category: 'Vendor Risk', count: 25, critical: 2 },
    { category: 'Operational', count: 32, critical: 2 },
    { category: 'Technical', count: 15, critical: 1 }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'in progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'planning': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      case 'mitigated': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'privacy risk': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'poam-related': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'audit finding': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'vendor risk': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300';
      case 'operational': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'technical': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <main className="flex-1 px-6 py-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">Risks Library</h1>
                    <p className="text-lg text-muted-foreground">
                      Comprehensive risk management including data privacy, audit findings, and operational risks
                    </p>
                  </div>
                <div className="flex gap-3">
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button asChild>
                    <Link to="/risks/register">
                      <Plus className="w-4 h-4 mr-2" />
                      New Risk
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Risk Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {riskMetrics.map((metric, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
                      <metric.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <p className="text-xs text-muted-foreground">{metric.trend}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search risks by title, category, or framework..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Quick Actions */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {quickActions.map((action, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                      <Link to={action.href}>
                        <CardHeader className="pb-3">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${action.color}`}>
                            <action.icon className="h-6 w-6" />
                          </div>
                          <CardTitle className="text-lg">{action.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {action.description}
                          </CardDescription>
                        </CardHeader>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview" className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4" />
                    <span>Overview</span>
                  </TabsTrigger>
                  <TabsTrigger value="risks" className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Recent Risks</span>
                  </TabsTrigger>
                  <TabsTrigger value="categories" className="flex items-center space-x-2">
                    <Target className="w-4 h-4" />
                    <span>By Category</span>
                  </TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Risk Heat Map</CardTitle>
                        <CardDescription>Risk distribution by impact and likelihood</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-4 gap-2 h-40">
                          <div className="flex flex-col gap-2">
                            <div className="text-xs text-center font-medium">Low</div>
                            <div className="bg-green-100 h-8 rounded flex items-center justify-center text-xs">2</div>
                            <div className="bg-green-200 h-8 rounded flex items-center justify-center text-xs">5</div>
                            <div className="bg-yellow-200 h-8 rounded flex items-center justify-center text-xs">8</div>
                            <div className="bg-orange-200 h-8 rounded flex items-center justify-center text-xs">3</div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="text-xs text-center font-medium">Med</div>
                            <div className="bg-green-200 h-8 rounded flex items-center justify-center text-xs">4</div>
                            <div className="bg-yellow-200 h-8 rounded flex items-center justify-center text-xs">12</div>
                            <div className="bg-orange-200 h-8 rounded flex items-center justify-center text-xs">15</div>
                            <div className="bg-red-200 h-8 rounded flex items-center justify-center text-xs">7</div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="text-xs text-center font-medium">High</div>
                            <div className="bg-yellow-200 h-8 rounded flex items-center justify-center text-xs">6</div>
                            <div className="bg-orange-200 h-8 rounded flex items-center justify-center text-xs">18</div>
                            <div className="bg-red-200 h-8 rounded flex items-center justify-center text-xs">23</div>
                            <div className="bg-red-300 h-8 rounded flex items-center justify-center text-xs">9</div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="text-xs text-center font-medium">Crit</div>
                            <div className="bg-orange-200 h-8 rounded flex items-center justify-center text-xs">1</div>
                            <div className="bg-red-200 h-8 rounded flex items-center justify-center text-xs">8</div>
                            <div className="bg-red-300 h-8 rounded flex items-center justify-center text-xs">15</div>
                            <div className="bg-red-400 h-8 rounded flex items-center justify-center text-xs">12</div>
                          </div>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground mt-2">
                          <span>Low Impact</span>
                          <span>Critical Impact</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Risk Trends</CardTitle>
                        <CardDescription>Monthly risk identification and mitigation</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">New Risks (This Month)</span>
                            <span className="text-lg font-bold">8</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Mitigated Risks</span>
                            <span className="text-lg font-bold">12</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Average Days to Mitigate</span>
                            <span className="text-lg font-bold">18</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Overall Risk Reduction</span>
                              <span>15%</span>
                            </div>
                            <Progress value={15} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Recent Risks Tab */}
                <TabsContent value="risks" className="space-y-6">
                  <div className="space-y-4">
                    {recentRisks.map((risk) => (
                      <Card key={risk.id} className="bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge variant="outline">{risk.id}</Badge>
                                <Badge className={getCategoryColor(risk.category)}>
                                  {risk.category}
                                </Badge>
                                <Badge className={getSeverityColor(risk.severity)}>
                                  {risk.severity}
                                </Badge>
                                <Badge className={getStatusColor(risk.status)}>
                                  {risk.status}
                                </Badge>
                              </div>
                              <CardTitle className="text-lg">{risk.title}</CardTitle>
                              <CardDescription className="mt-1">{risk.description}</CardDescription>
                              <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                                <span>Owner: {risk.owner}</span>
                                <span>Due: {risk.dueDate}</span>
                                <span>Source: {risk.source}</span>
                                <span>Framework: {risk.framework}</span>
                              </div>
                            </div>
                            <div className="text-right ml-6">
                              <div className="text-2xl font-bold text-foreground">{risk.riskScore}</div>
                              <div className="text-sm text-muted-foreground">Risk Score</div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Likelihood:</span>
                              <div className="font-medium">{risk.likelihood}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Impact:</span>
                              <div className="font-medium">{risk.impact}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Risk Score:</span>
                              <div className="font-medium">{risk.riskScore}/100</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Categories Tab */}
                <TabsContent value="categories" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {riskByCategory.map((category) => (
                      <Card key={category.category}>
                        <CardHeader>
                          <CardTitle className="text-lg">{category.category}</CardTitle>
                          <CardDescription>Risk distribution and criticality</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Total Risks</span>
                              <span className="text-xl font-bold">{category.count}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Critical</span>
                              <span className="text-lg font-bold text-red-600">{category.critical}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">High/Medium</span>
                              <span className="text-lg font-bold text-orange-600">{category.count - category.critical}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* CaaS Help Section - Collapsible */}
              <div className="mt-8">
                <Collapsible open={isHelpExpanded} onOpenChange={setIsHelpExpanded}>
                  <Card className="border-muted">
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-muted/30 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-full">
                              <HelpCircle className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-base">Need help with risk management?</CardTitle>
                              <CardDescription className="text-sm">Get expert assistance with risk assessment and mitigation strategies</CardDescription>
                            </div>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isHelpExpanded ? 'rotate-180' : ''}`} />
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <CardContent className="pt-0 pb-6">
                        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6">
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            Our white-glove Compliance-as-a-Service (CaaS) team provides expert assistance with risk assessment, 
                            mitigation strategies, audit findings remediation, and POAM management. Let our experts handle the complex 
                            risk management processes so you can focus on your business.
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-background/50 rounded-lg p-4">
                              <h4 className="font-medium mb-3 flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                Risk Assessment & Analysis
                              </h4>
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Comprehensive risk identification and evaluation</li>
                                <li>• Risk scoring and heat map development</li>
                                <li>• Impact and likelihood assessments</li>
                                <li>• Regulatory compliance risk analysis</li>
                              </ul>
                            </div>
                            
                            <div className="bg-background/50 rounded-lg p-4">
                              <h4 className="font-medium mb-3 flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                Mitigation & Monitoring
                              </h4>
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Risk mitigation strategy development</li>
                                <li>• POAM creation and management</li>
                                <li>• Audit finding remediation plans</li>
                                <li>• Continuous risk monitoring setup</li>
                              </ul>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="flex-1">
                              <HeadphonesIcon className="w-4 h-4 mr-2" />
                              Talk to our risk experts
                            </Button>
                            <Button variant="outline" className="flex-1">
                              <FileText className="w-4 h-4 mr-2" />
                              Learn more about risk management
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>

                          <div className="mt-6 pt-4 border-t border-primary/20 text-center">
                            <p className="text-sm text-muted-foreground">
                              📈 <strong>40% average reduction</strong> in critical risks for our CaaS clients
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              </div>
    </main>
  );
}