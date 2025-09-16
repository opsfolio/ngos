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
  Cloud, 
  Search, 
  Filter, 
  Plus,
  AlertTriangle,
  CheckCircle,
  Clock,
  ExternalLink,
  Database,
  Globe,
  Shield
} from 'lucide-react';

const AssetCloudAssets = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const cloudAssets = [
    {
      id: 'CLOUD-001',
      name: 'prod-web-cluster',
      type: 'Kubernetes Cluster',
      provider: 'AWS',
      region: 'us-east-1',
      status: 'Running',
      lastScanned: '2024-01-15 10:15',
      threats: 1,
      tasks: 0,
      cost: '$2,340/month',
      compliance: 'SOC 2'
    },
    {
      id: 'CLOUD-002',
      name: 'primary-database',
      type: 'RDS Instance',
      provider: 'AWS',
      region: 'us-west-2',
      status: 'Running',
      lastScanned: '2024-01-15 08:30',
      threats: 0,
      tasks: 1,
      cost: '$1,680/month',
      compliance: 'PCI DSS'
    },
    {
      id: 'CLOUD-003',
      name: 'backup-storage',
      type: 'S3 Bucket',
      provider: 'AWS',
      region: 'us-east-1',
      status: 'Active',
      lastScanned: '2024-01-14 22:00',
      threats: 2,
      tasks: 2,
      cost: '$156/month',
      compliance: 'HIPAA'
    },
    {
      id: 'CLOUD-004',
      name: 'analytics-vm',
      type: 'Virtual Machine',
      provider: 'Azure',
      region: 'East US',
      status: 'Stopped',
      lastScanned: '2024-01-13 15:45',
      threats: 0,
      tasks: 1,
      cost: '$0/month',
      compliance: 'ISO 27001'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Running':
      case 'Active':
        return <Badge className="bg-green-100 text-green-800 border-green-200">{status}</Badge>;
      case 'Stopped':
        return <Badge className="bg-red-100 text-red-800 border-red-200">{status}</Badge>;
      case 'Pending':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">{status}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getThreatBadge = (count: number) => {
    if (count === 0) return <Badge className="bg-green-100 text-green-800 border-green-200">0</Badge>;
    if (count <= 2) return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">{count}</Badge>;
    return <Badge className="bg-red-100 text-red-800 border-red-200">{count}</Badge>;
  };

  const getProviderBadge = (provider: string) => {
    const variants: Record<string, string> = {
      'AWS': 'bg-orange-100 text-orange-800 border-orange-200',
      'Azure': 'bg-blue-100 text-blue-800 border-blue-200',
      'GCP': 'bg-green-100 text-green-800 border-green-200'
    };
    return <Badge className={variants[provider] || 'bg-gray-100 text-gray-800 border-gray-200'}>{provider}</Badge>;
  };

  const getTypeIcon = (type: string) => {
    if (type.includes('Database') || type.includes('RDS')) return <Database className="h-4 w-4" />;
    if (type.includes('Cluster') || type.includes('VM')) return <Cloud className="h-4 w-4" />;
    if (type.includes('Storage') || type.includes('Bucket')) return <Shield className="h-4 w-4" />;
    return <Globe className="h-4 w-4" />;
  };

  const filteredAssets = cloudAssets.filter(asset =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.provider.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                  <Cloud className="h-8 w-8" />
                  Cloud Assets
                </h1>
                <p className="text-muted-foreground mt-2">
                  Manage and monitor cloud infrastructure and services
                </p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Cloud Asset
              </Button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
                  <Cloud className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">89</div>
                  <p className="text-xs text-muted-foreground">+8 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Running</CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">82</div>
                  <p className="text-xs text-muted-foreground">92.1% active</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Security Issues</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">-4 from last week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Cost</CardTitle>
                  <Clock className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$47.2K</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Filters and Search */}
            <Card>
              <CardHeader>
                <CardTitle>Cloud Asset Inventory</CardTitle>
                <CardDescription>View and manage all cloud infrastructure assets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search cloud assets..."
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
                        <TableHead>Provider</TableHead>
                        <TableHead>Region</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Cost</TableHead>
                        <TableHead>Threats</TableHead>
                        <TableHead>Tasks</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredAssets.map((asset) => (
                        <TableRow key={asset.id} className="hover:bg-muted/50">
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              {getTypeIcon(asset.type)}
                              <div>
                                <div className="font-semibold">{asset.name}</div>
                                <div className="text-sm text-muted-foreground">{asset.compliance}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{asset.type}</TableCell>
                          <TableCell>{getProviderBadge(asset.provider)}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{asset.region}</Badge>
                          </TableCell>
                          <TableCell>{getStatusBadge(asset.status)}</TableCell>
                          <TableCell className="font-mono text-sm">{asset.cost}</TableCell>
                          <TableCell>{getThreatBadge(asset.threats)}</TableCell>
                          <TableCell>
                            {asset.tasks > 0 ? (
                              <Badge variant="outline">{asset.tasks}</Badge>
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

export default AssetCloudAssets;