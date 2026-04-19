'use client';

import React, { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import type { Notice } from '@/lib/types';
import { useTranslations } from 'next-intl';

export default function NoticesPage() {
  const t = useTranslations('Notices');
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    api.getPublicNotices().then((data) => {
      setNotices(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const filtered = filter
    ? notices.filter((n) => n.audience === filter || n.audience === 'ALL')
    : notices;

  const audienceColors: Record<string, string> = {
    ALL: 'bg-slate-100 text-slate-600',
    APPLICANTS: 'bg-primary-50 text-primary-600',
    STUDENTS: 'bg-success-50 text-success-600',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-900">{t('title')}</h1>
        <p className="text-slate-500 mt-2">{t('subtitle')}</p>
      </div>

      {/* Filter */}
      <div className="flex justify-center gap-2 mb-8">
        {['', 'ALL', 'APPLICANTS', 'STUDENTS'].map((val) => (
          <button
            key={val}
            className={`btn btn-sm ${filter === val ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setFilter(val)}
          >
            {val || t('filters.all')}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 animate-spin rounded-full border-2 border-slate-200 border-t-primary-600" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-12 text-slate-500">{t('noNotices')}</div>
      ) : (
        <div className="space-y-4">
          {filtered.map((notice) => (
            <div key={notice.id} className="card p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-slate-900">{notice.title}</h3>
                <span className={`badge text-xs ${audienceColors[notice.audience] || ''}`}>
                  {notice.audience}
                </span>
              </div>
              <p className="text-sm text-slate-600 whitespace-pre-wrap leading-relaxed">{notice.content}</p>
              <div className="flex items-center gap-4 mt-4 text-xs text-slate-400">
                <span>{t('posted')}: {new Date(notice.createdAt).toLocaleDateString()}</span>
                {notice.expiryDate && (
                  <span>{t('expires')}: {new Date(notice.expiryDate).toLocaleDateString()}</span>
                )}
                {notice.program && <span>{t('class')}: {notice.program.name}</span>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
