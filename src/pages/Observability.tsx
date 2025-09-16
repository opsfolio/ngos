import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Activity, 
  BarChart3, 
  Shield, 
  AlertTriangle, 
  Clock, 
  Eye, 
  Download, 
  Plus, 
  Settings, 
  CheckCircle, 
  XCircle, 
  TrendingUp,
  Server,
  Smartphone,
  Globe,
  Lock,
  LineChart,
  AlertCircle,
  Zap,
  FileText,
  Link
} from 'lucide-react';

const Observability = () => {
  const mockKPIs = {
    infraUptime: 99.9,
    appUptime: 99.5,
    apiUptime: 99.8,
    sloCompliance: 97.2,
    activeIncidents: 2,
    anomalies24h: 5,
    neverEventsQ: 0,
    privacySignals: 3
  };

  const mockIntegrations = [
    { name: 'OpenTelemetry Collector', icon: Activity, status: 'Not Connected', type: 'Core', signals: ['Metrics', 'Logs', 'Traces'] },
    { name: 'Datadog', icon: BarChart3, status: 'Connected', type: 'APM', signals: ['Metrics', 'Logs', 'Traces', 'RUM'] },
    { name: 'New Relic', icon: LineChart, status: 'Not Connected', type: 'APM', signals: ['Metrics', 'Logs', 'Traces'] },
    { name: 'Grafana Stack', icon: BarChart3, status: 'Not Connected', type: 'Metrics', signals: ['Metrics', 'Logs'] },
    { name: 'Prometheus', icon: Activity, status: 'Not Connected', type: 'Metrics', signals: ['Metrics'] },
    { name: 'PagerDuty', icon: AlertTriangle, status: 'Connected', type: 'Incidents', signals: ['Incidents', 'Status'] },
    { name: 'Statuspage', icon: Globe, status: 'Not Connected', type: 'Status', signals: ['Status'] },
    { name: 'Sentry', icon: AlertCircle, status: 'Not Connected', type: 'Errors', signals: ['Errors', 'Performance'] }
  ];

  const mockStatusPages = [
    { category: 'Infrastructure', uptime: 99.9, target: 99.5, incidents: 1, lastUpdate: '2 min ago' },
    { category: 'Applications', uptime: 99.5, target: 99.0, incidents: 2, lastUpdate: '5 min ago' },
    { category: 'APIs', uptime: 99.8, target: 99.5, incidents: 0, lastUpdate: '1 min ago' },
    { category: 'Data Privacy', uptime: 100.0, target: 99.9, incidents: 0, lastUpdate: '10 min ago' }
  ];

  const openTelemetryConfig = `receivers:
  otlp:
    protocols:
      grpc:
        endpoint: 0.0.0.0:4317
      http:
        endpoint: 0.0.0.0:4318

processors:
  batch:

exporters:
  datadog:
    api:
      key: \${DD_API_KEY}
      site: datadoghq.com
  
  # Custom webhook for compliance rollups
  webhook:
    endpoint: https://your-compliance-webhook.com/observability

service:
  pipelines:
    metrics:
      receivers: [otlp]
      processors: [batch]
      exporters: [datadog, webhook]
    logs:
      receivers: [otlp]
      processors: [batch]
      exporters: [datadog, webhook]
    traces:
      receivers: [otlp]
      processors: [batch]
      exporters: [datadog, webhook]`;

  return (
    <div className="px-6 py-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Observability</h1>
          <p className="text-muted-foreground mt-2 max-w-3xl">
            Single pane of glass that consolidates operational signals from third-party observability systems 
            for executives, compliance officers, and privacy leaders. Aggregates SRE and DevOps metrics into 
            executive-level insights with OpenTelemetry support.
          </p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Integration
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Configure SLOs
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Executive Report
          </Button>
        </div>
      </div>

      {/* Mermaid Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Observability Flow
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground mb-4">
            Data flow from third-party observability platforms through OpenTelemetry to executive dashboards
          </div>
          <div className="bg-muted/20 p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <div className="whitespace-pre">
{`┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐    ┌──────────────────┐
│ OpenTelemetry   │───▶│ Connectors UI    │───▶│ Observability   │───▶│ Executive Views  │
│ + Providers     │    │ (Datadog, etc.)  │    │ Data Store      │    │ (KPIs/Trends)    │
└─────────────────┘    └──────────────────┘    └─────────────────┘    └──────────────────┘
                                                         │
                                                         ▼
                                               ┌─────────────────┐
                                               │ Compliance      │
                                               │ Mapping         │
                                               │ (Evidence)      │
                                               └─────────────────┘`}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* KPIs Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Infrastructure Uptime</CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockKPIs.infraUptime}%</div>
            <Progress value={mockKPIs.infraUptime} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">SLO Compliance</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockKPIs.sloCompliance}%</div>
            <Progress value={mockKPIs.sloCompliance} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">This quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Incidents</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockKPIs.activeIncidents}</div>
            <p className="text-xs text-muted-foreground mt-1">Rolled up from SRE</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Never Events</CardTitle>
            <XCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{mockKPIs.neverEventsQ}</div>
            <p className="text-xs text-muted-foreground mt-1">This quarter</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="status">Status Pages</TabsTrigger>
          <TabsTrigger value="executive">Executive View</TabsTrigger>
          <TabsTrigger value="privacy">Privacy Observability</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Never Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">0 Events</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Organization-defined intolerable events that require immediate executive attention
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Data Breach</span>
                    <Badge variant="secondary">Never</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Service Outage &gt;4hrs</span>
                    <Badge variant="secondary">Never</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Security Compromise</span>
                    <Badge variant="secondary">Never</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Anomalies (24h)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">{mockKPIs.anomalies24h}</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Error Rate Spike</span>
                    <Badge variant="destructive">High</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Latency Increase</span>
                    <Badge variant="secondary">Medium</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Memory Usage</span>
                    <Badge variant="secondary">Low</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Link className="h-5 w-5" />
                Quick Links
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 md:grid-cols-3">
                <Button variant="outline" className="justify-start">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  View Incidents
                </Button>
                <Button variant="outline" className="justify-start">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  SLOs & SLAs
                </Button>
                <Button variant="outline" className="justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Evidence Mapping
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mockIntegrations.map((integration) => {
              const IconComponent = integration.icon;
              return (
                <Card key={integration.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <IconComponent className="h-5 w-5" />
                      {integration.name}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Badge variant={integration.status === 'Connected' ? 'default' : 'outline'}>
                        {integration.status}
                      </Badge>
                      <Badge variant="secondary">{integration.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <Label className="text-xs">Signals Supported</Label>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {integration.signals.map((signal) => (
                            <Badge key={signal} variant="outline" className="text-xs">
                              {signal}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" className="w-full">
                            {integration.status === 'Connected' ? 'Configure' : 'Connect'}
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Connect {integration.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="api-key">API Key</Label>
                              <Input id="api-key" placeholder="Enter your API key" />
                            </div>
                            <div>
                              <Label htmlFor="endpoint">Endpoint URL</Label>
                              <Input id="endpoint" placeholder="https://api.example.com" />
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Note: Backend storage for credentials is pending. For now, this is UI only.
                            </p>
                            <Button className="w-full">Save Connection</Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                OpenTelemetry Collector Setup
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Example OpenTelemetry collector configuration that exports to your chosen providers and compliance webhooks:
              </p>
              <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                <pre className="text-xs font-mono">{openTelemetryConfig}</pre>
              </div>
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline">Copy Config</Button>
                <Button size="sm" variant="outline">Download YAML</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compliance as Code Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Connect observability data to compliance controls and policies for automated evidence mapping.
              </p>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Link className="h-4 w-4 mr-2" />
                  Evidence Integrations
                </Button>
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Evidence Mapping
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="status" className="space-y-4">
          <div className="grid gap-4">
            {mockStatusPages.map((status) => (
              <Card key={status.category}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{status.category}</span>
                    <Badge variant={status.uptime >= status.target ? 'default' : 'destructive'}>
                      {status.uptime}% Uptime
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div>
                      <Label className="text-xs text-muted-foreground">30-Day Uptime</Label>
                      <div className="text-lg font-semibold">{status.uptime}%</div>
                      <Progress value={status.uptime} className="mt-1" />
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">SLO Target</Label>
                      <div className="text-lg font-semibold">{status.target}%</div>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Active Incidents</Label>
                      <div className="text-lg font-semibold">{status.incidents}</div>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Last Updated</Label>
                      <div className="text-lg font-semibold">{status.lastUpdate}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                SRE Rollups
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Aggregated per-category insights for executive-level view
              </p>
              <div className="grid gap-2 md:grid-cols-2">
                <div className="flex justify-between p-3 bg-muted/20 rounded">
                  <span>Overall Health Score</span>
                  <Badge variant="default">Green</Badge>
                </div>
                <div className="flex justify-between p-3 bg-muted/20 rounded">
                  <span>Business Impact Incidents</span>
                  <Badge variant="secondary">1 this week</Badge>
                </div>
                <div className="flex justify-between p-3 bg-muted/20 rounded">
                  <span>SLO Breach Risk</span>
                  <Badge variant="secondary">Low</Badge>
                </div>
                <div className="flex justify-between p-3 bg-muted/20 rounded">
                  <span>Executive Attention Required</span>
                  <Badge variant="destructive">0 items</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="executive" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Overall Health Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">All systems operational</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Key Risks This Week</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Database performance degradation trending upward</li>
                      <li>• API rate limit approaching threshold</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Business Impact</h4>
                    <p className="text-sm text-muted-foreground">
                      1 incident this week with minor customer impact. All SLOs met or exceeded.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Never Events Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-green-600 mb-2">0 Never Events</div>
                  <p className="text-sm text-muted-foreground">
                    No organization-defined intolerable events this quarter
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Export Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 md:grid-cols-3">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Executive PDF Report
                </Button>
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Copy Brief Summary
                </Button>
                <Button variant="outline">
                  <Clock className="h-4 w-4 mr-2" />
                  Schedule Weekly Reports
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Privacy Signals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Privacy Incidents</span>
                    <Badge variant="secondary">0</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">DSRs in Progress</span>
                    <Badge variant="secondary">3</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">PII Exposure Flags</span>
                    <Badge variant="destructive">1</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Flow Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Web Applications</span>
                    <Badge variant="default">Monitored</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">API Endpoints</span>
                    <Badge variant="default">Monitored</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Database Access</span>
                    <Badge variant="outline">Pending</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Privacy Connectors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">OneTrust</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" variant="outline" className="w-full">Connect</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">BigID</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" variant="outline" className="w-full">Connect</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>SLO/SLA Targets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="infra-slo">Infrastructure SLO (%)</Label>
                  <Input id="infra-slo" defaultValue="99.5" />
                </div>
                <div>
                  <Label htmlFor="app-slo">Application SLO (%)</Label>
                  <Input id="app-slo" defaultValue="99.0" />
                </div>
                <div>
                  <Label htmlFor="api-slo">API SLO (%)</Label>
                  <Input id="api-slo" defaultValue="99.5" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Never Events Definition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="event-name">Event Name</Label>
                  <Input id="event-name" placeholder="e.g., Data Breach" />
                </div>
                <div>
                  <Label htmlFor="event-severity">Severity</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="critical">Critical</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button size="sm">Add Never Event</Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Anomaly Detection Thresholds</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
              <div>
                <Label htmlFor="error-threshold">Error Rate Threshold (%)</Label>
                <Input id="error-threshold" defaultValue="5" />
              </div>
              <div>
                <Label htmlFor="latency-threshold">Latency P95 Threshold (ms)</Label>
                <Input id="latency-threshold" defaultValue="500" />
              </div>
              <div>
                <Label htmlFor="spike-threshold">Traffic Spike Threshold (%)</Label>
                <Input id="spike-threshold" defaultValue="200" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Observability;