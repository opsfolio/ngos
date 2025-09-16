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
  AlertTriangle, 
  Search, 
  Filter, 
  Plus,
  Shield,
  Clock,
  ExternalLink,
  Bug,
  Zap,
  Target
} from 'lucide-react';

const AssetThreats = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const threats = [
    {
      id: 'THR-001',
      cve: 'CVE-2024-0001',
      title: 'Remote Code Execution in Apache HTTP Server',
      severity: 'Critical',
      score: 9.8,
      affectedAssets: 12,
      status: 'Open',
      discovered: '2024-01-15',
      description: 'Buffer overflow vulnerability allowing remote code execution',
      remediation: 'Update to Apache HTTP Server 2.4.58'
    },
    {
      id: 'THR-002',
      cve: 'CVE-2024-0002',
      title: 'SQL Injection in Customer Portal',
      severity: 'High',
      score: 8.1,
      affectedAssets: 3,
      status: 'In Progress',
      discovered: '2024-01-14',
      description: 'SQL injection vulnerability in login form',
      remediation: 'Deploy security patch v2.1.3'
    },
    {
      id: 'THR-003',
      cve: 'CVE-2024-0003',
      title: 'Cross-Site Scripting (XSS) Vulnerability',
      severity: 'Medium',
      score: 6.1,
      affectedAssets: 8,
      status: 'Open',
      discovered: '2024-01-13',
      description: 'Reflected XSS in search functionality',
      remediation: 'Implement input validation and output encoding'
    },
    {
      id: 'THR-004',
      cve: 'CVE-2024-0004',
      title: 'Privilege Escalation in Linux Kernel',
      severity: 'High',
      score: 7.8,
      affectedAssets: 15,
      status: 'Resolved',
      discovered: '2024-01-10',
      description: 'Local privilege escalation vulnerability',
      remediation: 'Kernel update applied successfully'
    }
  ];

  const getSeverityBadge = (severity: string, score: number) => {
    const variants: Record<string, string> = {
      'Critical': 'bg-red-100 text-red-800 border-red-200',
      'High': 'bg-orange-100 text-orange-800 border-orange-200',
      'Medium': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Low': 'bg-green-100 text-green-800 border-green-200'
    };
    return (
      <div className="flex items-center gap-2">
        <Badge className={variants[severity] || 'bg-gray-100 text-gray-800 border-gray-200'}>
          {severity}
        </Badge>
        <span className="text-sm font-mono">{score}</span>
      </div>
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Open':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Open</Badge>;
      case 'In Progress':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">In Progress</Badge>;
      case 'Resolved':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Resolved</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return <Zap className="h-4 w-4 text-red-500" />;
      case 'High':
        return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case 'Medium':
        return <Target className="h-4 w-4 text-yellow-500" />;
      case 'Low':
        return <Bug className="h-4 w-4 text-green-500" />;
      default:
        return <Shield className="h-4 w-4" />;
    }
  };

  const filteredThreats = threats.filter(threat =>
    threat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    threat.cve.toLowerCase().includes(searchTerm.toLowerCase()) ||
    threat.severity.toLowerCase().includes(searchTerm.toLowerCase())
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
                  <AlertTriangle className="h-8 w-8" />
                  Threats & Vulnerabilities
                </h1>
                <p className="text-muted-foreground mt-2">
                  Monitor and manage security threats across all assets
                </p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Threat
              </Button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Threats</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-xs text-muted-foreground">+5 from last week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Critical</CardTitle>
                  <Zap className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Requires immediate attention</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Resolved</CardTitle>
                  <Shield className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">187</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Resolution Time</CardTitle>
                  <Clock className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.2d</div>
                  <p className="text-xs text-muted-foreground">-0.8d from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Filters and Search */}
            <Card>
              <CardHeader>
                <CardTitle>Threat Intelligence</CardTitle>
                <CardDescription>View and manage all identified threats and vulnerabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search threats..."
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
                        <TableHead>Threat</TableHead>
                        <TableHead>CVE</TableHead>
                        <TableHead>Severity</TableHead>
                        <TableHead>Affected Assets</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Discovered</TableHead>
                        <TableHead>Remediation</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredThreats.map((threat) => (
                        <TableRow key={threat.id} className="hover:bg-muted/50">
                          <TableCell className="font-medium">
                            <div className="flex items-start gap-2">
                              {getSeverityIcon(threat.severity)}
                              <div>
                                <div className="font-semibold">{threat.title}</div>
                                <div className="text-sm text-muted-foreground line-clamp-2">
                                  {threat.description}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="font-mono">
                              {threat.cve}
                            </Badge>
                          </TableCell>
                          <TableCell>{getSeverityBadge(threat.severity, threat.score)}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{threat.affectedAssets} assets</Badge>
                          </TableCell>
                          <TableCell>{getStatusBadge(threat.status)}</TableCell>
                          <TableCell className="text-sm">{threat.discovered}</TableCell>
                          <TableCell className="max-w-xs">
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {threat.remediation}
                            </p>
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

export default AssetThreats;