import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  AlertTriangle, 
  Shield, 
  Search, 
  Target, 
  Activity, 
  TrendingUp,
  Eye,
  Zap,
  CheckCircle,
  Clock,
  Plus,
  FileSearch,
  Users,
  Settings,
  HelpCircle,
  HeadphonesIcon,
  ArrowRight,
  FileText,
  ChevronDown
} from 'lucide-react';

const ThreatManagement = () => {
  const navigate = useNavigate();
  const [isHelpExpanded, setIsHelpExpanded] = React.useState(false);

  const ctevMetrics = [
    { label: 'Attack Surface Score', value: 7.2, max: 10, status: 'medium' },
    { label: 'Exposure Coverage', value: 89, max: 100, status: 'good' },
    { label: 'Mean Time to Detection', value: '2.3h', status: 'good' },
    { label: 'Critical Vulnerabilities', value: 12, status: 'high' }
  ];

  const recentThreats = [
    {
      id: 1,
      title: 'Suspicious Login Activity',
      severity: 'High',
      type: 'Authentication',
      status: 'Active',
      detected: '2 hours ago'
    },
    {
      id: 2,
      title: 'Potential Data Exfiltration',
      severity: 'Critical',
      type: 'Data Loss',
      status: 'Investigating',
      detected: '4 hours ago'
    },
    {
      id: 3,
      title: 'Malware Detection on Endpoint',
      severity: 'Medium',
      type: 'Malware',
      status: 'Contained',
      detected: '1 day ago'
    }
  ];

  const ctevPhases = [
    {
      phase: 'Scoping',
      description: 'Define attack surface and assets',
      status: 'complete',
      href: '/threats/scoping'
    },
    {
      phase: 'Discovery',
      description: 'Identify exposures and vulnerabilities',
      status: 'active',
      href: '/threats/discovery'
    },
    {
      phase: 'Prioritization',
      description: 'Risk-based threat prioritization',
      status: 'pending',
      href: '/threats/prioritization'
    },
    {
      phase: 'Validation',
      description: 'Confirm and validate findings',
      status: 'pending',
      href: '/threats/validation'
    },
    {
      phase: 'Mobilization',
      description: 'Deploy remediation actions',
      status: 'pending',
      href: '/threats/mobilization'
    }
  ];

  const quickActions = [
    {
      title: 'New Vulnerability Scan',
      description: 'Run automated vulnerability assessment',
      icon: Search,
      href: '/threats/vulnerability-scan',
      variant: 'default' as const
    },
    {
      title: 'Schedule Pen Test',
      description: 'Plan penetration testing engagement',
      icon: Target,
      href: '/threats/pen-testing',
      variant: 'outline' as const
    },
    {
      title: 'Threat Intelligence',
      description: 'View latest threat intelligence feeds',
      icon: Eye,
      href: '/threats/intelligence',
      variant: 'outline' as const
    },
    {
      title: 'CTEM Dashboard',
      description: 'Access continuous threat exposure management',
      icon: Activity,
      href: '/threats/ctem',
      variant: 'outline' as const
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'destructive';
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'destructive';
      case 'investigating': return 'secondary';
      case 'contained': return 'outline';
      case 'resolved': return 'default';
      default: return 'outline';
    }
  };

  return (
    <main className="flex-1 px-6 py-8">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Threat Management</h1>
                  <p className="text-muted-foreground mt-1">
                    Continuous Threat Exposure Management & Security Testing
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => navigate('/threats/settings')}>
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                  <Button onClick={() => navigate('/threats/vulnerability-scan')}>
                    <Plus className="h-4 w-4 mr-2" />
                    New Scan
                  </Button>
                </div>
              </div>

              {/* Quick Actions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Card 
              key={action.title} 
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate(action.href)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <action.icon className="h-5 w-5 text-muted-foreground" />
                  <Button variant={action.variant} size="sm">
                    View
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-medium mb-1">{action.title}</h3>
                <p className="text-sm text-muted-foreground">{action.description}</p>
              </CardContent>
            </Card>
          ))}
                  </div>

              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full lg:w-auto grid-cols-2 lg:grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="ctem">CTEM Process</TabsTrigger>
                  <TabsTrigger value="threats">Active Threats</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {ctevMetrics.map((metric) => (
                <Card key={metric.label}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {metric.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold">
                        {typeof metric.value === 'number' ? metric.value : metric.value}
                        {typeof metric.value === 'number' && metric.max && `/${metric.max}`}
                      </span>
                      <Badge variant={
                        metric.status === 'good' ? 'default' : 
                        metric.status === 'medium' ? 'secondary' : 'destructive'
                      }>
                        {metric.status}
                      </Badge>
                    </div>
                    {typeof metric.value === 'number' && metric.max && (
                      <Progress value={(metric.value / metric.max) * 100} className="h-2" />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

                  {/* Recent Activity */}
                  <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Recent Threat Activity
                </CardTitle>
                <CardDescription>
                  Latest security incidents and threat detections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentThreats.map((threat) => (
                    <div key={threat.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{threat.title}</h4>
                          <Badge variant={getSeverityColor(threat.severity)}>{threat.severity}</Badge>
                          <Badge variant={getStatusColor(threat.status)}>{threat.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {threat.type} • Detected {threat.detected}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Investigate
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="ctem" className="space-y-6">
                  <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  CTEM Process Overview
                </CardTitle>
                <CardDescription>
                  Continuous Threat Exposure Management lifecycle phases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ctevPhases.map((phase, index) => (
                    <div 
                      key={phase.phase}
                      className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => navigate(phase.href)}
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{phase.phase}</h3>
                        <p className="text-sm text-muted-foreground">{phase.description}</p>
                      </div>
                      <Badge variant={
                        phase.status === 'complete' ? 'default' :
                        phase.status === 'active' ? 'secondary' : 'outline'
                      }>
                        {phase.status === 'complete' && <CheckCircle className="h-3 w-3 mr-1" />}
                        {phase.status === 'active' && <Zap className="h-3 w-3 mr-1" />}
                        {phase.status === 'pending' && <Clock className="h-3 w-3 mr-1" />}
                        {phase.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="threats" className="space-y-6">
                  <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Active Threat Monitoring
                </CardTitle>
                <CardDescription>
                  Real-time threat detection and incident response
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Comprehensive Threat Monitoring</h3>
                  <p className="text-muted-foreground mb-4">
                    Advanced threat detection and response capabilities coming soon
                  </p>
                  <Button onClick={() => navigate('/threats/monitoring')}>
                    Configure Monitoring
                  </Button>
                </div>
              </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSearch className="h-5 w-5" />
                  Security Reports & Analytics
                </CardTitle>
                <CardDescription>
                  Comprehensive security reporting and trend analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Advanced Security Analytics</h3>
                  <p className="text-muted-foreground mb-4">
                    Detailed security reports and threat intelligence analytics
                  </p>
                  <Button onClick={() => navigate('/threats/reports')}>
                    View Reports
                  </Button>
                </div>
              </CardContent>
                  </Card>
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
                              <CardTitle className="text-base">Need help with threat management?</CardTitle>
                              <CardDescription className="text-sm">Get expert assistance with threat detection and security testing</CardDescription>
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
                            Our white-glove Compliance-as-a-Service (CaaS) team provides expert assistance with threat assessment, 
                            vulnerability management, penetration testing, and continuous threat exposure management (CTEM). Let our 
                            security experts handle the complex threat landscape so you can focus on your business.
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-background/50 rounded-lg p-4">
                              <h4 className="font-medium mb-3 flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                Threat Assessment & Testing
                              </h4>
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Comprehensive vulnerability assessments</li>
                                <li>• Penetration testing and red team exercises</li>
                                <li>• Threat modeling and risk analysis</li>
                                <li>• Security architecture reviews</li>
                              </ul>
                            </div>
                            
                            <div className="bg-background/50 rounded-lg p-4">
                              <h4 className="font-medium mb-3 flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                Continuous Monitoring & Response
                              </h4>
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• CTEM process implementation</li>
                                <li>• Threat intelligence integration</li>
                                <li>• Incident response planning</li>
                                <li>• Security monitoring setup</li>
                              </ul>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="flex-1">
                              <HeadphonesIcon className="w-4 h-4 mr-2" />
                              Talk to our security experts
                            </Button>
                            <Button variant="outline" className="flex-1">
                              <FileText className="w-4 h-4 mr-2" />
                              Learn more about threat management
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>

                          <div className="mt-6 pt-4 border-t border-primary/20 text-center">
                            <p className="text-sm text-muted-foreground">
                              🛡️ <strong>60% reduction in security incidents</strong> for our CaaS clients on average
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
};

export default ThreatManagement;