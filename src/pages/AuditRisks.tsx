import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import {
  Shield,
  AlertTriangle,
  Search,
  ExternalLink,
  Calendar,
  Users,
  FileText,
  Clock,
  Target,
  TrendingUp
} from 'lucide-react';

export default function AuditRisks() {
  const [searchQuery, setSearchQuery] = useState('');

  const auditRisks = [
    {
      id: 'AR-2024-001',
      title: 'Privacy Notice Compliance Gap',
      description: 'GDPR audit reveals privacy notices lack required disclosures for data processing activities',
      auditType: 'GDPR Compliance Review',
      auditor: 'Data Protection Authority',
      findingId: 'GDPR-12-01',
      severity: 'High',
      riskScore: 85,
      status: 'In Progress',
      identifiedDate: '2024-01-20',
      dueDate: '2024-03-15',
      owner: 'Privacy Team',
      assignee: 'Sarah Johnson',
      progress: 65,
      mitigationPlan: 'Update privacy notices with comprehensive processing disclosures and legal basis',
      currentActions: [
        'Legal basis assessment completed',
        'Privacy notice templates updated',
        'Stakeholder review in progress'
      ],
      linkedPOAM: 'POAM-001',
      complianceFramework: 'GDPR',
      controlFamily: 'Article 12 - Transparent Information'
    },
    {
      id: 'AR-2024-002',
      title: 'Consent Management Deficiencies',
      description: 'CCPA audit identified inadequate consent withdrawal mechanisms and granular controls',
      auditType: 'CCPA Compliance Assessment',
      auditor: 'Privacy Law Firm',
      findingId: 'CCPA-1798-03',
      severity: 'High',
      riskScore: 80,
      status: 'Planning',
      identifiedDate: '2024-02-05',
      dueDate: '2024-04-20',
      owner: 'Privacy Team',
      assignee: 'Lisa Brown',
      progress: 25,
      mitigationPlan: 'Implement compliant consent management platform with granular controls',
      currentActions: [
        'Current consent flows audited',
        'Platform vendor evaluation in progress',
        'Legal requirements analysis completed'
      ],
      linkedPOAM: 'POAM-002',
      complianceFramework: 'CCPA',
      controlFamily: 'Section 1798.135 - Right to Opt-Out'
    },
    {
      id: 'AR-2024-003',
      title: 'Data Retention Policy Violations',
      description: 'Privacy audit identified personal data retained beyond legal requirements without justification',
      auditType: 'Privacy Compliance Review',
      auditor: 'Privacy Consulting Firm',
      findingId: 'PRI-RET-02',
      severity: 'High',
      riskScore: 80,
      status: 'Open',
      identifiedDate: '2024-01-30',
      dueDate: '2024-03-30',
      owner: 'Privacy Team',
      assignee: 'Michael Chen',
      progress: 15,
      mitigationPlan: 'Implement automated data retention and deletion policies across all systems',
      currentActions: [
        'Data retention audit completed',
        'Automated deletion tools evaluation started'
      ],
      linkedPOAM: null,
      complianceFramework: 'GDPR/CCPA',
      controlFamily: 'Data Minimization and Retention'
    },
    {
      id: 'AR-2024-004',
      title: 'Vendor Privacy Assessment Gaps',
      description: 'Third-party processors lack current privacy impact assessments and data processing agreements',
      auditType: 'Vendor Privacy Assessment',
      auditor: 'Privacy Team',
      findingId: 'VPA-2024-05',
      severity: 'Medium',
      riskScore: 65,
      status: 'In Progress',
      identifiedDate: '2024-02-01',
      dueDate: '2024-04-30',
      owner: 'Privacy Team',
      assignee: 'Jennifer Walsh',
      progress: 40,
      mitigationPlan: 'Complete vendor privacy assessments and update data processing agreements',
      currentActions: [
        'Vendor data processing inventory completed',
        'Privacy assessment templates developed',
        'Critical vendor assessments in progress'
      ],
      linkedPOAM: null,
      complianceFramework: 'GDPR',
      controlFamily: 'Article 28 - Processor Obligations'
    }
  ];

  const auditStats = [
    { label: 'Total Audit Risks', value: '12', trend: '+3', icon: Shield },
    { label: 'Privacy Findings', value: '7', trend: '+4', icon: Users },
    { label: 'In Progress', value: '8', trend: '+2', icon: TrendingUp },
    { label: 'Overdue', value: '1', trend: '-2', icon: Clock }
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
      case 'open': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'in progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'planning': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      case 'resolved': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const filteredRisks = auditRisks.filter(risk =>
    risk.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    risk.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    risk.auditType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-6 py-8">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">Audit-Related Risks</h1>
                <p className="text-lg text-muted-foreground">
                  Risks identified through audit findings including privacy compliance gaps and data protection issues
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {auditStats.map((stat, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                      <stat.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-muted-foreground">{stat.trend}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search audit risks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Audit Risks */}
              <div className="space-y-6">
                {filteredRisks.map((risk) => (
                  <Card key={risk.id} className="bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline">{risk.id}</Badge>
                            <Badge className={getSeverityColor(risk.severity)}>
                              {risk.severity}
                            </Badge>
                            <Badge className={getStatusColor(risk.status)}>
                              {risk.status}
                            </Badge>
                            {risk.linkedPOAM && (
                              <Badge variant="secondary" className="bg-orange-50 text-orange-700">
                                {risk.linkedPOAM}
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-lg">{risk.title}</CardTitle>
                          <CardDescription className="mt-1">{risk.description}</CardDescription>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Shield className="w-4 h-4" />
                              <span>{risk.auditType}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{risk.auditor}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>Due: {risk.dueDate}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Target className="w-4 h-4" />
                              <span>{risk.owner}</span>
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
                            <span>Mitigation Progress</span>
                            <span>{risk.progress}%</span>
                          </div>
                          <Progress value={risk.progress} className="h-2" />
                        </div>

                        {/* Audit Details */}
                        <div className="p-3 bg-muted/30 rounded-lg">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                            <div>
                              <span className="text-muted-foreground">Finding ID:</span>
                              <div className="font-medium">{risk.findingId}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Framework:</span>
                              <div className="font-medium">{risk.complianceFramework}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Control Family:</span>
                              <div className="font-medium">{risk.controlFamily}</div>
                            </div>
                          </div>
                        </div>

                        {/* Mitigation Plan */}
                        <div>
                          <h4 className="text-sm font-medium mb-2">Mitigation Plan</h4>
                          <p className="text-sm text-muted-foreground mb-3">{risk.mitigationPlan}</p>
                          
                          <h5 className="text-sm font-medium mb-2">Current Actions</h5>
                          <ul className="space-y-1">
                            {risk.currentActions.map((action, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                {action}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-between items-center pt-2 border-t">
                          <div className="text-sm text-muted-foreground">
                            Assigned to: <span className="font-medium">{risk.assignee}</span>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            {risk.linkedPOAM && (
                              <Button variant="outline" size="sm">
                                <ExternalLink className="w-3 h-3 mr-1" />
                                View POAM
                              </Button>
                            )}
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