import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Zap, Settings, Plus, Check, AlertCircle, Shield, Database, Cloud, Server, Activity, Home, ChevronRight, Code, GitBranch, Package, FileText, GitCommit, Eye, ExternalLink } from 'lucide-react';

const EvidenceIntegrations = () => {
  const [selectedIntegration, setSelectedIntegration] = useState<string | null>(null);

  const availableIntegrations = [
    // Compliance as Code - Priority Integrations
    {
      id: 'github',
      name: 'GitHub',
      description: 'Code repositories, commits, PRs, security policies, and access controls as compliance evidence',
      icon: Code,
      category: 'Compliance as Code',
      evidenceTypes: ['Commit History', 'Code Reviews', 'Branch Protection', 'Access Controls', 'Security Policies', 'Dependency Scans'],
      status: 'available',
      featured: true
    },
    {
      id: 'gitlab',
      name: 'GitLab',
      description: 'DevOps platform integration for complete CI/CD compliance tracking and evidence collection',
      icon: GitBranch,
      category: 'Compliance as Code',
      evidenceTypes: ['Pipeline Logs', 'Merge Requests', 'Security Scans', 'Compliance Pipelines', 'Code Quality'],
      status: 'available',
      featured: true
    },
    {
      id: 'bitbucket',
      name: 'Bitbucket',
      description: 'Atlassian code management with branch policies and audit trails',
      icon: Code,
      category: 'Compliance as Code',
      evidenceTypes: ['Repository Logs', 'Branch Policies', 'Pull Requests', 'User Activity'],
      status: 'available'
    },
    {
      id: 'azure-devops',
      name: 'Azure DevOps',
      description: 'Microsoft DevOps platform for code, pipelines, and work item tracking',
      icon: Cloud,
      category: 'Compliance as Code',
      evidenceTypes: ['Build Logs', 'Release Pipelines', 'Work Items', 'Test Results'],
      status: 'available'
    },
    {
      id: 'jenkins',
      name: 'Jenkins',
      description: 'CI/CD automation server logs and build evidence collection',
      icon: Activity,
      category: 'Compliance as Code',
      evidenceTypes: ['Build Logs', 'Test Results', 'Deployment Records', 'Plugin Configurations'],
      status: 'available'
    },
    
    // Cloud Infrastructure
    {
      id: 'aws',
      name: 'AWS CloudTrail',
      description: 'Automatically collect access logs and API calls',
      icon: Cloud,
      category: 'Cloud Infrastructure',
      evidenceTypes: ['Access Logs', 'API Calls', 'Configuration Changes'],
      status: 'available'
    },
    {
      id: 'azure',
      name: 'Azure Monitor',
      description: 'Monitor Azure resources and collect activity logs',
      icon: Cloud,
      category: 'Cloud Infrastructure',
      evidenceTypes: ['Activity Logs', 'Resource Metrics', 'Security Events'],
      status: 'available'
    },
    
    // Identity & Access
    {
      id: 'okta',
      name: 'Okta',
      description: 'Identity and access management logs',
      icon: Shield,
      category: 'Identity & Access',
      evidenceTypes: ['Authentication Logs', 'User Provisioning', 'MFA Events'],
      status: 'available'
    },
    
    // Productivity
    {
      id: 'gsuite',
      name: 'Google Workspace',
      description: 'Admin console and user activity logs',
      icon: Database,
      category: 'Productivity Suite',
      evidenceTypes: ['Admin Logs', 'Drive Activity', 'Email Logs'],
      status: 'available'
    },
    
    // Security Tools
    {
      id: 'nessus',
      name: 'Nessus',
      description: 'Vulnerability scanning results',
      icon: Activity,
      category: 'Security Tools',
      evidenceTypes: ['Vulnerability Scans', 'Compliance Reports', 'Asset Discovery'],
      status: 'available'
    }
  ];

  const activeIntegrations = [
    {
      id: 'github-main',
      name: 'GitHub Organization',
      type: 'GitHub',
      status: 'active',
      lastSync: '1 minute ago',
      evidenceCount: 2840,
      config: {
        organization: 'company-org',
        repositories: 47,
        syncFrequency: 'real-time',
        webhooksEnabled: true
      },
      codeMetrics: {
        commits: 1520,
        pullRequests: 285,
        securityPolicies: 12,
        branchProtections: 47
      }
    },
    {
      id: 'gitlab-dev',
      name: 'GitLab DevOps',
      type: 'GitLab',
      status: 'active',
      lastSync: '3 minutes ago',
      evidenceCount: 1680,
      config: {
        instanceUrl: 'gitlab.company.com',
        projects: 23,
        syncFrequency: 'hourly'
      },
      codeMetrics: {
        pipelines: 450,
        mergeRequests: 198,
        securityScans: 89,
        complianceFrameworks: 3
      }
    },
    {
      id: 'aws-prod',
      name: 'AWS Production',
      type: 'AWS CloudTrail',
      status: 'active',
      lastSync: '2 minutes ago',
      evidenceCount: 1250,
      config: {
        region: 'us-east-1',
        bucketName: 'company-cloudtrail-logs',
        syncFrequency: 'hourly'
      }
    },
    {
      id: 'okta-main',
      name: 'Okta Corporate',
      type: 'Okta',
      status: 'active',
      lastSync: '5 minutes ago',
      evidenceCount: 890,
      config: {
        domain: 'company.okta.com',
        syncFrequency: 'hourly'
      }
    },
    {
      id: 'nessus-scanner',
      name: 'Nessus Security Scanner',
      type: 'Nessus',
      status: 'warning',
      lastSync: '2 hours ago',
      evidenceCount: 45,
      config: {
        serverUrl: 'https://nessus.company.com',
        syncFrequency: 'daily'
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'warning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'error': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Compliance as Code Hub</h1>
          <p className="text-muted-foreground">
            Transform your development workflow into automated compliance evidence collection
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Integration
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Integration</DialogTitle>
              <DialogDescription>
                Choose a system to connect for automated evidence collection
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {availableIntegrations.map((integration) => (
                <Card 
                  key={integration.id} 
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setSelectedIntegration(integration.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <integration.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground">{integration.name}</h3>
                        <p className="text-xs text-muted-foreground mb-2">{integration.category}</p>
                        <p className="text-sm text-muted-foreground">{integration.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {integration.evidenceTypes.slice(0, 2).map((type) => (
                            <Badge key={type} variant="secondary" className="text-xs">
                              {type}
                            </Badge>
                          ))}
                          {integration.evidenceTypes.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{integration.evidenceTypes.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">Active Integrations</TabsTrigger>
          <TabsTrigger value="available">Code & DevOps</TabsTrigger>
          <TabsTrigger value="mapping">Evidence Mapping</TabsTrigger>
          <TabsTrigger value="settings">Compliance as Code Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6">
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Integrations</p>
                    <p className="text-2xl font-bold text-foreground">{activeIntegrations.length}</p>
                  </div>
                  <Zap className="h-6 w-6 text-green-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Code Evidence</p>
                    <p className="text-2xl font-bold text-foreground">
                      {activeIntegrations
                        .filter(int => int.type === 'GitHub' || int.type === 'GitLab')
                        .reduce((acc, int) => acc + int.evidenceCount, 0)
                        .toLocaleString()}
                    </p>
                  </div>
                  <Code className="h-6 w-6 text-blue-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Evidence</p>
                    <p className="text-2xl font-bold text-foreground">
                      {activeIntegrations.reduce((acc, int) => acc + int.evidenceCount, 0).toLocaleString()}
                    </p>
                  </div>
                  <Database className="h-6 w-6 text-purple-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Auto-Mapped</p>
                    <p className="text-2xl font-bold text-foreground">87%</p>
                  </div>
                  <Check className="h-6 w-6 text-green-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Issues</p>
                    <p className="text-2xl font-bold text-foreground">1</p>
                  </div>
                  <AlertCircle className="h-6 w-6 text-yellow-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Active Integrations List */}
          <div className="space-y-4">
            {activeIntegrations.map((integration) => (
              <Card key={integration.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        {integration.type === 'GitHub' && <Code className="h-6 w-6 text-primary" />}
                        {integration.type === 'GitLab' && <GitBranch className="h-6 w-6 text-primary" />}
                        {!['GitHub', 'GitLab'].includes(integration.type) && <Zap className="h-6 w-6 text-primary" />}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{integration.name}</h3>
                        <p className="text-sm text-muted-foreground">{integration.type}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <Badge className={getStatusColor(integration.status)}>
                            {integration.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            Last sync: {integration.lastSync}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {integration.evidenceCount.toLocaleString()} evidence items
                          </span>
                          {integration.codeMetrics && (
                            <span className="text-xs text-muted-foreground">
                              {integration.codeMetrics.commits || integration.codeMetrics.pipelines} code events
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch defaultChecked />
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                      {integration.codeMetrics && (
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Code
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  {/* Code Metrics for GitHub/GitLab */}
                  {integration.codeMetrics && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm font-medium text-foreground mb-3">Code Evidence Breakdown:</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(integration.codeMetrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <p className="text-lg font-semibold text-foreground">{value.toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="available" className="space-y-6">
          {/* Featured Compliance as Code Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">Compliance as Code Integrations</h2>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                Featured
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {availableIntegrations
                .filter(integration => integration.category === 'Compliance as Code' && integration.featured)
                .map((integration) => (
                  <Card key={integration.id} className="hover:shadow-lg transition-all border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                          <integration.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{integration.name}</CardTitle>
                          <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                            {integration.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 text-sm">
                        {integration.description}
                      </CardDescription>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium text-foreground mb-2">Evidence Types:</p>
                          <div className="flex flex-wrap gap-1">
                            {integration.evidenceTypes.map((type) => (
                              <Badge key={type} variant="secondary" className="text-xs">
                                {type}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button className="w-full">
                          <Plus className="mr-2 h-4 w-4" />
                          Configure {integration.name}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Other Integration Categories */}
          <div className="space-y-8">
            {['Compliance as Code', 'Cloud Infrastructure', 'Identity & Access', 'Productivity Suite', 'Security Tools'].map(category => {
              const categoryIntegrations = availableIntegrations.filter(
                integration => integration.category === category && !integration.featured
              );
              
              if (categoryIntegrations.length === 0) return null;
              
              return (
                <div key={category}>
                  <h3 className="text-lg font-medium text-foreground mb-4">{category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryIntegrations.map((integration) => (
                      <Card key={integration.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <integration.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{integration.name}</CardTitle>
                              <Badge variant="outline" className="text-xs">
                                {integration.category}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="mb-4">
                            {integration.description}
                          </CardDescription>
                          <div className="space-y-3">
                            <div>
                              <p className="text-sm font-medium text-foreground mb-2">Evidence Types:</p>
                              <div className="flex flex-wrap gap-1">
                                {integration.evidenceTypes.map((type) => (
                                  <Badge key={type} variant="secondary" className="text-xs">
                                    {type}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <Button className="w-full" variant="outline">
                              <Plus className="mr-2 h-4 w-4" />
                              Configure Integration
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="mapping" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GitCommit className="mr-2 h-5 w-5" />
                Code Evidence Mapping
              </CardTitle>
              <CardDescription>
                Configure how code artifacts automatically map to compliance policies and controls
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-dashed border-2">
                  <CardContent className="p-6 text-center">
                    <Code className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-medium text-foreground mb-2">Auto-Mapping Rules</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Define patterns to automatically map commits, PRs, and pipelines to controls
                    </p>
                    <Button variant="outline" className="w-full">
                      Configure Rules
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-dashed border-2">
                  <CardContent className="p-6 text-center">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-medium text-foreground mb-2">Evidence Templates</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Standardize how code evidence is formatted for compliance reports
                    </p>
                    <Button variant="outline" className="w-full">
                      Manage Templates
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-medium text-foreground mb-3">Quick Actions</h4>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    View Evidence Mapping
                  </Button>
                  <Button variant="outline" size="sm">
                    <Package className="mr-1 h-3 w-3" />
                    Browse Code Evidence
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="mr-1 h-3 w-3" />
                    Mapping Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Mapping Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { type: 'GitHub Commit', item: 'feat: add authentication middleware', policy: 'AC-3: Access Enforcement', auto: true },
                  { type: 'GitLab Pipeline', item: 'security-scan-pipeline', policy: 'RA-5: Vulnerability Scanning', auto: true },
                  { type: 'GitHub PR', item: 'Add input validation', policy: 'SI-10: Information Input Validation', auto: false },
                  { type: 'GitHub Security Policy', item: 'dependabot.yml', policy: 'SI-2: Flaw Remediation', auto: true }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <GitCommit className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{activity.item}</p>
                        <p className="text-xs text-muted-foreground">{activity.type} → {activity.policy}</p>
                      </div>
                    </div>
                    <Badge variant={activity.auto ? "default" : "secondary"}>
                      {activity.auto ? "Auto-mapped" : "Manual"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Compliance as Code Settings</CardTitle>
              <CardDescription>
                Configure global settings for automated compliance evidence collection from code repositories
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="code-sync-frequency">Code Sync Frequency</Label>
                  <Select defaultValue="realtime">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">Real-time (Webhooks)</SelectItem>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="evidence-retention">Evidence Retention Period</Label>
                  <Select defaultValue="permanent">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1year">1 Year</SelectItem>
                      <SelectItem value="2years">2 Years</SelectItem>
                      <SelectItem value="3years">3 Years</SelectItem>
                      <SelectItem value="5years">5 Years</SelectItem>
                      <SelectItem value="permanent">Permanent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="storage-location">Storage Location</Label>
                  <Select defaultValue="primary">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="primary">Primary (US East)</SelectItem>
                      <SelectItem value="backup">Backup (US West)</SelectItem>
                      <SelectItem value="eu">EU (Frankfurt)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="encryption">Encryption Level</Label>
                  <Select defaultValue="aes256-gcm">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aes128">AES-128</SelectItem>
                      <SelectItem value="aes256">AES-256</SelectItem>
                      <SelectItem value="aes256-gcm">AES-256-GCM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Code Evidence Settings</h4>
                
                <div className="flex items-center space-x-2">
                  <Switch id="auto-mapping" defaultChecked />
                  <Label htmlFor="auto-mapping">
                    Automatically map code changes to compliance controls using AI
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="commit-analysis" defaultChecked />
                  <Label htmlFor="commit-analysis">
                    Analyze commit messages for compliance keywords
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="pr-reviews" defaultChecked />
                  <Label htmlFor="pr-reviews">
                    Track pull request reviews as evidence
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="security-scans" defaultChecked />
                  <Label htmlFor="security-scans">
                    Include security scan results in evidence
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="branch-protection" defaultChecked />
                  <Label htmlFor="branch-protection">
                    Monitor branch protection rule compliance
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="notifications" defaultChecked />
                  <Label htmlFor="notifications">
                    Send notifications for integration failures
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="deduplication" defaultChecked />
                  <Label htmlFor="deduplication">
                    Enable code evidence deduplication
                  </Label>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium text-foreground mb-3">Integration Webhooks</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">GitHub Webhooks</p>
                      <p className="text-xs text-muted-foreground">Real-time code change notifications</p>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">GitLab Webhooks</p>
                      <p className="text-xs text-muted-foreground">Pipeline and merge request events</p>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>
                </div>
              </div>

              <Button className="w-full md:w-auto">
                <Settings className="mr-2 h-4 w-4" />
                Save Compliance as Code Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EvidenceIntegrations;
