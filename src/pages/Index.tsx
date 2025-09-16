import React, { useState } from 'react';
import { StatusCard } from '@/components/dashboard/StatusCard';
import { QuickActionCard } from '@/components/dashboard/QuickActionCard';
import { TasksFeed } from '@/components/dashboard/TasksFeed';
import { AICopilot } from '@/components/ai/AICopilot';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  Clock,
  FileText,
  Search,
  Upload,
  Settings,
  TrendingUp,
  Users,
  ChevronRight,
  Home,
  Code,
  Scale,
  Building,
  Target,
  Zap,
  Award,
  Server,
  BarChart3,
  Eye,
  Briefcase,
  Calendar,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

// Professional view configurations
const professionalViews = {
  cto: {
    title: "CTO Dashboard",
    description: "Technology leadership and strategic oversight",
    icon: Code,
    features: [
      { name: 'Asset Intelligence', href: '/assets', icon: Server, description: 'Monitor infrastructure and technology assets' },
      { name: 'Quality Intelligence', href: '/quality', icon: Award, description: 'Ensure software quality and reliability' },
      { name: 'Threat Management', href: '/threats', icon: AlertTriangle, description: 'Oversee security threat landscape' },
      { name: 'Controls Library', href: '/controls', icon: Shield, description: 'Implement technical security controls' }
    ],
    metrics: [
      { label: 'Infrastructure Health', value: '94%', status: 'success' },
      { label: 'Security Posture', value: '87%', status: 'success' },
      { label: 'Quality Score', value: '91%', status: 'success' },
      { label: 'Active Threats', value: '3', status: 'warning' }
    ]
  },
  ciso: {
    title: "CISO Dashboard", 
    description: "Security leadership and risk management",
    icon: Shield,
    features: [
      { name: 'Threat Management', href: '/threats', icon: AlertTriangle, description: 'Monitor and respond to security threats' },
      { name: 'Controls Library', href: '/controls', icon: Shield, description: 'Manage security control framework' },
      { name: 'Risks Library', href: '/risks', icon: Zap, description: 'Assess and mitigate organizational risks' },
      { name: 'Asset Intelligence', href: '/assets', icon: Server, description: 'Secure asset inventory and monitoring' }
    ],
    metrics: [
      { label: 'Security Score', value: '87%', status: 'success' },
      { label: 'Critical Threats', value: '2', status: 'destructive' },
      { label: 'Controls Coverage', value: '89%', status: 'success' },
      { label: 'Risk Exposure', value: 'Medium', status: 'warning' }
    ]
  },
  cco: {
    title: "Chief Compliance Officer",
    description: "Compliance oversight and regulatory management", 
    icon: Scale,
    features: [
      { name: 'Audit Center', href: '/audits', icon: CheckCircle, description: 'Manage audits and assessments' },
      { name: 'Policies Library', href: '/policies', icon: FileText, description: 'Maintain policy compliance' },
      { name: 'Evidence Warehouse', href: '/evidence', icon: Upload, description: 'Collect and manage compliance evidence' },
      { name: 'Progress & POAMs', href: '/progress', icon: BarChart3, description: 'Track compliance progress' }
    ],
    metrics: [
      { label: 'Compliance Score', value: '87%', status: 'success' },
      { label: 'Open Findings', value: '12', status: 'warning' },
      { label: 'Policy Coverage', value: '95%', status: 'success' },
      { label: 'Overdue POAMs', value: '3', status: 'destructive' }
    ]
  },
  executive: {
    title: "Executive Dashboard",
    description: "Strategic oversight and business outcomes",
    icon: Building,
    features: [
      { name: 'Progress & POAMs', href: '/progress', icon: BarChart3, description: 'Strategic progress tracking' },
      { name: 'Outcomes', href: '/progress/outcomes', icon: Target, description: 'Business outcome measurement' },
      { name: 'Team Management', href: '/team', icon: Users, description: 'Organizational capability oversight' },
      { name: 'Audit Center', href: '/audits', icon: CheckCircle, description: 'Governance and assurance' }
    ],
    metrics: [
      { label: 'Overall Health', value: '89%', status: 'success' },
      { label: 'Strategic Goals', value: '7/10', status: 'success' },
      { label: 'Team Efficiency', value: '92%', status: 'success' },
      { label: 'Risk Level', value: 'Low', status: 'success' }
    ]
  }
};

