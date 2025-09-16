import React, { useState } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { Navigation } from '@/components/layout/Navigation';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { BreadcrumbsBar } from '@/components/layout/BreadcrumbsBar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  CheckCircle, 
  Search, 
  Filter, 
  Plus,
  Clock,
  AlertTriangle,
  User,
  ExternalLink,
  Target,
  Calendar
} from 'lucide-react';

const AssetPOAMs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const poams = [
    {
      id: 'POAM-2024-001',
      title: 'Implement Multi-Factor Authentication',
      priority: 'High',
      status: 'In Progress',
      assignee: 'Security Team',
      dueDate: '2024-02-15',
      progress: 75,
      relatedAssets: 45,
      relatedThreats: 2,
      description: 'Deploy MFA across all critical systems to enhance security posture',
      category: 'Security Enhancement'
    },
    {
      id: 'POAM-2024-002',
      title: 'Patch Critical Vulnerabilities in Web Servers',
      priority: 'Critical',
      status: 'Open',
      assignee: 'IT Operations',
      dueDate: '2024-01-20',
      progress: 25,
      relatedAssets: 12,
      relatedThreats: 3,
      description: 'Apply security patches to address CVE-2024-0001 and related vulnerabilities',
      category: 'Vulnerability Management'
    },
    {
      id: 'POAM-2024-003',
      title: 'Encrypt Data at Rest for Customer Database',
      priority: 'Medium',
      status: 'Completed',
      assignee: 'Database Team',
      dueDate: '2024-01-10',
      progress: 100,
      relatedAssets: 3,
      relatedThreats: 0,
      description: 'Implement encryption for sensitive customer data storage',
      category: 'Data Protection'
    },
    {
      id: 'POAM-2024-004',
      title: 'Update Network Firewall Rules',
      priority: 'Medium',
      status: 'Overdue',
      assignee: 'Network Team',
      dueDate: '2024-01-05',
      progress: 60,
      relatedAssets: 8,
      relatedThreats: 1,
      description: 'Review and update firewall configurations per latest security policies',
      category: 'Network Security'
    }
  ];

  const getPriorityBadge = (priority: string) => {
    const variants: Record<string, string> = {
      'Critical': 'bg-red-100 text-red-800 border-red-200',
      'High': 'bg-orange-100 text-orange-800 border-orange-200',
      'Medium': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Low': 'bg-green-100 text-green-800 border-green-200'
    };
    return <Badge className={variants[priority] || 'bg-gray-100 text-gray-800 border-gray-200'}>{priority}</Badge>;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Completed</Badge>;
      case 'In Progress':
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">In Progress</Badge>;
      case 'Open':
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Open</Badge>;
      case 'Overdue':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Overdue</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getProgressBar = (progress: number, status: string) => {
    const color = status === 'Overdue' ? 'bg-red-500' : progress === 100 ? 'bg-green-500' : 'bg-blue-500';
    return (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full ${color}`} 
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  };

  const isOverdue = (dueDate: string) => {
    return new Date(dueDate) < new Date();
  };

  const filteredPOAMs = poams.filter(poam =>
    poam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    poam.assignee.toLowerCase().includes(searchTerm.toLowerCase()) ||
    poam.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full">
        <Navigation />
        
        <div className="flex w-full pt-16">
          <AppSidebar />
          <SidebarInset className="flex-1">
            <BreadcrumbsBar />
          
            <main className="flex-1 p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                  <Target className="h-8 w-8" />
                  POAMs & Actions
                </h1>
                <p className="text-muted-foreground mt-2">
                  Plan of Action & Milestones for security and compliance tasks
                </p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create POAM
              </Button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total POAMs</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">47</div>
                  <p className="text-xs text-muted-foreground">+8 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Open</CardTitle>
                  <Clock className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">14</div>
                  <p className="text-xs text-muted-foreground">29.8% of total</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Overdue</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Requires immediate attention</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed</CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">30</div>
                  <p className="text-xs text-muted-foreground">63.8% completion rate</p>
                </CardContent>
              </Card>
            </div>

            {/* Filters and Search */}
            <Card>
              <CardHeader>
                <CardTitle>POAM Management</CardTitle>
                <CardDescription>Track and manage Plan of Action & Milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search POAMs..."
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
                        <TableHead>POAM Title</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Assignee</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Assets</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredPOAMs.map((poam) => (
                        <TableRow key={poam.id} className="hover:bg-muted/50">
                          <TableCell className="font-medium">
                            <div>
                              <div className="font-semibold">{poam.title}</div>
                              <div className="text-sm text-muted-foreground">{poam.id}</div>
                              <Badge variant="outline" className="mt-1 text-xs">
                                {poam.category}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell>{getPriorityBadge(poam.priority)}</TableCell>
                          <TableCell>{getStatusBadge(poam.status)}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-muted-foreground" />
                              {poam.assignee}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              {getProgressBar(poam.progress, poam.status)}
                              <div className="text-sm text-muted-foreground">{poam.progress}%</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className={`flex items-center gap-2 ${isOverdue(poam.dueDate) && poam.status !== 'Completed' ? 'text-red-600' : ''}`}>
                              <Calendar className="h-4 w-4" />
                              {poam.dueDate}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{poam.relatedAssets} assets</div>
                              {poam.relatedThreats > 0 && (
                                <div className="text-red-600">{poam.relatedThreats} threats</div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AssetPOAMs;