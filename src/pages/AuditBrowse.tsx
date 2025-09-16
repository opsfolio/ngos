import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  CheckSquare,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Calendar,
  Building2,
  Users,
  AlertCircle,
  CheckCircle,
  Clock,
  Home,
  ChevronRight
} from 'lucide-react';

export default function AuditBrowse() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const audits = [
    {
      id: 1,
      name: 'SOC 2 Type II Annual Audit',
      type: 'External',
      auditor: 'Ernst & Young',
      status: 'In Progress',
      framework: 'SOC 2',
      startDate: '2024-01-15',
      endDate: '2024-03-15',
      progress: 65,
      controlsTested: 89,
      totalControls: 142,
      findings: 3,
      evidenceItems: 156,
      lastActivity: '2024-02-20'
    },
    {
      id: 2,
      name: 'ISO 27001 Pre-Assessment Mock',
      type: 'Mock',
      auditor: 'Internal Security Team',
      status: 'In Progress',
      framework: 'ISO 27001',
      startDate: '2024-02-01',
      endDate: '2024-02-28',
      progress: 45,
      controlsTested: 34,
      totalControls: 76,
      findings: 8,
      evidenceItems: 89,
      lastActivity: '2024-02-19'
    },
    {
      id: 3,
      name: 'HIPAA Compliance Review',
      type: 'External',
      auditor: 'Deloitte & Touche',
      status: 'Completed',
      framework: 'HIPAA',
      startDate: '2023-11-01',
      endDate: '2024-01-31',
      progress: 100,
      controlsTested: 56,
      totalControls: 56,
      findings: 2,
      evidenceItems: 78,
      lastActivity: '2024-01-31'
    },
    {
      id: 4,
      name: 'PCI DSS Level 1 Assessment',
      type: 'External',
      auditor: 'RSM US LLP',
      status: 'Scheduled',
      framework: 'PCI DSS',
      startDate: '2024-03-01',
      endDate: '2024-04-30',
      progress: 0,
      controlsTested: 0,
      totalControls: 98,
      findings: 0,
      evidenceItems: 0,
      lastActivity: '2024-02-15'
    },
    {
      id: 5,
      name: 'GDPR Compliance Mock Audit',
      type: 'Mock',
      auditor: 'Privacy Team',
      status: 'Completed',
      framework: 'GDPR',
      startDate: '2023-12-01',
      endDate: '2023-12-15',
      progress: 100,
      controlsTested: 42,
      totalControls: 42,
      findings: 5,
      evidenceItems: 67,
      lastActivity: '2023-12-15'
    },
    {
      id: 6,
      name: 'FedRAMP Moderate Baseline',
      type: 'External',
      auditor: 'Coalfire Systems',
      status: 'Overdue',
      framework: 'FedRAMP',
      startDate: '2023-10-01',
      endDate: '2024-01-15',
      progress: 78,
      controlsTested: 234,
      totalControls: 325,
      findings: 12,
      evidenceItems: 289,
      lastActivity: '2024-01-20'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'In Progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Scheduled': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      case 'Overdue': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'External' 
      ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
      : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'In Progress': return <Clock className="w-4 h-4 text-blue-500" />;
      case 'Scheduled': return <Calendar className="w-4 h-4 text-gray-500" />;
      case 'Overdue': return <AlertCircle className="w-4 h-4 text-red-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const filteredAudits = audits.filter(audit => {
    const matchesSearch = audit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         audit.auditor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         audit.framework.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || audit.status === statusFilter;
    const matchesType = typeFilter === 'all' || audit.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const summaryStats = {
    total: audits.length,
    completed: audits.filter(a => a.status === 'Completed').length,
    inProgress: audits.filter(a => a.status === 'In Progress').length,
    scheduled: audits.filter(a => a.status === 'Scheduled').length,
    overdue: audits.filter(a => a.status === 'Overdue').length,
  };

  return (
    <div className="px-6 py-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">Browse Audit Sessions</h1>
                  <p className="text-lg text-muted-foreground">
                    View and manage all audit sessions, their progress, and findings
                  </p>
                </div>
                <Link to="/audits/create">
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    New Audit Session
                  </Button>
                </Link>
              </div>

              {/* Search and Filters */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search audits by name, auditor, or framework..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="In Progress">In Progress</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                        <SelectItem value="Scheduled">Scheduled</SelectItem>
                        <SelectItem value="Overdue">Overdue</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Filter by type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="External">External</SelectItem>
                        <SelectItem value="Mock">Mock</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button variant="outline">
                      <Filter className="w-4 h-4 mr-2" />
                      Advanced
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Summary Stats */}
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold">{summaryStats.total}</div>
                    <div className="text-sm text-muted-foreground">Total</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">{summaryStats.inProgress}</div>
                    <div className="text-sm text-muted-foreground">In Progress</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">{summaryStats.completed}</div>
                    <div className="text-sm text-muted-foreground">Completed</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-gray-600">{summaryStats.scheduled}</div>
                    <div className="text-sm text-muted-foreground">Scheduled</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-red-600">{summaryStats.overdue}</div>
                    <div className="text-sm text-muted-foreground">Overdue</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-sm text-muted-foreground mb-1">Showing</div>
                    <div className="text-lg font-bold">{filteredAudits.length}</div>
                  </CardContent>
                </Card>
              </div>

              {/* Audits Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Audit Sessions</CardTitle>
                  <CardDescription>
                    {filteredAudits.length} of {audits.length} audit sessions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Audit Session</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Auditor</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Controls</TableHead>
                        <TableHead>Findings</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredAudits.map((audit) => (
                        <TableRow key={audit.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{audit.name}</div>
                              <div className="text-sm text-muted-foreground">{audit.framework}</div>
                              <div className="text-xs text-muted-foreground">
                                {audit.startDate} - {audit.endDate}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={getTypeColor(audit.type)}>
                              {audit.type === 'External' ? <Building2 className="w-3 h-3 mr-1" /> : <Users className="w-3 h-3 mr-1" />}
                              {audit.type}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">{audit.auditor}</div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span>{audit.progress}%</span>
                              </div>
                              <Progress value={audit.progress} className="w-20" />
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{audit.controlsTested}/{audit.totalControls}</div>
                              <div className="text-xs text-muted-foreground">
                                {audit.evidenceItems} evidence items
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              {audit.findings > 0 && <AlertCircle className="w-4 h-4 text-amber-500" />}
                              <span className="text-sm font-medium">{audit.findings}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {getStatusIcon(audit.status)}
                              <Badge className={getStatusColor(audit.status)}>
                                {audit.status}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Link to={`/audits/${audit.id}`}>
                                <Button variant="outline" size="sm">
                                  <Eye className="w-3 h-3 mr-1" />
                                  View
                                </Button>
                              </Link>
                              <Button variant="outline" size="sm">
                                <Download className="w-3 h-3 mr-1" />
                                Report
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
    </div>
  );
}