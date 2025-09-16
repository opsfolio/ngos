import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { Navigation } from './Navigation';
import { BreadcrumbsBar } from './BreadcrumbsBar';
import { OrgProvider } from '@/contexts/OrgContext';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <OrgProvider>
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          <div className="flex-1 flex flex-col">
            <Navigation />
            <div className="pt-16">
              <BreadcrumbsBar />
              <main className="flex-1">
                {children}
              </main>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </OrgProvider>
  );
};