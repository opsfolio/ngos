import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Users, 
  Plus,
  Edit3,
  Trash2,
  CheckCircle,
  X,
  Settings,
  FileText,
  Database,
  AlertTriangle,
  Eye,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const roles = [
  {
    id: 1,
    name: 'CISO',
    description: 'Chief Information Security Officer with full administrative access',
    memberCount: 1,
    type: 'executive',
    permissions: {
      governance: ['read', 'write', 'admin'],
      security: ['read', 'write', 'admin'],
      compliance: ['read', 'write', 'admin'],
      team: ['read', 'write', 'admin']
    },
    responsibilities: [
      'Strategic security oversight',
      'Risk management decisions',
      'Compliance program leadership',
      'Team management and delegation'
    ]
  },
  {
    id: 2,
    name: 'Compliance Manager',
    description: 'Manages compliance programs and regulatory requirements',
    memberCount: 3,
    type: 'management',
    permissions: {
      governance: ['read', 'write'],
      security: ['read'],
      compliance: ['read', 'write', 'admin'],
      team: ['read', 'write']
    },
    responsibilities: [
      'Compliance program management',
      'Policy development and maintenance',
      'Audit coordination',
      'Regulatory reporting'
    ]
  },
  {
    id: 3,
    name: 'Security Analyst',
    description: 'Handles day-to-day security operations and monitoring',
    memberCount: 5,
    type: 'operational',
    permissions: {
      governance: ['read'],
      security: ['read', 'write'],
      compliance: ['read'],
      team: ['read']
    },
    responsibilities: [
      'Security monitoring and analysis',
      'Incident response',
      'Vulnerability assessment',
      'Security tool management'
    ]
  },
  {
    id: 4,
    name: 'External Auditor',
    description: 'Third-party auditors with limited, audit-focused access',
    memberCount: 2,
    type: 'external',
    permissions: {
      governance: ['read'],
      security: ['read'],
      compliance: ['read'],
      team: []
    },
    responsibilities: [
      'Independent audit execution',
      'Compliance assessment',
      'Evidence review',
      'Audit reporting'
    ]
  },
  {
    id: 5,
    name: 'Vendor Representative',
    description: 'External vendor contacts with project-specific access',
    memberCount: 4,
    type: 'vendor',
    permissions: {
      governance: [],
      security: ['read'],
      compliance: [],
      team: []
    },
    responsibilities: [
      'Vendor security documentation',
      'Third-party risk assessment',
      'Contract compliance',
      'Security questionnaire completion'
    ]
  }
];

const permissionModules = [
  { key: 'governance', name: 'Governance', icon: Shield, description: 'Controls, policies, evidence, and risk management' },
  { key: 'security', name: 'Security', icon: AlertTriangle, description: 'Threat management, asset intelligence, and quality' },
  { key: 'compliance', name: 'Compliance', icon: FileText, description: 'Audits, expectations, progress, and outcomes' },
  { key: 'team', name: 'Team Management', icon: Users, description: 'Team members, roles, and collaboration tools' }
];

const permissionLevels = [
  { key: 'read', name: 'Read', icon: Eye, description: 'View and browse content' },
  { key: 'write', name: 'Write', icon: Edit3, description: 'Create and edit content' },
  { key: 'admin', name: 'Admin', icon: Settings, description: 'Full administrative control' }
];

export const TeamRoles = () => {
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  const getRoleTypeColor = (type: string) => {
    switch (type) {
      case 'executive': return 'bg-red-500/10 text-red-700 border-red-200';
      case 'management': return 'bg-blue-500/10 text-blue-700 border-blue-200';
      case 'operational': return 'bg-green-500/10 text-green-700 border-green-200';
      case 'external': return 'bg-purple-500/10 text-purple-700 border-purple-200';
      case 'vendor': return 'bg-orange-500/10 text-orange-700 border-orange-200';
      default: return 'bg-gray-500/10 text-gray-700 border-gray-200';
    }
  };

  const getPermissionIcon = (level: string) => {
    const permission = permissionLevels.find(p => p.key === level);
    return permission ? <permission.icon className="h-3 w-3" /> : null;
  };

  const getPermissionColor = (level: string) => {
    switch (level) {
      case 'read': return 'bg-blue-500/10 text-blue-700';
      case 'write': return 'bg-green-500/10 text-green-700';
      case 'admin': return 'bg-red-500/10 text-red-700';
      default: return 'bg-gray-500/10 text-gray-700';
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Role Management</h1>
          <p className="text-muted-foreground mt-2">
            Define roles, permissions, and access levels for your team members.
          </p>
        </div>
        <Button asChild>
          <Link to="/team/roles/new">
            <Plus className="h-4 w-4 mr-2" />
            Create Role
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Roles List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Roles</CardTitle>
              <CardDescription>Select a role to view details and permissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {roles.map((role) => (
                <div
                  key={role.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedRole.id === role.id 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:bg-muted/50'
                  }`}
                  onClick={() => setSelectedRole(role)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{role.name}</h3>
                    <Badge className={`${getRoleTypeColor(role.type)} border text-xs`}>
                      {role.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{role.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                      <Users className="h-3 w-3 inline mr-1" />
                      {role.memberCount} members
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Role Details */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {/* Role Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {selectedRole.name}
                      <Badge className={`${getRoleTypeColor(selectedRole.type)} border`}>
                        {selectedRole.type}
                      </Badge>
                    </CardTitle>
                    <CardDescription>{selectedRole.description}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Edit3 className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {selectedRole.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Role Statistics</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Active Members</span>
                        <span className="font-medium">{selectedRole.memberCount}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Permission Level</span>
                        <Badge variant="secondary">
                          {Object.values(selectedRole.permissions).flat().includes('admin') ? 'Admin' : 
                           Object.values(selectedRole.permissions).flat().includes('write') ? 'Write' : 'Read'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Permissions Matrix */}
            <Card>
              <CardHeader>
                <CardTitle>Permissions</CardTitle>
                <CardDescription>
                  Access levels for different modules and features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {permissionModules.map((module) => {
                    const modulePermissions = selectedRole.permissions[module.key as keyof typeof selectedRole.permissions];
                    const ModuleIcon = module.icon;
                    
                    return (
                      <div key={module.key} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <ModuleIcon className="h-5 w-5 text-primary" />
                            <div>
                              <h4 className="font-medium">{module.name}</h4>
                              <p className="text-sm text-muted-foreground">{module.description}</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            {modulePermissions.length === 0 ? (
                              <Badge variant="outline" className="bg-gray-50">
                                <Lock className="h-3 w-3 mr-1" />
                                No Access
                              </Badge>
                            ) : (
                              modulePermissions.map((permission) => (
                                <Badge 
                                  key={permission} 
                                  className={`${getPermissionColor(permission)} border-0`}
                                >
                                  {getPermissionIcon(permission)}
                                  <span className="ml-1 capitalize">{permission}</span>
                                </Badge>
                              ))
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Role Members */}
            <Card>
              <CardHeader>
                <CardTitle>Members with this Role</CardTitle>
                <CardDescription>
                  Team members currently assigned to the {selectedRole.name} role
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Role Members</h3>
                  <p className="text-muted-foreground mb-4">
                    {selectedRole.memberCount} members are assigned to this role
                  </p>
                  <Button asChild>
                    <Link to={`/team/members?role=${selectedRole.name}`}>View Members</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};