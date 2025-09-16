import { useLocation } from 'react-router-dom';

// Page title mapping
export const pageTitleMap: Record<string, string> = {
  '/': 'Dashboard',
  '/progress': 'Progress',
  '/progress/expectations': 'Expectations',
  '/progress/outcomes': 'Outcomes',
  '/controls': 'Controls',
  '/policies': 'Policies',
  '/policies/author': 'Policy Author',
  '/policies/mapping': 'Policy Mapping',
  '/evidence': 'Evidence',
  '/evidence/browse': 'Evidence Browse',
  '/evidence/integrations': 'Evidence Integrations',
  '/evidence/upload': 'Evidence Upload',
  '/evidence/mapping': 'Evidence Mapping',
  '/audits': 'Audits',
  '/audits/browse': 'Audit Browse',
  '/audits/create': 'Audit Create',
  '/risks': 'Risks',
  '/risks/register': 'Risk Register',
  '/risks/audit-risks': 'Audit Risks',
  '/risks/poam-risks': 'POAM Risks',
  '/threats': 'Threat Management',
  '/threats/vulnerability-scan': 'Vulnerability Scanning',
  '/threats/pen-testing': 'Penetration Testing',
  '/assets': 'Asset Intelligence',
  '/assets/servers': 'Servers',
  '/assets/workstations': 'Workstations',
  '/assets/cloud': 'Cloud Assets',
  '/assets/applications': 'Applications',
  '/assets/network': 'Network Devices',
  '/assets/threats': 'Threats & Vulnerabilities',
  '/assets/poams': 'POAMs & Actions',
  '/quality': 'Quality Intelligence',
  '/quality/test-management': 'Test Management',
  '/quality/requirements': 'Requirements Traceability', 
  '/quality/risk-analysis': 'Risk Analysis & FMEA',
  '/quality/capa': 'CAPA Management',
  '/team': 'Team Management',
  '/team/members': 'Team Members',
  '/team/roles': 'Role Management',
  '/team/tasks': 'Task Management',
};

// Hook to get current page title
export const usePageTitle = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  // Handle dynamic routes like /audits/:id
  if (pathname.match(/^\/audits\/[^/]+$/)) {
    return 'Audit Detail';
  }
  
  // Handle audit create with type
  if (pathname.match(/^\/audits\/create\/.+$/)) {
    return 'Audit Create';
  }
  
  return pageTitleMap[pathname] || 'Page';
};

// Generate breadcrumbs from current path
export const useBreadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  const breadcrumbs = [];
  let currentPath = '';
  
  // Always start with Home
  if (location.pathname !== '/') {
    breadcrumbs.push({ label: 'Home', path: '/' });
  }
  
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    const title = pageTitleMap[currentPath];
    if (title) {
      breadcrumbs.push({ label: title, path: currentPath });
    }
  });
  
  return breadcrumbs;
};