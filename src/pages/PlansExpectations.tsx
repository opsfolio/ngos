import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Navigation } from '@/components/layout/Navigation';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  FileText, 
  Target, 
  Calendar, 
  Users, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  Clock,
  ArrowRight,
  BarChart3,
  FileSearch,
  MessageSquare,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PlansExpectations = () => {
  const projectStats = [
    { label: 'Active Projects', value: '12', icon: Target, color: 'text-blue-600' },
    { label: 'Pending SOWs', value: '3', icon: FileText, color: 'text-orange-600' },
    { label: 'Deliverables Due', value: '8', icon: Clock, color: 'text-red-600' },
    { label: 'Team Members', value: '24', icon: Users, color: 'text-green-600' },
  ];

  const recentProjects = [
    {
      id: 1,
      name: 'Enterprise Security Assessment',
      client: 'Acme Corp',
      progress: 75,
      status: 'On Track',
      dueDate: '2024-03-15',
      deliverables: 8,
      completed: 6
    },
    {
      id: 2,
      name: 'Compliance Framework Implementation',
      client: 'TechStart Inc',
      progress: 45,
      status: 'In Progress',
      dueDate: '2024-04-20',
      deliverables: 12,
      completed: 5
    },
    {
      id: 3,
      name: 'Risk Management Strategy',
      client: 'GlobalBank',
      progress: 90,
      status: 'Near Completion',
      dueDate: '2024-02-28',
      deliverables: 6,
      completed: 5
    }
  ];

  const quickActions = [
    {
      title: 'Manage Expectations',
      description: 'Create and manage SOWs, objectives, and milestones',
      icon: Target,
      href: '/plans/expectations',
      color: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      title: 'Track Outcomes',
      description: 'Monitor deliverables and measure success',
      icon: TrendingUp,
      href: '/plans/outcomes',
      color: 'bg-green-50 hover:bg-green-100'
    },
    {
      title: 'Team Management',
      description: 'View team members, roles, and expertise',
      icon: Users,
      href: '/plans/team',
      color: 'bg-purple-50 hover:bg-purple-100'
    },
    {
      title: 'Document Repository',
      description: 'Access all project documents and files',
      icon: FileSearch,
      href: '/plans/documents',
      color: 'bg-orange-50 hover:bg-orange-100'
    },
    {
      title: 'Analytics & Insights',
      description: 'View progress dashboards and performance metrics',
      icon: BarChart3,
      href: '/plans/analytics',
      color: 'bg-indigo-50 hover:bg-indigo-100'
    },
    {
      title: 'Communication Hub',
      description: 'Activity logs and collaboration tools',
      icon: MessageSquare,
      href: '/plans/communication',
      color: 'bg-teal-50 hover:bg-teal-100'
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full bg-gradient-subtle">
        <Navigation />
        
        <div className="flex w-full">
          <AppSidebar />
          
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Plans & Expectations</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your centralized platform for capturing client expectations, managing project outcomes, 
            and fostering transparency throughout the engagement lifecycle.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectStats.map((stat, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Expectations Management */}
          <Card className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/20">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Expectations</CardTitle>
              </div>
              <CardDescription>
                Capture and organize client expectations, SOWs, and project objectives
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="font-medium text-muted-foreground">Active SOWs</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-muted-foreground">Objectives</p>
                  <p className="text-2xl font-bold">48</p>
                </div>
              </div>
              <Link to="/plans/expectations">
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Manage Expectations
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Progress Tracking */}
          <Card className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/20">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Progress</CardTitle>
              </div>
              <CardDescription>
                Monitor project progress, timelines, and team performance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="font-medium text-muted-foreground">Active Projects</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-muted-foreground">On Track</p>
                  <p className="text-2xl font-bold text-green-600">6</p>
                </div>
              </div>
              <Link to="/plans/progress">
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Track Progress
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Outcomes Tracking */}
          <Card className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/20">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Outcomes</CardTitle>
              </div>
              <CardDescription>
                Monitor deliverables, milestones, and measure project success
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="font-medium text-muted-foreground">Deliverables</p>
                  <p className="text-2xl font-bold">87</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold text-green-600">64</p>
                </div>
              </div>
              <Link to="/plans/outcomes">
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Track Outcomes
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Recent Projects */}
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Recent Projects</span>
            </CardTitle>
            <CardDescription>
              Overview of your most recent project engagements and their progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentProjects.map((project) => (
                <div key={project.id} className="border border-border rounded-lg p-6 bg-card">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">Client: {project.client}</p>
                    </div>
                    <Badge 
                      variant={project.status === 'On Track' ? 'default' : 
                              project.status === 'Near Completion' ? 'secondary' : 'outline'}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Deliverables: {project.completed}/{project.deliverables}
                      </span>
                      <span className="text-muted-foreground">Due: {project.dueDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Value Proposition */}
        <Card className="bg-gradient-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Why Expectations Management Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-2">
                <CheckCircle className="w-8 h-8 mx-auto" />
                <h3 className="font-semibold">Risk Mitigation</h3>
                <p className="text-sm opacity-90">
                  Clearly defined expectations reduce ambiguity and minimize risks
                </p>
              </div>
              <div className="space-y-2">
                <TrendingUp className="w-8 h-8 mx-auto" />
                <h3 className="font-semibold">Measuring Success</h3>
                <p className="text-sm opacity-90">
                  Outcomes provide tangible evidence of progress and achievement
                </p>
              </div>
              <div className="space-y-2">
                <Users className="w-8 h-8 mx-auto" />
                <h3 className="font-semibold">Building Confidence</h3>
                <p className="text-sm opacity-90">
                  Transparency establishes trust and positions teams as reliable partners
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default PlansExpectations;