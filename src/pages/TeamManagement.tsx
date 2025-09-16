import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  Users, 
  UserPlus, 
  Shield, 
  FileText, 
  CheckSquare, 
  TrendingUp,
  Search,
  Filter,
  MoreHorizontal,
  Clock,
  AlertTriangle,
  CheckCircle,
  Building,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Chen',
    email: 'sarah.chen@company.com',
    role: 'CISO',
    department: 'Security',
    type: 'internal',
    avatar: '/placeholder.svg',
    status: 'active',
    tasksAssigned: 12,
    tasksCompleted: 8,
    lastActive: '2 hours ago',
    expertise: ['Compliance', 'Risk Management', 'Security']
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    email: 'michael.r@company.com',
    role: 'Compliance Manager',
    department: 'Legal',
    type: 'internal',
    avatar: '/placeholder.svg',
    status: 'active',
    tasksAssigned: 8,
    tasksCompleted: 6,
    lastActive: '1 hour ago',
    expertise: ['Audit', 'Policy', 'Documentation']
  },
  {
    id: 3,
    name: 'Jennifer Walsh',
    email: 'j.walsh@auditor.com',
    role: 'External Auditor',
    department: 'Walsh & Associates',
    type: 'external',
    avatar: '/placeholder.svg',
    status: 'active',
    tasksAssigned: 5,
    tasksCompleted: 3,
    lastActive: '30 minutes ago',
    expertise: ['SOC 2', 'ISO 27001', 'External Audit']
  },
  {
    id: 4,
    name: 'David Kumar',
    email: 'david@securitypartner.com',
    role: 'Security Consultant',
    department: 'SecPartner LLC',
    type: 'vendor',
    avatar: '/placeholder.svg',
    status: 'active',
    tasksAssigned: 6,
    tasksCompleted: 4,
    lastActive: '4 hours ago',
    expertise: ['Penetration Testing', 'Vulnerability Assessment']
  }
];

const departmentStats = [
  { name: 'Security', members: 8, tasks: 45, completion: 85 },
  { name: 'Legal', members: 4, tasks: 22, completion: 92 },
  { name: 'IT', members: 12, tasks: 38, completion: 78 },
  { name: 'External Partners', members: 6, tasks: 18, completion: 88 }
];

const recentActivities = [
  { user: 'Sarah Chen', action: 'Completed SOC 2 control review', time: '30 minutes ago', type: 'completion' },
  { user: 'Michael Rodriguez', action: 'Updated privacy policy documentation', time: '1 hour ago', type: 'update' },
  { user: 'Jennifer Walsh', action: 'Started quarterly audit assessment', time: '2 hours ago', type: 'start' },
  { user: 'David Kumar', action: 'Submitted vulnerability scan report', time: '3 hours ago', type: 'submission' }
];

export const TeamManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || member.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'internal': return <Building className="h-4 w-4" />;
      case 'external': return <Globe className="h-4 w-4" />;
      case 'vendor': return <Users className="h-4 w-4" />;
      default: return <Users className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internal': return 'bg-blue-500/10 text-blue-700 border-blue-200';
      case 'external': return 'bg-green-500/10 text-green-700 border-green-200';
      case 'vendor': return 'bg-purple-500/10 text-purple-700 border-purple-200';
      default: return 'bg-gray-500/10 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Team Management</h1>
              <p className="text-muted-foreground mt-2">
                Manage internal teams, external partners, and vendor relationships for comprehensive compliance.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild>
                <Link to="/team/members/new">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add Member
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/team/roles">
                  <Shield className="h-4 w-4 mr-2" />
                  Manage Roles
                </Link>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="members">Team Members</TabsTrigger>
              <TabsTrigger value="tasks">Task Management</TabsTrigger>
              <TabsTrigger value="analytics">Performance</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Department Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {departmentStats.map((dept) => (
                  <Card key={dept.name}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">{dept.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold">{dept.members}</span>
                          <Users className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {dept.tasks} active tasks • {dept.completion}% completion
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Team Activity</CardTitle>
                  <CardDescription>Latest updates from your team members</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm">
                            <span className="font-medium">{activity.user}</span> {activity.action}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover:bg-muted/50 transition-colors">
                  <CardHeader>
                    <FileText className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Assign Tasks</CardTitle>
                    <CardDescription>
                      Distribute compliance and security tasks to team members
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" asChild>
                      <Link to="/team/tasks/assign">Assign Tasks</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:bg-muted/50 transition-colors">
                  <CardHeader>
                    <CheckSquare className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Review Progress</CardTitle>
                    <CardDescription>
                      Monitor team progress and task completion rates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline" asChild>
                      <Link to="/team/analytics">View Analytics</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:bg-muted/50 transition-colors">
                  <CardHeader>
                    <Users className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Team Communication</CardTitle>
                    <CardDescription>
                      Collaborate and communicate with all team members
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline" asChild>
                      <Link to="/team/communication">Open Chat</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="members" className="space-y-6">
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search team members..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={selectedType === 'all' ? 'default' : 'outline'}
                    onClick={() => setSelectedType('all')}
                    size="sm"
                  >
                    All
                  </Button>
                  <Button
                    variant={selectedType === 'internal' ? 'default' : 'outline'}
                    onClick={() => setSelectedType('internal')}
                    size="sm"
                  >
                    Internal
                  </Button>
                  <Button
                    variant={selectedType === 'external' ? 'default' : 'outline'}
                    onClick={() => setSelectedType('external')}
                    size="sm"
                  >
                    External
                  </Button>
                  <Button
                    variant={selectedType === 'vendor' ? 'default' : 'outline'}
                    onClick={() => setSelectedType('vendor')}
                    size="sm"
                  >
                    Vendors
                  </Button>
                </div>
              </div>

              {/* Team Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMembers.map((member) => (
                  <Card key={member.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={member.avatar} />
                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-foreground">{member.name}</h3>
                            <p className="text-sm text-muted-foreground">{member.role}</p>
                          </div>
                        </div>
                        <Badge className={`${getTypeColor(member.type)} border`}>
                          {getTypeIcon(member.type)}
                          <span className="ml-1 capitalize">{member.type}</span>
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">{member.email}</p>
                        <p className="text-sm text-muted-foreground">{member.department}</p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-sm">
                          <span className="font-medium">{member.tasksCompleted}</span>
                          <span className="text-muted-foreground">/{member.tasksAssigned} tasks</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 inline mr-1" />
                          {member.lastActive}
                        </div>
                      </div>

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

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1" asChild>
                          <Link to={`/team/members/${member.id}`}>View Profile</Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link to={`/team/members/${member.id}/tasks`}>Tasks</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tasks">
              <Card>
                <CardHeader>
                  <CardTitle>Task Management</CardTitle>
                  <CardDescription>
                    Assign and track compliance, security, and governance tasks across your team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <CheckSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Task Management Coming Soon</h3>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive task assignment and tracking features will be available here.
                    </p>
                    <Button asChild>
                      <Link to="/team/tasks/assign">Create Task Assignment</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Team Performance Analytics</CardTitle>
                  <CardDescription>
                    Monitor team productivity, task completion rates, and compliance metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Analytics Dashboard Coming Soon</h3>
                    <p className="text-muted-foreground mb-4">
                      Detailed performance metrics and reporting will be available here.
                    </p>
                    <Button asChild>
                      <Link to="/team/performance">View Performance Reports</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
    </div>
  );
};