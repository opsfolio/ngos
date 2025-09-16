import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Brain, 
  Shield, 
  Lock, 
  AlertTriangle, 
  CheckCircle, 
  Plus,
  FileText,
  Search,
  Download,
  Eye,
  Edit,
  Trash,
  ArrowLeft,
  HelpCircle,
  HeadphonesIcon,
  ArrowRight,
  ChevronDown,
  Database,
  Zap,
  Settings,
  Users
} from 'lucide-react';

const AssetAIContext = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRisk, setSelectedRisk] = useState('all');
  const [isHelpExpanded, setIsHelpExpanded] = useState(false);

  const promptAssets = [
    {
      id: 'PROMPT-001',
      name: 'Customer Support Assistant',
      type: 'System Prompt',
      model: 'GPT-4',
      status: 'Active',
      riskLevel: 'Medium',
      lastReviewed: '2024-01-15',
      piiRisk: true,
      complianceStatus: 'Compliant',
      owner: 'Support Team'
    },
    {
      id: 'PROMPT-002',
      name: 'Financial Analysis Query',
      type: 'User Prompt Template',
      model: 'Claude-3',
      status: 'Under Review',
      riskLevel: 'High',
      lastReviewed: '2024-01-10',
      piiRisk: true,
      complianceStatus: 'Needs Review',
      owner: 'Finance Team'
    },
    {
      id: 'PROMPT-003',
      name: 'Code Review Assistant',
      type: 'System Prompt',
      model: 'GPT-4',
      status: 'Active',
      riskLevel: 'Low',
      lastReviewed: '2024-01-20',
      piiRisk: false,
      complianceStatus: 'Compliant',
      owner: 'Engineering'
    }
  ];

  const modelAssets = [
    {
      id: 'MODEL-001',
      name: 'Customer Intent Classifier',
      type: 'Fine-tuned Model',
      baseModel: 'BERT-base',
      status: 'Production',
      dataSource: 'Customer Tickets (Anonymized)',
      lastTraining: '2024-01-10',
      accuracyScore: '94.2%',
      riskLevel: 'Low',
      complianceStatus: 'Compliant'
    },
    {
      id: 'MODEL-002',
      name: 'Financial Document Analyzer',
      type: 'Custom Model',
      baseModel: 'FinBERT',
      status: 'Testing',
      dataSource: 'Financial Reports',
      lastTraining: '2024-01-18',
      accuracyScore: '87.5%',
      riskLevel: 'High',
      complianceStatus: 'Under Review'
    }
  ];

  const guardrails = [
    {
      id: 'GUARD-001',
      name: 'PII Detection Filter',
      type: 'Input Guardrail',
      status: 'Active',
      triggersLastWeek: 15,
      accuracy: '98.7%',
      coverage: 'All Models'
    },
    {
      id: 'GUARD-002',
      name: 'Financial Data Classifier',
      type: 'Output Guardrail',
      status: 'Active',
      triggersLastWeek: 3,
      accuracy: '95.2%',
      coverage: 'Finance Models'
    },
    {
      id: 'GUARD-003',
      name: 'Bias Detection Monitor',
      type: 'Continuous Monitor',
      status: 'Active',
      triggersLastWeek: 0,
      accuracy: '92.1%',
      coverage: 'HR Models'
    }
  ];

  const privacyMetrics = [
    { metric: 'PII Incidents Detected', value: '8', trend: 'down', description: 'Last 30 days' },
    { metric: 'Data Retention Compliance', value: '96%', trend: 'up', description: 'Models following retention policies' },
    { metric: 'Consent Violations', value: '2', trend: 'down', description: 'This month' },
    { metric: 'Cross-border Transfers', value: '12', trend: 'stable', description: 'Requiring approval' }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'production':
      case 'compliant': return 'bg-green-500';
      case 'under review':
      case 'testing':
      case 'needs review': return 'bg-yellow-500';
      case 'inactive':
      case 'non-compliant': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredPrompts = promptAssets.filter(prompt => 
    prompt.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedRisk === 'all' || prompt.riskLevel.toLowerCase() === selectedRisk)
  );

  return (
    <main className="flex-1 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/assets">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Assets
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
              <Brain className="h-8 w-8 text-primary" />
              AI Context Engineering
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage prompts, models, guardrails, and AI governance policies
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add AI Asset
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="governance" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="governance">AI Governance</TabsTrigger>
          <TabsTrigger value="privacy">Privacy & Safety</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="caas">CaaS Recommendations</TabsTrigger>
        </TabsList>

        {/* AI Governance Tab */}
        <TabsContent value="governance" className="space-y-6">
          {/* Search and Filters */}
          <div className="flex gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search AI assets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedRisk} onValueChange={setSelectedRisk}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Risk Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Risks</SelectItem>
                <SelectItem value="high">High Risk</SelectItem>
                <SelectItem value="medium">Medium Risk</SelectItem>
                <SelectItem value="low">Low Risk</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Prompt Assets */}
          <Card>
            <CardHeader>
              <CardTitle>Prompt Templates & System Instructions</CardTitle>
              <CardDescription>Active prompts and their governance status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredPrompts.map((prompt) => (
                  <div key={prompt.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{prompt.name}</h4>
                        <Badge variant="outline">{prompt.type}</Badge>
                        <div className={`w-2 h-2 rounded-full ${getRiskColor(prompt.riskLevel)}`} />
                        <span className="text-sm text-muted-foreground">{prompt.riskLevel} Risk</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Model: {prompt.model}</span>
                        <span>Owner: {prompt.owner}</span>
                        <span>Last Review: {prompt.lastReviewed}</span>
                        {prompt.piiRisk && <Badge variant="destructive" className="text-xs">PII Risk</Badge>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(prompt.complianceStatus)}>
                        {prompt.complianceStatus}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Model Assets */}
          <Card>
            <CardHeader>
              <CardTitle>AI Models & Training Data</CardTitle>
              <CardDescription>Custom models and their data lineage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {modelAssets.map((model) => (
                  <div key={model.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{model.name}</h4>
                        <Badge variant="outline">{model.type}</Badge>
                        <div className={`w-2 h-2 rounded-full ${getRiskColor(model.riskLevel)}`} />
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Base: {model.baseModel}</span>
                        <span>Data: {model.dataSource}</span>
                        <span>Accuracy: {model.accuracyScore}</span>
                        <span>Trained: {model.lastTraining}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(model.status)}>
                        {model.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Database className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Guardrails */}
          <Card>
            <CardHeader>
              <CardTitle>AI Guardrails & Safety Measures</CardTitle>
              <CardDescription>Active monitoring and safety controls</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {guardrails.map((guardrail) => (
                  <div key={guardrail.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{guardrail.name}</h4>
                        <Badge variant="outline">{guardrail.type}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Coverage: {guardrail.coverage}</span>
                        <span>Accuracy: {guardrail.accuracy}</span>
                        <span>Triggers (7d): {guardrail.triggersLastWeek}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(guardrail.status)}>
                        {guardrail.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Zap className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Privacy & Safety Tab */}
        <TabsContent value="privacy" className="space-y-6">
          {/* Privacy Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {privacyMetrics.map((metric, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardDescription className="text-xs">{metric.metric}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* PII Detection Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                PII Detection & Data Privacy
              </CardTitle>
              <CardDescription>Personally identifiable information found in AI prompts and outputs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="font-medium text-red-800">High Priority PII Detected</span>
                  </div>
                  <p className="text-sm text-red-700">Financial Analysis Query (PROMPT-002) contains customer SSNs and account numbers</p>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="destructive">Review & Remediate</Button>
                    <Button size="sm" variant="outline">Mark as False Positive</Button>
                  </div>
                </div>
                
                <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <span className="font-medium text-yellow-800">Medium Priority PII Detected</span>
                  </div>
                  <p className="text-sm text-yellow-700">Customer Support Assistant potentially exposing email addresses in responses</p>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="secondary">Schedule Review</Button>
                    <Button size="sm" variant="outline">View Details</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Subject Rights */}
          <Card>
            <CardHeader>
              <CardTitle>Data Subject Rights & AI</CardTitle>
              <CardDescription>GDPR/CCPA compliance for AI systems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">7</div>
                  <div className="text-sm text-muted-foreground">Right to Explanation Requests</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-green-600">23</div>
                  <div className="text-sm text-muted-foreground">Data Deletion Requests</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">12</div>
                  <div className="text-sm text-muted-foreground">Model Opt-out Requests</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Compliance Tab */}
        <TabsContent value="compliance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Compliance Framework</CardTitle>
              <CardDescription>Regulatory compliance status for AI systems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">EU AI Act Compliance</h4>
                    <div className="text-2xl font-bold text-green-600 mb-1">89%</div>
                    <p className="text-sm text-muted-foreground">High-risk systems assessed</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">GDPR AI Compliance</h4>
                    <div className="text-2xl font-bold text-yellow-600 mb-1">76%</div>
                    <p className="text-sm text-muted-foreground">Data processing documented</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Algorithmic Accountability</h4>
                    <div className="text-2xl font-bold text-blue-600 mb-1">92%</div>
                    <p className="text-sm text-muted-foreground">Models with audit trails</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Regulatory Requirements</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span>Algorithmic Impact Assessments</span>
                      <Badge className="bg-green-500">Compliant</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span>Bias Testing Documentation</span>
                      <Badge className="bg-yellow-500">In Progress</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span>Model Explainability Reports</span>
                      <Badge className="bg-green-500">Compliant</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span>Third-party Model Audits</span>
                      <Badge className="bg-red-500">Overdue</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* CaaS Recommendations Tab */}
        <TabsContent value="caas" className="space-y-6">
          <Card className="border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI Governance as a Service
              </CardTitle>
              <CardDescription>Expert assistance for AI safety, compliance, and governance</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Our specialized AI Governance team provides comprehensive oversight for your AI/ML operations, 
                  ensuring compliance with emerging regulations, implementing robust safety measures, and 
                  establishing governance frameworks for responsible AI deployment.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background/50 rounded-lg p-4">
                    <h4 className="font-medium mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      AI Safety & Risk Management
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Automated PII detection and remediation</li>
                      <li>• Bias testing and fairness assessments</li>
                      <li>• Prompt injection vulnerability scanning</li>
                      <li>• Model hallucination monitoring</li>
                      <li>• Safety guardrail implementation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-background/50 rounded-lg p-4">
                    <h4 className="font-medium mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Regulatory Compliance
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• EU AI Act compliance assessment</li>
                      <li>• GDPR data processing documentation</li>
                      <li>• Algorithmic accountability audits</li>
                      <li>• Third-party model risk assessments</li>
                      <li>• Privacy impact assessments for AI</li>
                    </ul>
                  </div>

                  <div className="bg-background/50 rounded-lg p-4">
                    <h4 className="font-medium mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Governance Framework
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• AI ethics committee setup</li>
                      <li>• Model lifecycle governance</li>
                      <li>• Data lineage and provenance tracking</li>
                      <li>• Responsible AI policy development</li>
                      <li>• Cross-functional AI governance training</li>
                    </ul>
                  </div>

                  <div className="bg-background/50 rounded-lg p-4">
                    <h4 className="font-medium mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Technical Implementation
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• MLOps pipeline security</li>
                      <li>• Model versioning and rollback</li>
                      <li>• Automated compliance reporting</li>
                      <li>• Real-time safety monitoring</li>
                      <li>• Integration with existing workflows</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1">
                    <HeadphonesIcon className="w-4 h-4 mr-2" />
                    Talk to our AI governance experts
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <FileText className="w-4 h-4 mr-2" />
                    Download AI governance framework
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <div className="pt-4 border-t border-primary/20 text-center">
                  <p className="text-sm text-muted-foreground">
                    🤖 <strong>95% reduction</strong> in AI compliance issues achieved by our CaaS clients
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Additional Help Section */}
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
                    <CardTitle className="text-base">Need help with AI governance?</CardTitle>
                    <CardDescription className="text-sm">Get expert assistance with AI safety, compliance, and governance</CardDescription>
                  </div>
                </div>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isHelpExpanded ? 'rotate-180' : ''}`} />
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <CardContent className="pt-0 pb-6">
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI governance is complex and evolving rapidly. Our team of AI safety experts, compliance professionals, 
                  and technical specialists can help you navigate the regulatory landscape and implement robust governance frameworks.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1">
                    <Users className="w-4 h-4 mr-2" />
                    Schedule AI governance consultation
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <FileText className="w-4 h-4 mr-2" />
                    AI governance best practices guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </main>
  );
};

export default AssetAIContext;