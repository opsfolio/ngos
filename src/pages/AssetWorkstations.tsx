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
  Monitor, 
  Search, 
  Filter, 
  Plus,
  AlertTriangle,
  CheckCircle,
  Clock,
  ExternalLink,
  User
} from 'lucide-react';

const AssetWorkstations = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const workstations = [
    {
      id: 'WS-001',
      name: 'LAPTOP-JSMITH',
      type: 'Laptop',
      owner: 'John Smith',
      department: 'Engineering',
      status: 'Active',
      lastScanned: '2024-01-15 09:30',
      threats: 0,
      tasks: 0,
      os: 'Windows 11 Pro',
      location: 'Remote'
    },
    {
      id: 'WS-002',
      name: 'DESKTOP-MJONES',
      type: 'Desktop',
      owner: 'Mary Jones',
      department: 'Finance',
      status: 'Active',
      lastScanned: '2024-01-15 11:45',
      threats: 2,
      tasks: 1,
      os: 'Windows 10 Pro',
      location: 'Office'
    },
    {
      id: 'WS-003',
      name: 'MACBOOK-TCHEN',
      type: 'Laptop',
      owner: 'Tom Chen',
      department: 'Design',
      status: 'Active',
      lastScanned: '2024-01-14 14:20',
      threats: 1,
      tasks: 0,
      os: 'macOS Sonoma',
      location: 'Hybrid'
    },
    {
      id: 'WS-004',
      name: 'LAPTOP-SBROWN',
      type: 'Laptop',
      owner: 'Sarah Brown',
      department: 'HR',
      status: 'Offline',
      lastScanned: '2024-01-12 16:10',
      threats: 0,
      tasks: 2,
      os: 'Windows 11 Pro',
      location: 'Remote'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>;
      case 'Offline':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Offline</Badge>;
      case 'Maintenance':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Maintenance</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getThreatBadge = (count: number) => {
    if (count === 0) return <Badge className="bg-green-100 text-green-800 border-green-200">0</Badge>;
    if (count <= 2) return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">{count}</Badge>;
    return <Badge className="bg-red-100 text-red-800 border-red-200">{count}</Badge>;
  };

  const getLocationBadge = (location: string) => {
    const variants: Record<string, string> = {
      'Office': 'bg-blue-100 text-blue-800 border-blue-200',
      'Remote': 'bg-purple-100 text-purple-800 border-purple-200',
      'Hybrid': 'bg-teal-100 text-teal-800 border-teal-200'
    };
    return <Badge className={variants[location] || 'bg-gray-100 text-gray-800 border-gray-200'}>{location}</Badge>;
  };

  const filteredWorkstations = workstations.filter(workstation =>
    workstation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workstation.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workstation.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                  <Monitor className="h-8 w-8" />
                  Workstations
                </h1>
                <p className="text-muted-foreground mt-2">
                  Manage and monitor employee workstation assets
                </p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Workstation
              </Button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Workstations</CardTitle>
                  <Monitor className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,432</div>
                  <p className="text-xs text-muted-foreground">+47 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Online</CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,387</div>
                  <p className="text-xs text-muted-foreground">96.9% availability</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Security Issues</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-xs text-muted-foreground">+5 from last week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Updates</CardTitle>
                  <Clock className="h-4 w-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs text-muted-foreground">42 critical</p>
                </CardContent>
              </Card>
            </div>

            {/* Filters and Search */}
            <Card>
              <CardHeader>
                <CardTitle>Workstation Inventory</CardTitle>
                <CardDescription>View and manage all workstation assets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search workstations..."
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
                        <TableHead>Asset Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Owner</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Threats</TableHead>
                        <TableHead>Tasks</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredWorkstations.map((workstation) => (
                        <TableRow key={workstation.id} className="hover:bg-muted/50">
                          <TableCell className="font-medium">
                            <div>
                              <div className="font-semibold">{workstation.name}</div>
                              <div className="text-sm text-muted-foreground">{workstation.os}</div>
                            </div>
                          </TableCell>
                          <TableCell>{workstation.type}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-muted-foreground" />
                              {workstation.owner}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{workstation.department}</Badge>
                          </TableCell>
                          <TableCell>{getStatusBadge(workstation.status)}</TableCell>
                          <TableCell>{getLocationBadge(workstation.location)}</TableCell>
                          <TableCell>{getThreatBadge(workstation.threats)}</TableCell>
                          <TableCell>
                            {workstation.tasks > 0 ? (
                              <Badge variant="outline">{workstation.tasks}</Badge>
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

export default AssetWorkstations;