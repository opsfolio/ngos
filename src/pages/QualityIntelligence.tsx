import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Award, 
  TestTube, 
  FileCheck, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  TrendingUp,
  Shield,
  FileText,
  Target,
  Users,
  Activity,
  BarChart3,
  Zap,
  HelpCircle,
  HeadphonesIcon,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

const QualityIntelligence = () => {
  const [isHelpExpanded, setIsHelpExpanded] = React.useState(false);
  const qualityModules = [
    { 
      name: 'Test Management', 
      icon: TestTube, 
      href: '/quality/test-management',
      description: 'Manage test cases, plans, and execution',
      status: 'active',
      progress: 87
    },
    { 
      name: 'Requirements Traceability', 
      icon: Target, 
      href: '/quality/requirements',
      description: 'Track requirements through development lifecycle',
      status: 'active',
      progress: 92
    },
    { 
      name: 'Risk Analysis & FMEA', 
      icon: AlertTriangle, 
      href: '/quality/risk-analysis',
      description: 'Failure Mode and Effects Analysis',
      status: 'warning',
      progress: 76
    },
    { 
      name: 'Change Control', 
      icon: FileCheck, 
      href: '/quality/change-control',
      description: 'Manage changes and their impact',
      status: 'active',
      progress: 94
    },
    { 
      name: 'Document Control', 
      icon: FileText, 
      href: '/quality/document-control',
      description: 'Version control for quality documents',
      status: 'active',
      progress: 88
    },
    { 
      name: 'CAPA Management', 
      icon: Zap, 
      href: '/quality/capa',
      description: 'Corrective and Preventive Actions',
      status: 'critical',
      progress: 65
    }
  ];

  const qualityMetrics = {
    testCoverage: 87,
    defectDensity: 2.3,
    testPassRate: 94.2,
    requirementsCoverage: 91.5,
    openCAPAs: 8,
    pendingChanges: 12
  };

  const recentActivity = [
    { type: 'test', message: 'Test Suite TS-001 completed with 98% pass rate', time: '2 hours ago' },
    { type: 'capa', message: 'CAPA-2024-005 investigation completed', time: '4 hours ago' },
    { type: 'change', message: 'Change Request CR-2024-023 approved', time: '6 hours ago' },
    { type: 'risk', message: 'Risk assessment updated for Module A', time: '8 hours ago' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>;
      case 'warning':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Attention</Badge>;
      case 'critical':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Critical</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Quality Intelligence</h1>
                  <p className="text-muted-foreground mt-2">
                    Comprehensive test management and FDA QSR compliance platform
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button>
                    <TestTube className="h-4 w-4 mr-2" />
                    New Test Plan
                  </Button>
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Quality Report
                  </Button>
                </div>
              </div>

              {/* Quality Metrics Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Test Coverage</CardTitle>
                    <TestTube className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{qualityMetrics.testCoverage}%</div>
                    <Progress value={qualityMetrics.testCoverage} className="mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">Target: 90%</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Test Pass Rate</CardTitle>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{qualityMetrics.testPassRate}%</div>
                    <Progress value={qualityMetrics.testPassRate} className="mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">+2.1% from last week</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Requirements Coverage</CardTitle>
                    <Target className="h-4 w-4 text-blue-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{qualityMetrics.requirementsCoverage}%</div>
                    <Progress value={qualityMetrics.requirementsCoverage} className="mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">347 of 379 requirements</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Defect Density</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-orange-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{qualityMetrics.defectDensity}</div>
                    <p className="text-xs text-muted-foreground mt-2">Defects per KLOC</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Open CAPAs</CardTitle>
                    <Zap className="h-4 w-4 text-red-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{qualityMetrics.openCAPAs}</div>
                    <p className="text-xs text-muted-foreground mt-2">2 overdue</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Changes</CardTitle>
                    <Clock className="h-4 w-4 text-blue-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{qualityMetrics.pendingChanges}</div>
                    <p className="text-xs text-muted-foreground mt-2">3 awaiting approval</p>
                  </CardContent>
                </Card>
              </div>

              {/* Quality Modules */}
              <Card>
                <CardHeader>
                  <CardTitle>Quality Management Modules</CardTitle>
                  <CardDescription>Access test management and quality assurance tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {qualityModules.map((module) => (
                      <Link key={module.name} to={module.href}>
                        <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <module.icon className="h-6 w-6 text-primary" />
                              {getStatusBadge(module.status)}
                            </div>
                            <CardTitle className="text-base">{module.name}</CardTitle>
                            <CardDescription className="text-sm">
                              {module.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Progress</span>
                                <span>{module.progress}%</span>
                              </div>
                              <Progress value={module.progress} className="h-2" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity and Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5" />
                      Recent Quality Activity
                    </CardTitle>
                    <CardDescription>Latest test results, CAPA updates, and quality events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            activity.type === 'test' ? 'bg-blue-500' :
                            activity.type === 'capa' ? 'bg-red-500' :
                            activity.type === 'change' ? 'bg-green-500' : 'bg-orange-500'
                          }`} />
                          <div className="flex-1">
                            <p className="text-sm">{activity.message}</p>
                            <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* FDA QSR Compliance */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      FDA QSR Compliance
                    </CardTitle>
                    <CardDescription>Quality System Regulation compliance status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Design Controls</span>
                        <Badge className="bg-green-100 text-green-800 border-green-200">Compliant</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Document Controls</span>
                        <Badge className="bg-green-100 text-green-800 border-green-200">Compliant</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Risk Management</span>
                        <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Review Required</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">CAPA Process</span>
                        <Badge className="bg-green-100 text-green-800 border-green-200">Compliant</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Management Responsibility</span>
                        <Badge className="bg-green-100 text-green-800 border-green-200">Compliant</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common quality management tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="outline" className="h-20 flex-col">
                      <TestTube className="h-6 w-6 mb-2" />
                      Create Test
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <FileCheck className="h-6 w-6 mb-2" />
                      Log Defect
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <Zap className="h-6 w-6 mb-2" />
                      Initiate CAPA
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <BarChart3 className="h-6 w-6 mb-2" />
                      View Reports
                    </Button>
                  </div>
              </CardContent>
            </Card>

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
                            <CardTitle className="text-base">Need help with quality management?</CardTitle>
                            <CardDescription className="text-sm">Get expert assistance with FDA QSR compliance and test management</CardDescription>
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
                          Our white-glove Compliance-as-a-Service (CaaS) team provides expert assistance with FDA QSR compliance, 
                          test management, CAPA processes, and quality system implementation. Let our quality experts handle the 
                          complex regulatory requirements so you can focus on delivering quality products.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-background/50 rounded-lg p-4">
                            <h4 className="font-medium mb-3 flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                              Test Management & Validation
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>• Test plan development and execution</li>
                              <li>• Requirements traceability matrices</li>
                              <li>• Validation protocol creation</li>
                              <li>• Test automation strategies</li>
                            </ul>
                          </div>
                          
                          <div className="bg-background/50 rounded-lg p-4">
                            <h4 className="font-medium mb-3 flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                              FDA QSR & Quality Systems
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>• Design controls implementation</li>
                              <li>• CAPA process optimization</li>
                              <li>• Risk management (ISO 14971)</li>
                              <li>• Document control systems</li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button className="flex-1">
                            <HeadphonesIcon className="w-4 h-4 mr-2" />
                            Talk to our quality experts
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <FileText className="w-4 h-4 mr-2" />
                            Learn more about quality systems
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>

                        <div className="mt-6 pt-4 border-t border-primary/20 text-center">
                          <p className="text-sm text-muted-foreground">
                            ✅ <strong>100% FDA audit success rate</strong> for our CaaS quality clients
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            </div>
    </div>
  );
};

export default QualityIntelligence;