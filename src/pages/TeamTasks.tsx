import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { 
  CheckSquare, 
  Plus, 
  Search,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  User,
  FileText,
  Shield,
  Target,
  TrendingUp,
  Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';

const tasks = [
  {
    id: 1,
    title: 'Complete SOC 2 Control Assessment',
    description: 'Review and assess all SOC 2 Type II controls for Q4 compliance audit',
    assignee: {
      id: 1,
      name: 'Sarah Chen',
      avatar: '/placeholder.svg',
      role: 'CISO'
    },
    priority: 'high',
    status: 'in-progress',
    dueDate: '2024-01-15',
    module: 'compliance',
    category: 'audit',
    estimatedHours: 16,
    completedHours: 8,
    tags: ['SOC 2', 'Controls', 'Audit']
  },
  {
    id: 2,
    title: 'Update Privacy Policy Documentation',
    description: 'Revise privacy policy to reflect new data processing requirements',
    assignee: {
      id: 2,
      name: 'Michael Rodriguez',
      avatar: '/placeholder.svg',
      role: 'Compliance Manager'
    },
    priority: 'medium',
    status: 'todo',
    dueDate: '2024-01-20',
    module: 'governance',
    category: 'policy',
    estimatedHours: 8,
    completedHours: 0,
    tags: ['Privacy', 'Policy', 'GDPR']
  },
  {
    id: 3,
    title: 'Vulnerability Assessment Report',
    description: 'Conduct quarterly vulnerability assessment and prepare findings report',
    assignee: {
      id: 3,
      name: 'Jennifer Walsh',
      avatar: '/placeholder.svg',
      role: 'External Auditor'
    },
    priority: 'high',
    status: 'review',
    dueDate: '2024-01-12',
    module: 'security',
    category: 'assessment',
    estimatedHours: 12,
    completedHours: 12,
    tags: ['Vulnerability', 'Security', 'Assessment']
  },
  {
    id: 4,
    title: 'Risk Register Update',
    description: 'Quarterly update of enterprise risk register with new identified risks',
    assignee: {
      id: 1,
      name: 'Sarah Chen',
      avatar: '/placeholder.svg',
      role: 'CISO'
    },
    priority: 'medium',
    status: 'completed',
    dueDate: '2024-01-10',
    module: 'governance',
    category: 'risk',
    estimatedHours: 6,
    completedHours: 6,
    tags: ['Risk', 'Register', 'Update']
  }
];

const taskStats = [
  { label: 'Total Tasks', value: 24, change: '+3', icon: CheckSquare },
  { label: 'In Progress', value: 8, change: '+2', icon: Clock },
  { label: 'Overdue', value: 2, change: '-1', icon: AlertTriangle },
  { label: 'Completed', value: 14, change: '+4', icon: CheckCircle }
];

export const TeamTasks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [selectedModule, setSelectedModule] = useState('all');

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.assignee.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || task.status === selectedStatus;
    const matchesPriority = selectedPriority === 'all' || task.priority === selectedPriority;
    const matchesModule = selectedModule === 'all' || task.module === selectedModule;
    return matchesSearch && matchesStatus && matchesPriority && matchesModule;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/10 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-500/10 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-500/10 text-green-700 border-green-200';
      default: return 'bg-gray-500/10 text-gray-700 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'todo': return 'bg-gray-500/10 text-gray-700 border-gray-200';
      case 'in-progress': return 'bg-blue-500/10 text-blue-700 border-blue-200';
      case 'review': return 'bg-purple-500/10 text-purple-700 border-purple-200';
      case 'completed': return 'bg-green-500/10 text-green-700 border-green-200';
      default: return 'bg-gray-500/10 text-gray-700 border-gray-200';
    }
  };

  const getModuleIcon = (module: string) => {
    switch (module) {
      case 'governance': return <Shield className="h-4 w-4" />;
      case 'security': return <AlertTriangle className="h-4 w-4" />;
      case 'compliance': return <FileText className="h-4 w-4" />;
      default: return <CheckSquare className="h-4 w-4" />;
    }
  };

  const getProgressPercentage = (task: any) => {
    return task.estimatedHours > 0 ? (task.completedHours / task.estimatedHours) * 100 : 0;
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Task Management</h1>
          <p className="text-muted-foreground mt-2">
            Assign, track, and manage compliance and security tasks across your team.
          </p>
        </div>
        <div className="flex gap-3">
          <Button asChild>
            <Link to="/team/tasks/new">
              <Plus className="h-4 w-4 mr-2" />
              Create Task
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/team/tasks/board">
              <Target className="h-4 w-4 mr-2" />
              Kanban Board
            </Link>
          </Button>
        </div>
      </div>

      {/* Task Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {taskStats.map((stat) => {
          const StatIcon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <Badge variant="secondary" className="text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                  <StatIcon className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="list" className="space-y-6">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search tasks, assignees, or descriptions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-full lg:w-48">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="todo">To Do</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="review">Review</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedPriority} onValueChange={setSelectedPriority}>
                  <SelectTrigger className="w-full lg:w-48">
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priority</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedModule} onValueChange={setSelectedModule}>
                  <SelectTrigger className="w-full lg:w-48">
                    <SelectValue placeholder="Module" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Modules</SelectItem>
                    <SelectItem value="governance">Governance</SelectItem>
                    <SelectItem value="security">Security</SelectItem>
                    <SelectItem value="compliance">Compliance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Tasks List */}
          <div className="space-y-4">
            {filteredTasks.map((task) => (
              <Card key={task.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-foreground">{task.title}</h3>
                        <Badge className={`${getPriorityColor(task.priority)} border`}>
                          {task.priority}
                        </Badge>
                        <Badge className={`${getStatusColor(task.status)} border`}>
                          {task.status.replace('-', ' ')}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={task.assignee.avatar} />
                            <AvatarFallback className="text-xs">
                              {task.assignee.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-muted-foreground">{task.assignee.name}</span>
                        </div>
                        
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Due {task.dueDate}</span>
                        </div>
                        
                        <div className="flex items-center gap-1 text-muted-foreground">
                          {getModuleIcon(task.module)}
                          <span className="capitalize">{task.module}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <Button size="sm" asChild>
                        <Link to={`/team/tasks/${task.id}`}>View Details</Link>
                      </Button>
                      
                      {/* Progress Bar */}
                      <div className="w-32">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                          <span>Progress</span>
                          <span>{Math.round(getProgressPercentage(task))}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary rounded-full h-2 transition-all"
                            style={{ width: `${getProgressPercentage(task)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="flex flex-wrap gap-1">
                      {task.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      {task.completedHours}h / {task.estimatedHours}h
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle>Task Calendar</CardTitle>
              <CardDescription>
                View tasks organized by due dates and deadlines
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Calendar View Coming Soon</h3>
                <p className="text-muted-foreground">
                  Interactive calendar view with task scheduling will be available here.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Task Analytics</CardTitle>
              <CardDescription>
                Performance metrics and insights about task completion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Analytics Dashboard Coming Soon</h3>
                <p className="text-muted-foreground">
                  Detailed analytics and reporting on task performance will be available here.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};