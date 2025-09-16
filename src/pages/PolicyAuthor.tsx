import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  Save, 
  Send, 
  FileText,
  Users,
  Calendar,
  Shield,
  Plus,
  X,
  Zap,
  Settings,
  GitBranch,
  Database,
  FileCode,
  Play
} from 'lucide-react';

const PolicyAuthor = () => {
  const [selectedFrameworks, setSelectedFrameworks] = React.useState<string[]>([]);
  const [selectedReviewers, setSelectedReviewers] = React.useState<string[]>([]);

  const availableFrameworks = [
    'ISO/IEC 42001',
    'ISO/IEC 23894', 
    'NIST AI RMF',
    'EU AI Act',
    'SOC 2 Type II',
    'ISO 27001',
    'NIST Cybersecurity Framework',
    'GDPR',
    'CCPA',
    'HIPAA',
    'PCI DSS',
    'ISO 22301',
    'ITIL'
  ];

  const availableReviewers = [
    'John Smith (CISO)',
    'Sarah Johnson (Legal Counsel)',
    'Mike Chen (IT Director)',
    'Lisa Rodriguez (Compliance Manager)',
    'David Wilson (Risk Manager)',
    'Emma Thompson (Data Protection Officer)'
  ];

  const addFramework = (framework: string) => {
    if (!selectedFrameworks.includes(framework)) {
      setSelectedFrameworks([...selectedFrameworks, framework]);
    }
  };

  const removeFramework = (framework: string) => {
    setSelectedFrameworks(selectedFrameworks.filter(f => f !== framework));
  };

  const addReviewer = (reviewer: string) => {
    if (!selectedReviewers.includes(reviewer)) {
      setSelectedReviewers([...selectedReviewers, reviewer]);
    }
  };

  const removeReviewer = (reviewer: string) => {
    setSelectedReviewers(selectedReviewers.filter(r => r !== reviewer));
  };

  return (
    <main className="flex-1 p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Policy Author</h1>
                  <p className="text-muted-foreground mt-2">
                    Create and edit organizational policies with compliance mapping
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button>
                    <Save className="w-4 h-4 mr-2" />
                    Save Draft
                  </Button>
                  <Button variant="outline">
                    <Send className="w-4 h-4 mr-2" />
                    Send for Review
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="content" className="space-y-6">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="content">Content</TabsTrigger>
                  <TabsTrigger value="metadata">Metadata</TabsTrigger>
                  <TabsTrigger value="ai-context">AI Context</TabsTrigger>
                  <TabsTrigger value="compliance">Compliance</TabsTrigger>
                  <TabsTrigger value="workflow">Workflow</TabsTrigger>
                </TabsList>

                <TabsContent value="content" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        Policy Content
                      </CardTitle>
                      <CardDescription>
                        Write the main content of your policy document
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="title">Policy Title</Label>
                        <Input
                          id="title"
                          placeholder="Enter policy title"
                          defaultValue="Information Security Policy"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="purpose">Purpose</Label>
                        <Textarea
                          id="purpose"
                          placeholder="Describe the purpose and scope of this policy"
                          rows={3}
                          defaultValue="This policy establishes the framework for protecting information assets and ensuring the confidentiality, integrity, and availability of organizational data."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="scope">Scope</Label>
                        <Textarea
                          id="scope"
                          placeholder="Define who and what this policy applies to"
                          rows={3}
                          defaultValue="This policy applies to all employees, contractors, vendors, and third parties who have access to organizational information systems and data."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="content">Policy Content</Label>
                        <Textarea
                          id="content"
                          placeholder="Enter the main policy content"
                          rows={12}
                          className="font-mono text-sm"
                          defaultValue={`1. INFORMATION CLASSIFICATION
   1.1 All information must be classified according to its sensitivity level
   1.2 Classification levels: Public, Internal, Confidential, Restricted
   1.3 Information owners are responsible for classification

2. ACCESS CONTROLS
   2.1 Access to information systems must be based on business need
   2.2 Multi-factor authentication required for sensitive systems
   2.3 Regular access reviews must be conducted quarterly

3. DATA PROTECTION
   3.1 Encryption required for data in transit and at rest
   3.2 Personal data must be handled according to privacy regulations
   3.3 Data retention schedules must be followed

4. INCIDENT RESPONSE
   4.1 Security incidents must be reported immediately
   4.2 Incident response team must be activated for breaches
   4.3 Post-incident reviews are mandatory`}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="metadata" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Policy Metadata</CardTitle>
                      <CardDescription>
                        Set policy properties and administrative information
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="version">Version</Label>
                          <Input id="version" defaultValue="1.0" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="category">Category</Label>
                          <Select defaultValue="security">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ai-governance">AI Governance</SelectItem>
                              <SelectItem value="ai-context-engineering">AI Context Engineering</SelectItem>
                              <SelectItem value="model-governance">Model Governance</SelectItem>
                              <SelectItem value="security">Security</SelectItem>
                              <SelectItem value="privacy">Privacy</SelectItem>
                              <SelectItem value="operations">Operations</SelectItem>
                              <SelectItem value="business-continuity">Business Continuity</SelectItem>
                              <SelectItem value="hr">Human Resources</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="owner">Policy Owner</Label>
                          <Select defaultValue="ciso">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ciso">CISO Office</SelectItem>
                              <SelectItem value="legal">Legal Team</SelectItem>
                              <SelectItem value="hr">HR Department</SelectItem>
                              <SelectItem value="finance">Finance Team</SelectItem>
                              <SelectItem value="it">IT Operations</SelectItem>
                              <SelectItem value="risk">Risk Management</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="effective-date">Effective Date</Label>
                          <Input id="effective-date" type="date" defaultValue="2024-01-01" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="review-frequency">Review Frequency</Label>
                          <Select defaultValue="annual">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="quarterly">Quarterly</SelectItem>
                              <SelectItem value="semi-annual">Semi-Annual</SelectItem>
                              <SelectItem value="annual">Annual</SelectItem>
                              <SelectItem value="biennial">Biennial</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="next-review">Next Review Date</Label>
                          <Input id="next-review" type="date" defaultValue="2025-01-01" />
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <Label htmlFor="tags">Tags</Label>
                        <Input 
                          id="tags" 
                          placeholder="Enter tags separated by commas"
                          defaultValue="security, access control, data protection, compliance"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="ai-context" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        AI Context Engineering
                      </CardTitle>
                      <CardDescription>
                        Configure AI-specific settings and bind this policy to AI assets
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="risk-tier">AI Risk Tier</Label>
                          <Select defaultValue="medium">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low Risk</SelectItem>
                              <SelectItem value="medium">Medium Risk</SelectItem>
                              <SelectItem value="high">High Risk</SelectItem>
                              <SelectItem value="critical">Critical Risk</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="lifecycle-stage">AI Lifecycle Stage</Label>
                          <Select defaultValue="development">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="research">Research</SelectItem>
                              <SelectItem value="development">Development</SelectItem>
                              <SelectItem value="testing">Testing</SelectItem>
                              <SelectItem value="production">Production</SelectItem>
                              <SelectItem value="monitoring">Monitoring</SelectItem>
                              <SelectItem value="retirement">Retirement</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Policy Enforcement</Label>
                          <Select defaultValue="manual">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="manual">Manual</SelectItem>
                              <SelectItem value="semi-automated">Semi-Automated</SelectItem>
                              <SelectItem value="automated">Automated</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Policies-as-Code</Label>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="executable" className="rounded" />
                            <Label htmlFor="executable" className="text-sm">Enable executable policy</Label>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <Label className="text-base font-medium">AI Asset Bindings</Label>
                        <p className="text-sm text-muted-foreground mb-4">
                          Link this policy to specific AI assets for automated compliance
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Card className="border-dashed">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 mb-3">
                                <FileText className="w-4 h-4 text-blue-600" />
                                <h4 className="font-medium">Linked Prompts</h4>
                              </div>
                              <p className="text-sm text-muted-foreground mb-3">Connect to prompt registry entries</p>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                  <span>Customer Service Prompts</span>
                                  <Badge variant="secondary">12 prompts</Badge>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span>Content Generation</span>
                                  <Badge variant="secondary">8 prompts</Badge>
                                </div>
                              </div>
                              <Button variant="outline" size="sm" className="w-full mt-3">
                                <Plus className="w-4 h-4 mr-2" />
                                Add Prompts
                              </Button>
                            </CardContent>
                          </Card>

                          <Card className="border-dashed">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 mb-3">
                                <Settings className="w-4 h-4 text-green-600" />
                                <h4 className="font-medium">Linked Models</h4>
                              </div>
                              <p className="text-sm text-muted-foreground mb-3">Connect to model registry</p>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                  <span>GPT-4 Production</span>
                                  <Badge variant="secondary">v1.2</Badge>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span>Custom LLaMA</span>
                                  <Badge variant="secondary">v2.1</Badge>
                                </div>
                              </div>
                              <Button variant="outline" size="sm" className="w-full mt-3">
                                <Plus className="w-4 h-4 mr-2" />
                                Add Models
                              </Button>
                            </CardContent>
                          </Card>

                          <Card className="border-dashed">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 mb-3">
                                <GitBranch className="w-4 h-4 text-purple-600" />
                                <h4 className="font-medium">Linked Flows</h4>
                              </div>
                              <p className="text-sm text-muted-foreground mb-3">Connect to AI workflows</p>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                  <span>Document Processing</span>
                                  <Badge variant="secondary">Active</Badge>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span>Content Moderation</span>
                                  <Badge variant="secondary">Active</Badge>
                                </div>
                              </div>
                              <Button variant="outline" size="sm" className="w-full mt-3">
                                <Plus className="w-4 h-4 mr-2" />
                                Add Flows
                              </Button>
                            </CardContent>
                          </Card>

                          <Card className="border-dashed">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 mb-3">
                                <Database className="w-4 h-4 text-orange-600" />
                                <h4 className="font-medium">Linked Datasets</h4>
                              </div>
                              <p className="text-sm text-muted-foreground mb-3">Connect to training/eval data</p>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                  <span>Training Dataset v3</span>
                                  <Badge variant="secondary">2.1GB</Badge>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span>Evaluation Suite</span>
                                  <Badge variant="secondary">458MB</Badge>
                                </div>
                              </div>
                              <Button variant="outline" size="sm" className="w-full mt-3">
                                <Plus className="w-4 h-4 mr-2" />
                                Add Datasets
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <Label className="text-base font-medium">Policy-as-Code Schema</Label>
                        <p className="text-sm text-muted-foreground mb-4">
                          Define the executable schema for this policy
                        </p>
                        
                        <div className="space-y-4">
                          <div className="bg-muted/50 rounded-lg p-4">
                            <pre className="text-sm font-mono overflow-x-auto">
{`# AI Model Governance Policy Schema
policy:
  name: "ai-model-governance"
  version: "1.2"
  enforcement: "automated"
  
checks:
  - name: "model_approval_required"
    condition: "model.status == 'production'"
    action: "require_approval"
    
  - name: "bias_testing_required"  
    condition: "model.risk_tier in ['high', 'critical']"
    action: "require_bias_evaluation"
    
  - name: "monitoring_enabled"
    condition: "model.deployment == 'production'"
    action: "enable_drift_monitoring"`}
                            </pre>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <FileCode className="w-4 h-4 mr-2" />
                              Edit Schema
                            </Button>
                            <Button variant="outline" size="sm">
                              <Play className="w-4 h-4 mr-2" />
                              Validate
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="compliance" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Compliance Mapping
                      </CardTitle>
                      <CardDescription>
                        Map this policy to compliance frameworks and controls
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label className="text-base font-medium">Compliance Frameworks</Label>
                        <p className="text-sm text-muted-foreground mb-4">
                          Select the compliance frameworks this policy addresses
                        </p>
                        
                        <div className="space-y-4">
                          <Select onValueChange={addFramework}>
                            <SelectTrigger>
                              <SelectValue placeholder="Add compliance framework" />
                            </SelectTrigger>
                            <SelectContent>
                              {availableFrameworks
                                .filter(framework => !selectedFrameworks.includes(framework))
                                .map(framework => (
                                  <SelectItem key={framework} value={framework}>
                                    {framework}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>

                          <div className="flex flex-wrap gap-2">
                            {selectedFrameworks.map(framework => (
                              <Badge key={framework} variant="secondary" className="flex items-center gap-1">
                                {framework}
                                <X 
                                  className="w-3 h-3 cursor-pointer" 
                                  onClick={() => removeFramework(framework)}
                                />
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <Label className="text-base font-medium">Control Mappings</Label>
                        <p className="text-sm text-muted-foreground mb-4">
                          Map specific controls from frameworks to this policy
                        </p>
                        
                        <div className="space-y-4">
                          <Card className="border-dashed">
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium">SOC 2 - CC6.1</p>
                                  <p className="text-sm text-muted-foreground">
                                    Logical and physical access controls
                                  </p>
                                </div>
                                <Button variant="ghost" size="sm">
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="border-dashed">
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium">ISO 27001 - A.9.1.1</p>
                                  <p className="text-sm text-muted-foreground">
                                    Access control policy
                                  </p>
                                </div>
                                <Button variant="ghost" size="sm">
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>

                          <Button variant="outline" className="w-full">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Control Mapping
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="workflow" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Review & Approval Workflow
                      </CardTitle>
                      <CardDescription>
                        Configure the review and approval process for this policy
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label className="text-base font-medium">Reviewers</Label>
                        <p className="text-sm text-muted-foreground mb-4">
                          Select stakeholders who should review this policy
                        </p>
                        
                        <div className="space-y-4">
                          <Select onValueChange={addReviewer}>
                            <SelectTrigger>
                              <SelectValue placeholder="Add reviewer" />
                            </SelectTrigger>
                            <SelectContent>
                              {availableReviewers
                                .filter(reviewer => !selectedReviewers.includes(reviewer))
                                .map(reviewer => (
                                  <SelectItem key={reviewer} value={reviewer}>
                                    {reviewer}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>

                          <div className="space-y-2">
                            {selectedReviewers.map(reviewer => (
                              <div key={reviewer} className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="flex items-center gap-2">
                                  <Users className="w-4 h-4 text-muted-foreground" />
                                  <span className="text-sm">{reviewer}</span>
                                </div>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => removeReviewer(reviewer)}
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="approval-type">Approval Type</Label>
                          <Select defaultValue="all">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All reviewers must approve</SelectItem>
                              <SelectItem value="majority">Majority approval required</SelectItem>
                              <SelectItem value="any">Any reviewer can approve</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="review-deadline">Review Deadline</Label>
                          <Input id="review-deadline" type="date" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="review-notes">Review Instructions</Label>
                        <Textarea
                          id="review-notes"
                          placeholder="Provide specific instructions or areas of focus for reviewers"
                          rows={3}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </main>
  );
};

export default PolicyAuthor;