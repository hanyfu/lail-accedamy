'use client';

import { AuthProvider, useAuth } from '@/lib/auth';
import { ToastContainer } from '@/components/ui';
import { Sidebar } from '@/components/layout/Sidebar';
import { SidebarProvider, useSidebar } from '@/context/SidebarContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';

function AdminGuard({ children }: { children: React.ReactNode }) {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/dv/login');
    }
    if (!isLoading && isAuthenticated && user?.role !== 'ADMIN') {
      router.push('/dv/dashboard');
    }
  }, [isLoading, isAuthenticated, user, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 animate-spin rounded-full border-2 border-slate-200 border-t-primary-600" />
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== 'ADMIN') return null;

  return <>{children}</>;
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <SidebarProvider>
        <ToastContainer />
        <AdminGuard>
          <LayoutContent children={children} />
        </AdminGuard>
      </SidebarProvider>
    </AuthProvider>
  );
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1023px)');
    const sync = () => {
      const mobile = media.matches;
      setIsMobile(mobile);
      if (!mobile) setMobileOpen(false);
    };
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  const sidebarOffset = isMobile ? '0px' : isCollapsed ? '0px' : 'var(--sidebar-width)';

  return (
    <div className="backend-shell flex min-h-screen bg-slate-50">
      <Sidebar variant="admin" mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />
      <main
        className="backend-content flex-1 p-4 sm:p-5 lg:p-8"
        style={locale === 'dv' ? { marginRight: sidebarOffset } : { marginLeft: sidebarOffset }}
      >
        <div className="lg:hidden mb-4">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="btn btn-secondary btn-sm"
          >
            ☰ މެނޫ
          </button>
        </div>
        {children}
      </main>
    </div>
  );
}
