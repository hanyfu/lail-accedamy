'use client';

import React, { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { showToast } from '@/components/ui';
import type { Course } from '@/lib/types';
import { useTranslations } from 'next-intl';

export default function ProgramsPage() {
  const t = useTranslations('Programs');
  const [classes, setClasses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    api.getCourses({ page: 1, limit: 200 }).then((data) => {
      setClasses(data.data.filter((item) => item.isActive));
      setLoading(false);
    }).catch(() => {
      showToast('error', t('errorLoad'));
      setLoading(false);
    });
  }, []);

  const filtered = classes.filter(
    (item) =>
      item.title.toLowerCase().includes(filter.toLowerCase()) ||
      item.code.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-900">{t('title')}</h1>
        <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          className="input"
          placeholder={t('searchPlaceholder')}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 animate-spin rounded-full border-2 border-slate-200 border-t-primary-600" />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item.id} className="card p-6 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <span className="badge badge-default">{item.code}</span>
                <span className="text-xs text-slate-400">{item.duration || t('flexible')}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 flex-1 mb-4">
                {item.description || t('noDesc')}
              </p>
              <div className="text-sm text-slate-600 space-y-1">
                <p><span className="font-medium text-slate-800">{t('monthlyFee')}</span> MVR {Number(item.monthlyFee || 0).toFixed(2)}</p>
                <p><span className="font-medium text-slate-800">{t('slots')}</span> {item.availableSlots ?? Math.max((item.slots || 0) - (item.occupiedSlots || 0), 0)} / {item.slots || 0}</p>
                <p><span className="font-medium text-slate-800">{t('availability')}</span> {item.effectiveAvailability || item.availability}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500">{t('noClasses')}</p>
        </div>
      )}
    </div>
  );
}
