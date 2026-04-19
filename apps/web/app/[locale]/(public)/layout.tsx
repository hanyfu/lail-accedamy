'use client';

import { AuthProvider } from '@/lib/auth';
import { ToastContainer } from '@/components/ui';
import { Navbar, Footer } from '@/components/layout/Navbar';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ToastContainer />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </AuthProvider>
  );
}
