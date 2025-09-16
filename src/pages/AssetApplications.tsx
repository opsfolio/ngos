import React, { useState } from 'react';
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
  Smartphone, 
  Search, 
  Filter, 
  Plus,
  AlertTriangle,
  CheckCircle,
  Clock,
  ExternalLink,
  Globe,
  Code,
  Database
} from 'lucide-react';

const AssetApplications = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const applications = [
    {
      id: 'APP-001',
      name: 'Customer Portal',
      type: 'Web Application',
      owner: 'Product Team',
      environment: 'Production',
      status: 'Active',
      lastScanned: '2024-01-15 12:00',
      threats: 3,
      tasks: 2,
      technology: 'React/Node.js',
      criticality: 'High'
    },
    {
      id: 'APP-002',
      name: 'Internal CRM',
      type: 'Enterprise App',
      owner: 'Sales Team',
      environment: 'Production',
      status: 'Active',
      lastScanned: '2024-01-15 09:15',
      threats: 1,
      tasks: 0,
      technology: 'Salesforce',
      criticality: 'Medium'
    },
    {
      id: 'APP-003',
      name: 'API Gateway',
      type: 'Microservice',
      owner: 'Platform Team',
      environment: 'Production',
      status: 'Active',
      lastScanned: '2024-01-15 11:30',
      threats: 5,
      tasks: 3,
      technology: 'Kong/Docker',
      criticality: 'Critical'
    },
    {
      id: 'APP-004',
      name: 'Analytics Dashboard',
      type: 'Business Intelligence',
      owner: 'Data Team',
      environment: 'Staging',
      status: 'Maintenance',
      lastScanned: '2024-01-14 16:45',
      threats: 0,
      tasks: 1,
      technology: 'Tableau',
      criticality: 'Low'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>;
      case 'Maintenance':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Maintenance</Badge>;
      case 'Deprecated':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Deprecated</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getThreatBadge = (count: number) => {
    if (count === 0) return <Badge className="bg-green-100 text-green-800 border-green-200">0</Badge>;
    if (count <= 2) return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">{count}</Badge>;
    return <Badge className="bg-red-100 text-red-800 border-red-200">{count}</Badge>;
  };

  const getCriticalityBadge = (criticality: string) => {
    const variants: Record<string, string> = {
      'Critical': 'bg-red-100 text-red-800 border-red-200',
      'High': 'bg-orange-100 text-orange-800 border-orange-200',
      'Medium': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Low': 'bg-green-100 text-green-800 border-green-200'
    };
    return <Badge className={variants[criticality] || 'bg-gray-100 text-gray-800 border-gray-200'}>{criticality}</Badge>;
  };

  const getTypeIcon = (type: string) => {
    if (type.includes('Web')) return <Globe className="h-4 w-4" />;
    if (type.includes('Microservice') || type.includes('API')) return <Code className="h-4 w-4" />;
    if (type.includes('Database')) return <Database className="h-4 w-4" />;
    return <Smartphone className="h-4 w-4" />;
  };

  const filteredApplications = applications.filter(app =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                  <Smartphone className="h-8 w-8" />
                  Applications
                </h1>
                <p className="text-muted-foreground mt-2">
                  Manage and monitor application portfolio and security
                </p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Application
              </Button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                  <Smartphone className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs text-muted-foreground">+23 from last quarter</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active</CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">142</div>
                  <p className="text-xs text-muted-foreground">91% operational</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Security Issues</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">34</div>
                  <p className="text-xs text-muted-foreground">8 critical vulnerabilities</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Updates</CardTitle>
                  <Clock className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">28</div>
                  <p className="text-xs text-muted-foreground">12 security patches</p>
                </CardContent>
              </Card>
            </div>

            {/* Filters and Search */}
            <Card>
              <CardHeader>
                <CardTitle>Application Portfolio</CardTitle>
                <CardDescription>View and manage all application assets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search applications..."
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
                        <TableHead>Application Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Owner</TableHead>
                        <TableHead>Environment</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Criticality</TableHead>
                        <TableHead>Threats</TableHead>
                        <TableHead>Tasks</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredApplications.map((app) => (
                        <TableRow key={app.id} className="hover:bg-muted/50">
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              {getTypeIcon(app.type)}
                              <div>
                                <div className="font-semibold">{app.name}</div>
                                <div className="text-sm text-muted-foreground">{app.technology}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{app.type}</TableCell>
                          <TableCell>{app.owner}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{app.environment}</Badge>
                          </TableCell>
                          <TableCell>{getStatusBadge(app.status)}</TableCell>
                          <TableCell>{getCriticalityBadge(app.criticality)}</TableCell>
                          <TableCell>{getThreatBadge(app.threats)}</TableCell>
                          <TableCell>
                            {app.tasks > 0 ? (
                              <Badge variant="outline">{app.tasks}</Badge>
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )}
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
    </div>
  );
};

export default AssetApplications;