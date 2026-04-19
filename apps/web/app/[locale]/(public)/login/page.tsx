'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { showToast } from '@/components/ui';
import { useTranslations } from 'next-intl';

export default function LoginPage() {
  const t = useTranslations('Login');
  const tNav = useTranslations('Navbar');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      showToast('error', t('fillRequired'));
      return;
    }
    setLoading(true);
    try {
      await login(email, password);
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      showToast('success', t('success'));
      if (user.role === 'ADMIN') {
        router.push('/dv/admin');
      } else {
        router.push('/dv/dashboard');
      }
    } catch (err: any) {
      showToast('error', err?.response?.data?.message || t('error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">LA</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">{t('welcome')}</h1>
          <p className="text-slate-500 mt-1">{t('title')}</p>
        </div>

        <div className="card p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label" htmlFor="email">{t('email')}</label>
              <input
                id="email"
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="label" htmlFor="password">{t('password')}</label>
              <input
                id="password"
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input type="checkbox" className="rounded border-slate-300" />
                {t('rememberMe')}
              </label>
              <Link href="/forgot-password" className="text-primary-600 hover:text-primary-700 font-medium">
                {t('forgotPassword')}
              </Link>
            </div>
            <button type="submit" disabled={loading} className="btn btn-primary w-full">
              {loading ? t('signingIn') : t('signIn')}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-500">
            {t('noAccount')}{' '}
            <Link href="/apply" className="text-primary-600 hover:text-primary-700 font-medium">
              {tNav('applyNow')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
