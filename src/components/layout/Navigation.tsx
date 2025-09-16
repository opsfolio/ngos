import React from 'react';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { usePageTitle } from '@/utils/pageTitles';
import { useLocation } from 'react-router-dom';
import { useOrg } from '@/contexts/OrgContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Shield, 
  User,
  Building2,
  Layers3,
  ChevronDown
} from 'lucide-react';

const shortcuts = [];

export const Navigation = () => {
  const location = useLocation();
  const pageTitle = usePageTitle();
  const isHomePage = location.pathname === '/';
  const { 
    tenants, 
    currentTenant, 
    currentWorkspace, 
    currentUser, 
    setCurrentTenant, 
    setCurrentWorkspace 
  } = useOrg();
  
  return (
    <header className="bg-card border-b border-border fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left: Sidebar trigger and Logo */}
        <div className="flex items-center space-x-6">
          <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">
              {isHomePage ? 'Opsfolio Suite' : `Opsfolio ${pageTitle}`}
            </span>
          </div>

          {/* Main Navigation Shortcuts */}
          <nav className="hidden lg:flex items-center space-x-1 ml-8">
            {shortcuts.map((shortcut) => (
              <Button
                key={shortcut.name}
                variant="ghost"
                className="text-muted-foreground hover:text-foreground hover:bg-muted/50 flex items-center space-x-2 px-3 py-2"
              >
                <shortcut.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{shortcut.name}</span>
              </Button>
            ))}
          </nav>
        </div>

        {/* Right: Organization Info */}
        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center space-x-4 text-sm">
            {/* Tenant Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 px-3 py-2 h-auto">
                  <Building2 className="w-4 h-4" />
                  <span className="font-medium">{currentTenant?.name || 'Select Tenant'}</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 bg-popover border border-border">
                <DropdownMenuLabel className="text-muted-foreground text-xs uppercase tracking-wide">
                  Select Tenant
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {tenants.map((tenant) => (
                  <DropdownMenuItem
                    key={tenant.id}
                    onClick={() => setCurrentTenant(tenant)}
                    className={`flex items-center space-x-3 cursor-pointer ${
                      currentTenant?.id === tenant.id ? 'bg-accent text-accent-foreground' : ''
                    }`}
                  >
                    <span className="text-lg">{tenant.icon}</span>
                    <div>
                      <div className="font-medium">{tenant.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {tenant.workspaces.length} workspace{tenant.workspaces.length !== 1 ? 's' : ''}
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Workspace Selector */}
            {currentTenant && currentTenant.workspaces.length > 0 && (
              <>
                <div className="w-px h-4 bg-border"></div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 px-3 py-2 h-auto">
                      <Layers3 className="w-4 h-4" />
                      <span className="font-medium">{currentWorkspace?.name || 'Select Workspace'}</span>
                      <ChevronDown className="w-3 h-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-64 bg-popover border border-border">
                    <DropdownMenuLabel className="text-muted-foreground text-xs uppercase tracking-wide">
                      {currentTenant.name} Workspaces
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {currentTenant.workspaces.map((workspace) => (
                      <DropdownMenuItem
                        key={workspace.id}
                        onClick={() => setCurrentWorkspace(workspace)}
                        className={`cursor-pointer ${
                          currentWorkspace?.id === workspace.id ? 'bg-accent text-accent-foreground' : ''
                        }`}
                      >
                        <div>
                          <div className="font-medium">{workspace.name}</div>
                          {workspace.description && (
                            <div className="text-xs text-muted-foreground">{workspace.description}</div>
                          )}
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}

            {/* User Info */}
            <div className="w-px h-4 bg-border"></div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <span className="font-medium text-foreground">{currentUser?.name || 'User'}</span>
            </div>
          </div>
          
          {/* Mobile: User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground md:hidden">
                <User className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-popover border border-border">
              <DropdownMenuLabel>Organization</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="p-2 space-y-2">
                <div className="text-sm">
                  <span className="text-muted-foreground">Tenant: </span>
                  <span className="font-medium">{currentTenant?.name}</span>
                </div>
                {currentWorkspace && (
                  <div className="text-sm">
                    <span className="text-muted-foreground">Workspace: </span>
                    <span className="font-medium">{currentWorkspace.name}</span>
                  </div>
                )}
                <div className="text-sm">
                  <span className="text-muted-foreground">User: </span>
                  <span className="font-medium">{currentUser?.name}</span>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};