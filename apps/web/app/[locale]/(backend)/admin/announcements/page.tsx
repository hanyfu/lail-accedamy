'use client';

import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { api } from '@/lib/api';
import { showToast } from '@/components/ui';
import { useTranslations, useLocale } from 'next-intl';

export default function AdminAnnouncementsPage() {
  const t = useTranslations('Admin.Announcements');
  const locale = useLocale();
  const [isEnabled, setIsEnabled] = useState(false);
  const [text, setText] = useState('');
  const [link, setLink] = useState('');
  const [audience, setAudience] = useState<'ALL' | 'APPLICANTS' | 'STUDENTS'>('ALL');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api.getAnnouncementConfig().then((data) => {
      setIsEnabled(data.isEnabled);
      setText(data.text || '');
      setLink(data.link || '');
      setAudience((data.audience as 'ALL' | 'APPLICANTS' | 'STUDENTS') || 'ALL');
      setLoading(false);
    }).catch(() => {
      showToast('error', t('toasts.error'));
      setLoading(false);
    });
  }, [t]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await api.updateAnnouncementConfig({ isEnabled, text, link, audience });
      showToast('success', t('toasts.success'));
    } catch (err: any) {
      showToast('error', err?.response?.data?.message || t('toasts.error'));
    }
    setSaving(false);
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">{t('title')}</h1>
        <p className="page-subtitle">{t('subtitle')}</p>
      </div>

      {loading ? (
        <div className="text-slate-500">{t('buttons.saving')}</div>
      ) : (
        <div className="card p-6 max-w-2xl space-y-4">
          <label className="flex items-center gap-3 text-sm text-slate-700">
            <input type="checkbox" checked={isEnabled} onChange={(e) => setIsEnabled(e.target.checked)} />
            {t('fields.isEnabled')}
          </label>

          <div>
            <label className="label">{t('fields.audience')}</label>
            <select
              className="input"
              value={audience}
              onChange={(e) =>
                setAudience(
                  e.target.value as 'ALL' | 'APPLICANTS' | 'STUDENTS',
                )
              }
            >
              <option value="ALL">{t('audience.all')}</option>
              <option value="APPLICANTS">{t('audience.applicants')}</option>
              <option value="STUDENTS">{t('audience.students')}</option>
            </select>
          </div>

          <div>
            <label className="label">{t('fields.text')}</label>
            <textarea
              className={clsx('input', locale === 'dv' && 'text-[18px] leading-relaxed')}
              dir={locale === 'dv' ? 'rtl' : 'ltr'}
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={t('placeholders.text')}
            />
          </div>

          <div>
            <label className="label">{t('fields.link')}</label>
            <input className="input" value={link} onChange={(e) => setLink(e.target.value)} placeholder={t('placeholders.link')} />
          </div>

          <div className="flex justify-end">
            <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
              {saving ? t('buttons.saving') : t('buttons.save')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
