'use client';

import React, { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { LoadingSpinner } from '@/components/ui';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function AdminDashboardPage() {
  const t = useTranslations('Admin.Dashboard');
  const locale = useLocale();
  const [stats, setStats] = useState<{
    totalCourses: number;
    totalEnrollments: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.getCourses({ page: 1, limit: 1 }),
      api.getEnrollments({ page: 1, limit: 1 }),
    ])
      .then(([courses, enrollments]) => {
        setStats({
          totalCourses: courses.meta.total,
          totalEnrollments: enrollments.meta.total,
        });
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;
  if (!stats) return <div className="text-center py-12 text-slate-500">{t('subtitle')}</div>;

  const cards = [
    { label: t('stats.totalClasses'), value: stats.totalCourses, color: 'text-primary-600', href: `/${locale}/admin/courses` },
    { label: t('stats.enrollments'), value: stats.totalEnrollments, color: 'text-success-600', href: `/${locale}/admin/enrollments` },
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">{t('title')}</h1>
        <p className="page-subtitle">{t('subtitle')}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-8">
        {cards.map((card) => (
          <Link key={card.label} href={card.href} className="stat-card hover:shadow-md transition-shadow">
            <div className="stat-label">{card.label}</div>
            <div className={`stat-value ${card.color}`}>{card.value}</div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="card p-6">
        <h3 className="font-semibold text-slate-900 mb-4">{t('quickActions.title')}</h3>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
          <Link href={`/${locale}/admin/courses`} className="btn btn-secondary text-center">{t('quickActions.manageClasses')}</Link>
          <Link href={`/${locale}/admin/enrollments`} className="btn btn-secondary text-center">{t('stats.enrollments')}</Link>
        </div>
      </div>
    </div>
  );
}
