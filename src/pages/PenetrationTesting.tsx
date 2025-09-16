import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Target, 
  Calendar, 
  Users,
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowLeft,
  Settings,
  Download,
  Plus,
  Shield,
  Zap,
  Eye
} from 'lucide-react';

const PenetrationTesting = () => {
  const navigate = useNavigate();

  const penTestTypes = [
    { 
      name: 'Network Penetration Test', 
      description: 'Internal and external network infrastructure testing',
      duration: '1-2 weeks',
      complexity: 'Medium'
    },
    { 
      name: 'Web Application Penetration Test', 
      description: 'Comprehensive web application security assessment',
      duration: '1-3 weeks',
      complexity: 'High'
    },
    { 
      name: 'Wireless Security Assessment', 
      description: 'WiFi and wireless infrastructure security testing',
      duration: '3-5 days',
      complexity: 'Low'
    },
    { 
      name: 'Social Engineering Assessment', 
      description: 'Human-focused security awareness testing',
      duration: '1-2 weeks',
      complexity: 'Medium'
    },
    { 
      name: 'Red Team Engagement', 
      description: 'Multi-vector attack simulation and adversary emulation',
      duration: '2-4 weeks',
      complexity: 'High'
    },
    { 
      name: 'Physical Security Assessment', 
      description: 'Physical access controls and facility security testing',
      duration: '1 week',
      complexity: 'Medium'
    }
  ];

  const activeEngagements = [
    {
      id: 1,
      name: 'Q1 2024 Web Application Assessment',
      type: 'Web Application',
      status: 'In Progress',
      progress: 65,
      startDate: '2024-01-08',
      endDate: '2024-01-22',
      team: 'External - SecureTest Inc.',
      findings: { critical: 1, high: 3, medium: 8, low: 12 }
    },
    {
      id: 2,
      name: 'Network Infrastructure Pentest',
      type: 'Network',
      status: 'Planning',
      startDate: '2024-01-29',
      endDate: '2024-02-09',
      team: 'Internal Security Team',
      scope: 'Production network segments'
    },
    {
      id: 3,
      name: 'Annual Red Team Exercise',
      type: 'Red Team',
      status: 'Scheduled',
      startDate: '2024-02-15',
      endDate: '2024-03-08',
      team: 'External - Red Storm Security',
      scope: 'Full enterprise environment'
    }
  ];

  const recentReports = [
    {
      id: 1,
      title: 'Q4 2023 Web Application Security Assessment',
      type: 'Web Application',
      date: '2023-12-15',
      findings: { critical: 0, high: 2, medium: 5, low: 8 },
      status: 'Remediated'
    },
    {
      id: 2,
      title: 'Infrastructure Penetration Test - DMZ',
      type: 'Network',
      date: '2023-11-28',
      findings: { critical: 1, high: 4, medium: 7, low: 15 },
      status: 'In Remediation'
    },
    {
      id: 3,
      title: 'Wireless Security Assessment',
      type: 'Wireless',
      date: '2023-10-20',
      findings: { critical: 0, high: 1, medium: 2, low: 3 },
      status: 'Completed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'in progress': return 'secondary';
      case 'planning': return 'outline';
      case 'scheduled': return 'outline';
      case 'completed': return 'default';
      case 'remediated': return 'default';
      case 'in remediation': return 'secondary';
      default: return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'in progress': return <Zap className="h-4 w-4 text-blue-600" />;
      case 'planning': return <Calendar className="h-4 w-4 text-yellow-600" />;
      case 'scheduled': return <Clock className="h-4 w-4 text-orange-600" />;
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'remediated': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'in remediation': return <Settings className="h-4 w-4 text-blue-600" />;
      default: return <AlertTriangle className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigate('/threats')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Threats
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Penetration Testing</h1>
              <p className="text-muted-foreground mt-1">
                Comprehensive security testing and adversary simulation
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Reports
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Engagement
            </Button>
          </div>
        </div>

        <Tabs defaultValue="engagements" className="space-y-6">
          <TabsList className="grid w-full lg:w-auto grid-cols-1 lg:grid-cols-4">
            <TabsTrigger value="engagements">Active Engagements</TabsTrigger>
            <TabsTrigger value="schedule">Schedule Test</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="methodologies">Methodologies</TabsTrigger>
          </TabsList>

          <TabsContent value="engagements" className="space-y-6">
            {/* Active Engagements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Active Penetration Testing Engagements
                </CardTitle>
                <CardDescription>
                  Current and upcoming security testing activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeEngagements.map((engagement) => (
                    <div key={engagement.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(engagement.status)}
                          <div>
                            <h4 className="font-medium">{engagement.name}</h4>
                            <p className="text-sm text-muted-foreground">{engagement.type} • {engagement.team}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={getStatusColor(engagement.status)}>
                            {engagement.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                      
                      {engagement.progress && (
                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{engagement.progress}%</span>
                          </div>
                          <Progress value={engagement.progress} className="h-2" />
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Start Date:</span>
                          <span className="ml-2 font-medium">{engagement.startDate}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">End Date:</span>
                          <span className="ml-2 font-medium">{engagement.endDate}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Scope:</span>
                          <span className="ml-2 font-medium">{engagement.scope || 'Standard scope'}</span>
                        </div>
                      </div>
                      
                      {engagement.findings && (
                        <div className="flex gap-2 mt-3">
                          <Badge variant="destructive">Critical: {engagement.findings.critical}</Badge>
                          <Badge variant="destructive">High: {engagement.findings.high}</Badge>
                          <Badge variant="secondary">Medium: {engagement.findings.medium}</Badge>
                          <Badge variant="outline">Low: {engagement.findings.low}</Badge>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Schedule New Test */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Schedule New Penetration Test
                    </CardTitle>
                    <CardDescription>
                      Plan and configure a new security testing engagement
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="testName">Engagement Name</Label>
                        <Input id="testName" placeholder="Enter engagement name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="testType">Test Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select test type" />
                          </SelectTrigger>
                          <SelectContent>
                            {penTestTypes.map((type) => (
                              <SelectItem key={type.name} value={type.name.toLowerCase().replace(/\s+/g, '-')}>
                                {type.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input id="startDate" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="endDate">End Date</Label>
                        <Input id="endDate" type="date" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="scope">Scope Description</Label>
                      <Textarea 
                        id="scope" 
                        placeholder="Describe the scope and objectives of the penetration test..."
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="team">Testing Team</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select team" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="internal">Internal Security Team</SelectItem>
                            <SelectItem value="external-1">SecureTest Inc.</SelectItem>
                            <SelectItem value="external-2">Red Storm Security</SelectItem>
                            <SelectItem value="external-3">CyberGuard Consulting</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="priority">Priority</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="critical">Critical</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button>
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Engagement
                      </Button>
                      <Button variant="outline">
                        Save Draft
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Test Types */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Test Types</CardTitle>
                    <CardDescription>Available penetration testing services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {penTestTypes.map((type) => (
                        <div key={type.name} className="p-3 border rounded-lg">
                          <h4 className="font-medium text-sm">{type.name}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{type.description}</p>
                          <div className="flex justify-between mt-2">
                            <Badge variant="outline" className="text-xs">{type.duration}</Badge>
                            <Badge variant="secondary" className="text-xs">{type.complexity}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Penetration Testing Reports
                </CardTitle>
                <CardDescription>
                  Historical penetration testing reports and findings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div key={report.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-medium">{report.title}</h4>
                          <p className="text-sm text-muted-foreground">{report.type} • {report.date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={getStatusColor(report.status)}>
                            {report.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mt-3">
                        <Badge variant="destructive">Critical: {report.findings.critical}</Badge>
                        <Badge variant="destructive">High: {report.findings.high}</Badge>
                        <Badge variant="secondary">Medium: {report.findings.medium}</Badge>
                        <Badge variant="outline">Low: {report.findings.low}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="methodologies" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Testing Methodologies & Standards
                </CardTitle>
                <CardDescription>
                  Industry-standard penetration testing frameworks and methodologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'OWASP Testing Guide', description: 'Web application security testing methodology', category: 'Web Application' },
                    { name: 'NIST SP 800-115', description: 'Technical guide to information security testing', category: 'General' },
                    { name: 'OSSTMM', description: 'Open Source Security Testing Methodology Manual', category: 'Comprehensive' },
                    { name: 'PTES', description: 'Penetration Testing Execution Standard', category: 'Framework' },
                    { name: 'MITRE ATT&CK', description: 'Adversarial tactics, techniques, and common knowledge', category: 'Red Team' },
                    { name: 'NIST Cybersecurity Framework', description: 'Risk-based approach to cybersecurity', category: 'Framework' }
                  ].map((methodology) => (
                    <Card key={methodology.name} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Eye className="h-5 w-5 text-muted-foreground" />
                          <Badge variant="outline">{methodology.category}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <h3 className="font-medium mb-1">{methodology.name}</h3>
                        <p className="text-sm text-muted-foreground">{methodology.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PenetrationTesting;