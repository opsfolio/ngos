import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import {
  AlertCircle,
  Calendar,
  Clock,
  Filter,
  Plus,
  Search,
  Shield,
  User,
  FileText,
  ExternalLink,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  XCircle,
  HelpCircle,
  ChevronDown,
  Lock,
  Users,
  Globe,
  Eye,
  Bell,
  UserX,
  Database,
  Scale,
  Timer
} from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

// Mock incident data with privacy-focused incidents
const incidents = [
  {
    id: 'INC-2024-001',
    title: 'GDPR Data Breach - Unauthorized Database Access',
    category: 'Privacy',
    severity: 'Critical',
    status: 'Open',
    assignee: 'Jane Smith (CPO)',
    reporter: 'Security System',
    reportedDate: '2024-01-15',
    dueDate: '2024-01-17', // 72-hour GDPR notification rule
    description: 'Unauthorized access to customer database containing PII. Potential GDPR Article 33 breach notification required.',
    affectedAssets: ['Customer DB', 'PII Records'],
    relatedThreats: ['CVE-2024-0001'],
    relatedPOAMs: ['POAM-2024-003'],
    progress: 30,
    priority: 'P0',
    regulatoryNotification: 'GDPR - 72hr notification pending',
    dataSubjects: 15000,
    privacyImpact: 'High',
    crossBorderTransfer: true,
    privacyFrameworks: ['GDPR', 'CCPA']
  },
  {
    id: 'INC-2024-002',
    title: 'Data Subject Rights Violation - CCPA Request Delay',
    category: 'Privacy',
    severity: 'High',
    status: 'In Progress',
    assignee: 'Sarah Johnson',
    reporter: 'Customer Service',
    reportedDate: '2024-01-12',
    dueDate: '2024-01-22',
    description: 'Customer right to deletion request not processed within CCPA 45-day requirement',
    affectedAssets: ['Customer Portal', 'Data Management System'],
    relatedThreats: [],
    relatedPOAMs: ['POAM-2024-001'],
    progress: 70,
    priority: 'P1',
    regulatoryNotification: 'CCPA - Internal review',
    dataSubjects: 1,
    privacyImpact: 'Medium',
    crossBorderTransfer: false,
    privacyFrameworks: ['CCPA']
  },
  {
    id: 'INC-2024-003',
    title: 'Third-Party Vendor Privacy Incident',
    category: 'Privacy',
    severity: 'High',
    status: 'Open',
    assignee: 'Mike Wilson (CPO)',
    reporter: 'Vendor Notification',
    reportedDate: '2024-01-14',
    dueDate: '2024-01-19',
    description: 'Cloud service provider reported data exposure affecting shared customer data',
    affectedAssets: ['Cloud Storage', 'Vendor Systems'],
    relatedThreats: [],
    relatedPOAMs: ['POAM-2024-005'],
    progress: 45,
    priority: 'P1',
    regulatoryNotification: 'Multi-jurisdictional assessment pending',
    dataSubjects: 8500,
    privacyImpact: 'High',
    crossBorderTransfer: true,
    privacyFrameworks: ['GDPR', 'PIPEDA', 'CCPA']
  },
  {
    id: 'INC-2024-004',
    title: 'Unauthorized Access Attempt Detected',
    category: 'Security',
    severity: 'High',
    status: 'Open',
    assignee: 'John Smith',
    reporter: 'Security System',
    reportedDate: '2024-01-15',
    dueDate: '2024-01-25',
    description: 'Multiple failed login attempts from suspicious IP addresses',
    affectedAssets: ['Web Server 01', 'Database Server'],
    relatedThreats: ['CVE-2024-0001'],
    relatedPOAMs: ['POAM-2024-003'],
    progress: 65,
    priority: 'P1'
  },
  {
    id: 'INC-2024-005',
    title: 'Employee Privacy Training Violation',
    category: 'Privacy',
    severity: 'Medium',
    status: 'In Progress',
    assignee: 'Lisa Chen (CPO)',
    reporter: 'HR Department',
    reportedDate: '2024-01-13',
    dueDate: '2024-01-20',
    description: 'Employee accessed customer records beyond job requirements, potential privacy violation',
    affectedAssets: ['Customer CRM', 'Employee Access Logs'],
    relatedThreats: [],
    relatedPOAMs: ['POAM-2024-006'],
    progress: 80,
    priority: 'P2',
    regulatoryNotification: 'Internal investigation',
    dataSubjects: 250,
    privacyImpact: 'Medium',
    crossBorderTransfer: false,
    privacyFrameworks: ['Internal Policy', 'GDPR']
  },
  {
    id: 'INC-2024-006',
    title: 'Compliance Audit Finding',
    category: 'Compliance',
    severity: 'Medium',
    status: 'Resolved',
    assignee: 'Mike Wilson',
    reporter: 'External Auditor',
    reportedDate: '2024-01-10',
    dueDate: '2024-01-20',
    description: 'Missing documentation for access control procedures',
    affectedAssets: ['Policy Management System'],
    relatedThreats: [],
    relatedPOAMs: ['POAM-2024-002'],
    progress: 100,
    priority: 'P2'
  }
];

