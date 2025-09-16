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
  Server, 
  Search, 
  Filter, 
  Plus,
  AlertTriangle,
  CheckCircle,
  Clock,
  ExternalLink
} from 'lucide-react';

const AssetServers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const servers = [
    {
      id: 'SRV-001',
      name: 'PROD-WEB-01',
      type: 'Web Server',
      owner: 'IT Operations',
      environment: 'Production',
      status: 'Active',
      lastScanned: '2024-01-15 14:30',
      threats: 2,
      tasks: 1,
      os: 'Ubuntu 22.04',
      ip: '10.1.1.100'
    },
    {
      id: 'SRV-002',
      name: 'PROD-DB-01',
      type: 'Database Server',
      owner: 'Database Team',
      environment: 'Production',
      status: 'Active',
      lastScanned: '2024-01-15 12:15',
      threats: 0,
      tasks: 0,
      os: 'CentOS 8',
      ip: '10.1.1.200'
    },
    {
      id: 'SRV-003',
      name: 'DEV-WEB-01',
      type: 'Web Server',
      owner: 'Development',
      environment: 'Development',
      status: 'Active',
      lastScanned: '2024-01-14 16:45',
      threats: 5,
      tasks: 3,
      os: 'Ubuntu 20.04',
      ip: '10.2.1.100'
    },
    {
      id: 'SRV-004',
      name: 'BACKUP-01',
      type: 'Backup Server',
      owner: 'IT Operations',
      environment: 'Infrastructure',
      status: 'Maintenance',
      lastScanned: '2024-01-13 09:20',
      threats: 1,
      tasks: 2,
      os: 'Windows Server 2022',
      ip: '10.1.1.250'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>;
      case 'Maintenance':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Maintenance</Badge>;
      case 'Offline':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Offline</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getThreatBadge = (count: number) => {
    if (count === 0) return <Badge className="bg-green-100 text-green-800 border-green-200">0</Badge>;
    if (count <= 2) return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">{count}</Badge>;
    return <Badge className="bg-red-100 text-red-800 border-red-200">{count}</Badge>;
  };

  const filteredServers = servers.filter(server =>
    server.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    server.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    server.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                  <Server className="h-8 w-8" />
                  Servers
                </h1>
                <p className="text-muted-foreground mt-2">
                  Manage and monitor server infrastructure assets
                </p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Server
              </Button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Servers</CardTitle>
                  <Server className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">247</div>
                  <p className="text-xs text-muted-foreground">+12 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active</CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">234</div>
                  <p className="text-xs text-muted-foreground">94.7% uptime</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Threats Detected</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">-3 from last week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
                  <Clock className="h-4 w-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">6</div>
                  <p className="text-xs text-muted-foreground">2 overdue</p>
                </CardContent>
              </Card>
            </div>

            {/* Filters and Search */}
            <Card>
              <CardHeader>
                <CardTitle>Server Inventory</CardTitle>
                <CardDescription>View and manage all server assets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search servers..."
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
                        <TableHead>Environment</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Scanned</TableHead>
                        <TableHead>Threats</TableHead>
                        <TableHead>Tasks</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredServers.map((server) => (
                        <TableRow key={server.id} className="hover:bg-muted/50">
                          <TableCell className="font-medium">
                            <div>
                              <div className="font-semibold">{server.name}</div>
                              <div className="text-sm text-muted-foreground">{server.ip}</div>
                            </div>
                          </TableCell>
                          <TableCell>{server.type}</TableCell>
                          <TableCell>{server.owner}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{server.environment}</Badge>
                          </TableCell>
                          <TableCell>{getStatusBadge(server.status)}</TableCell>
                          <TableCell className="text-sm">{server.lastScanned}</TableCell>
                          <TableCell>{getThreatBadge(server.threats)}</TableCell>
                          <TableCell>
                            {server.tasks > 0 ? (
                              <Badge variant="outline">{server.tasks}</Badge>
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

export default AssetServers;