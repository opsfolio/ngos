import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Scale, 
  Shield, 
  FileText, 
  AlertTriangle, 
  DollarSign, 
  Calendar, 
  TrendingUp, 
  Users, 
  Building2,
  Clock,
  CheckCircle,
  XCircle,
  Bot,
  Lightbulb,
  ArrowRight,
  BookOpen,
  Gavel,
  CreditCard,
  MapPin
} from 'lucide-react';

export default function LegalInsurance() {
  const [activeTab, setActiveTab] = useState('legal');

  const legalMetrics = [
    { title: 'Active Contracts', value: '247', trend: '+12%', status: 'positive' },
    { title: 'Compliance Issues', value: '3', trend: '-40%', status: 'positive' },
    { title: 'Legal Reviews Pending', value: '18', trend: '+5%', status: 'neutral' },
    { title: 'Risk Exposure (Legal)', value: '$2.4M', trend: '-15%', status: 'positive' }
  ];

  const insuranceMetrics = [
    { title: 'Active Policies', value: '34', trend: '+2%', status: 'positive' },
    { title: 'Claims YTD', value: '7', trend: '-25%', status: 'positive' },
    { title: 'Coverage Gaps', value: '2', trend: '0%', status: 'warning' },
    { title: 'Premium Savings', value: '$450K', trend: '+8%', status: 'positive' }
  ];

  const recentLegalItems = [
    { id: 1, type: 'Contract', title: 'Vendor Agreement - CloudTech Solutions', status: 'Review Required', priority: 'High', dueDate: '2024-01-15' },
    { id: 2, type: 'Compliance', title: 'GDPR Data Processing Agreement Update', status: 'In Progress', priority: 'Medium', dueDate: '2024-01-20' },
    { id: 3, type: 'Litigation', title: 'Employment Dispute - Case #2024-001', status: 'Active', priority: 'High', dueDate: '2024-01-25' },
    { id: 4, type: 'Regulatory', title: 'SEC Filing Requirements Review', status: 'Pending', priority: 'Medium', dueDate: '2024-01-30' }
  ];

  const insurancePolicies = [
    { id: 1, type: 'Cyber Liability', provider: 'CyberGuard Insurance', coverage: '$50M', premium: '$245K', expiry: '2024-12-31', status: 'Active' },
    { id: 2, type: 'D&O Insurance', provider: 'Executive Shield Co.', coverage: '$25M', premium: '$180K', expiry: '2024-06-30', status: 'Renewal Due' },
    { id: 3, type: 'General Liability', provider: 'SafeGuard General', coverage: '$10M', premium: '$95K', expiry: '2024-09-15', status: 'Active' },
    { id: 4, type: 'Professional Indemnity', provider: 'ProCover Ltd.', coverage: '$15M', premium: '$120K', expiry: '2024-11-20', status: 'Active' }
  ];

  const caasRecommendations = [
    {
      category: 'Legal Operations',
      title: 'Contract Lifecycle Management Automation',
      description: 'Implement AI-powered contract review and approval workflows to reduce legal review time by 60%.',
      impact: 'High',
      effort: 'Medium',
      timeframe: '3-6 months'
    },
    {
      category: 'Compliance Monitoring',
      title: 'Real-time Regulatory Change Tracking',
      description: 'Deploy automated regulatory monitoring to track changes across 15+ jurisdictions and frameworks.',
      impact: 'High',
      effort: 'Low',
      timeframe: '1-2 months'
    },
    {
      category: 'Insurance Optimization',
      title: 'Dynamic Risk-Based Insurance Coverage',
      description: 'Implement real-time risk assessment to optimize insurance coverage and reduce premiums by 15-20%.',
      impact: 'Medium',
      effort: 'High',
      timeframe: '6-9 months'
    },
    {
      category: 'Legal Analytics',
      title: 'Predictive Legal Risk Modeling',
      description: 'Use ML algorithms to predict and prevent legal disputes before they escalate.',
      impact: 'High',
      effort: 'High',
      timeframe: '9-12 months'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'review required': case 'renewal due': return 'bg-red-100 text-red-800';
      case 'in progress': case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="px-6 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Legal & Insurance</h1>
          <p className="text-muted-foreground mt-2">
            Comprehensive legal operations and insurance management for compliance teams
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
          <Button>
            <Bot className="h-4 w-4 mr-2" />
            AI Assistant
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="legal">Legal Operations</TabsTrigger>
          <TabsTrigger value="insurance">Insurance Management</TabsTrigger>
          <TabsTrigger value="compliance">Risk & Compliance</TabsTrigger>
          <TabsTrigger value="caas">CaaS Recommendations</TabsTrigger>
        </TabsList>

        {/* Legal Operations Tab */}
        <TabsContent value="legal" className="space-y-6">
          {/* Legal Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {legalMetrics.map((metric, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                  <Scale className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className={`text-xs ${metric.status === 'positive' ? 'text-green-600' : metric.status === 'warning' ? 'text-yellow-600' : 'text-muted-foreground'}`}>
                    {metric.trend} from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Legal Items */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gavel className="h-5 w-5" />
                Recent Legal Items
              </CardTitle>
              <CardDescription>
                Latest contracts, compliance issues, and legal matters requiring attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentLegalItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-muted rounded-lg">
                        {item.type === 'Contract' && <FileText className="h-4 w-4" />}
                        {item.type === 'Compliance' && <Shield className="h-4 w-4" />}
                        {item.type === 'Litigation' && <AlertTriangle className="h-4 w-4" />}
                        {item.type === 'Regulatory' && <Building2 className="h-4 w-4" />}
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">{item.type}</Badge>
                          <Badge className={`text-xs ${getStatusColor(item.status)}`}>{item.status}</Badge>
                          <Badge className={`text-xs ${getPriorityColor(item.priority)}`}>{item.priority}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Due: {item.dueDate}</p>
                      <Button variant="ghost" size="sm">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Insurance Management Tab */}
        <TabsContent value="insurance" className="space-y-6">
          {/* Insurance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insuranceMetrics.map((metric, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                  <Shield className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className={`text-xs ${metric.status === 'positive' ? 'text-green-600' : metric.status === 'warning' ? 'text-yellow-600' : 'text-muted-foreground'}`}>
                    {metric.trend} from last year
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Insurance Policies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Insurance Portfolio
              </CardTitle>
              <CardDescription>
                Current insurance policies and coverage overview
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {insurancePolicies.map((policy) => (
                  <div key={policy.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-muted rounded-lg">
                        <Shield className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">{policy.type}</h4>
                        <p className="text-sm text-muted-foreground">{policy.provider}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={`text-xs ${getStatusColor(policy.status)}`}>{policy.status}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{policy.coverage} coverage</p>
                      <p className="text-sm text-muted-foreground">{policy.premium} annual premium</p>
                      <p className="text-xs text-muted-foreground">Expires: {policy.expiry}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Risk & Compliance Tab */}
        <TabsContent value="compliance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Regulatory Compliance Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Regulatory Compliance Status
                </CardTitle>
                <CardDescription>
                  Current compliance posture across key regulations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { framework: 'SOX Compliance', completion: 92, status: 'On Track' },
                  { framework: 'GDPR Compliance', completion: 88, status: 'Review Needed' },
                  { framework: 'SOC 2 Type II', completion: 95, status: 'Audit Ready' },
                  { framework: 'CCPA Compliance', completion: 85, status: 'In Progress' }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{item.framework}</span>
                      <Badge className={`text-xs ${item.status === 'Audit Ready' ? 'bg-green-100 text-green-800' : item.status === 'Review Needed' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {item.status}
                      </Badge>
                    </div>
                    <Progress value={item.completion} className="h-2" />
                    <p className="text-xs text-muted-foreground">{item.completion}% complete</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Legal Risk Heatmap */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Legal Risk Heatmap
                </CardTitle>
                <CardDescription>
                  Risk exposure across different legal areas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { area: 'Contract Disputes', risk: 'Medium', exposure: '$1.2M', likelihood: 'Low' },
                  { area: 'Employment Claims', risk: 'High', exposure: '$800K', likelihood: 'Medium' },
                  { area: 'Regulatory Fines', risk: 'Low', exposure: '$2.1M', likelihood: 'Very Low' },
                  { area: 'IP Infringement', risk: 'Medium', exposure: '$500K', likelihood: 'Low' },
                  { area: 'Cyber Liability', risk: 'High', exposure: '$5.0M', likelihood: 'Medium' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium text-sm">{item.area}</h4>
                      <p className="text-xs text-muted-foreground">Likelihood: {item.likelihood}</p>
                    </div>
                    <div className="text-right">
                      <Badge className={`text-xs ${item.risk === 'High' ? 'bg-red-100 text-red-800' : item.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                        {item.risk}
                      </Badge>
                      <p className="text-xs font-medium mt-1">{item.exposure}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* CaaS Recommendations Tab */}
        <TabsContent value="caas" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                Compliance as a Service (CaaS) Recommendations
              </CardTitle>
              <CardDescription>
                AI-powered recommendations to enhance your legal and insurance operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {caasRecommendations.map((rec, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">{rec.category}</Badge>
                        <Badge className={`text-xs ${rec.impact === 'High' ? 'bg-red-100 text-red-800' : rec.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                          {rec.impact} Impact
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{rec.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{rec.description}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {rec.timeframe}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          {rec.effort} effort
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Learn More</Button>
                        <Button size="sm">Implement</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Assistant Integration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                AI-Powered Insights
              </CardTitle>
              <CardDescription>
                Intelligent automation and optimization suggestions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-medium mb-1">Contract Analysis</h4>
                  <p className="text-xs text-muted-foreground">AI review of 247 contracts identified 12 risk clauses requiring attention</p>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <AlertTriangle className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <h4 className="font-medium mb-1">Premium Optimization</h4>
                  <p className="text-xs text-muted-foreground">Potential savings of $450K identified through risk profile optimization</p>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-medium mb-1">Regulatory Monitoring</h4>
                  <p className="text-xs text-muted-foreground">15 regulatory changes detected this month requiring policy updates</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}