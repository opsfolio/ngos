import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  AlertTriangle, 
  Search, 
  Filter, 
  Plus,
  Zap,
  Shield,
  TrendingDown,
  Calendar,
  FileText,
  Users,
  BarChart3
} from 'lucide-react';

const RiskAnalysisFMEA = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('risk-register');

  const riskRegister = [
    {
      id: 'RISK-001',
      title: 'Data Breach due to Authentication Weakness',
      category: 'Security',
      probability: 'Medium',
      impact: 'High',
      riskScore: 12,
      riskLevel: 'High',
      status: 'Open',
      owner: 'Security Team',
      mitigation: 'Implement MFA and regular security audits',
      dueDate: '2024-02-15',
      linkedRequirements: ['REQ-001', 'REQ-002']
    },
    {
      id: 'RISK-002',
      title: 'System Performance Degradation',
      category: 'Performance',
      probability: 'High',
      impact: 'Medium',
      riskScore: 9,
      riskLevel: 'Medium',
      status: 'Mitigated',
      owner: 'Engineering Team',
      mitigation: 'Load balancing and performance monitoring implemented',
      dueDate: '2024-01-30',
      linkedRequirements: ['REQ-003']
    },
    {
      id: 'RISK-003',
      title: 'Regulatory Compliance Failure',
      category: 'Compliance',
      probability: 'Low',
      impact: 'Critical',
      riskScore: 15,
      riskLevel: 'Critical',
      status: 'Open',
      owner: 'Compliance Team',
      mitigation: 'Enhanced documentation and audit trail implementation',
      dueDate: '2024-02-28',
      linkedRequirements: ['REQ-004']
    }
  ];

  const fmeaAnalysis = [
    {
      id: 'FMEA-001',
      function: 'User Authentication',
      failureMode: 'Authentication bypass',
      failureEffect: 'Unauthorized system access',
      severity: 9,
      occurrence: 3,
      detection: 4,
      rpn: 108,
      currentControls: 'Multi-factor authentication, session timeout',
      recommendedActions: 'Implement behavioral analytics, enhance monitoring',
      responsibility: 'Security Team',
      targetRPN: 54
    },
    {
      id: 'FMEA-002',
      function: 'Data Storage',
      failureMode: 'Data corruption',
      failureEffect: 'Loss of critical patient data',
      severity: 10,
      occurrence: 2,
      detection: 3,
      rpn: 60,
      currentControls: 'Database backups, integrity checks',
      recommendedActions: 'Implement real-time replication, enhance checksums',
      responsibility: 'Database Team',
      targetRPN: 30
    },
    {
      id: 'FMEA-003',
      function: 'Software Update Process',
      failureMode: 'Failed deployment',
      failureEffect: 'System downtime, service interruption',
      severity: 7,
      occurrence: 4,
      detection: 6,
      rpn: 168,
      currentControls: 'Staging environment, rollback procedures',
      recommendedActions: 'Implement blue-green deployment, automated testing',
      responsibility: 'DevOps Team',
      targetRPN: 84
    }
  ];

  const hazardAnalysis = [
    {
      id: 'HAZ-001',
      hazard: 'Incorrect medication dosage calculation',
      cause: 'Software algorithm error',
      effect: 'Patient harm, overdose/underdose',
      severity: 'Catastrophic',
      probability: 'Remote',
      riskClass: 'High',
      safeguards: 'Double verification, range checks, user confirmation',
      verification: 'Unit testing, integration testing, clinical validation'
    },
    {
      id: 'HAZ-002',
      hazard: 'System unavailability during critical operation',
      cause: 'Hardware failure, software crash',
      effect: 'Delayed treatment, manual procedures required',
      severity: 'Critical',
      probability: 'Occasional',
      riskClass: 'Medium',
      safeguards: 'Redundant systems, backup procedures, failover mechanisms',
      verification: 'Stress testing, failure mode testing, backup drills'
    }
  ];

  const getRiskLevelBadge = (level: string) => {
    const variants: Record<string, string> = {
      'Critical': 'bg-red-100 text-red-800 border-red-200',
      'High': 'bg-orange-100 text-orange-800 border-orange-200',
      'Medium': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Low': 'bg-green-100 text-green-800 border-green-200'
    };
    return <Badge className={variants[level] || 'bg-gray-100 text-gray-800 border-gray-200'}>{level}</Badge>;
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      'Open': 'bg-red-100 text-red-800 border-red-200',
      'Mitigated': 'bg-green-100 text-green-800 border-green-200',
      'Accepted': 'bg-blue-100 text-blue-800 border-blue-200',
      'Transferred': 'bg-purple-100 text-purple-800 border-purple-200'
    };
    return <Badge className={variants[status] || 'bg-gray-100 text-gray-800 border-gray-200'}>{status}</Badge>;
  };

  const getRPNColor = (rpn: number) => {
    if (rpn >= 125) return 'text-red-600 font-bold';
    if (rpn >= 75) return 'text-orange-600 font-semibold';
    if (rpn >= 25) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getSeverityColor = (severity: string | number) => {
    const sev = typeof severity === 'string' ? 
      (severity === 'Catastrophic' ? 10 : severity === 'Critical' ? 8 : 5) : severity;
    if (sev >= 9) return 'text-red-600 font-bold';
    if (sev >= 7) return 'text-orange-600 font-semibold';
    if (sev >= 5) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                    <AlertTriangle className="h-8 w-8" />
                    Risk Analysis & FMEA
                  </h1>
                  <p className="text-muted-foreground mt-2">
                    Comprehensive risk management and failure mode analysis for safety-critical systems
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Risk
                  </Button>
                  <Button variant="outline">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Risk Report
                  </Button>
                </div>
              </div>

              {/* Risk Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Risks</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">47</div>
                    <p className="text-xs text-muted-foreground">+3 identified this week</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Critical/High Risks</CardTitle>
                    <Zap className="h-4 w-4 text-red-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground">Requires immediate attention</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Mitigated Risks</CardTitle>
                    <Shield className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">32</div>
                    <p className="text-xs text-muted-foreground">68% mitigation rate</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Risk Trend</CardTitle>
                    <TrendingDown className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">-15%</div>
                    <p className="text-xs text-muted-foreground">Decrease from last quarter</p>
                  </CardContent>
                </Card>
              </div>

              {/* Risk Analysis Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="risk-register">Risk Register</TabsTrigger>
                  <TabsTrigger value="fmea">FMEA Analysis</TabsTrigger>
                  <TabsTrigger value="hazard-analysis">Hazard Analysis</TabsTrigger>
                  <TabsTrigger value="risk-matrix">Risk Matrix</TabsTrigger>
                </TabsList>

                {/* Risk Register Tab */}
                <TabsContent value="risk-register" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Risk Register</CardTitle>
                      <CardDescription>Comprehensive risk identification and management</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative flex-1">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            placeholder="Search risks..."
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
                              <TableHead>Risk ID</TableHead>
                              <TableHead>Title & Category</TableHead>
                              <TableHead>Risk Level</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Owner</TableHead>
                              <TableHead>Due Date</TableHead>
                              <TableHead>Mitigation</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {riskRegister.map((risk) => (
                              <TableRow key={risk.id} className="hover:bg-muted/50">
                                <TableCell className="font-medium">{risk.id}</TableCell>
                                <TableCell>
                                  <div>
                                    <p className="font-semibold">{risk.title}</p>
                                    <Badge variant="outline" className="mt-1">{risk.category}</Badge>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="space-y-1">
                                    {getRiskLevelBadge(risk.riskLevel)}
                                    <div className="text-sm text-muted-foreground">Score: {risk.riskScore}</div>
                                  </div>
                                </TableCell>
                                <TableCell>{getStatusBadge(risk.status)}</TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                    {risk.owner}
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    {risk.dueDate}
                                  </div>
                                </TableCell>
                                <TableCell className="max-w-xs">
                                  <p className="text-sm line-clamp-2">{risk.mitigation}</p>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* FMEA Analysis Tab */}
                <TabsContent value="fmea" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Failure Mode and Effects Analysis (FMEA)</CardTitle>
                      <CardDescription>Systematic analysis of potential failure modes and their impact</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="border rounded-lg overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Function</TableHead>
                              <TableHead>Failure Mode</TableHead>
                              <TableHead>Effect</TableHead>
                              <TableHead>S</TableHead>
                              <TableHead>O</TableHead>
                              <TableHead>D</TableHead>
                              <TableHead>RPN</TableHead>
                              <TableHead>Current Controls</TableHead>
                              <TableHead>Recommended Actions</TableHead>
                              <TableHead>Target RPN</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {fmeaAnalysis.map((fmea) => (
                              <TableRow key={fmea.id} className="hover:bg-muted/50">
                                <TableCell className="font-medium">{fmea.function}</TableCell>
                                <TableCell>{fmea.failureMode}</TableCell>
                                <TableCell className="max-w-xs">
                                  <p className="text-sm line-clamp-2">{fmea.failureEffect}</p>
                                </TableCell>
                                <TableCell className={getSeverityColor(fmea.severity)}>{fmea.severity}</TableCell>
                                <TableCell>{fmea.occurrence}</TableCell>
                                <TableCell>{fmea.detection}</TableCell>
                                <TableCell className={getRPNColor(fmea.rpn)}>
                                  <span className="font-semibold">{fmea.rpn}</span>
                                </TableCell>
                                <TableCell className="max-w-xs">
                                  <p className="text-sm line-clamp-2">{fmea.currentControls}</p>
                                </TableCell>
                                <TableCell className="max-w-xs">
                                  <p className="text-sm line-clamp-2">{fmea.recommendedActions}</p>
                                </TableCell>
                                <TableCell className="text-green-600 font-semibold">{fmea.targetRPN}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      
                      <div className="mt-4 text-sm text-muted-foreground">
                        <p><strong>S</strong> = Severity, <strong>O</strong> = Occurrence, <strong>D</strong> = Detection, <strong>RPN</strong> = Risk Priority Number (S × O × D)</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Hazard Analysis Tab */}
                <TabsContent value="hazard-analysis" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Hazard Analysis</CardTitle>
                      <CardDescription>Safety-critical hazard identification and control measures</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {hazardAnalysis.map((hazard) => (
                          <Card key={hazard.id} className="border">
                            <CardHeader>
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">{hazard.id}: {hazard.hazard}</CardTitle>
                                {getRiskLevelBadge(hazard.riskClass)}
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold mb-2">Hazard Details</h4>
                                  <div className="space-y-2 text-sm">
                                    <div><strong>Cause:</strong> {hazard.cause}</div>
                                    <div><strong>Effect:</strong> {hazard.effect}</div>
                                    <div className="flex gap-4">
                                      <div><strong>Severity:</strong> <span className={getSeverityColor(hazard.severity)}>{hazard.severity}</span></div>
                                      <div><strong>Probability:</strong> {hazard.probability}</div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2">Risk Controls</h4>
                                  <div className="space-y-2 text-sm">
                                    <div><strong>Safeguards:</strong> {hazard.safeguards}</div>
                                    <div><strong>Verification:</strong> {hazard.verification}</div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Risk Matrix Tab */}
                <TabsContent value="risk-matrix" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Risk Assessment Matrix</CardTitle>
                      <CardDescription>Visual representation of risks by probability and impact</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-6 gap-1 max-w-2xl">
                        {/* Header row */}
                        <div className="col-span-1"></div>
                        <div className="text-center text-sm font-medium p-2">Very Low</div>
                        <div className="text-center text-sm font-medium p-2">Low</div>
                        <div className="text-center text-sm font-medium p-2">Medium</div>
                        <div className="text-center text-sm font-medium p-2">High</div>
                        <div className="text-center text-sm font-medium p-2">Very High</div>
                        
                        {/* Matrix rows */}
                        {['Very High', 'High', 'Medium', 'Low', 'Very Low'].map((probability, i) => (
                          <React.Fragment key={probability}>
                            <div className="text-sm font-medium p-2 flex items-center justify-center">{probability}</div>
                            {[1, 2, 3, 4, 5].map((impact) => {
                              const riskLevel = (5 - i) * impact;
                              let bgColor = 'bg-green-200';
                              if (riskLevel >= 15) bgColor = 'bg-red-200';
                              else if (riskLevel >= 10) bgColor = 'bg-orange-200';
                              else if (riskLevel >= 6) bgColor = 'bg-yellow-200';
                              
                              return (
                                <div 
                                  key={impact} 
                                  className={`${bgColor} border p-4 h-12 flex items-center justify-center text-sm font-semibold`}
                                >
                                  {riskLevel}
                                </div>
                              );
                            })}
                          </React.Fragment>
                        ))}
                      </div>
                      
                      <div className="mt-6 flex gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-green-200 border"></div>
                          <span>Low Risk (1-5)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-yellow-200 border"></div>
                          <span>Medium Risk (6-9)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-orange-200 border"></div>
                          <span>High Risk (10-14)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-red-200 border"></div>
                          <span>Critical Risk (15-25)</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
    </div>
  );
};

export default RiskAnalysisFMEA;