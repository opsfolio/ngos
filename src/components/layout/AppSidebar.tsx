import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Shield,
  CheckCircle,
  TrendingDown,
  Users,
  FileText,
  CheckSquare,
  Calendar,
  Server,
  Award,
  AlertTriangle,
  Bot,
  Search,
  ClipboardCheck,
  Target,
  BarChart3,
  UserCheck,
  Zap,
  AlertCircle
} from 'lucide-react';

const navigationGroups = [
  {
    title: "Governance",
    items: [
      { name: 'Controls Library', href: '/controls', icon: Shield },
      { name: 'Policies Library', href: '/policies', icon: FileText },
      { name: 'Evidence Warehouse', href: '/evidence', icon: ClipboardCheck },
      { name: 'Risks Library', href: '/risks', icon: Zap },
    ]
  },
  {
    title: "Security",
    items: [
      { name: 'Threat Management', href: '/threats', icon: AlertTriangle },
      { name: 'Incident Management', href: '/incidents', icon: AlertCircle },
      { name: 'Observability', href: '/observability', icon: BarChart3 },
      { name: 'Asset Intelligence', href: '/assets', icon: Server },
      { name: 'Quality Intelligence', href: '/quality', icon: Award },
    ]
  },
  {
    title: "Compliance",
    items: [
      { name: 'Audit Center', href: '/audits', icon: CheckSquare },
      { name: 'Expectations, SLOs & SLAs', href: '/progress/expectations', icon: Target },
      { name: 'Progress & POAMs', href: '/progress', icon: BarChart3 },
      { name: 'Outcomes', href: '/progress/outcomes', icon: Award },
      { name: 'Legal & Insurance', href: '/legal-insurance', icon: UserCheck },
      { name: 'Team Management', href: '/team', icon: Users },
    ]
  },
  {
    title: "AI Assistant",
    items: [
      { name: 'CaaS Assistant', href: '/copilot', icon: Bot },
    ]
  }
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-muted text-primary font-medium" : "hover:bg-muted/50";

  return (
    <Sidebar
      collapsible="icon"
    >
      <SidebarContent>
        {navigationGroups.map((group) => {
          const hasActiveItem = group.items.some(item => isActive(item.href));
          
          return (
            <SidebarGroup
              key={group.title}
            >
              <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {group.title}
              </SidebarGroupLabel>
              
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton asChild>
                        <NavLink 
                          to={item.href} 
                          end 
                          className={getNavCls}
                          title={isCollapsed ? item.name : undefined}
                        >
                          <item.icon className="h-4 w-4" />
                          <span className="text-sm">{item.name}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}