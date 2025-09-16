import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  AlertTriangle,
  Search,
  ExternalLink,
  Calendar,
  Users,
  Clock,
  Target,
  TrendingUp,
  Shield,
  FileText,
  CheckCircle
} from 'lucide-react';

export default function POAMRisks() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('active');

  const poamRisks = [
    {
      id: 'PR-2024-001',
      title: 'Data Subject Rights Implementation Delay',
      description: 'Risk of GDPR non-compliance due to delayed automated data subject request system',
      poamId: 'POAM-003',
      poamTitle: 'Implement Automated DSR System',
      severity: 'Critical',
      riskScore: 95,
      status: 'Overdue',
      daysOverdue: 5,
      originalDueDate: '2024-02-28',
      revisedDueDate: '2024-03-15',
      owner: 'Privacy Team',
      assignee: 'Sarah Johnson',
      progress: 15,
      riskFactors: [
        'Manual DSR processing delays',
        'GDPR Article 12 compliance violation',
        'Potential regulatory fines',
        'Data subject complaints risk'
      ],
      mitigationActions: [
        'Expedite automated system deployment',
        'Implement interim manual processes',
        'Daily progress reviews',
        'Legal risk assessment'
      ],
      businessImpact: 'High - potential €20M or 4% annual turnover GDPR fines',
      complianceFramework: 'GDPR',
      finding: 'GDPR - Article 12 Transparent information and modalities'
    },
    {
      id: 'PR-2024-002',
      title: 'Cross-Border Data Transfer Risk',
      description: 'Personal data transfers to US lacking adequate safeguards under GDPR',
      poamId: 'POAM-001',
      poamTitle: 'Implement Standard Contractual Clauses',
      severity: 'High',
      riskScore: 80,
      status: 'At Risk',
      daysOverdue: 0,
      originalDueDate: '2024-03-15',
      revisedDueDate: null,
      owner: 'Privacy Team',
      assignee: 'David Chen',
      progress: 65,
      riskFactors: [
        'Inadequate transfer safeguards',
        'GDPR Chapter V compliance gap',
        'Supervisory authority scrutiny',
        'Data subject rights violations'
      ],
      mitigationActions: [
        'Finalize Standard Contractual Clauses',
        'Implement supplementary measures',
        'Conduct transfer impact assessments',
        'Update privacy notices'
      ],
      businessImpact: 'High - potential transfer restrictions and regulatory fines',
      complianceFramework: 'GDPR',
      finding: 'GDPR - Article 46 Transfers with appropriate safeguards'
    },
    {
      id: 'PR-2024-003',
      title: 'Privacy Breach Notification Risk',
      description: 'Outdated data breach response procedures may violate notification timelines',
      poamId: 'POAM-002',
      poamTitle: 'Update Privacy Breach Response Plan',
      severity: 'Medium',
      riskScore: 65,
      status: 'On Track',
      daysOverdue: 0,
      originalDueDate: '2024-04-20',
      revisedDueDate: null,
      owner: 'Privacy Team',
      assignee: 'Lisa Brown',
      progress: 25,
      riskFactors: [
        'Missed 72-hour notification deadline',
        'GDPR Article 33/34 non-compliance',
        'Inadequate breach assessment',
        'Regulatory investigation risk'
      ],
      mitigationActions: [
        'Update breach notification procedures',
        'Implement automated notification tools',
        'Train incident response teams',
        'Regular drill exercises'
      ],
      businessImpact: 'High - potential regulatory fines and reputation damage',
      complianceFramework: 'GDPR',
      finding: 'GDPR - Article 33 Notification of breach to supervisory authority'
    }
  ];

  const riskMetrics = [
    { label: 'Total POAM Risks', value: '8', trend: '+2', icon: AlertTriangle },
    { label: 'Privacy POAMs', value: '5', trend: '+3', icon: Shield },
    { label: 'Critical Risk Score', value: '95', trend: '0', icon: Target },
    { label: 'At Risk POAMs', value: '3', trend: '-1', icon: TrendingUp }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'overdue': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'at risk': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'on track': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'completed': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const filteredRisks = poamRisks.filter(risk => {
    const matchesSearch = risk.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         risk.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         risk.poamId.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === 'active') return matchesSearch && risk.status !== 'Completed';
    if (activeTab === 'overdue') return matchesSearch && risk.status === 'Overdue';
    if (activeTab === 'critical') return matchesSearch && risk.severity === 'Critical';
    
    return matchesSearch;
  });

  return (
    <div className="px-6 py-8">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">POAM-Related Risks</h1>
                <p className="text-lg text-muted-foreground">
                  Risk exposure from incomplete or delayed Plan of Action and Milestones, including privacy compliance gaps
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {riskMetrics.map((metric, index) => (
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

              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search POAM risks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                <TabsList>
                  <TabsTrigger value="active">Active Risks ({poamRisks.filter(r => r.status !== 'Completed').length})</TabsTrigger>
                  <TabsTrigger value="overdue">Overdue ({poamRisks.filter(r => r.status === 'Overdue').length})</TabsTrigger>
                  <TabsTrigger value="critical">Critical ({poamRisks.filter(r => r.severity === 'Critical').length})</TabsTrigger>
                </TabsList>
              </Tabs>

              {/* POAM Risks */}
              <div className="space-y-6">
                {filteredRisks.map((risk) => (
                  <Card key={risk.id} className="bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline">{risk.id}</Badge>
                            <Badge variant="secondary" className="bg-orange-50 text-orange-700">
                              {risk.poamId}
                            </Badge>
                            <Badge className={getSeverityColor(risk.severity)}>
                              {risk.severity}
                            </Badge>
                            <Badge className={getStatusColor(risk.status)}>
                              {risk.status}
                              {risk.daysOverdue > 0 && ` (${risk.daysOverdue} days)`}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg">{risk.title}</CardTitle>
                          <CardDescription className="mt-1">{risk.description}</CardDescription>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <FileText className="w-4 h-4" />
                              <span>{risk.poamTitle}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{risk.owner}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>Due: {risk.revisedDueDate || risk.originalDueDate}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Shield className="w-4 h-4" />
                              <span>{risk.complianceFramework}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right ml-6">
                          <div className="text-2xl font-bold text-foreground">{risk.riskScore}</div>
                          <div className="text-sm text-muted-foreground">Risk Score</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Progress */}
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>POAM Progress</span>
                            <span>{risk.progress}%</span>
                          </div>
                          <Progress value={risk.progress} className="h-2" />
                        </div>

                        {/* Timeline */}
                        {risk.revisedDueDate && (
                          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <div className="flex items-center gap-2 text-yellow-800">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm font-medium">Timeline Updated</span>
                            </div>
                            <div className="text-sm text-yellow-700 mt-1">
                              Original due date: {risk.originalDueDate} → Revised: {risk.revisedDueDate}
                            </div>
                          </div>
                        )}

                        {/* Risk Factors and Mitigation */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium mb-2">Risk Factors</h4>
                            <ul className="space-y-1">
                              {risk.riskFactors.map((factor, index) => (
                                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <AlertTriangle className="w-3 h-3 mt-1 flex-shrink-0 text-orange-500" />
                                  {factor}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium mb-2">Mitigation Actions</h4>
                            <ul className="space-y-1">
                              {risk.mitigationActions.map((action, index) => (
                                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <CheckCircle className="w-3 h-3 mt-1 flex-shrink-0 text-green-500" />
                                  {action}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Business Impact */}
                        <div className="p-3 bg-muted/30 rounded-lg">
                          <h4 className="text-sm font-medium mb-1">Business Impact</h4>
                          <p className="text-sm text-muted-foreground">{risk.businessImpact}</p>
                        </div>

                        {/* Compliance Finding */}
                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <h4 className="text-sm font-medium text-blue-800 mb-1">Related Finding</h4>
                          <p className="text-sm text-blue-700">{risk.finding}</p>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-between items-center pt-2 border-t">
                          <div className="text-sm text-muted-foreground">
                            Assigned to: <span className="font-medium">{risk.assignee}</span>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              View POAM
                            </Button>
                            <Button variant="outline" size="sm">
                              Update Risk
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
    </div>
  );
}