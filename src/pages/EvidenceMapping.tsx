import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { MapPin, Search, Filter, Link, Unlink, Target, Shield, FileText, AlertTriangle, CheckCircle, Home, ChevronRight } from 'lucide-react';

const EvidenceMapping = () => {
  const [selectedPolicy, setSelectedPolicy] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const policies = [
    {
      id: 'pol-001',
      name: 'Information Security Policy',
      framework: 'SOC 2',
      controls: ['CC6.1', 'CC6.2', 'CC6.3'],
      evidenceCount: 15,
      coverage: 85,
      status: 'compliant'
    },
    {
      id: 'pol-002',
      name: 'Access Control Policy',
      framework: 'SOC 2',
      controls: ['CC6.1', 'CC6.7', 'CC6.8'],
      evidenceCount: 12,
      coverage: 92,
      status: 'compliant'
    },
    {
      id: 'pol-003',
      name: 'Data Protection Policy',
      framework: 'GDPR',
      controls: ['Art. 32', 'Art. 35'],
      evidenceCount: 8,
      coverage: 67,
      status: 'gap'
    },
    {
      id: 'pol-004',
      name: 'Incident Response Policy',
      framework: 'ISO 27001',
      controls: ['A.16.1.1', 'A.16.1.2'],
      evidenceCount: 5,
      coverage: 45,
      status: 'gap'
    }
  ];

  const unmappedEvidence = [
    {
      id: 'ev-001',
      name: 'Q4 2024 Penetration Test Report',
      type: 'Security Assessment',
      uploadDate: '2024-01-15',
      suggestedPolicies: ['Information Security Policy', 'Vulnerability Management Policy'],
      confidence: 95
    },
    {
      id: 'ev-002',
      name: 'Employee Security Training Videos',
      type: 'Training Material',
      uploadDate: '2024-01-12',
      suggestedPolicies: ['Security Awareness Policy'],
      confidence: 88
    },
    {
      id: 'ev-003',
      name: 'Database Access Logs December',
      type: 'System Log',
      uploadDate: '2024-01-10',
      suggestedPolicies: ['Access Control Policy', 'Data Protection Policy'],
      confidence: 92
    },
    {
      id: 'ev-004',
      name: 'Firewall Configuration Backup',
      type: 'Configuration',
      uploadDate: '2024-01-08',
      suggestedPolicies: ['Network Security Policy', 'Information Security Policy'],
      confidence: 78
    }
  ];

  const policyEvidenceMap = {
    'pol-001': [
      {
        id: 'ev-005',
        name: 'Security Risk Assessment 2024',
        type: 'Assessment',
        controls: ['CC6.1', 'CC6.2'],
        strength: 'strong',
        lastUpdated: '2024-01-10'
      },
      {
        id: 'ev-006',
        name: 'Information Classification Matrix',
        type: 'Document',
        controls: ['CC6.1'],
        strength: 'moderate',
        lastUpdated: '2024-01-05'
      },
      {
        id: 'ev-007',
        name: 'Security Incident Log Q4',
        type: 'Log',
        controls: ['CC6.3'],
        strength: 'weak',
        lastUpdated: '2023-12-28'
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant': return 'bg-green-100 text-green-800 border-green-200';
      case 'gap': return 'bg-red-100 text-red-800 border-red-200';
      case 'warning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case 'strong': return 'bg-green-100 text-green-800 border-green-200';
      case 'moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'weak': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="px-6 py-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">Evidence Mapping</h1>
                  <p className="text-muted-foreground">
                    Map evidence to policies and controls to demonstrate compliance
                  </p>
                </div>
                <Button>
                  <MapPin className="mr-2 h-4 w-4" />
                  Auto-Map Evidence
                </Button>
              </div>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Policies</p>
                  <p className="text-2xl font-bold text-foreground">{policies.length}</p>
                </div>
                <Shield className="h-6 w-6 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Mapped Evidence</p>
                  <p className="text-2xl font-bold text-foreground">
                    {policies.reduce((acc, pol) => acc + pol.evidenceCount, 0)}
                  </p>
                </div>
                <Link className="h-6 w-6 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Unmapped Evidence</p>
                  <p className="text-2xl font-bold text-foreground">{unmappedEvidence.length}</p>
                </div>
                <Unlink className="h-6 w-6 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Coverage</p>
                  <p className="text-2xl font-bold text-foreground">
                    {Math.round(policies.reduce((acc, pol) => acc + pol.coverage, 0) / policies.length)}%
                  </p>
                </div>
                <Target className="h-6 w-6 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="policies" className="space-y-6">
          <TabsList>
            <TabsTrigger value="policies">Policy Coverage</TabsTrigger>
            <TabsTrigger value="unmapped">Unmapped Evidence</TabsTrigger>
            <TabsTrigger value="mapping">Manual Mapping</TabsTrigger>
          </TabsList>

          <TabsContent value="policies" className="space-y-6">
            {/* Policy Coverage Overview */}
            <div className="space-y-4">
              {policies.map((policy) => (
                <Card key={policy.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="font-semibold text-foreground">{policy.name}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline">{policy.framework}</Badge>
                            <span className="text-sm text-muted-foreground">
                              {policy.controls.join(', ')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium text-foreground">
                            {policy.evidenceCount} evidence items
                          </p>
                          <Badge className={getStatusColor(policy.status)}>
                            {policy.status === 'compliant' ? 'Compliant' : 'Gap Identified'}
                          </Badge>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                          Evidence Coverage
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {policy.coverage}%
                        </span>
                      </div>
                      <Progress value={policy.coverage} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="unmapped" className="space-y-6">
            {/* Unmapped Evidence */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Unmapped Evidence
                </CardTitle>
                <CardDescription>
                  Evidence files that haven't been mapped to any policies yet
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {unmappedEvidence.map((evidence) => (
                    <div key={evidence.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-foreground">{evidence.name}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline">{evidence.type}</Badge>
                            <span className="text-sm text-muted-foreground">
                              Uploaded: {evidence.uploadDate}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">
                            {evidence.confidence}% confidence
                          </Badge>
                          <Button size="sm">Map Now</Button>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">
                          AI Suggested Mappings:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {evidence.suggestedPolicies.map((policy) => (
                            <Button
                              key={policy}
                              variant="outline"
                              size="sm"
                              className="h-8"
                            >
                              <CheckCircle className="mr-1 h-3 w-3" />
                              {policy}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mapping" className="space-y-6">
            {/* Manual Mapping Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Select Policy</CardTitle>
                  <CardDescription>
                    Choose a policy to view and manage its evidence mappings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select value={selectedPolicy} onValueChange={setSelectedPolicy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a policy" />
                    </SelectTrigger>
                    <SelectContent>
                      {policies.map((policy) => (
                        <SelectItem key={policy.id} value={policy.id}>
                          {policy.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {selectedPolicy && policyEvidenceMap[selectedPolicy] && (
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground">Mapped Evidence:</h4>
                      {policyEvidenceMap[selectedPolicy].map((evidence) => (
                        <div key={evidence.id} className="border rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium text-foreground">{evidence.name}</h5>
                            <Badge className={getStrengthColor(evidence.strength)}>
                              {evidence.strength}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Badge variant="outline">{evidence.type}</Badge>
                            <span>Controls: {evidence.controls.join(', ')}</span>
                            <span>Updated: {evidence.lastUpdated}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Available Evidence</CardTitle>
                  <CardDescription>
                    Drag evidence items to map them to the selected policy
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search evidence..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {unmappedEvidence.map((evidence) => (
                      <div
                        key={evidence.id}
                        className="border rounded-lg p-3 cursor-pointer hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-foreground">{evidence.name}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {evidence.type}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                {evidence.uploadDate}
                              </span>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            <Link className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
              </TabsContent>
            </Tabs>
    </div>
  );
};

export default EvidenceMapping;