import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bot, 
  Send, 
  Sparkles, 
  TrendingUp, 
  Shield, 
  AlertTriangle,
  Target,
  Users,
  Zap,
  BarChart3,
  FileCheck,
  MessageSquare,
  Clock,
  CheckCircle,
  Globe,
  Search,
  PlusCircle,
  Headphones,
  Calendar,
  Star,
  Award,
  Settings,
  FileText,
  Database,
  TestTube,
  BookOpen,
  Phone,
  Mail,
  Video
} from 'lucide-react';

const caasServices = [
  {
    category: 'Implementation & Setup',
    description: 'Complete framework implementation and initial configuration',
    services: [
      { name: 'Controls Library Setup', icon: Shield, complexity: 'Medium', timeline: '2-4 weeks' },
      { name: 'Policy Authoring & Templates', icon: FileText, complexity: 'High', timeline: '3-6 weeks' },
      { name: 'Evidence Integration & Mapping', icon: Database, complexity: 'Medium', timeline: '2-3 weeks' },
      { name: 'Risk Register Development', icon: AlertTriangle, complexity: 'High', timeline: '3-4 weeks' }
    ]
  },
  {
    category: 'Ongoing Management',
    description: 'Continuous compliance operations and maintenance',
    services: [
      { name: 'Threat Intelligence & Management', icon: Zap, complexity: 'High', timeline: 'Ongoing' },
      { name: 'Incident Response & Reporting', icon: AlertTriangle, complexity: 'Critical', timeline: '24/7' },
      { name: 'Asset Discovery & Management', icon: Globe, complexity: 'Medium', timeline: 'Monthly' },
      { name: 'Quality System Management', icon: Award, complexity: 'High', timeline: 'Ongoing' }
    ]
  },
  {
    category: 'Testing & Validation',
    description: 'Comprehensive testing and audit preparation',
    services: [
      { name: 'Test Management & Execution', icon: TestTube, complexity: 'Medium', timeline: 'Quarterly' },
      { name: 'Audit Preparation & Support', icon: CheckCircle, complexity: 'High', timeline: '4-8 weeks' },
      { name: 'SLO/SLA Monitoring & Reporting', icon: Target, complexity: 'Medium', timeline: 'Continuous' },
      { name: 'POAM Development & Tracking', icon: BarChart3, complexity: 'Medium', timeline: 'As needed' }
    ]
  }
];

const supportChannels = [
  { 
    name: 'Live Chat Support', 
    icon: MessageSquare, 
    availability: '24/7',
    response: '< 5 minutes',
    description: 'Instant help for urgent compliance questions'
  },
  { 
    name: 'Expert Consultation', 
    icon: Phone, 
    availability: 'Business Hours',
    response: '< 2 hours',
    description: 'Strategic guidance from compliance experts'
  },
  { 
    name: 'Video Walkthrough', 
    icon: Video, 
    availability: 'Scheduled',
    response: 'Same day',
    description: 'Personalized demos and training sessions'
  },
  { 
    name: 'Email Support', 
    icon: Mail, 
    availability: '24/7',
    response: '< 4 hours',
    description: 'Detailed technical assistance and documentation'
  }
];

const recentRequests = [
  {
    id: 'REQ-001',
    title: 'SOC 2 Type II Controls Implementation',
    status: 'In Progress',
    assignedExpert: 'Sarah Chen, CISSP',
    priority: 'High',
    progress: 75,
    nextUpdate: '2024-01-15'
  },
  {
    id: 'REQ-002', 
    title: 'HIPAA Risk Assessment & Documentation',
    status: 'Completed',
    assignedExpert: 'Mike Torres, CISA',
    priority: 'Medium',
    progress: 100,
    nextUpdate: 'Delivered'
  },
  {
    id: 'REQ-003',
    title: 'Incident Response Plan Review',
    status: 'Pending Review',
    assignedExpert: 'Jessica Liu, GCIH',
    priority: 'Medium',
    progress: 90,
    nextUpdate: '2024-01-12'
  }
];

