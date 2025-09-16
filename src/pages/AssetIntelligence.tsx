import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Server, 
  Monitor, 
  Cloud, 
  Smartphone, 
  Network, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Plus,
  FileText,
  Activity,
  Users,
  HelpCircle,
  HeadphonesIcon,
  ArrowRight,
  ChevronDown,
  Brain,
  Lock
} from 'lucide-react';

const AssetIntelligence = () => {
  const [isHelpExpanded, setIsHelpExpanded] = React.useState(false);
  const assetCategories = [
    { name: 'Servers', count: 247, icon: Server, href: '/assets/servers', status: 'good' },
    { name: 'Workstations', count: 1432, icon: Monitor, href: '/assets/workstations', status: 'warning' },
    { name: 'Cloud Assets', count: 89, icon: Cloud, href: '/assets/cloud', status: 'good' },
    { name: 'Applications', count: 156, icon: Smartphone, href: '/assets/applications', status: 'critical' },
    { name: 'Network Devices', count: 73, icon: Network, href: '/assets/network', status: 'good' },
    { name: 'AI Context Engineering', count: 42, icon: Brain, href: '/assets/ai-context', status: 'warning' },
  ];

  const threatSummary = {
    detected: 23,
    resolved: 18,
    critical: 2,
    high: 8,
    medium: 13
  };

  const poamSummary = {
    open: 14,
    closed: 156,
    overdue: 3
  };

  const aiSafetySummary = {
    promptsReviewed: 87,
    guardrailsActive: 15,
    piiDetected: 8,
    modelCompliance: 94
  };

  const recentActivity = [
    { type: 'asset', message: 'New server discovered: PROD-WEB-03', time: '2 hours ago' },
    { type: 'threat', message: 'High severity vulnerability detected on DEV-DB-01', time: '4 hours ago' },
    { type: 'ai', message: 'PII detected in AI prompt template: CUSTOMER-SUPPORT-001', time: '5 hours ago' },
    { type: 'poam', message: 'POAM-2024-001 marked as completed', time: '6 hours ago' },
    { type: 'ai', message: 'New AI guardrail policy activated for financial data', time: '7 hours ago' },
    { type: 'asset', message: 'Cloud asset compliance scan completed', time: '8 hours ago' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <main className="flex-1 p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Asset Intelligence</h1>
                <p className="text-muted-foreground mt-2">
                  Comprehensive view of enterprise assets, threats, and compliance status
                </p>
              </div>
              <div className="flex gap-2">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Asset
                </Button>
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </div>

            {/* Asset Categories Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              {assetCategories.map((category) => (
                <Link key={category.name} to={category.href}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {category.name}
                      </CardTitle>
                      <category.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold">{category.count}</div>
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(category.status)}`} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Threats Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    Threat Intelligence
                  </CardTitle>
                  <CardDescription>Active threats and vulnerabilities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Detected</span>
                    <Badge variant="destructive">{threatSummary.detected}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Resolved</span>
                    <Badge variant="secondary">{threatSummary.resolved}</Badge>
                  </div>
                  <div className="pt-2 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Critical</span>
                      <span className="text-red-600 font-semibold">{threatSummary.critical}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>High</span>
                      <span className="text-orange-600 font-semibold">{threatSummary.high}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Medium</span>
                      <span className="text-yellow-600 font-semibold">{threatSummary.medium}</span>
                    </div>
                  </div>
                  <Link to="/assets/threats">
                    <Button className="w-full" variant="outline">View All Threats</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* POAMs Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    POAMs & Actions
                  </CardTitle>
                  <CardDescription>Plan of Action & Milestones</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Open</span>
                    <Badge variant="outline">{poamSummary.open}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Completed</span>
                    <Badge variant="secondary">{poamSummary.closed}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Overdue</span>
                    <Badge variant="destructive">{poamSummary.overdue}</Badge>
                  </div>
                  <Link to="/assets/poams">
                    <Button className="w-full" variant="outline">Manage POAMs</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* AI Safety & Privacy */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-purple-500" />
                    AI Safety & Privacy
                  </CardTitle>
                  <CardDescription>AI context and model governance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Prompts Reviewed</span>
                    <Badge variant="secondary">{aiSafetySummary.promptsReviewed}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Active Guardrails</span>
                    <Badge variant="outline">{aiSafetySummary.guardrailsActive}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>PII Detected</span>
                    <Badge variant="destructive">{aiSafetySummary.piiDetected}</Badge>
                  </div>
                  <div className="text-center pt-2">
                    <div className="text-2xl font-bold text-purple-600">{aiSafetySummary.modelCompliance}%</div>
                    <div className="text-sm text-muted-foreground">Model Compliance</div>
                  </div>
                  <Link to="/assets/ai-context">
                    <Button className="w-full" variant="outline">Manage AI Assets</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Compliance Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    Compliance Status
                  </CardTitle>
                  <CardDescription>Overall compliance posture</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">87%</div>
                    <div className="text-sm text-muted-foreground">Compliant Assets</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Fully Compliant</span>
                      <span className="text-green-600">1,847</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Partial Compliance</span>
                      <span className="text-yellow-600">234</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Non-Compliant</span>
                      <span className="text-red-600">116</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Latest discovered assets, flagged threats, and completed tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === 'threat' ? 'bg-red-500' :
                        activity.type === 'poam' ? 'bg-green-500' : 
                        activity.type === 'ai' ? 'bg-purple-500' : 'bg-blue-500'
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

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <Button variant="outline" className="h-20 flex-col">
                    <Plus className="h-6 w-6 mb-2" />
                    Add Asset
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Users className="h-6 w-6 mb-2" />
                    Assign Task
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <FileText className="h-6 w-6 mb-2" />
                    Generate Report
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Shield className="h-6 w-6 mb-2" />
                    Run Scan
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Brain className="h-6 w-6 mb-2" />
                    Review AI Prompts
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
                            <CardTitle className="text-base">Need help with asset management?</CardTitle>
                            <CardDescription className="text-sm">Get expert assistance with asset discovery and compliance monitoring</CardDescription>
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
                          Our white-glove Compliance-as-a-Service (CaaS) team provides expert assistance with asset discovery, 
                          inventory management, threat monitoring, and compliance tracking across your entire IT infrastructure. 
                          Let our experts handle the complex asset management challenges so you can focus on your business.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-background/50 rounded-lg p-4">
                            <h4 className="font-medium mb-3 flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                              Asset Discovery & Inventory
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>• Comprehensive asset discovery and classification</li>
                              <li>• Automated inventory management</li>
                              <li>• Asset lifecycle tracking</li>
                              <li>• Configuration management databases</li>
                            </ul>
                          </div>
                          
                          <div className="bg-background/50 rounded-lg p-4">
                            <h4 className="font-medium mb-3 flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                              Threat & Compliance Monitoring
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>• Continuous threat intelligence monitoring</li>
                              <li>• POAM management and tracking</li>
                              <li>• Compliance posture assessment</li>
                              <li>• Asset-based risk analysis</li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button className="flex-1">
                            <HeadphonesIcon className="w-4 h-4 mr-2" />
                            Talk to our asset management experts
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <FileText className="w-4 h-4 mr-2" />
                            Learn more about asset intelligence
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>

                        <div className="mt-6 pt-4 border-t border-primary/20 text-center">
                          <p className="text-sm text-muted-foreground">
                            📊 <strong>99% asset visibility</strong> achieved for our CaaS clients on average
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

export default AssetIntelligence;