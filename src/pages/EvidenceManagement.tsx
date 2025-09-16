import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ClipboardCheck, Search, Zap, Upload, MapPin, FileText, Shield, TrendingUp, AlertCircle, Home, ChevronRight, HeadphonesIcon, ArrowRight, CheckCircle, HelpCircle, ChevronDown } from 'lucide-react';

const EvidenceManagement = () => {
  const [isHelpExpanded, setIsHelpExpanded] = React.useState(false);
  const quickActions = [
    {
      title: 'Browse Evidence',
      description: 'Search and filter through all collected evidence',
      href: '/evidence/browse',
      icon: Search,
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      title: 'System Integrations',
      description: 'Connect to live systems for automated evidence collection',
      href: '/evidence/integrations',
      icon: Zap,
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      title: 'Upload Evidence',
      description: 'Manually upload documents and evidence files',
      href: '/evidence/upload',
      icon: Upload,
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      title: 'Policy Mapping',
      description: 'Map evidence to policies and controls for compliance',
      href: '/evidence/mapping',
      icon: MapPin,
      color: 'bg-orange-50 text-orange-600 border-orange-200'
    }
  ];

  const stats = [
    { label: 'Total Evidence', value: '2,847', icon: FileText, trend: '+12%' },
    { label: 'Automated Sources', value: '15', icon: Zap, trend: '+3' },
    { label: 'Mapped to Policies', value: '89%', icon: Shield, trend: '+5%' },
    { label: 'Compliance Coverage', value: '94%', icon: TrendingUp, trend: '+8%' }
  ];

  const recentActivity = [
    { type: 'upload', description: 'New security scan results uploaded', time: '2 hours ago' },
    { type: 'integration', description: 'AWS CloudTrail integration updated', time: '4 hours ago' },
    { type: 'mapping', description: 'Evidence mapped to SOC 2 Type II controls', time: '6 hours ago' },
    { type: 'alert', description: 'Missing evidence detected for 3 policies', time: '1 day ago' }
  ];

  return (
    <main className="flex-1 px-6 py-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">Evidence Warehouse</h1>
                  <p className="text-muted-foreground">
                    Collect, organize, and map evidence to demonstrate compliance with your policies and controls
                  </p>
                </div>
                <Button asChild>
                  <Link to="/evidence/upload">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Evidence
                  </Link>
                </Button>
              </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <stat.icon className="h-6 w-6 text-muted-foreground mb-2" />
                    <Badge variant="secondary" className="text-xs">
                      {stat.trend}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div>
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

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ClipboardCheck className="mr-2 h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'alert' ? 'bg-red-500' : 
                      activity.type === 'upload' ? 'bg-blue-500' :
                      activity.type === 'integration' ? 'bg-green-500' : 'bg-orange-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{activity.description}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="mr-2 h-5 w-5" />
                Compliance Gaps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                  <p className="text-sm font-medium text-red-800">Missing Evidence: Access Control Reviews</p>
                  <p className="text-xs text-red-600 mt-1">Required for SOC 2 Type II - CC6.1</p>
                </div>
                <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                  <p className="text-sm font-medium text-yellow-800">Outdated Evidence: Security Training Records</p>
                  <p className="text-xs text-yellow-600 mt-1">Last updated 6 months ago</p>
                </div>
                <div className="p-3 rounded-lg bg-orange-50 border border-orange-200">
                  <p className="text-sm font-medium text-orange-800">Unmapped Evidence: Vulnerability Scans</p>
                  <p className="text-xs text-orange-600 mt-1">47 files not mapped to any policy</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CaaS Help Section - Collapsible */}
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
                      <CardTitle className="text-base">Need help with evidence requirements?</CardTitle>
                      <CardDescription className="text-sm">Get expert assistance with evidence collection and mapping</CardDescription>
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
                    Our white-glove Compliance-as-a-Service (CaaS) team provides expert assistance with evidence collection, 
                    mapping requirements, automation setup, and compliance gap analysis. Let our experts handle the complex 
                    evidence requirements so you can focus on your business.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-background/50 rounded-lg p-4">
                      <h4 className="font-medium mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Evidence Collection & Mapping
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Identify required evidence for your frameworks</li>
                        <li>• Set up automated evidence collection</li>
                        <li>• Map evidence to policies and controls</li>
                        <li>• Fill compliance gaps and missing evidence</li>
                      </ul>
                    </div>
                    
                    <div className="bg-background/50 rounded-lg p-4">
                      <h4 className="font-medium mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Ongoing Support & Monitoring
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Continuous compliance monitoring</li>
                        <li>• Evidence freshness validation</li>
                        <li>• Audit preparation assistance</li>
                        <li>• Integration troubleshooting</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1">
                      <HeadphonesIcon className="w-4 h-4 mr-2" />
                      Talk to our CaaS experts
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <FileText className="w-4 h-4 mr-2" />
                      Learn more about evidence requirements
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  <div className="mt-6 pt-4 border-t border-primary/20 text-center">
                    <p className="text-sm text-muted-foreground">
                      📊 <strong>95% evidence coverage</strong> achieved for our CaaS clients on average
                    </p>
                  </div>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>
    </main>
  );
};

export default EvidenceManagement;