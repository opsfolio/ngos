import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface StatusCardProps {
  title: string;
  value: string | number;
  status: 'success' | 'warning' | 'destructive' | 'neutral';
  icon: LucideIcon;
  subtitle?: string;
  trend?: string;
}

const statusConfig = {
  success: {
    badgeClass: 'bg-success-light text-success border-success/20',
    iconClass: 'text-success'
  },
  warning: {
    badgeClass: 'bg-warning-light text-warning border-warning/20',
    iconClass: 'text-warning'
  },
  destructive: {
    badgeClass: 'bg-destructive-light text-destructive border-destructive/20',
    iconClass: 'text-destructive'
  },
  neutral: {
    badgeClass: 'bg-muted text-muted-foreground border-border',
    iconClass: 'text-muted-foreground'
  }
};

export const StatusCard: React.FC<StatusCardProps> = ({
  title,
  value,
  status,
  icon: Icon,
  subtitle,
  trend
}) => {
  const config = statusConfig[status];

  return (
    <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className={`w-5 h-5 ${config.iconClass}`} />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-2xl font-bold text-foreground">{value}</div>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
          {trend && (
            <Badge variant="outline" className={config.badgeClass}>
              {trend}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};