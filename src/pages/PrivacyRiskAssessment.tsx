import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Shield,
  Plus,
  Search,
  Filter,
  AlertTriangle,
  Clock,
  Users,
  Target,
  ExternalLink,
  Edit,
  FileText,
  Globe,
  Database,
  UserCheck,
  Eye,
  Download,
  Calendar
} from 'lucide-react';

export default function PrivacyRiskAssessment() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('assessments');
  const [filterRegulation, setFilterRegulation] = useState('all');

  const privacyAssessments = [
    {
      id: 'PIA-2024-001',
      title: 'Customer Data Analytics Platform',
      description: 'Privacy impact assessment for new customer behavior analytics system',
      dataTypes: ['Personal Identifiers', 'Behavioral Data', 'Location Data'],
      regulation: 'GDPR',
      riskLevel: 'High',
      status: 'In Progress',
      dueDate: '2024-03-15',
      owner: 'Product Team',
      assessor: 'Privacy Team',
      progress: 65,
      findings: 8,
      highRiskFindings: 3,
      lastUpdated: '2024-02-20',
      dataSubjects: 'EU Customers',
      legalBasis: 'Legitimate Interest',
      dataFlowComplexity: 'High'
    },
    {
      id: 'PIA-2024-002',
      title: 'HR Employee Monitoring System',
      description: 'Assessment of new employee productivity monitoring and tracking tools',
      dataTypes: ['Employee Records', 'Activity Logs', 'Performance Data'],
      regulation: 'GDPR',
      riskLevel: 'Critical',
      status: 'Review Required',
      dueDate: '2024-02-28',
      owner: 'HR Department',
      assessor: 'Privacy Team',
      progress: 90,
      findings: 12,
      highRiskFindings: 5,
      lastUpdated: '2024-02-18',
      dataSubjects: 'Employees',
      legalBasis: 'Contract',
      dataFlowComplexity: 'Medium'
    },
    {
      id: 'PIA-2024-003',
      title: 'Third-Party Marketing Integration',
      description: 'Privacy assessment for integration with external marketing automation platform',
      dataTypes: ['Contact Information', 'Purchase History', 'Communication Preferences'],
      regulation: 'CCPA',
      riskLevel: 'Medium',
      status: 'Completed',
      dueDate: '2024-01-31',
      owner: 'Marketing Team',
      assessor: 'Privacy Team',
      progress: 100,
      findings: 6,
      highRiskFindings: 1,
      lastUpdated: '2024-01-28',
      dataSubjects: 'CA Residents',
      legalBasis: 'Consent',
      dataFlowComplexity: 'High'
    }
  ];

  const privacyMetrics = [
    { label: 'Active PIAs', value: '8', trend: '+2', icon: FileText },
    { label: 'High Risk Findings', value: '15', trend: '-3', icon: AlertTriangle },
    { label: 'Overdue Assessments', value: '2', trend: '+1', icon: Clock },
    { label: 'Completion Rate', value: '78%', trend: '+12%', icon: Target }
  ];

  const dataFlowRisks = [
    {
      id: 'DFR-001',
      flowName: 'US-EU Customer Data Transfer',
      description: 'Personal data transfer from EU customers to US cloud infrastructure',
      riskLevel: 'Critical',
      mitigationStatus: 'In Progress',
      regulations: ['GDPR'],
      transferMechanism: 'Standard Contractual Clauses',
      dataVolume: 'High',
      lastAssessed: '2024-02-15'
    },
    {
      id: 'DFR-002',
      flowName: 'Marketing Data Sharing',
      description: 'Customer data sharing with third-party marketing platforms',
      riskLevel: 'High',
      mitigationStatus: 'Pending',
      regulations: ['CCPA', 'GDPR'],
      transferMechanism: 'Data Processing Agreement',
      dataVolume: 'Medium',
      lastAssessed: '2024-02-10'
    },
    {
      id: 'DFR-003',
      flowName: 'Employee Data Processing',
      description: 'HR data processing for payroll and benefits administration',
      riskLevel: 'Medium',
      mitigationStatus: 'Mitigated',
      regulations: ['GDPR'],
      transferMechanism: 'Internal Processing',
      dataVolume: 'Low',
      lastAssessed: '2024-02-12'
    }
  ];

  const complianceGaps = [
    {
      id: 'CG-001',
      area: 'Consent Management',
      description: 'Granular consent controls missing for marketing communications',
      regulation: 'GDPR',
      priority: 'High',
      dueDate: '2024-03-15',
      owner: 'Legal Team',
      effort: 'Medium'
    },
    {
      id: 'CG-002',
      area: 'Data Subject Rights',
      description: 'Automated data portability functionality not implemented',
      regulation: 'GDPR',
      priority: 'Medium',
      dueDate: '2024-04-30',
      owner: 'Engineering Team',
      effort: 'High'
    },
    {
      id: 'CG-003',
      area: 'Privacy Notices',
      description: 'Privacy policy updates required for new data processing activities',
      regulation: 'CCPA',
      priority: 'Medium',
      dueDate: '2024-03-30',
      owner: 'Legal Team',
      effort: 'Low'
    }
  ];

  const getRiskLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'in progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'review required': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'overdue': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'mitigated': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const filteredAssessments = privacyAssessments.filter(assessment => {
    const matchesSearch = assessment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         assessment.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegulation = filterRegulation === 'all' || assessment.regulation === filterRegulation;
    return matchesSearch && matchesRegulation;
  });

  return (
    <div className="px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Risk Assessment</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive privacy impact assessments and data protection risk management
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New PIA
          </Button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {privacyMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">{metric.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search privacy assessments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterRegulation} onValueChange={setFilterRegulation}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by regulation" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regulations</SelectItem>
            <SelectItem value="GDPR">GDPR</SelectItem>
            <SelectItem value="CCPA">CCPA</SelectItem>
            <SelectItem value="PIPEDA">PIPEDA</SelectItem>
            <SelectItem value="LGPD">LGPD</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="assessments" className="flex items-center space-x-2">
            <FileText className="w-4 h-4" />
            <span>PIAs</span>
          </TabsTrigger>
          <TabsTrigger value="dataflows" className="flex items-center space-x-2">
            <Globe className="w-4 h-4" />
            <span>Data Flows</span>
          </TabsTrigger>
          <TabsTrigger value="gaps" className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Compliance Gaps</span>
          </TabsTrigger>
          <TabsTrigger value="insights" className="flex items-center space-x-2">
            <Target className="w-4 h-4" />
            <span>Insights</span>
          </TabsTrigger>
        </TabsList>

        {/* Privacy Impact Assessments */}
        <TabsContent value="assessments" className="space-y-6">
          <div className="space-y-4">
            {filteredAssessments.map((assessment) => (
              <Card key={assessment.id} className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline">{assessment.id}</Badge>
                        <Badge className={getRiskLevelColor(assessment.riskLevel)}>
                          {assessment.riskLevel} Risk
                        </Badge>
                        <Badge className={getStatusColor(assessment.status)}>
                          {assessment.status}
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                          {assessment.regulation}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{assessment.title}</CardTitle>
                      <CardDescription className="mt-1">{assessment.description}</CardDescription>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{assessment.dataSubjects}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <UserCheck className="w-4 h-4" />
                          <span>{assessment.legalBasis}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>Due: {assessment.dueDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Target className="w-4 h-4" />
                          <span>{assessment.owner}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-2xl font-bold text-foreground">{assessment.progress}%</div>
                      <div className="text-sm text-muted-foreground">Complete</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Progress */}
                    <div>
                      <Progress value={assessment.progress} className="h-2" />
                    </div>

                    {/* Data Types */}
                    <div>
                      <h4 className="text-sm font-medium mb-2">Data Types Processed</h4>
                      <div className="flex flex-wrap gap-2">
                        {assessment.dataTypes.map((type, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Assessment Metrics */}
                    <div className="grid grid-cols-3 gap-4 p-3 bg-muted/30 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold">{assessment.findings}</div>
                        <div className="text-xs text-muted-foreground">Total Findings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-orange-600">{assessment.highRiskFindings}</div>
                        <div className="text-xs text-muted-foreground">High Risk</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold">{assessment.dataFlowComplexity}</div>
                        <div className="text-xs text-muted-foreground">Complexity</div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between items-center pt-2 border-t">
                      <div className="text-sm text-muted-foreground">
                        Last updated: {assessment.lastUpdated}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-3 h-3 mr-1" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-3 h-3 mr-1" />
                          Edit PIA
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Data Flow Risks */}
        <TabsContent value="dataflows" className="space-y-6">
          <div className="space-y-4">
            {dataFlowRisks.map((flow) => (
              <Card key={flow.id} className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline">{flow.id}</Badge>
                        <Badge className={getRiskLevelColor(flow.riskLevel)}>
                          {flow.riskLevel} Risk
                        </Badge>
                        <Badge className={getStatusColor(flow.mitigationStatus)}>
                          {flow.mitigationStatus}
                        </Badge>
                        {flow.regulations.map((reg, index) => (
                          <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
                            {reg}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-lg">{flow.flowName}</CardTitle>
                      <CardDescription className="mt-1">{flow.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Transfer Mechanism:</span>
                      <div className="font-medium">{flow.transferMechanism}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Data Volume:</span>
                      <div className="font-medium">{flow.dataVolume}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Last Assessed:</span>
                      <div className="font-medium">{flow.lastAssessed}</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Flow
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Compliance Gaps */}
        <TabsContent value="gaps" className="space-y-6">
          <div className="space-y-4">
            {complianceGaps.map((gap) => (
              <Card key={gap.id} className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline">{gap.id}</Badge>
                        <Badge className={getRiskLevelColor(gap.priority)}>
                          {gap.priority} Priority
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                          {gap.regulation}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{gap.area}</CardTitle>
                      <CardDescription className="mt-1">{gap.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Owner:</span>
                      <div className="font-medium">{gap.owner}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Due Date:</span>
                      <div className="font-medium">{gap.dueDate}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Effort:</span>
                      <div className="font-medium">{gap.effort}</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Create Task
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Privacy Insights */}
        <TabsContent value="insights" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Risk Distribution by Regulation</CardTitle>
                <CardDescription>Privacy risks across different regulatory frameworks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">GDPR</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">CCPA</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">PIPEDA</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Assessment Completion Trends</CardTitle>
                <CardDescription>PIA completion rates over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">This Month</span>
                    <span className="text-lg font-bold">78%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Last Month</span>
                    <span className="text-lg font-bold">65%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average Response Time</span>
                    <span className="text-lg font-bold">12 days</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Overall Progress</span>
                      <span>+13%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}