export default function IncidentManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [isHelpExpanded, setIsHelpExpanded] = useState(false);

  const getSeverityBadge = (severity: string) => {
    const severityConfig = {
      'Critical': 'destructive',
      'High': 'destructive',
      'Medium': 'secondary',
      'Low': 'outline'
    };
    return (
      <Badge variant={severityConfig[severity as keyof typeof severityConfig] as any}>
        {severity}
      </Badge>
    );
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'Open': { variant: 'destructive', icon: XCircle },
      'In Progress': { variant: 'secondary', icon: Clock },
      'Resolved': { variant: 'default', icon: CheckCircle }
    };
    const config = statusConfig[status as keyof typeof statusConfig];
    const IconComponent = config?.icon || AlertCircle;
    
    return (
      <Badge variant={config?.variant as any} className="flex items-center gap-1">
        <IconComponent className="h-3 w-3" />
        {status}
      </Badge>
    );
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      'Security': Shield,
      'Privacy': Lock,
      'Compliance': FileText,
      'Safety': AlertTriangle
    };
    return icons[category as keyof typeof icons] || AlertCircle;
  };

  const getProgressColor = (progress: number, status: string) => {
    if (status === 'Resolved') return 'bg-green-500';
    if (progress >= 75) return 'bg-blue-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const filteredIncidents = incidents.filter(incident => {
    const matchesSearch = incident.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         incident.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         incident.assignee.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'open' && incident.status === 'Open') ||
                      (activeTab === 'in-progress' && incident.status === 'In Progress') ||
                      (activeTab === 'resolved' && incident.status === 'Resolved') ||
                      (activeTab === 'critical' && incident.severity === 'Critical') ||
                      (activeTab === 'privacy' && incident.category === 'Privacy') ||
                      (activeTab === 'regulatory' && incident.category === 'Privacy' && 'regulatoryNotification' in incident);
    
    return matchesSearch && matchesTab;
  });

  const incidentMetrics = {
    total: incidents.length,
    open: incidents.filter(i => i.status === 'Open').length,
    inProgress: incidents.filter(i => i.status === 'In Progress').length,
    critical: incidents.filter(i => i.severity === 'Critical').length,
    privacy: incidents.filter(i => i.category === 'Privacy').length,
    regulatoryNotifications: incidents.filter(i => 'regulatoryNotification' in i && i.regulatoryNotification && !i.regulatoryNotification.includes('Internal')).length,
    avgResolutionTime: '4.2 days'
  };

  return (
    <div className="px-6 py-8 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Incident Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage security, privacy, safety, and compliance incidents with regulatory notification support and CPO workflow integration
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Report Incident
        </Button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Incidents</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{incidentMetrics.total}</div>
            <p className="text-xs text-muted-foreground">
              Across all categories
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Privacy Incidents</CardTitle>
            <Lock className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{incidentMetrics.privacy}</div>
            <p className="text-xs text-muted-foreground">
              Data & privacy related
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Regulatory Alerts</CardTitle>
            <Bell className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{incidentMetrics.regulatoryNotifications}</div>
            <p className="text-xs text-muted-foreground">
              Notification required
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{incidentMetrics.open}</div>
            <p className="text-xs text-muted-foreground">
              Require attention
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{incidentMetrics.critical}</div>
            <p className="text-xs text-muted-foreground">
              High priority incidents
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Resolution</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{incidentMetrics.avgResolutionTime}</div>
            <p className="text-xs text-muted-foreground">
              Time to resolve
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search incidents by ID, title, or assignee..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="all">All Incidents</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
          <TabsTrigger value="open">Open</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="critical">Critical</TabsTrigger>
          <TabsTrigger value="resolved">Resolved</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Incident Registry
                {activeTab === 'privacy' && <Badge variant="outline" className="ml-2">CPO View</Badge>}
                {activeTab === 'regulatory' && <Badge variant="outline" className="ml-2">Notifications Required</Badge>}
              </CardTitle>
              <CardDescription>
                Track and manage security, privacy, safety, and compliance incidents with regulatory notification workflows
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Incident</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Assignee</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Privacy Impact</TableHead>
                    <TableHead>Integrations</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredIncidents.map((incident) => {
                    const CategoryIcon = getCategoryIcon(incident.category);
                    const isOverdue = new Date(incident.dueDate) < new Date() && incident.status !== 'Resolved';
                    
                    return (
                      <TableRow key={incident.id}>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <CategoryIcon className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">{incident.id}</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {incident.title}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{incident.category}</Badge>
                        </TableCell>
                        <TableCell>{getSeverityBadge(incident.severity)}</TableCell>
                        <TableCell>{getStatusBadge(incident.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{incident.assignee}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <Progress 
                              value={incident.progress} 
                              className="w-16"
                            />
                            <span className="text-xs text-muted-foreground">
                              {incident.progress}%
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className={`flex items-center gap-2 ${isOverdue ? 'text-red-600' : ''}`}>
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{incident.dueDate}</span>
                            {incident.category === 'Privacy' && 'regulatoryNotification' in incident && (
                              <Timer className="h-3 w-3 text-orange-500" />
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            {incident.category === 'Privacy' && 'privacyImpact' in incident && (
                              <div className="flex items-center gap-1">
                                <Lock className="h-3 w-3 text-purple-500" />
                                <span className="text-xs text-purple-600">
                                  {(incident as any).privacyImpact} Impact
                                </span>
                              </div>
                            )}
                            {incident.category === 'Privacy' && 'dataSubjects' in incident && (
                              <div className="flex items-center gap-1">
                                <Users className="h-3 w-3 text-blue-500" />
                                <span className="text-xs text-blue-600">
                                  {(incident as any).dataSubjects} subjects
                                </span>
                              </div>
                            )}
                            {incident.category === 'Privacy' && 'regulatoryNotification' in incident && (
                              <div className="flex items-center gap-1">
                                <Bell className="h-3 w-3 text-orange-500" />
                                <span className="text-xs text-orange-600">
                                  {(incident as any).regulatoryNotification}
                                </span>
                              </div>
                            )}
                            {incident.category === 'Privacy' && 'crossBorderTransfer' in incident && (incident as any).crossBorderTransfer && (
                              <div className="flex items-center gap-1">
                                <Globe className="h-3 w-3 text-green-500" />
                                <span className="text-xs text-green-600">
                                  Cross-border
                                </span>
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            {incident.relatedPOAMs.length > 0 && (
                              <div className="flex items-center gap-1">
                                <FileText className="h-3 w-3 text-blue-500" />
                                <span className="text-xs text-blue-600">
                                  {incident.relatedPOAMs.length} POAM(s)
                                </span>
                              </div>
                            )}
                            {incident.relatedThreats.length > 0 && (
                              <div className="flex items-center gap-1">
                                <Shield className="h-3 w-3 text-red-500" />
                                <span className="text-xs text-red-600">
                                  {incident.relatedThreats.length} Threat(s)
                                </span>
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* CaaS Help Section */}
      <Card className="border-blue-200 bg-blue-50/50">
        <Collapsible open={isHelpExpanded} onOpenChange={setIsHelpExpanded}>
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-blue-100/50 transition-colors">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-blue-900">Need help with incident response?</h3>
              </div>
              <ChevronDown 
                className={`h-4 w-4 text-blue-600 transition-transform ${
                  isHelpExpanded ? 'rotate-180' : ''
                }`} 
              />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="px-4 pb-4 space-y-3">
              <p className="text-sm text-blue-800">
                Our Compliance-as-a-Service team can assist with incident response planning, 
                forensic investigation, regulatory reporting, and privacy impact assessments.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="space-y-2">
                  <h4 className="font-medium text-blue-900">Incident Response</h4>
                  <ul className="space-y-1 text-blue-700">
                    <li>• IR plan development & testing</li>
                    <li>• Forensic investigation support</li>
                    <li>• Crisis communication templates</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-blue-900">Privacy & Compliance</h4>
                  <ul className="space-y-1 text-blue-700">
                    <li>• GDPR/CCPA breach notifications</li>
                    <li>• Privacy impact assessments</li>
                    <li>• Data subject rights management</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-blue-900">Regulatory Reporting</h4>
                  <ul className="space-y-1 text-blue-700">
                    <li>• Multi-jurisdictional compliance</li>
                    <li>• Regulatory breach notifications</li>
                    <li>• Post-incident assessment</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="text-blue-700 border-blue-300 hover:bg-blue-100">
                  Schedule Consultation
                </Button>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-100">
                  Learn More
                </Button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </div>
  );
}