export default function AICopilot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: 'Welcome to your CaaS Assistant! I can help you request expert compliance services, track ongoing projects, and connect you with our white-glove support team. What would you like assistance with today?',
      timestamp: new Date()
    }
  ]);
  const [activeTab, setActiveTab] = useState('services');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = { 
      type: 'user', 
      content: input, 
      timestamp: new Date() 
    };
    
    const aiResponse = {
      type: 'ai',
      content: `I'll help you with "${input}". Let me connect you with the right expert or guide you through requesting this service. Our team typically responds within 2 hours for consultation requests.`,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage, aiResponse]);
    setInput('');
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Critical': return 'text-red-600';
      case 'High': return 'text-orange-600';
      case 'Medium': return 'text-yellow-600';
      default: return 'text-green-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Pending Review': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center">
            <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mr-3">
              <Headphones className="w-6 h-6 text-accent-foreground" />
            </div>
            CaaS Assistant
          </h1>
          <p className="text-muted-foreground mt-2">
            White-glove Compliance-as-a-Service support and expert assistance
          </p>
        </div>
        <Badge variant="outline" className="bg-accent-light text-accent border-accent/20">
          <Star className="w-4 h-4 mr-2" />
          Premium Support
        </Badge>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="services" className="flex items-center">
            <Settings className="w-4 h-4 mr-2" />
            Services
          </TabsTrigger>
          <TabsTrigger value="support" className="flex items-center">
            <Headphones className="w-4 h-4 mr-2" />
            Support
          </TabsTrigger>
          <TabsTrigger value="requests" className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            My Requests
          </TabsTrigger>
          <TabsTrigger value="chat" className="flex items-center">
            <MessageSquare className="w-4 h-4 mr-2" />
            Expert Chat
          </TabsTrigger>
        </TabsList>

        <TabsContent value="services" className="space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-accent" />
                Available CaaS Services
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Our experts can handle any compliance task you don't have the skills or personnel to perform
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {caasServices.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {category.services.map((service, serviceIndex) => (
                        <Card key={serviceIndex} className="border hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-accent-light rounded-lg flex items-center justify-center mr-3">
                                  <service.icon className="w-4 h-4 text-accent" />
                                </div>
                                <div>
                                  <h4 className="font-medium text-foreground">{service.name}</h4>
                                  <p className="text-xs text-muted-foreground">Timeline: {service.timeline}</p>
                                </div>
                              </div>
                              <Badge variant="outline" className={getComplexityColor(service.complexity)}>
                                {service.complexity}
                              </Badge>
                            </div>
                            <Button size="sm" variant="outline" className="w-full">
                              Request Service
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <div className="w-8 h-8 bg-accent-light rounded-lg flex items-center justify-center mr-3">
                      <channel.icon className="w-4 h-4 text-accent" />
                    </div>
                    {channel.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground">{channel.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Availability:</span>
                      <span className="font-medium">{channel.availability}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Response Time:</span>
                      <span className="font-medium text-accent">{channel.response}</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Start {channel.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-soft border-accent/20 bg-accent-light/20">
            <CardHeader>
              <CardTitle className="flex items-center text-accent">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Expert Consultation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-accent-foreground">
                Book a 1-on-1 session with our compliance experts to discuss your specific needs, 
                review your current setup, or get strategic guidance on your compliance journey.
              </p>
              <div className="flex gap-3">
                <Button className="bg-gradient-accent">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
                <Button variant="outline">
                  View Available Times
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="requests" className="space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileCheck className="w-5 h-5 mr-2 text-accent" />
                  My Service Requests
                </div>
                <Button size="sm">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  New Request
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentRequests.map((request, index) => (
                  <Card key={index} className="border">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-foreground">{request.title}</h4>
                          <p className="text-sm text-muted-foreground">Request ID: {request.id}</p>
                        </div>
                        <Badge className={getStatusColor(request.status)}>
                          {request.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                        <div>
                          <span className="text-muted-foreground">Assigned Expert:</span>
                          <p className="font-medium">{request.assignedExpert}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Next Update:</span>
                          <p className="font-medium">{request.nextUpdate}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress:</span>
                          <span className="font-medium">{request.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-accent h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${request.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                        <Button size="sm" variant="ghost">
                          Message Expert
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chat" className="space-y-6">
          <Card className="shadow-soft h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bot className="w-5 h-5 mr-2 text-accent" />
                CaaS Expert Assistant
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Get instant help or connect with our expert team for complex compliance matters
              </p>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1 space-y-4 overflow-y-auto mb-4 max-h-[400px]">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-foreground border'
                    }`}>
                      {message.type === 'ai' && (
                        <div className="flex items-center mb-2">
                          <Bot className="w-4 h-4 mr-2 text-accent" />
                          <span className="text-xs text-muted-foreground">CaaS Assistant</span>
                        </div>
                      )}
                      <p className="text-sm">{message.content}</p>
                      <div className="text-xs opacity-70 mt-2">
                        {message.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3">
                <Textarea
                  placeholder="Ask about our services, request expert help, or get guidance on compliance matters..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="min-h-[80px]"
                  onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                />
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">
                    Press Enter to send, Shift+Enter for new line
                  </span>
                  <Button onClick={handleSend} className="bg-gradient-accent">
                    <Send className="w-4 h-4 mr-2" />
                    Send
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="shadow-soft">
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-accent" />
                <h4 className="font-medium">Expert Team</h4>
                <p className="text-xs text-muted-foreground">12+ certified professionals</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardContent className="p-4 text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 text-accent" />
                <h4 className="font-medium">Response Time</h4>
                <p className="text-xs text-muted-foreground">Average: 2.3 hours</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardContent className="p-4 text-center">
                <Star className="w-8 h-8 mx-auto mb-2 text-accent" />
                <h4 className="font-medium">Satisfaction</h4>
                <p className="text-xs text-muted-foreground">4.9/5 customer rating</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}