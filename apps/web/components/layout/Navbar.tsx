'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { api } from '@/lib/api';
import type { SiteSetting } from '@/lib/types';

import { useLocale, useTranslations } from 'next-intl';

export function Navbar() {
  const t = useTranslations('Navbar');
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [site, setSite] = useState<Partial<SiteSetting>>({
    collegeName: 'Lail Academy',
    tagline: 'Quality classes for every learner',
    phone: '+960 977-7441',
    email: 'lail.academymv@gmail.com',
    footerText: 'Lail Academy',
  });

  useEffect(() => {
    api
      .getPublicSiteSettings()
      .then((data) => setSite((prev) => ({ ...prev, ...data })))
      .catch(() => null);
  }, []);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              {site.logoUrl ? (
                <Image
                  src={site.logoUrl}
                  alt={site.collegeName || 'Logo'}
                  width={32}
                  height={32}
                  unoptimized
                  className="w-8 h-8 rounded-lg object-cover"
                />
              ) : (
                <span className="text-white font-bold text-sm">LA</span>
              )}
            </div>
            <span className="font-bold text-lg text-slate-900 hidden sm:block">
              {site.collegeName || 'Lail Academy'}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-[15px] font-medium text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-50">
              {t('home')}
            </Link>
            <Link href="/programs" className="px-3 py-2 text-[15px] font-medium text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-50">
              {t('classes')}
            </Link>
            <Link href="/apply" className="px-3 py-2 text-[15px] font-medium text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-50">
              {t('applyNow')}
            </Link>
            <Link href="/notices" className="px-3 py-2 text-[15px] font-medium text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-50">
              {t('notices')}
            </Link>
            <Link href="/payment" className="px-3 py-2 text-[15px] font-medium text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-50">
              {t('payFees')}
            </Link>
          </div>

          {/* Auth */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <Link
                  href={user?.role === 'ADMIN' ? '/dv/admin' : '/dv/dashboard'}
                  className="btn btn-secondary btn-sm"
                >
                  {t('dashboard')}
                </Link>
                <button onClick={logout} className="btn btn-ghost btn-sm">
                  {t('logout')}
                </button>
              </>
            ) : (
              <>
                <Link href="/dv/login" className="btn btn-ghost btn-sm">
                  {t('login')}
                </Link>
                <Link href="/apply" className="btn btn-primary btn-sm">
                  {t('applyNow')}
                </Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200 py-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-[15px] font-medium text-slate-600 hover:bg-slate-50 rounded-md">{t('home')}</Link>
            <Link href="/programs" className="block px-3 py-2 text-[15px] font-medium text-slate-600 hover:bg-slate-50 rounded-md">{t('classes')}</Link>
            <Link href="/apply" className="block px-3 py-2 text-[15px] font-medium text-slate-600 hover:bg-slate-50 rounded-md">{t('applyNow')}</Link>
            <Link href="/notices" className="block px-3 py-2 text-[15px] font-medium text-slate-600 hover:bg-slate-50 rounded-md">{t('notices')}</Link>
            <Link href="/payment" className="block px-3 py-2 text-[15px] font-medium text-slate-600 hover:bg-slate-50 rounded-md">{t('payFees')}</Link>
            <div className="border-t border-slate-200 pt-2 mt-2">
              {isAuthenticated ? (
                <>
                  <Link href={user?.role === 'ADMIN' ? '/dv/admin' : '/dv/dashboard'} className="block px-3 py-2 text-[15px] font-medium text-primary-600">{t('dashboard')}</Link>
                  <button onClick={logout} className="block w-full text-left px-3 py-2 text-[15px] font-medium text-slate-600">{t('logout')}</button>
                </>
              ) : (
                <>
                  <Link href="/dv/login" className="block px-3 py-2 text-[15px] font-medium text-slate-600">{t('login')}</Link>
                  <Link href="/apply" className="block px-3 py-2 text-[15px] font-medium text-primary-600">{t('applyNow')}</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;
  const [site, setSite] = useState<Partial<SiteSetting>>({
    collegeName: 'Lail Academy',
    tagline: 'Quality classes for every learner',
    phone: '+960 977-7441',
    email: 'lail.academymv@gmail.com',
    footerText: 'Lail Academy',
  });

  useEffect(() => {
    api
      .getPublicSiteSettings()
      .then((data) => setSite((prev) => ({ ...prev, ...data })))
      .catch(() => null);
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 ${isHomePage ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-8`}>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                {site.logoUrl ? (
                  <Image
                    src={site.logoUrl}
                    alt={site.collegeName || 'Logo'}
                    width={32}
                    height={32}
                    unoptimized
                    className="w-8 h-8 rounded-lg object-cover"
                  />
                ) : (
                  <span className="text-white font-bold text-sm">LA</span>
                )}
              </div>
              <span className="font-bold text-lg text-white">{site.collegeName || 'Lail Academy'}</span>
            </div>
            <p className="text-sm">
              {site.tagline || 'Streamlined admissions and finance management system.'}
            </p>
          </div>
          {!isHomePage && (
            <div>
              <h4 className="text-white font-semibold mb-3">{t('quickLinks')}</h4>
              <div className="space-y-2 text-sm">
                <Link href="/programs" className="block hover:text-white transition-colors">{tNav('classes')}</Link>
                <Link href="/apply" className="block hover:text-white transition-colors">{tNav('applyNow')}</Link>
                <Link href="/notices" className="block hover:text-white transition-colors">{tNav('notices')}</Link>
                <Link href="/payment" className="block hover:text-white transition-colors">{tNav('payFees')}</Link>
                <Link href="/dv/login" className="block hover:text-white transition-colors">{tNav('login')}</Link>
              </div>
            </div>
          )}
          <div>
            <h4 className="text-white font-semibold mb-3">{site.footerText || 'Lail Academy'}</h4>
            <div className="space-y-2 text-sm">
              <p>{site.phone || '+960 977-7441'}</p>
              <p>{site.email || 'lail.academymv@gmail.com'}</p>
              {site.address ? <p>{site.address}</p> : null}
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
          © {new Date().getFullYear()} {site.collegeName || 'Lail Academy'}. {t('rights')}
        </div>
      </div>
    </footer>
  );
}
