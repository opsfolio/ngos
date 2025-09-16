import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import {
  CheckSquare,
  Building2,
  Users,
  Calendar,
  FileText,
  Shield,
  AlertCircle,
  Clock,
  Plus,
  Home,
  ChevronRight
} from 'lucide-react';

export default function AuditCreate() {
  const { type } = useParams();
  const isExternal = type === 'external';
  
  const [selectedFramework, setSelectedFramework] = useState('');
  const [selectedControls, setSelectedControls] = useState<string[]>([]);

  const frameworks = [
    { value: 'soc2', label: 'SOC 2 Type II', controls: 64, description: 'Service Organization Control 2' },
    { value: 'iso27001', label: 'ISO 27001', controls: 114, description: 'Information Security Management' },
    { value: 'hipaa', label: 'HIPAA', controls: 56, description: 'Health Insurance Portability' },
    { value: 'pci-dss', label: 'PCI DSS', controls: 98, description: 'Payment Card Industry Data Security' },
    { value: 'gdpr', label: 'GDPR', controls: 42, description: 'General Data Protection Regulation' },
    { value: 'fedramp', label: 'FedRAMP', controls: 325, description: 'Federal Risk Authorization Management' },
    { value: 'nist', label: 'NIST CSF', controls: 108, description: 'National Institute of Standards' },
    { value: 'custom', label: 'Custom Framework', controls: 0, description: 'Define your own control set' }
  ];

  const controlCategories = [
    { id: 'access', name: 'Access Control', count: 12, selected: false },
    { id: 'crypto', name: 'Cryptography', count: 8, selected: false },
    { id: 'physical', name: 'Physical Security', count: 6, selected: false },
    { id: 'operations', name: 'Operations Security', count: 15, selected: false },
    { id: 'communications', name: 'Communications Security', count: 9, selected: false },
    { id: 'acquisition', name: 'System Acquisition', count: 11, selected: false },
    { id: 'incident', name: 'Incident Response', count: 7, selected: false },
    { id: 'compliance', name: 'Compliance', count: 10, selected: false }
  ];

  const auditors = [
    { value: 'ey', label: 'Ernst & Young', type: 'external' },
    { value: 'deloitte', label: 'Deloitte & Touche', type: 'external' },
    { value: 'kpmg', label: 'KPMG', type: 'external' },
    { value: 'pwc', label: 'PricewaterhouseCoopers', type: 'external' },
    { value: 'rsm', label: 'RSM US LLP', type: 'external' },
    { value: 'coalfire', label: 'Coalfire Systems', type: 'external' },
    { value: 'internal', label: 'Internal Security Team', type: 'internal' },
    { value: 'compliance', label: 'Compliance Team', type: 'internal' },
    { value: 'privacy', label: 'Privacy Team', type: 'internal' }
  ];

  const availableAuditors = isExternal 
    ? auditors.filter(a => a.type === 'external')
    : auditors.filter(a => a.type === 'internal');

  return (
    <div className="px-6 py-8">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {isExternal ? (
                    <Building2 className="w-6 h-6 text-primary" />
                  ) : (
                    <Users className="w-6 h-6 text-primary" />
                  )}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Create {isExternal ? 'External' : 'Mock'} Audit Session
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {isExternal 
                      ? 'Set up an official third-party audit for certification'
                      : 'Create an internal audit session for preparation and testing'
                    }
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Form */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Basic Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic Information</CardTitle>
                      <CardDescription>
                        Define the audit session details and timeline
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="audit-name">Audit Session Name</Label>
                          <Input
                            id="audit-name"
                            placeholder={isExternal ? "SOC 2 Type II Annual Audit" : "ISO 27001 Pre-Assessment Mock"}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="framework">Compliance Framework</Label>
                          <Select value={selectedFramework} onValueChange={setSelectedFramework}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select framework" />
                            </SelectTrigger>
                            <SelectContent>
                              {frameworks.map((framework) => (
                                <SelectItem key={framework.value} value={framework.value}>
                                  <div>
                                    <div className="font-medium">{framework.label}</div>
                                    <div className="text-xs text-muted-foreground">
                                      {framework.controls > 0 && `${framework.controls} controls`} • {framework.description}
                                    </div>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Describe the audit objectives, scope, and any special requirements..."
                          rows={3}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="start-date">Start Date</Label>
                          <Input type="date" id="start-date" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="end-date">End Date</Label>
                          <Input type="date" id="end-date" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Auditor Selection */}
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        {isExternal ? 'External Auditor' : 'Internal Team'}
                      </CardTitle>
                      <CardDescription>
                        {isExternal 
                          ? 'Select the third-party auditing firm'
                          : 'Choose the internal team conducting the mock audit'
                        }
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="auditor">
                          {isExternal ? 'Auditing Firm' : 'Internal Team'}
                        </Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder={`Select ${isExternal ? 'auditing firm' : 'internal team'}`} />
                          </SelectTrigger>
                          <SelectContent>
                            {availableAuditors.map((auditor) => (
                              <SelectItem key={auditor.value} value={auditor.value}>
                                {auditor.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {isExternal && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="lead-auditor">Lead Auditor</Label>
                            <Input
                              id="lead-auditor"
                              placeholder="John Smith, CPA"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="contact-email">Contact Email</Label>
                            <Input
                              id="contact-email"
                              type="email"
                              placeholder="john.smith@auditoringfirm.com"
                            />
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Control Scope */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Control Scope</CardTitle>
                      <CardDescription>
                        Select which control categories to include in this audit
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="select-all" />
                          <Label htmlFor="select-all" className="font-medium">
                            Select All Control Categories
                          </Label>
                        </div>
                        
                        <Separator />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {controlCategories.map((category) => (
                            <div key={category.id} className="flex items-center space-x-2">
                              <Checkbox id={category.id} />
                              <Label htmlFor={category.id} className="flex-1">
                                <div className="flex justify-between">
                                  <span>{category.name}</span>
                                  <Badge variant="secondary" className="text-xs">
                                    {category.count}
                                  </Badge>
                                </div>
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Action Buttons */}
                  <div className="flex justify-between">
                    <Link to="/audits">
                      <Button variant="outline">Cancel</Button>
                    </Link>
                    <div className="flex gap-3">
                      <Button variant="outline">Save as Draft</Button>
                      <Button>
                        <CheckSquare className="w-4 h-4 mr-2" />
                        Create Audit Session
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Right Sidebar - Summary */}
                <div className="space-y-6">
                  {/* Audit Type Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {isExternal ? (
                          <Building2 className="w-5 h-5 text-purple-500" />
                        ) : (
                          <Users className="w-5 h-5 text-orange-500" />
                        )}
                        {isExternal ? 'External Audit' : 'Mock Audit'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Purpose:</span>
                          <span>{isExternal ? 'Certification' : 'Preparation'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Conducted by:</span>
                          <span>{isExternal ? 'Third Party' : 'Internal Team'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Binding:</span>
                          <span>{isExternal ? 'Yes' : 'No'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Report:</span>
                          <span>{isExternal ? 'Official' : 'Internal Use'}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Framework Info */}
                  {selectedFramework && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Shield className="w-5 h-5 text-blue-500" />
                          Framework Details
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {(() => {
                          const framework = frameworks.find(f => f.value === selectedFramework);
                          return framework ? (
                            <div className="space-y-3 text-sm">
                              <div>
                                <div className="font-medium">{framework.label}</div>
                                <div className="text-muted-foreground">{framework.description}</div>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Total Controls:</span>
                                <span className="font-medium">{framework.controls}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Est. Duration:</span>
                                <span>{isExternal ? '8-12 weeks' : '2-4 weeks'}</span>
                              </div>
                            </div>
                          ) : null;
                        })()}
                      </CardContent>
                    </Card>
                  )}

                  {/* Preparation Checklist */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckSquare className="w-5 h-5 text-green-500" />
                        Preparation Checklist
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Framework selected</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          <span>Control scope defined</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          <span>Evidence repository ready</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          <span>Team notifications sent</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Tips */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-500" />
                        {isExternal ? 'External Audit Tips' : 'Mock Audit Tips'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        {isExternal ? (
                          <>
                            <p>• Ensure all evidence is properly organized and accessible</p>
                            <p>• Schedule interviews with key personnel in advance</p>
                            <p>• Prepare executive summary of compliance posture</p>
                            <p>• Review contract terms and deliverables</p>
                          </>
                        ) : (
                          <>
                            <p>• Use mock audits to identify gaps before official audits</p>
                            <p>• Focus on areas with highest risk or compliance challenges</p>
                            <p>• Document lessons learned for process improvement</p>
                            <p>• Practice with different team members as auditors</p>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
    </div>
  );
}