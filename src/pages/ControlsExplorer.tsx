import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Shield, 
  Search, 
  Filter, 
  CheckCircle,
  AlertCircle,
  Clock,
  Book,
  Target,
  Users,
  Settings,
  ChevronRight,
  Home,
  FileText,
  Database,
  CheckSquare,
  XCircle,
  MinusCircle,
  HelpCircle,
  HeadphonesIcon,
  ArrowRight,
  ChevronDown,
  Bot,
  Brain,
  Layers,
  Workflow,
  ShieldCheck,
  Eye,
  Zap,
  GitBranch,
  BarChart3,
  Lock
} from 'lucide-react';

const ControlsExplorer = () => {
  const [activeTab, setActiveTab] = useState('regimes');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegimes, setSelectedRegimes] = useState<string[]>([]);
  const [isHelpExpanded, setIsHelpExpanded] = useState(false);
  const [selectedFramework, setSelectedFramework] = useState('all');
  const [selectedAIAssetType, setSelectedAIAssetType] = useState('all');
  const [selectedLifecycleStage, setSelectedLifecycleStage] = useState('all');
  const [selectedRiskTier, setSelectedRiskTier] = useState('all');

  const complianceRegimes = [
    {
      id: 'sox',
      name: 'Sarbanes-Oxley (SOX)',
      description: 'Financial reporting and internal controls for public companies',
      controlsCount: 24,
      status: 'Active',
      applicability: 'Public Companies',
      selected: false,
      complianceStatus: {
        controlsWithPolicies: 18,
        controlsWithEvidence: 12,
        overallCompliance: 75
      }
    },
    {
      id: 'iso27001',
      name: 'ISO 27001',
      description: 'Information security management systems standard',
      controlsCount: 114,
      status: 'Active',
      applicability: 'All Organizations',
      selected: false,
      complianceStatus: {
        controlsWithPolicies: 89,
        controlsWithEvidence: 67,
        overallCompliance: 65
      }
    },
    {
      id: 'nist',
      name: 'NIST Cybersecurity Framework',
      description: 'Comprehensive cybersecurity guidance framework',
      controlsCount: 108,
      status: 'Active',
      applicability: 'All Organizations',
      selected: false,
      complianceStatus: {
        controlsWithPolicies: 92,
        controlsWithEvidence: 78,
        overallCompliance: 80
      }
    },
    {
      id: 'pci',
      name: 'PCI DSS',
      description: 'Payment card industry data security standard',
      controlsCount: 78,
      status: 'Active',
      applicability: 'Payment Processors',
      selected: false,
      complianceStatus: {
        controlsWithPolicies: 65,
        controlsWithEvidence: 45,
        overallCompliance: 68
      }
    },
    {
      id: 'hipaa',
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      controlsCount: 42,
      status: 'Active',
      applicability: 'Healthcare Organizations',
      selected: false,
      complianceStatus: {
        controlsWithPolicies: 38,
        controlsWithEvidence: 32,
        overallCompliance: 85
      }
    },
    {
      id: 'gdpr',
      name: 'GDPR',
      description: 'General Data Protection Regulation',
      controlsCount: 36,
      status: 'Active',
      applicability: 'EU Data Processing',
      selected: false,
      complianceStatus: {
        controlsWithPolicies: 28,
        controlsWithEvidence: 22,
        overallCompliance: 72
      }
    },
    {
      id: 'iso42001',
      name: 'ISO/IEC 42001',
      description: 'Artificial Intelligence Management Systems',
      controlsCount: 64,
      status: 'Active',
      applicability: 'AI-Enabled Organizations',
      selected: false,
      complianceStatus: {
        controlsWithPolicies: 45,
        controlsWithEvidence: 32,
        overallCompliance: 68
      }
    },
    {
      id: 'nistai',
      name: 'NIST AI RMF',
      description: 'AI Risk Management Framework',
      controlsCount: 52,
      status: 'Active',
      applicability: 'AI Development & Deployment',
      selected: false,
      complianceStatus: {
        controlsWithPolicies: 38,
        controlsWithEvidence: 25,
        overallCompliance: 62
      }
    },
    {
      id: 'euai',
      name: 'EU AI Act',
      description: 'European Union Artificial Intelligence Act',
      controlsCount: 48,
      status: 'Active',
      applicability: 'EU AI Systems',
      selected: false,
      complianceStatus: {
        controlsWithPolicies: 32,
        controlsWithEvidence: 18,
        overallCompliance: 55
      }
    },
    {
      id: 'iso23894',
      name: 'ISO/IEC 23894',
      description: 'AI Risk Management',
      controlsCount: 42,
      status: 'Active',
      applicability: 'AI Risk Management',
      selected: false,
      complianceStatus: {
        controlsWithPolicies: 29,
        controlsWithEvidence: 20,
        overallCompliance: 60
      }
    }
  ];

  const controlCategories = [
    { name: 'Access Control', count: 45, icon: Shield },
    { name: 'Data Protection', count: 38, icon: Target },
    { name: 'Incident Response', count: 22, icon: AlertCircle },
    { name: 'Risk Management', count: 31, icon: Settings },
    { name: 'Monitoring & Logging', count: 28, icon: Clock },
    { name: 'Training & Awareness', count: 19, icon: Users },
    { name: 'AI Context Engineering', count: 24, icon: Bot },
    { name: 'Model Governance', count: 18, icon: Brain },
    { name: 'AI Safety & Ethics', count: 16, icon: ShieldCheck },
    { name: 'Algorithmic Transparency', count: 12, icon: Eye },
    { name: 'AI Lifecycle Management', count: 20, icon: Workflow },
    { name: 'Bias & Fairness', count: 14, icon: BarChart3 }
  ];

  const sampleControls = [
    {
      id: 'AC-1',
      title: 'Access Control Policy and Procedures',
      framework: 'NIST',
      category: 'Access Control',
      priority: 'High',
      description: 'Develop, document, and disseminate access control policy and procedures',
      status: 'Not Implemented',
      effort: 'Medium',
      complianceStatus: {
        hasPolicies: false,
        hasEvidence: false,
        policiesCount: 0,
        evidenceCount: 0,
        lastReviewed: null
      }
    },
    {
      id: 'ISO-A.9.1.1',
      title: 'Access Control Policy',
      framework: 'ISO 27001',
      category: 'Access Control',
      priority: 'High',
      description: 'An access control policy shall be established and reviewed',
      status: 'In Progress',
      effort: 'Low',
      complianceStatus: {
        hasPolicies: true,
        hasEvidence: false,
        policiesCount: 2,
        evidenceCount: 0,
        lastReviewed: '2024-01-15'
      }
    },
    {
      id: 'PCI-8.1',
      title: 'User Identification for System Access',
      framework: 'PCI DSS',
      category: 'Access Control',
      priority: 'Critical',
      description: 'Define and implement policies for proper user identification',
      status: 'Implemented',
      effort: 'High',
      complianceStatus: {
        hasPolicies: true,
        hasEvidence: true,
        policiesCount: 3,
        evidenceCount: 5,
        lastReviewed: '2024-02-28'
      }
    },
    {
      id: 'ISO42001-7.2.1',
      title: 'AI System Context Definition',
      framework: 'ISO/IEC 42001',
      category: 'AI Context Engineering',
      priority: 'Critical',
      description: 'Define and maintain comprehensive context for AI system operation including input specifications and output requirements',
      status: 'In Progress',
      effort: 'High',
      aiAssetType: 'Context Engineering',
      lifecycleStage: 'Design',
      riskTier: 'High',
      complianceStatus: {
        hasPolicies: true,
        hasEvidence: false,
        policiesCount: 2,
        evidenceCount: 0,
        lastReviewed: '2024-03-01'
      },
      aiArtifacts: {
        promptRegistry: 3,
        evaluationResults: 0,
        guardrailPolicies: 1,
        modelVersions: 2
      }
    },
    {
      id: 'NIST-AI-GOVERN-1.1',
      title: 'AI Governance and Oversight',
      framework: 'NIST AI RMF',
      category: 'Model Governance',
      priority: 'High',
      description: 'Establish organizational governance structure for AI system development and deployment',
      status: 'Not Implemented',
      effort: 'Medium',
      aiAssetType: 'Governance',
      lifecycleStage: 'Planning',
      riskTier: 'Medium',
      complianceStatus: {
        hasPolicies: false,
        hasEvidence: false,
        policiesCount: 0,
        evidenceCount: 0,
        lastReviewed: null
      },
      aiArtifacts: {
        promptRegistry: 0,
        evaluationResults: 0,
        guardrailPolicies: 0,
        modelVersions: 0
      }
    },
    {
      id: 'EU-AI-Art15',
      title: 'Accuracy, Robustness and Cybersecurity',
      framework: 'EU AI Act',
      category: 'AI Safety & Ethics',
      priority: 'Critical',
      description: 'Ensure AI systems achieve appropriate levels of accuracy, robustness and cybersecurity',
      status: 'Implemented',
      effort: 'High',
      aiAssetType: 'Safety & Security',
      lifecycleStage: 'Validation',
      riskTier: 'High',
      complianceStatus: {
        hasPolicies: true,
        hasEvidence: true,
        policiesCount: 4,
        evidenceCount: 8,
        lastReviewed: '2024-02-15'
      },
      aiArtifacts: {
        promptRegistry: 12,
        evaluationResults: 15,
        guardrailPolicies: 6,
        modelVersions: 3
      }
    },
    {
      id: 'ISO23894-6.3',
      title: 'AI Risk Assessment and Treatment',
      framework: 'ISO/IEC 23894',
      category: 'Risk Management',
      priority: 'High',
      description: 'Conduct systematic risk assessment for AI systems and implement appropriate risk treatment measures',
      status: 'In Progress',
      effort: 'Medium',
      aiAssetType: 'Risk Management',
      lifecycleStage: 'Assessment',
      riskTier: 'Medium',
      complianceStatus: {
        hasPolicies: true,
        hasEvidence: false,
        policiesCount: 3,
        evidenceCount: 2,
        lastReviewed: '2024-01-30'
      },
      aiArtifacts: {
        promptRegistry: 5,
        evaluationResults: 8,
        guardrailPolicies: 2,
        modelVersions: 1
      }
    }
  ];

  const handleRegimeToggle = (regimeId: string) => {
    setSelectedRegimes(prev => 
      prev.includes(regimeId) 
        ? prev.filter(id => id !== regimeId)
        : [...prev, regimeId]
    );
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'implemented': return 'bg-green-100 text-green-800';
      case 'in progress': return 'bg-blue-100 text-blue-800';
      case 'not implemented': return 'bg-gray-100 text-gray-800';
      case 'active': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getComplianceStatusIcon = (hasPolicies: boolean, hasEvidence: boolean) => {
    if (hasPolicies && hasEvidence) {
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    } else if (hasPolicies || hasEvidence) {
      return <MinusCircle className="w-4 h-4 text-yellow-600" />;
    } else {
      return <XCircle className="w-4 h-4 text-red-600" />;
    }
  };

  const getComplianceStatusColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold text-foreground">Controls Library</h1>
                  <p className="text-lg text-muted-foreground">
                    Discover and understand compliance controls across different regulatory frameworks. 
                    Select your applicable regimes to identify your control responsibilities.
                  </p>
                </div>

              {/* Search and Filter */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search controls, frameworks, or categories..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Filter className="w-4 h-4" />
                    <span>Advanced Filters</span>
                  </Button>
                </div>
                
                {/* AI-Specific Filters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Framework</label>
                    <select 
                      value={selectedFramework} 
                      onChange={(e) => setSelectedFramework(e.target.value)}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                    >
                      <option value="all">All Frameworks</option>
                      <option value="ISO/IEC 42001">ISO/IEC 42001</option>
                      <option value="NIST AI RMF">NIST AI RMF</option>
                      <option value="EU AI Act">EU AI Act</option>
                      <option value="ISO/IEC 23894">ISO/IEC 23894</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">AI Asset Type</label>
                    <select 
                      value={selectedAIAssetType} 
                      onChange={(e) => setSelectedAIAssetType(e.target.value)}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                    >
                      <option value="all">All Asset Types</option>
                      <option value="Context Engineering">Context Engineering</option>
                      <option value="Model Governance">Model Governance</option>
                      <option value="Safety & Security">Safety & Security</option>
                      <option value="Risk Management">Risk Management</option>
                      <option value="Governance">Governance</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Lifecycle Stage</label>
                    <select 
                      value={selectedLifecycleStage} 
                      onChange={(e) => setSelectedLifecycleStage(e.target.value)}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                    >
                      <option value="all">All Stages</option>
                      <option value="Planning">Planning</option>
                      <option value="Design">Design</option>
                      <option value="Development">Development</option>
                      <option value="Validation">Validation</option>
                      <option value="Deployment">Deployment</option>
                      <option value="Monitoring">Monitoring</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Risk Tier</label>
                    <select 
                      value={selectedRiskTier} 
                      onChange={(e) => setSelectedRiskTier(e.target.value)}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                    >
                      <option value="all">All Risk Tiers</option>
                      <option value="High">High Risk</option>
                      <option value="Medium">Medium Risk</option>
                      <option value="Low">Low Risk</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Tabs Navigation */}
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="regimes" className="flex items-center space-x-2">
                    <Book className="w-4 h-4" />
                    <span>Compliance Regimes</span>
                  </TabsTrigger>
                  <TabsTrigger value="controls" className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Control Library</span>
                  </TabsTrigger>
                  <TabsTrigger value="mapping" className="flex items-center space-x-2">
                    <Target className="w-4 h-4" />
                    <span>Control Mapping</span>
                  </TabsTrigger>
                  <TabsTrigger value="ai-crosswalk" className="flex items-center space-x-2">
                    <Bot className="w-4 h-4" />
                    <span>AI Crosswalk</span>
                  </TabsTrigger>
                </TabsList>

                {/* Compliance Regimes Tab */}
                <TabsContent value="regimes" className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">Available Compliance Regimes</h2>
                    <div className="text-sm text-muted-foreground">
                      {selectedRegimes.length} selected
                    </div>
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {complianceRegimes.map((regime) => (
                      <Card key={regime.id} className="bg-card/50 backdrop-blur-sm cursor-pointer hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                              <Checkbox
                                checked={selectedRegimes.includes(regime.id)}
                                onCheckedChange={() => handleRegimeToggle(regime.id)}
                              />
                              <div>
                                <CardTitle className="text-lg">{regime.name}</CardTitle>
                                <CardDescription className="mt-1">{regime.description}</CardDescription>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Controls</span>
                              <Badge variant="secondary">{regime.controlsCount}</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Status</span>
                              <Badge className={getStatusColor(regime.status)}>{regime.status}</Badge>
                            </div>
                            
                            {/* Compliance Status Section */}
                            <div className="border-t pt-3 space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Overall Compliance</span>
                                <span className={`text-sm font-semibold ${getComplianceStatusColor(regime.complianceStatus.overallCompliance)}`}>
                                  {regime.complianceStatus.overallCompliance}%
                                </span>
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-1">
                                  <FileText className="w-3 h-3 text-muted-foreground" />
                                  <span className="text-xs text-muted-foreground">Policies</span>
                                </div>
                                <span className="text-xs">
                                  {regime.complianceStatus.controlsWithPolicies}/{regime.controlsCount}
                                </span>
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-1">
                                  <Database className="w-3 h-3 text-muted-foreground" />
                                  <span className="text-xs text-muted-foreground">Evidence</span>
                                </div>
                                <span className="text-xs">
                                  {regime.complianceStatus.controlsWithEvidence}/{regime.controlsCount}
                                </span>
                              </div>
                            </div>
                            
                            <div className="text-sm">
                              <span className="text-muted-foreground">Applies to: </span>
                              <span className="font-medium">{regime.applicability}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Control Library Tab */}
                <TabsContent value="controls" className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">Control Library</h2>
                    <Button variant="outline">Export Selected</Button>
                  </div>

                  {/* Control Categories */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                    {controlCategories.map((category, index) => (
                      <Card key={index} className="bg-card/50 backdrop-blur-sm hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-4 text-center">
                          <category.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                          <h3 className="font-medium text-sm">{category.name}</h3>
                          <p className="text-xs text-muted-foreground">{category.count} controls</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  {/* Quick Link to AI Context Assets */}
                  <div className="mb-8">
                    <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Bot className="w-6 h-6 text-primary" />
                            <div>
                              <h3 className="font-semibold">AI Context Engineering Assets</h3>
                              <p className="text-sm text-muted-foreground">Manage prompts, models, and orchestration scripts</p>
                            </div>
                          </div>
                          <Button variant="outline" onClick={() => window.location.href = '/assets/ai-context'}>
                            View AI Assets
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Controls List */}
                  <div className="space-y-4">
                    {sampleControls.map((control) => (
                      <Card key={control.id} className="bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <Badge variant="outline">{control.id}</Badge>
                                <Badge variant="secondary">{control.framework}</Badge>
                                {getComplianceStatusIcon(control.complianceStatus.hasPolicies, control.complianceStatus.hasEvidence)}
                              </div>
                              <h3 className="text-lg font-semibold mb-2">{control.title}</h3>
                              <p className="text-muted-foreground">{control.description}</p>
                            </div>
                            <div className="flex flex-col items-end space-y-2">
                              <Badge className={getPriorityColor(control.priority)}>
                                {control.priority}
                              </Badge>
                              <Badge className={getStatusColor(control.status)}>
                                {control.status}
                              </Badge>
                            </div>
                          </div>
                          
                          {/* Compliance Status Details */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-3 bg-muted/30 rounded-lg">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <FileText className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm">Policies</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                {control.complianceStatus.hasPolicies ? (
                                  <CheckSquare className="w-4 h-4 text-green-600" />
                                ) : (
                                  <XCircle className="w-4 h-4 text-red-600" />
                                )}
                                <span className="text-sm font-medium">{control.complianceStatus.policiesCount}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Database className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm">Evidence</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                {control.complianceStatus.hasEvidence ? (
                                  <CheckSquare className="w-4 h-4 text-green-600" />
                                ) : (
                                  <XCircle className="w-4 h-4 text-red-600" />
                                )}
                                <span className="text-sm font-medium">{control.complianceStatus.evidenceCount}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">Last Reviewed</span>
                              <span className="text-sm">
                                {control.complianceStatus.lastReviewed || 'Never'}
                              </span>
                            </div>
                          </div>
                          
                          {/* AI Artifacts Section (for AI-related controls) */}
                          {(control as any).aiArtifacts && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <Bot className="w-4 h-4 text-primary" />
                                  <span className="text-sm">Prompts</span>
                                </div>
                                <span className="text-sm font-medium">{(control as any).aiArtifacts.promptRegistry}</span>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <BarChart3 className="w-4 h-4 text-primary" />
                                  <span className="text-sm">Evals</span>
                                </div>
                                <span className="text-sm font-medium">{(control as any).aiArtifacts.evaluationResults}</span>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <ShieldCheck className="w-4 h-4 text-primary" />
                                  <span className="text-sm">Guardrails</span>
                                </div>
                                <span className="text-sm font-medium">{(control as any).aiArtifacts.guardrailPolicies}</span>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <GitBranch className="w-4 h-4 text-primary" />
                                  <span className="text-sm">Models</span>
                                </div>
                                <span className="text-sm font-medium">{(control as any).aiArtifacts.modelVersions}</span>
                              </div>
                            </div>
                          )}
                          
                          <div className="flex justify-between items-center text-sm">
                            <div className="flex items-center space-x-4">
                              <span className="text-muted-foreground">Category: {control.category}</span>
                              {(control as any).aiAssetType && (
                                <span className="text-muted-foreground">AI Type: {(control as any).aiAssetType}</span>
                              )}
                              {(control as any).lifecycleStage && (
                                <span className="text-muted-foreground">Stage: {(control as any).lifecycleStage}</span>
                              )}
                              {(control as any).riskTier && (
                                <Badge variant="outline" className={
                                  (control as any).riskTier === 'High' ? 'border-red-300 text-red-700' :
                                  (control as any).riskTier === 'Medium' ? 'border-yellow-300 text-yellow-700' :
                                  'border-green-300 text-green-700'
                                }>
                                  {(control as any).riskTier} Risk
                                </Badge>
                              )}
                            </div>
                            <span className="text-muted-foreground">Effort: {control.effort}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Control Mapping Tab */}
                <TabsContent value="mapping" className="space-y-6">
                  <div className="text-center py-12">
                    <Target className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">Control Mapping</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Select compliance regimes from the first tab to see how controls map across different frameworks 
                      and identify overlapping requirements.
                    </p>
                    {selectedRegimes.length > 0 && (
                      <div className="mt-6">
                        <p className="text-sm text-muted-foreground mb-4">
                          Currently analyzing: {selectedRegimes.length} regime(s)
                        </p>
                        <Button>Generate Control Mapping</Button>
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* AI Crosswalk Tab */}
                <TabsContent value="ai-crosswalk" className="space-y-6">
                  <div className="text-center py-12">
                    <Bot className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">AI Framework Crosswalk</h3>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                      Compare AI governance controls across ISO 42001, NIST AI RMF, EU AI Act, and ISO 23894. 
                      Identify overlapping requirements and control harmonization opportunities.
                    </p>
                    <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <Brain className="w-8 h-8 text-primary" />
                            <h4 className="text-lg font-semibold">AI Governance Mapping</h4>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            Cross-reference governance controls across AI-specific frameworks
                          </p>
                          <Button className="w-full">
                            <Layers className="w-4 h-4 mr-2" />
                            Generate AI Crosswalk
                          </Button>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <Workflow className="w-8 h-8 text-secondary" />
                            <h4 className="text-lg font-semibold">Context Engineering Controls</h4>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            Map prompt engineering and context management requirements
                          </p>
                          <Button variant="secondary" className="w-full">
                            <Zap className="w-4 h-4 mr-2" />
                            View Context Controls
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
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
                        <CardTitle className="text-base">Need help with compliance controls?</CardTitle>
                        <CardDescription className="text-sm">Get expert assistance with control implementation and mapping</CardDescription>
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
                        Our white-glove Compliance-as-a-Service (CaaS) team provides expert assistance with control selection, 
                        implementation guidance, framework mapping, and compliance gap analysis. Let our experts help you navigate 
                        complex regulatory requirements, including AI governance, so you can focus on your business.
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-background/50 rounded-lg p-4">
                          <h4 className="font-medium mb-3 flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                            Control Selection & Implementation
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Framework-specific control identification</li>
                            <li>• Control implementation roadmaps</li>
                            <li>• Policy and procedure development</li>
                            <li>• Evidence collection strategies</li>
                          </ul>
                        </div>
                        
                        <div className="bg-background/50 rounded-lg p-4">
                          <h4 className="font-medium mb-3 flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                            Framework Mapping & Analysis
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Cross-framework control mapping</li>
                            <li>• Gap analysis and remediation plans</li>
                            <li>• Compliance readiness assessments</li>
                            <li>• Ongoing monitoring and maintenance</li>
                          </ul>
                        </div>
                        
                        <div className="bg-background/50 rounded-lg p-4">
                          <h4 className="font-medium mb-3 flex items-center">
                            <Bot className="w-4 h-4 text-primary mr-2" />
                            AI Governance Expertise
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• ISO 42001 & NIST AI RMF implementation</li>
                            <li>• AI context engineering controls</li>
                            <li>• Model governance frameworks</li>
                            <li>• AI risk assessment & mitigation</li>
                          </ul>
                        </div>
                      </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="flex-1">
                        <HeadphonesIcon className="w-4 h-4 mr-2" />
                        Talk to our compliance experts
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <FileText className="w-4 h-4 mr-2" />
                        Learn more about control implementation
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>

                    <div className="mt-6 pt-4 border-t border-primary/20 text-center">
                      <p className="text-sm text-muted-foreground">
                        🎯 <strong>90% faster control implementation</strong> for our CaaS clients on average
                      </p>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

export default ControlsExplorer;