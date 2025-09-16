import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Workspace {
  id: string;
  name: string;
  description?: string;
}

interface Tenant {
  id: string;
  name: string;
  icon: string;
  workspaces: Workspace[];
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface OrgContextType {
  tenants: Tenant[];
  currentTenant: Tenant | null;
  currentWorkspace: Workspace | null;
  currentUser: User | null;
  setCurrentTenant: (tenant: Tenant) => void;
  setCurrentWorkspace: (workspace: Workspace) => void;
  setCurrentUser: (user: User) => void;
}

const OrgContext = createContext<OrgContextType | undefined>(undefined);

// Sample data
const sampleTenants: Tenant[] = [
  {
    id: '1',
    name: 'Acme Corp',
    icon: '🏢',
    workspaces: [
      { id: '1-1', name: 'Main Operations', description: 'Primary business operations' },
      { id: '1-2', name: 'R&D Division', description: 'Research and development' },
      { id: '1-3', name: 'Security Team', description: 'Cybersecurity operations' }
    ]
  },
  {
    id: '2',
    name: 'TechStart Inc',
    icon: '🚀',
    workspaces: [
      { id: '2-1', name: 'Product Development', description: 'Core product team' }
    ]
  },
  {
    id: '3',
    name: 'Global Systems',
    icon: '🌐',
    workspaces: [
      { id: '3-1', name: 'North America', description: 'NA operations' },
      { id: '3-2', name: 'Europe', description: 'European operations' },
      { id: '3-3', name: 'Asia Pacific', description: 'APAC operations' }
    ]
  }
];

const sampleUser: User = {
  id: '1',
  name: 'John Smith',
  email: 'john.smith@acme.com'
};

interface OrgProviderProps {
  children: ReactNode;
}

export const OrgProvider: React.FC<OrgProviderProps> = ({ children }) => {
  const [tenants] = useState<Tenant[]>(sampleTenants);
  const [currentTenant, setCurrentTenantState] = useState<Tenant | null>(null);
  const [currentWorkspace, setCurrentWorkspaceState] = useState<Workspace | null>(null);
  const [currentUser] = useState<User | null>(sampleUser);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedTenantId = localStorage.getItem('currentTenantId');
      const savedWorkspaceId = localStorage.getItem('currentWorkspaceId');
      
      if (savedTenantId) {
        const tenant = tenants.find(t => t.id === savedTenantId);
        if (tenant) {
          setCurrentTenantState(tenant);
          
          if (savedWorkspaceId) {
            const workspace = tenant.workspaces.find(w => w.id === savedWorkspaceId);
            if (workspace) {
              setCurrentWorkspaceState(workspace);
            } else {
              // Default to first workspace if saved one doesn't exist
              setCurrentWorkspaceState(tenant.workspaces[0] || null);
            }
          } else {
            // Default to first workspace
            setCurrentWorkspaceState(tenant.workspaces[0] || null);
          }
        }
      } else {
        // Default to first tenant and workspace
        const defaultTenant = tenants[0];
        if (defaultTenant) {
          setCurrentTenantState(defaultTenant);
          setCurrentWorkspaceState(defaultTenant.workspaces[0] || null);
        }
      }
    } catch (error) {
      console.error('Error loading org context from localStorage:', error);
      // Fallback to defaults
      const defaultTenant = tenants[0];
      if (defaultTenant) {
        setCurrentTenantState(defaultTenant);
        setCurrentWorkspaceState(defaultTenant.workspaces[0] || null);
      }
    }
  }, [tenants]);

  const setCurrentTenant = (tenant: Tenant) => {
    setCurrentTenantState(tenant);
    setCurrentWorkspaceState(tenant.workspaces[0] || null);
    localStorage.setItem('currentTenantId', tenant.id);
    localStorage.setItem('currentWorkspaceId', tenant.workspaces[0]?.id || '');
  };

  const setCurrentWorkspace = (workspace: Workspace) => {
    setCurrentWorkspaceState(workspace);
    localStorage.setItem('currentWorkspaceId', workspace.id);
  };

  const setCurrentUser = (user: User) => {
    // For now, user switching is not implemented
    console.log('User switching not implemented yet:', user);
  };

  const value: OrgContextType = {
    tenants,
    currentTenant,
    currentWorkspace,
    currentUser,
    setCurrentTenant,
    setCurrentWorkspace,
    setCurrentUser
  };

  return <OrgContext.Provider value={value}>{children}</OrgContext.Provider>;
};

export const useOrg = (): OrgContextType => {
  const context = useContext(OrgContext);
  if (context === undefined) {
    throw new Error('useOrg must be used within an OrgProvider');
  }
  return context;
};