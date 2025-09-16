import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  FileText,
  Plus,
  Search,
  Filter,
  AlertTriangle,
  Clock,
  Users,
  Target,
  ExternalLink,
  Edit,
  Archive,
  Download
} from 'lucide-react';

export default function RiskRegister() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterSeverity, setFilterSeverity] = useState('all');
  const [activeTab, setActiveTab] = useState('all');

  const risks = [
    {
      id: 'RISK-2024-001',
      title: 'Cross-Border Data Transfer Risk',
      description: 'EU personal data transfers to US cloud providers lack adequate safeguards',
      category: 'Privacy Risk',
      severity: 'Critical',
      likelihood: 'High',
      impact: 'High',
      riskScore: 95,
      status: 'Open',
      owner: 'Privacy Team',
      assignee: 'Sarah Johnson',
      identifiedDate: '2024-01-15',
      dueDate: '2024-02-28',
      lastReviewed: '2024-02-20',
      source: 'GDPR Assessment',
      framework: 'GDPR',
      mitigationPlan: 'Implement Standard Contractual Clauses and encryption',
      currentControls: 'Basic data processing agreements',
      residualRisk: 'High',
      treatmentStrategy: 'Mitigate'
    },
    {
      id: 'RISK-2024-002',
      title: 'Consent Management Non-Compliance',
      description: 'Website consent mechanisms lack proper granular controls and withdrawal options',
      category: 'Privacy Risk',
      severity: 'High',
      likelihood: 'High',
      impact: 'High',
      riskScore: 85,
      status: 'In Progress',
      owner: 'Privacy Team',
      assignee: 'Michael Chen',
      identifiedDate: '2024-01-20',
      dueDate: '2024-03-15',
      lastReviewed: '2024-02-18',
      source: 'Privacy Audit',
      framework: 'GDPR/CCPA',
      mitigationPlan: 'Implement compliant consent management platform',
      currentControls: 'Basic cookie banner, legal notices',
      residualRisk: 'Medium',
      treatmentStrategy: 'Mitigate'
    },
    {
      id: 'RISK-2024-003',
      title: 'Vendor Privacy Assessment Gap',
      description: 'Critical data processors lack current privacy impact assessments and data processing agreements',
      category: 'Privacy Risk',
      severity: 'High',
      likelihood: 'Medium',
      impact: 'High',
      riskScore: 80,
      status: 'Open',
      owner: 'Privacy Team',
      assignee: 'Lisa Brown',
      identifiedDate: '2024-02-01',
      dueDate: '2024-04-30',
      lastReviewed: '2024-02-15',
      source: 'Vendor Review',
      framework: 'GDPR',
      mitigationPlan: 'Complete vendor privacy assessments and update DPAs',
      currentControls: 'Basic vendor contracts, limited due diligence',
      residualRisk: 'Medium',
      treatmentStrategy: 'Mitigate'
    },
    {
      id: 'RISK-2024-004',
      title: 'Data Retention Non-Compliance',
      description: 'Customer personal data retained beyond legal requirements without proper justification',
      category: 'Privacy Risk',
      severity: 'Medium',
      likelihood: 'High',
      impact: 'Medium',
      riskScore: 70,
      status: 'Planning',
      owner: 'Privacy Team',
      assignee: 'David Wilson',
      identifiedDate: '2024-02-05',
      dueDate: '2024-04-20',
      lastReviewed: '2024-02-19',
      source: 'Data Audit',
      framework: 'GDPR/CCPA',
      mitigationPlan: 'Implement automated data retention and deletion policies',
      currentControls: 'Manual data reviews, basic retention guidelines',
      residualRisk: 'Low',
      treatmentStrategy: 'Mitigate'
    },
    {
      id: 'RISK-2024-005',
      title: 'Data Subject Rights Response Delays',
      description: 'GDPR data subject access requests consistently exceeding required 30-day response timeframe',
      category: 'Privacy Risk',
      severity: 'Medium',
      likelihood: 'High',
      impact: 'Medium',
      riskScore: 65,
      status: 'In Progress',
      owner: 'Privacy Team',
      assignee: 'Jennifer Walsh',
      identifiedDate: '2024-01-10',
      dueDate: '2024-03-15',
      lastReviewed: '2024-02-20',
      source: 'Privacy Audit',
      framework: 'GDPR',
      mitigationPlan: 'Implement automated data subject request management system',
      currentControls: 'Manual email processing, spreadsheet tracking',
      residualRisk: 'Low',
      treatmentStrategy: 'Mitigate'
    }
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
      case 'mitigated': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'privacy risk': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'poam-related': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'audit finding': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'operational': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'compliance': return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300';
      case 'technical': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const filteredRisks = risks.filter(risk => {
    const matchesSearch = risk.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         risk.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         risk.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || risk.category === filterCategory;
    const matchesSeverity = filterSeverity === 'all' || risk.severity.toLowerCase() === filterSeverity.toLowerCase();
    
    if (activeTab === 'all') return matchesSearch && matchesCategory && matchesSeverity;
    if (activeTab === 'critical') return matchesSearch && matchesCategory && risk.severity === 'Critical';
    if (activeTab === 'overdue') {
      const dueDate = new Date(risk.dueDate);
      const today = new Date();
      return matchesSearch && matchesCategory && dueDate < today;
    }
    
    return matchesSearch && matchesCategory && matchesSeverity;
  });

  return (
    <div className="px-6 py-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">Risk Register</h1>
                    <p className="text-lg text-muted-foreground">
                      Comprehensive register of all identified risks including privacy, security, and operational risks
                    </p>
                  </div>
                <div className="flex gap-3">
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Risk
                  </Button>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search risks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Privacy Risk">Privacy Risk</SelectItem>
                    <SelectItem value="POAM-Related">POAM-Related</SelectItem>
                    <SelectItem value="Audit Finding">Audit Finding</SelectItem>
                    <SelectItem value="Operational">Operational</SelectItem>
                    <SelectItem value="Compliance">Compliance</SelectItem>
                    <SelectItem value="Technical">Technical</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterSeverity} onValueChange={setFilterSeverity}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Severities</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                <TabsList>
                  <TabsTrigger value="all">All Risks ({risks.length})</TabsTrigger>
                  <TabsTrigger value="critical">Critical ({risks.filter(r => r.severity === 'Critical').length})</TabsTrigger>
                  <TabsTrigger value="overdue">Overdue ({risks.filter(r => new Date(r.dueDate) < new Date()).length})</TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Risk Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Risk Register ({filteredRisks.length} risks)</CardTitle>
                  <CardDescription>
                    Detailed view of all identified risks with mitigation status
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Risk ID</TableHead>
                          <TableHead>Title</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Severity</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Owner</TableHead>
                          <TableHead>Due Date</TableHead>
                          <TableHead>Risk Score</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredRisks.map((risk) => (
                          <TableRow key={risk.id}>
                            <TableCell className="font-medium">{risk.id}</TableCell>
                            <TableCell>
                              <div>
                                <div className="font-medium">{risk.title}</div>
                                <div className="text-sm text-muted-foreground line-clamp-2">
                                  {risk.description}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge className={getCategoryColor(risk.category)}>
                                {risk.category}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge className={getSeverityColor(risk.severity)}>
                                {risk.severity}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge className={getStatusColor(risk.status)}>
                                {risk.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{risk.owner}</TableCell>
                            <TableCell>
                              <div className={new Date(risk.dueDate) < new Date() ? 'text-red-600 font-medium' : ''}>
                                {risk.dueDate}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="text-center">
                                <div className="font-bold">{risk.riskScore}</div>
                                <div className="text-xs text-muted-foreground">/ 100</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <Edit className="w-3 h-3" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <ExternalLink className="w-3 h-3" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
    </div>
  );
}