const Index = () => {
  const [activeView, setActiveView] = useState('cto');
  const [isHelpExpanded, setIsHelpExpanded] = useState(false);
  const currentView = professionalViews[activeView as keyof typeof professionalViews];

  return (
    <div className="px-6 py-8">
              {/* Hero Section */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">Welcome to Opsfolio Suite</h1>
                <p className="text-lg text-muted-foreground">
                  Your unified platform for governance, security, compliance, and risk management
                </p>
              </div>

              {/* Professional View Tabs */}
              <Tabs value={activeView} onValueChange={setActiveView} className="mb-8">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="cto" className="flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    CTO
                  </TabsTrigger>
                  <TabsTrigger value="ciso" className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    CISO
                  </TabsTrigger>
                  <TabsTrigger value="cco" className="flex items-center gap-2">
                    <Scale className="w-4 h-4" />
                    CCO
                  </TabsTrigger>
                  <TabsTrigger value="executive" className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    Executive
                  </TabsTrigger>
                </TabsList>

                <TabsContent value={activeView} className="mt-6">
                  {/* View Header */}
                  <Card className="mb-6">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <currentView.icon className="w-8 h-8 text-primary" />
                        <div>
                          <CardTitle className="text-2xl">{currentView.title}</CardTitle>
                          <CardDescription className="text-base">{currentView.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {currentView.metrics.map((metric, index) => (
                      <StatusCard
                        key={index}
                        title={metric.label}
                        value={metric.value}
                        status={metric.status as any}
                        icon={BarChart3}
                        subtitle=""
                        trend=""
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Feature Access */}
                    <div className="lg:col-span-2">
                      <h2 className="text-xl font-semibold text-foreground mb-4">Key Features & Actions</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {currentView.features.map((feature, index) => (
                          <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 cursor-pointer group">
                            <div className="flex items-center space-x-3 mb-3">
                              <feature.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                              <h3 className="font-semibold text-foreground">{feature.name}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                            <div className="flex items-center justify-between mt-4">
                              <Badge variant="outline">Available</Badge>
                              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                          </Card>
                        ))}
                      </div>

                      {/* Universal Quick Actions */}
                      <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <QuickActionCard
                          title="Generate Report"
                          description="Create executive summary or detailed compliance reports"
                          icon={BarChart3}
                          actionLabel="Create Report"
                        />
                        <QuickActionCard
                          title="Schedule Review"
                          description="Set up periodic reviews and assessments"
                          icon={Calendar}
                          actionLabel="Schedule Now"
                        />
                        <QuickActionCard
                          title="View Analytics"
                          description="Access detailed analytics and trending data"
                          icon={Eye}
                          actionLabel="View Analytics"
                        />
                        <QuickActionCard
                          title="Manage Team"
                          description="Assign tasks and review team performance"
                          icon={Users}
                          actionLabel="Manage Team"
                        />
                      </div>
                    </div>

                    {/* Right Column - Universal Widgets */}
                    <div className="space-y-6">
                      <TasksFeed />
                      <AICopilot />
                    </div>
                  </div>
                </TabsContent>
      </Tabs>

      {/* CaaS Help Section */}
      <Card className="border-blue-200 bg-blue-50/50">
        <Collapsible open={isHelpExpanded} onOpenChange={setIsHelpExpanded}>
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-blue-100/50 transition-colors">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-blue-900">Need help getting started?</h3>
              </div>
              <ChevronDown 
                className={`h-4 w-4 text-blue-600 transition-transform ${
                  isHelpExpanded ? 'rotate-180' : ''
                }`} 
              />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="px-4 pb-4 space-y-3">
              <p className="text-sm text-blue-800">
                Our Compliance-as-a-Service team can help you implement governance, risk, and compliance 
                frameworks tailored to your organization's needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="space-y-2">
                  <h4 className="font-medium text-blue-900">Implementation Services</h4>
                  <ul className="space-y-1 text-blue-700">
                    <li>• Framework implementation & setup</li>
                    <li>• Control mapping & documentation</li>
                    <li>• Policy development & training</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-blue-900">Ongoing Support</h4>
                  <ul className="space-y-1 text-blue-700">
                    <li>• Audit preparation & support</li>
                    <li>• Continuous monitoring setup</li>
                    <li>• Executive reporting & dashboards</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="text-blue-700 border-blue-300 hover:bg-blue-100">
                  Schedule Consultation
                </Button>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-100">
                  Learn More
                </Button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </div>
  );
};

export default Index;