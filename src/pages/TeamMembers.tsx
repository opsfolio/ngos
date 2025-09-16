import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  UserPlus, 
  Search, 
  Filter,
  MoreHorizontal,
  Edit3,
  Trash2,
  Mail,
  Phone,
  Building,
  Globe,
  Shield,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Chen',
    email: 'sarah.chen@company.com',
    phone: '+1 (555) 123-4567',
    role: 'CISO',
    department: 'Security',
    type: 'internal',
    avatar: '/placeholder.svg',
    status: 'active',
    joinDate: '2023-01-15',
    lastActive: '2 hours ago',
    tasksAssigned: 12,
    tasksCompleted: 8,
    expertise: ['Compliance', 'Risk Management', 'Security Architecture'],
    certifications: ['CISSP', 'CISM', 'ISO 27001 Lead Auditor'],
    accessLevel: 'admin'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    email: 'michael.r@company.com',
    phone: '+1 (555) 234-5678',
    role: 'Compliance Manager',
    department: 'Legal',
    type: 'internal',
    avatar: '/placeholder.svg',
    status: 'active',
    joinDate: '2023-03-20',
    lastActive: '1 hour ago',
    tasksAssigned: 8,
    tasksCompleted: 6,
    expertise: ['Audit', 'Policy Development', 'Regulatory Compliance'],
    certifications: ['CISA', 'CRISC'],
    accessLevel: 'manager'
  },
  {
    id: 3,
    name: 'Jennifer Walsh',
    email: 'j.walsh@auditor.com',
    phone: '+1 (555) 345-6789',
    role: 'External Auditor',
    department: 'Walsh & Associates',
    type: 'external',
    avatar: '/placeholder.svg',
    status: 'active',
    joinDate: '2024-01-10',
    lastActive: '30 minutes ago',
    tasksAssigned: 5,
    tasksCompleted: 3,
    expertise: ['SOC 2', 'ISO 27001', 'External Audit'],
    certifications: ['CPA', 'CISA', 'ISO 27001 Lead Auditor'],
    accessLevel: 'auditor'
  }
];

const roles = [
  'CISO',
  'Compliance Manager',
  'Security Analyst',
  'Auditor',
  'Risk Manager',
  'Policy Specialist',
  'External Auditor',
  'Security Consultant',
  'Vendor Representative'
];

export const TeamMembers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedRole, setSelectedRole] = useState('all');

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || member.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || member.status === selectedStatus;
    const matchesRole = selectedRole === 'all' || member.role === selectedRole;
    return matchesSearch && matchesType && matchesStatus && matchesRole;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'internal': return <Building className="h-4 w-4" />;
      case 'external': return <Globe className="h-4 w-4" />;
      case 'vendor': return <Users className="h-4 w-4" />;
      default: return <Users className="h-4 w-4" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'inactive': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getAccessLevelBadge = (level: string) => {
    const colors = {
      admin: 'bg-red-500/10 text-red-700 border-red-200',
      manager: 'bg-blue-500/10 text-blue-700 border-blue-200',
      user: 'bg-green-500/10 text-green-700 border-green-200',
      auditor: 'bg-purple-500/10 text-purple-700 border-purple-200'
    };
    return colors[level as keyof typeof colors] || colors.user;
  };

  return (
    <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Team Members</h1>
              <p className="text-muted-foreground mt-2">
                Manage team members, roles, and access across your organization.
              </p>
            </div>
            <Button asChild>
              <Link to="/team/members/new">
                <UserPlus className="h-4 w-4 mr-2" />
                Add Member
              </Link>
            </Button>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, email, or role..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-full lg:w-48">
                    <SelectValue placeholder="Member Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="internal">Internal</SelectItem>
                    <SelectItem value="external">External</SelectItem>
                    <SelectItem value="vendor">Vendor</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger className="w-full lg:w-48">
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    {roles.map(role => (
                      <SelectItem key={role} value={role}>{role}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-full lg:w-48">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="grid" className="space-y-6">
            <TabsList>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="table">Table View</TabsTrigger>
            </TabsList>

            <TabsContent value="grid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMembers.map((member) => (
                  <Card key={member.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={member.avatar} />
                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-foreground">{member.name}</h3>
                            <p className="text-sm text-muted-foreground">{member.role}</p>
                            <div className="flex items-center gap-1 mt-1">
                              {getStatusIcon(member.status)}
                              <span className="text-xs text-muted-foreground capitalize">{member.status}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{member.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{member.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          {getTypeIcon(member.type)}
                          <span className="text-muted-foreground">{member.department}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge className={`${getAccessLevelBadge(member.accessLevel)} border`}>
                          <Shield className="h-3 w-3 mr-1" />
                          {member.accessLevel}
                        </Badge>
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">{member.tasksCompleted}</span>
                          <span>/{member.tasksAssigned} tasks</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-xs font-medium text-muted-foreground">Expertise</div>
                        <div className="flex flex-wrap gap-1">
                          {member.expertise.slice(0, 2).map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {member.expertise.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{member.expertise.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1" asChild>
                          <Link to={`/team/members/${member.id}`}>View Profile</Link>
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit3 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="table">
              <Card>
                <CardHeader>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>
                    Detailed view of all team members and their information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Table View Coming Soon</h3>
                    <p className="text-muted-foreground">
                      Detailed table view with sorting and advanced filtering will be available here.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
    </div>
  );
};