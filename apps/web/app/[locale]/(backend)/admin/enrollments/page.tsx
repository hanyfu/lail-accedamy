'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { DataTable, Modal, StatusBadge, showToast } from '@/components/ui';
import type { Enrollment } from '@/lib/types';
import { useTranslations } from 'next-intl';

export default function AdminEnrollmentsPage() {
  const t = useTranslations('Admin.Enrollments');
  const tLabels = useTranslations('Shared.Labels');
  const tShared = useTranslations('Shared');
  const tBtn = useTranslations('Shared.Buttons');
  const [data, setData] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Enrollment | null>(null);
  const [modal, setModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'APPROVED' | 'STUDYING' | 'COMPLETED' | 'DROPOUT' | 'REJECTED'>('APPROVED');
  const [idCardNo, setIdCardNo] = useState('');
  const [classFee, setClassFee] = useState('');
  const [rejectionNote, setRejectionNote] = useState('');
  const [isArchived, setIsArchived] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.getEnrollments({ page, limit: 20, search: search || undefined });
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

  const openManage = (item: Enrollment) => {
    setSelected(item);
    setModal(true);
    setStatus(item.status === 'PENDING' ? 'APPROVED' : (item.status as 'APPROVED' | 'STUDYING' | 'COMPLETED' | 'DROPOUT' | 'REJECTED'));
    setIdCardNo(item.idCardNo || '');
    setClassFee(item.classFee ? String(item.classFee) : '');
    setRejectionNote(item.rejectionNote || '');
    setIsArchived(item.isArchived);
  };

  const handleSave = async () => {
    if (!selected) return;
    if (status === 'REJECTED' && !rejectionNote.trim()) {
      showToast('error', t('toasts.rejectionRequired'));
      return;
    }
    if ((status === 'APPROVED' || status === 'STUDYING') && !idCardNo.trim()) {
      showToast('error', t('toasts.idCardRequired'));
      return;
    }

    setSaving(true);
    try {
      await api.updateEnrollment(selected.id, {
        status,
        idCardNo: idCardNo.trim() || undefined,
        classFee: classFee ? Number(classFee) : undefined,
        rejectionNote: status === 'REJECTED' ? rejectionNote.trim() : undefined,
        isArchived,
      });
      showToast('success', t('toasts.updateSuccess'));
      setModal(false);
      setSelected(null);
      load();
    } catch (err: any) {
      showToast('error', err?.response?.data?.message || t('toasts.updateError'));
    } finally {
      setSaving(false);
    }
  };

  const columns = [
    { key: 'idCardNo', label: t('table.idCard'), render: (item: Enrollment) => <span className="font-mono font-semibold">{item.idCardNo || '—'}</span> },
    { key: 'parentName', label: t('table.parent'), render: (item: Enrollment) => item.parentName || '—' },
    { key: 'fullName', label: t('table.name'), render: (item: Enrollment) => <span className="font-medium">{item.fullName}</span> },
    { key: 'sex', label: t('table.sex'), render: (item: Enrollment) => item.sex || '—' },
    { key: 'status', label: t('table.status'), render: (item: Enrollment) => (
      <div className="flex items-center gap-2">
        <StatusBadge status={item.status} />
        {item.isArchived ? <span className="badge badge-default">{t('archived')}</span> : null}
      </div>
    ) },
    { key: 'email', label: tLabels('email') },
    { key: 'phone', label: tLabels('phone') },
    { key: 'viberPhone', label: tLabels('viber'), render: (item: Enrollment) => item.viberPhone || '—' },
    { key: 'course', label: t('table.class'), render: (item: Enrollment) => item.course?.title || '—' },
    { key: 'fee', label: t('table.fee'), render: (item: Enrollment) => `MVR ${item.classFee.toLocaleString()}` },
    { key: 'submitted', label: t('table.submitted'), render: (item: Enrollment) => new Date(item.createdAt).toLocaleString() },
    { key: 'actions', label: '', render: (item: Enrollment) => <button className="btn btn-sm btn-primary" onClick={() => openManage(item)}>{t('manage')}</button> },
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">{t('title')}</h1>
        <p className="page-subtitle">{t('subtitle')}</p>
      </div>

      <div className="mb-4">
        <input className="input max-w-xs" placeholder={t('searchPlaceholder')} value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
      </div>

      <DataTable columns={columns} data={data} isLoading={loading} page={page} totalPages={totalPages} onPageChange={setPage} emptyMessage={tShared('DataTable.empty')} />

      <Modal
        isOpen={modal}
        onClose={() => setModal(false)}
        title={t('modal.title')}
        footer={(
          <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
            {saving ? tBtn('saving') : tBtn('save')}
          </button>
        )}
      >
        {selected && (
          <div className="space-y-3">
            <div className="text-sm text-slate-600">{selected.fullName} • {selected.course?.title || 'No class selected'}</div>
            <div>
              <label className="label">{t('modal.status')}</label>
              <select className="input" value={status} onChange={(e) => setStatus(e.target.value as 'APPROVED' | 'STUDYING' | 'COMPLETED' | 'DROPOUT' | 'REJECTED')}>
                <option value="APPROVED">{tShared('Availability.OPEN')}</option>
                <option value="STUDYING">{tShared('Availability.STUDYING')}</option>
                <option value="COMPLETED">{tShared('Availability.COMPLETED')}</option>
                <option value="DROPOUT">{tShared('Availability.DROPOUT')}</option>
                <option value="REJECTED">{tShared('Availability.CLOSED')}</option>
              </select>
            </div>
            <div>
              <label className="label">{t('modal.idCard')}</label>
              <input className="input" value={idCardNo} onChange={(e) => setIdCardNo(e.target.value)} placeholder="e.g. A123456" />
            </div>
            <div>
              <label className="label">{t('modal.fee')}</label>
              <input className="input" type="number" min="0" step="0.01" value={classFee} onChange={(e) => setClassFee(e.target.value)} placeholder="0.00" />
            </div>
            {status === 'REJECTED' && (
              <div>
                <label className="label">{t('modal.rejectionNote')}</label>
                <textarea className="input" rows={3} value={rejectionNote} onChange={(e) => setRejectionNote(e.target.value)} />
              </div>
            )}
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input type="checkbox" checked={isArchived} onChange={(e) => setIsArchived(e.target.checked)} />
              {t('modal.archive')}
            </label>
          </div>
        )}
      </Modal>
    </div>
  );
}
