'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { DataTable, Modal, showToast } from '@/components/ui';
import type { Course } from '@/lib/types';
import { useTranslations, useLocale } from 'next-intl';
import { clsx } from 'clsx';

export default function AdminCoursesPage() {
  const t = useTranslations('Admin.Courses');
  const locale = useLocale();
  const [data, setData] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<Course | null>(null);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title: '',
    code: '',
    description: '',
    duration: '',
    slots: 0,
    monthlyFee: 0,
    availability: 'OPEN' as 'OPEN' | 'LIMITED' | 'FULL' | 'CLOSED',
    isActive: true,
  });

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.getCourses({ page, limit: 20, search: search || undefined });
      setData(res.data);
      setTotalPages(res.meta.totalPages);
    } catch {
      showToast('error', t('toasts.loadError'));
    }
    setLoading(false);
  }, [page, search, t]);

  useEffect(() => {
    load();
  }, [load]);

  const openCreate = () => {
    setEditing(null);
    setForm({
      title: '',
      code: '',
      description: '',
      duration: '',
      slots: 0,
      monthlyFee: 0,
      availability: 'OPEN',
      isActive: true,
    });
    setModal(true);
  };

  const openEdit = (course: Course) => {
    setEditing(course);
    setForm({
      title: course.title,
      code: course.code,
      description: course.description || '',
      duration: course.duration || '',
      slots: course.slots || 0,
      monthlyFee: course.monthlyFee || 0,
      availability: course.availability || 'OPEN',
      isActive: course.isActive,
    });
    setModal(true);
  };

  const handleSave = async () => {
    if (!form.title || !form.code || form.slots < 0 || form.monthlyFee < 0) {
      showToast('error', t('toasts.validationError'));
      return;
    }

    setSaving(true);
    try {
      if (editing) {
        await api.updateCourse(editing.id, form);
        showToast('success', t('toasts.saveSuccess'));
      } else {
        await api.createCourse(form);
        showToast('success', t('toasts.createSuccess'));
      }
      setModal(false);
      load();
    } catch (err: any) {
      showToast('error', err?.response?.data?.message || t('toasts.saveError'));
    }
    setSaving(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm(t('toasts.deleteConfirm'))) return;

    try {
      await api.deleteCourse(id);
      showToast('success', t('toasts.deleteSuccess'));
      load();
    } catch (err: any) {
      showToast('error', err?.response?.data?.message || t('toasts.deleteError'));
    }
  };

  const columns = [
    { key: 'title', label: t('table.name'), render: (course: Course) => <span className={clsx(locale === 'dv' && 'font-thaana text-lg')}>{course.title}</span> },
    { key: 'code', label: t('table.code'), render: (course: Course) => <span className="font-mono text-sm">{course.code}</span> },
    { key: 'duration', label: t('table.duration'), render: (course: Course) => course.duration || '—' },
    {
      key: 'slots',
      label: t('table.slots'),
      render: (course: Course) => `${course.availableSlots ?? Math.max((course.slots || 0) - (course.occupiedSlots || 0), 0)} / ${course.slots || 0}`,
    },
    {
      key: 'monthlyFee',
      label: t('table.fee'),
      render: (course: Course) => `MVR ${(course.monthlyFee || 0).toFixed(2)}`,
    },
    {
      key: 'availability',
      label: t('table.availability'),
      render: (course: Course) => (
        <span className={`badge ${course.effectiveAvailability === 'FULL' || course.availability === 'CLOSED' ? 'badge-default' : 'badge-active'}`}>
          {useTranslations('Shared.Availability')(course.effectiveAvailability || course.availability as any)}
        </span>
      ),
    },
    {
      key: 'active',
      label: t('table.active'),
      render: (course: Course) =>
        course.isActive ? <span className="badge badge-active">{locale === 'dv' ? 'އާނ' : 'YES'}</span> : <span className="badge badge-default">{locale === 'dv' ? 'ނޫން' : 'NO'}</span>,
    },
    { key: 'enrollments', label: t('table.enrollments'), render: (course: Course) => course._count?.enrollments ?? 0 },
    {
      key: 'actions',
      label: t('table.actions'),
      render: (course: Course) => (
        <div className="flex gap-2">
          <button className="btn btn-sm btn-secondary" onClick={() => openEdit(course)}>{t('buttons.edit')}</button>
          <button className="btn btn-sm btn-danger" onClick={() => handleDelete(course.id)}>{t('buttons.delete')}</button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="page-title">{t('title')}</h1>
          <p className="page-subtitle">{t('subtitle')}</p>
        </div>
        <button className="btn btn-primary" onClick={openCreate}>{t('addClass')}</button>
      </div>

      <div className="mb-4">
        <input
          className="input max-w-xs"
          placeholder={t('searchPlaceholder')}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>

      <DataTable
        columns={columns}
        data={data}
        isLoading={loading}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
        emptyMessage={t('toasts.loadError')} // Reusing loadError or should use another key?
      />

      <Modal
        isOpen={modal}
        onClose={() => setModal(false)}
        title={editing ? t('modal.edit') : t('modal.create')}
        footer={
          <>
            <button className="btn btn-secondary" onClick={() => setModal(false)}>{t('buttons.cancel')}</button>
            <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
              {saving ? t('buttons.saving') : t('buttons.save')}
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="label">{t('modal.fields.name')}</label>
            <input 
              className={clsx('input', locale === 'dv' && 'text-[18px]')} 
              dir={locale === 'dv' ? 'rtl' : 'ltr'}
              value={form.title} 
              onChange={(e) => setForm({ ...form, title: e.target.value })} 
            />
          </div>
          <div>
            <label className="label">{t('modal.fields.code')}</label>
            <input className="input" value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value.toUpperCase() })} />
          </div>
          <div>
            <label className="label">{t('modal.fields.duration')}</label>
            <input className="input" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} placeholder={t('modal.placeholders.duration')} />
          </div>
          <div>
            <label className="label">{t('modal.fields.slots')}</label>
            <input
              type="number"
              min={0}
              className="input"
              value={form.slots}
              onChange={(e) => setForm({ ...form, slots: Number(e.target.value || 0) })}
              placeholder={t('modal.placeholders.slots')}
            />
          </div>
          <div>
            <label className="label">{t('modal.fields.fee')}</label>
            <input
              type="number"
              min={0}
              step="0.01"
              className="input"
              value={form.monthlyFee}
              onChange={(e) => setForm({ ...form, monthlyFee: Number(e.target.value || 0) })}
              placeholder={t('modal.placeholders.fee')}
            />
          </div>
          <div>
            <label className="label">{t('modal.fields.availability')}</label>
            <select
              className="input"
              value={form.availability}
              onChange={(e) =>
                setForm({
                  ...form,
                  availability: e.target.value as 'OPEN' | 'LIMITED' | 'FULL' | 'CLOSED',
                })
              }
            >
              <option value="OPEN">Open</option>
              <option value="LIMITED">Limited</option>
              <option value="FULL">Full</option>
              <option value="CLOSED">Closed</option>
            </select>
          </div>
          <div>
            <label className="label">{t('modal.fields.details')}</label>
            <textarea 
              className={clsx('input', locale === 'dv' && 'text-[18px] leading-relaxed')} 
              dir={locale === 'dv' ? 'rtl' : 'ltr'}
              rows={3} 
              value={form.description} 
              onChange={(e) => setForm({ ...form, description: e.target.value })} 
            />
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input type="checkbox" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} />
            {t('modal.fields.active')}
          </label>
        </div>
      </Modal>
    </div>
  );
}
