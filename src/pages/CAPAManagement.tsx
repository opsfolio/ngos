import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  Zap, 
  Search, 
  Filter, 
  Plus,
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  Calendar,
  FileText,
  Target
} from 'lucide-react';

const CAPAManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const capaItems = [
    {
      id: 'CAPA-2024-001',
      title: 'Authentication System Security Enhancement',
      type: 'Corrective',
      priority: 'High',
      status: 'In Progress',
      progress: 75,
      owner: 'Security Team',
      dueDate: '2024-02-15',
      createdDate: '2024-01-10',
      rootCause: 'Insufficient password complexity requirements',
      description: 'Implement enhanced authentication controls following security audit findings',
      correctiveActions: [
        'Implement password complexity policy',
        'Deploy multi-factor authentication',
        'Conduct security awareness training'
      ],
      preventiveActions: [
        'Regular security assessments',
        'Automated compliance monitoring',
        'Security policy updates'
      ],
      verification: 'Penetration testing and audit review',
      effectiveness: 'Pending verification',
      linkedFindings: ['AUDIT-2024-003', 'RISK-001']
    },
    {
      id: 'CAPA-2024-002',
      title: 'Data Backup Process Improvement',
      type: 'Preventive',
      priority: 'Medium',
      status: 'Completed',
      progress: 100,
      owner: 'IT Operations',
      dueDate: '2024-01-30',
      createdDate: '2024-01-05',
      rootCause: 'Risk mitigation for potential data loss',
      description: 'Enhance backup procedures to prevent data loss incidents',
      correctiveActions: [],
      preventiveActions: [
        'Implement automated backup verification',
        'Establish off-site backup storage',
        'Create backup recovery procedures'
      ],
      verification: 'Backup recovery testing completed successfully',
      effectiveness: 'Effective - All backups verified',
      linkedFindings: ['RISK-002']
    },
    {
      id: 'CAPA-2024-003',
      title: 'Quality Control Process Standardization',
      type: 'Corrective',
      priority: 'Critical',
      status: 'Planning',
      progress: 25,
      owner: 'Quality Team',
      dueDate: '2024-03-15',
      createdDate: '2024-01-20',
      rootCause: 'Inconsistent quality control procedures across departments',
      description: 'Standardize QC processes to ensure consistent quality outcomes',
      correctiveActions: [
        'Document standardized QC procedures',
        'Train staff on new procedures',
        'Implement QC checkpoints'
      ],
      preventiveActions: [
        'Regular process audits',
        'Continuous improvement program',
        'QC metrics monitoring'
      ],
      verification: 'Internal audit and management review',
      effectiveness: 'Not yet assessed',
      linkedFindings: ['NC-2024-005', 'AUDIT-2024-001']
    },
    {
      id: 'CAPA-2024-004',
      title: 'Document Control System Update',
      type: 'Corrective',
      priority: 'Medium',
      status: 'Overdue',
      progress: 60,
      owner: 'Document Control',
      dueDate: '2024-01-25',
      createdDate: '2024-01-01',
      rootCause: 'Outdated document management system causing version control issues',
      description: 'Upgrade document control system to improve version management',
      correctiveActions: [
        'System upgrade and migration',
        'Staff training on new system',
        'Data validation and cleanup'
      ],
      preventiveActions: [
        'Regular system updates',
        'User access reviews',
        'Document lifecycle management'
      ],
      verification: 'System validation and user acceptance testing',
      effectiveness: 'In progress',
      linkedFindings: ['NC-2024-002']
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      'Planning': 'bg-blue-100 text-blue-800 border-blue-200',
      'In Progress': 'bg-orange-100 text-orange-800 border-orange-200',
      'Completed': 'bg-green-100 text-green-800 border-green-200',
      'Overdue': 'bg-red-100 text-red-800 border-red-200',
      'On Hold': 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return <Badge className={variants[status] || 'bg-gray-100 text-gray-800 border-gray-200'}>{status}</Badge>;
  };

  const getPriorityBadge = (priority: string) => {
    const variants: Record<string, string> = {
      'Critical': 'bg-red-100 text-red-800 border-red-200',
      'High': 'bg-orange-100 text-orange-800 border-orange-200',
      'Medium': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Low': 'bg-green-100 text-green-800 border-green-200'
    };
    return <Badge className={variants[priority] || 'bg-gray-100 text-gray-800 border-gray-200'}>{priority}</Badge>;
  };

  const getTypeBadge = (type: string) => {
    const variants: Record<string, string> = {
      'Corrective': 'bg-red-100 text-red-800 border-red-200',
      'Preventive': 'bg-blue-100 text-blue-800 border-blue-200'
    };
    return <Badge className={variants[type] || 'bg-gray-100 text-gray-800 border-gray-200'}>{type}</Badge>;
  };

  const isOverdue = (dueDate: string, status: string) => {
    return new Date(dueDate) < new Date() && status !== 'Completed';
  };

  const filteredCAPAs = capaItems.filter(capa =>
    capa.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    capa.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    capa.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                    <Zap className="h-8 w-8" />
                    CAPA Management
                  </h1>
                  <p className="text-muted-foreground mt-2">
                    Corrective and Preventive Actions for continuous improvement
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New CAPA
                  </Button>
                  <Button variant="outline">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Analytics
                  </Button>
                </div>
              </div>

              {/* CAPA Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total CAPAs</CardTitle>
                    <Zap className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">34</div>
                    <p className="text-xs text-muted-foreground">+5 this month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Open CAPAs</CardTitle>
                    <Clock className="h-4 w-4 text-orange-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">14</div>
                    <p className="text-xs text-muted-foreground">3 overdue</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Completed</CardTitle>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">20</div>
                    <p className="text-xs text-muted-foreground">58.8% completion rate</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Avg Resolution Time</CardTitle>
                    <Target className="h-4 w-4 text-blue-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">28d</div>
                    <p className="text-xs text-muted-foreground">-5d from target</p>
                  </CardContent>
                </Card>
              </div>

              {/* CAPA Table */}
              <Card>
                <CardHeader>
                  <CardTitle>CAPA Items</CardTitle>
                  <CardDescription>Track and manage corrective and preventive actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Search CAPAs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button variant="outline">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>

                  <div className="border rounded-lg">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>CAPA ID</TableHead>
                          <TableHead>Title</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Priority</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Progress</TableHead>
                          <TableHead>Owner</TableHead>
                          <TableHead>Due Date</TableHead>
                          <TableHead>Linked Items</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredCAPAs.map((capa) => (
                          <TableRow key={capa.id} className="hover:bg-muted/50">
                            <TableCell className="font-medium">{capa.id}</TableCell>
                            <TableCell>
                              <div className="max-w-xs">
                                <p className="font-semibold">{capa.title}</p>
                                <p className="text-sm text-muted-foreground line-clamp-2">{capa.description}</p>
                              </div>
                            </TableCell>
                            <TableCell>{getTypeBadge(capa.type)}</TableCell>
                            <TableCell>{getPriorityBadge(capa.priority)}</TableCell>
                            <TableCell>{getStatusBadge(capa.status)}</TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <Progress value={capa.progress} className="h-2" />
                                <div className="text-sm text-muted-foreground">{capa.progress}%</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-muted-foreground" />
                                {capa.owner}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className={`flex items-center gap-2 ${isOverdue(capa.dueDate, capa.status) ? 'text-red-600' : ''}`}>
                                <Calendar className="h-4 w-4" />
                                {capa.dueDate}
                                {isOverdue(capa.dueDate, capa.status) && (
                                  <AlertTriangle className="h-4 w-4 text-red-500" />
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-1 flex-wrap">
                                {capa.linkedFindings.map((finding) => (
                                  <Badge key={finding} variant="outline" className="text-xs">
                                    {finding}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              {/* CAPA Details - Expanded View for Selected Item */}
              <Card>
                <CardHeader>
                  <CardTitle>CAPA Details: {capaItems[0].id}</CardTitle>
                  <CardDescription>{capaItems[0].title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Root Cause Analysis</h4>
                        <p className="text-sm text-muted-foreground">{capaItems[0].rootCause}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Corrective Actions</h4>
                        <ul className="text-sm space-y-1">
                          {capaItems[0].correctiveActions.map((action, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Preventive Actions</h4>
                        <ul className="text-sm space-y-1">
                          {capaItems[0].preventiveActions.map((action, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Verification Method</h4>
                        <p className="text-sm text-muted-foreground">{capaItems[0].verification}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Effectiveness Assessment</h4>
                        <p className="text-sm text-muted-foreground">{capaItems[0].effectiveness}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Timeline</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Created:</span>
                            <span>{capaItems[0].createdDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Due Date:</span>
                            <span>{capaItems[0].dueDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Progress:</span>
                            <span>{capaItems[0].progress}%</span>
                          </div>
                        </div>
                        <Progress value={capaItems[0].progress} className="mt-2" />
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Status & Approval</h4>
                        <div className="flex items-center gap-2">
                          {getStatusBadge(capaItems[0].status)}
                          {getPriorityBadge(capaItems[0].priority)}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
    </div>
  );
};

export default CAPAManagement;