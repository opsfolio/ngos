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
  Network, 
  Search, 
  Filter, 
  Plus,
  AlertTriangle,
  CheckCircle,
  Clock,
  ExternalLink,
  Wifi,
  Shield,
  Router
} from 'lucide-react';

const AssetNetworkDevices = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const networkDevices = [
    {
      id: 'NET-001',
      name: 'CORE-SW-01',
      type: 'Core Switch',
      model: 'Cisco Catalyst 9500',
      location: 'Data Center A',
      status: 'Active',
      lastScanned: '2024-01-15 14:20',
      threats: 0,
      tasks: 0,
      ip: '10.0.1.1',
      firmware: '16.12.05'
    },
    {
      id: 'NET-002',
      name: 'FIREWALL-01',
      type: 'Firewall',
      model: 'Palo Alto PA-3220',
      location: 'DMZ',
      status: 'Active',
      lastScanned: '2024-01-15 13:45',
      threats: 2,
      tasks: 1,
      ip: '192.168.1.1',
      firmware: '10.2.3'
    },
    {
      id: 'NET-003',
      name: 'ACCESS-SW-01',
      type: 'Access Switch',
      model: 'Cisco Catalyst 2960',
      location: 'Office Floor 1',
      status: 'Active',
      lastScanned: '2024-01-15 10:30',
      threats: 1,
      tasks: 0,
      ip: '10.1.1.10',
      firmware: '15.2.7'
    },
    {
      id: 'NET-004',
      name: 'WIFI-AP-01',
      type: 'Wireless AP',
      model: 'Aruba AP-535',
      location: 'Office Floor 2',
      status: 'Maintenance',
      lastScanned: '2024-01-14 16:15',
      threats: 0,
      tasks: 2,
      ip: '10.2.1.50',
      firmware: '8.10.0.2'
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

  const getTypeIcon = (type: string) => {
    if (type.includes('Firewall')) return <Shield className="h-4 w-4" />;
    if (type.includes('Wireless') || type.includes('AP')) return <Wifi className="h-4 w-4" />;
    if (type.includes('Router')) return <Router className="h-4 w-4" />;
    return <Network className="h-4 w-4" />;
  };

  const filteredDevices = networkDevices.filter(device =>
    device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    device.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    device.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                  <Network className="h-8 w-8" />
                  Network Devices
                </h1>
                <p className="text-muted-foreground mt-2">
                  Manage and monitor network infrastructure devices
                </p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Network Device
              </Button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Devices</CardTitle>
                  <Network className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">73</div>
                  <p className="text-xs text-muted-foreground">+3 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active</CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">69</div>
                  <p className="text-xs text-muted-foreground">94.5% uptime</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Security Issues</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-muted-foreground">2 critical</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Firmware Updates</CardTitle>
                  <Clock className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18</div>
                  <p className="text-xs text-muted-foreground">5 security patches</p>
                </CardContent>
              </Card>
            </div>

            {/* Filters and Search */}
            <Card>
              <CardHeader>
                <CardTitle>Network Device Inventory</CardTitle>
                <CardDescription>View and manage all network infrastructure devices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search network devices..."
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
                        <TableHead>Device Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Model</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>IP Address</TableHead>
                        <TableHead>Threats</TableHead>
                        <TableHead>Tasks</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDevices.map((device) => (
                        <TableRow key={device.id} className="hover:bg-muted/50">
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              {getTypeIcon(device.type)}
                              <div>
                                <div className="font-semibold">{device.name}</div>
                                <div className="text-sm text-muted-foreground">FW: {device.firmware}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{device.type}</TableCell>
                          <TableCell>{device.model}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{device.location}</Badge>
                          </TableCell>
                          <TableCell>{getStatusBadge(device.status)}</TableCell>
                          <TableCell className="font-mono text-sm">{device.ip}</TableCell>
                          <TableCell>{getThreatBadge(device.threats)}</TableCell>
                          <TableCell>
                            {device.tasks > 0 ? (
                              <Badge variant="outline">{device.tasks}</Badge>
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

export default AssetNetworkDevices;