import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, AlertCircle, FileText, Shield, Calendar } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  type: 'policy' | 'audit' | 'evidence' | 'control';
  dueDate: string;
  module: string;
}

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Review Access Control Policy',
    description: 'Annual review required for AC-2 policy document',
    priority: 'high',
    type: 'policy',
    dueDate: '2 days',
    module: 'Controls & Policies'
  },
  {
    id: '2',
    title: 'Upload Security Training Evidence',
    description: 'Q4 training completion certificates needed',
    priority: 'medium',
    type: 'evidence',
    dueDate: '1 week',
    module: 'Audits & Readiness'
  },
  {
    id: '3',
    title: 'Remediate High-Risk Findings',
    description: '3 critical vulnerabilities require immediate attention',
    priority: 'high',
    type: 'control',
    dueDate: 'Overdue',
    module: 'Threat Management'
  },
  {
    id: '4',
    title: 'Schedule Mock Audit',
    description: 'Prepare for SOC 2 Type II audit next quarter',
    priority: 'medium',
    type: 'audit',
    dueDate: '2 weeks',
    module: 'Audits & Readiness'
  }
];

const priorityConfig = {
  high: { 
    badge: 'bg-destructive-light text-destructive border-destructive/20',
    icon: AlertCircle,
    iconClass: 'text-destructive'
  },
  medium: { 
    badge: 'bg-warning-light text-warning border-warning/20',
    icon: Clock,
    iconClass: 'text-warning'
  },
  low: { 
    badge: 'bg-success-light text-success border-success/20',
    icon: CheckCircle,
    iconClass: 'text-success'
  }
};

const typeIcons = {
  policy: FileText,
  audit: Shield,
  evidence: FileText,
  control: Shield
};

export const TasksFeed = () => {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Pending Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockTasks.map((task) => {
          const priorityInfo = priorityConfig[task.priority];
          const TypeIcon = typeIcons[task.type];
          const PriorityIcon = priorityInfo.icon;

          return (
            <div key={task.id} className="flex items-start space-x-4 p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary-lighter rounded-lg flex items-center justify-center">
                  <TypeIcon className="w-5 h-5 text-primary" />
                </div>
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-foreground">{task.title}</h4>
                  <div className="flex items-center space-x-2">
                    <PriorityIcon className={`w-4 h-4 ${priorityInfo.iconClass}`} />
                    <Badge variant="outline" className={priorityInfo.badge}>
                      {task.priority}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">{task.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>Due: {task.dueDate}</span>
                    <span>•</span>
                    <span>{task.module}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Take Action
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
        
        <Button variant="ghost" className="w-full mt-4 text-primary hover:text-primary hover:bg-primary-lighter">
          View All Tasks
        </Button>
      </CardContent>
    </Card>
  );
};