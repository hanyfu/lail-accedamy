'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { api } from '@/lib/api';
import { DataTable, StatusBadge, showToast, Modal } from '@/components/ui';
import type { Applicant } from '@/lib/types';
import { useTranslations } from 'next-intl';

export default function AdminApplicantsPage() {
  const t = useTranslations('Admin.Applicants');
  const tShared = useTranslations('Shared');
  const [data, setData] = useState<Applicant[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selected, setSelected] = useState<Applicant | null>(null);
  const [actionModal, setActionModal] = useState(false);
  const [rejectionNote, setRejectionNote] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.getApplicants({ page, limit: 20, search, status: statusFilter || undefined });
      setData(res.data);
      setTotalPages(res.meta.totalPages);
    } catch { showToast('error', t('toasts.loadError')); }
    setLoading(false);
  }, [page, search, statusFilter, t]);

  useEffect(() => { load(); }, [load]);

  const handleAction = async (status: 'APPROVED' | 'REJECTED') => {
    if (!selected) return;
    setActionLoading(true);
    try {
      await api.updateApplicantStatus(selected.id, { status, rejectionNote: status === 'REJECTED' ? rejectionNote : undefined });
      showToast('success', t('toasts.success'));
      setActionModal(false);
      setSelected(null);
      setRejectionNote('');
      load();
    } catch (err: any) {
      showToast('error', err?.response?.data?.message || t('toasts.error'));
    }
    setActionLoading(false);
  };

  const columns = [
    { key: 'name', label: t('table.name'), render: (a: Applicant) => <span className="font-medium">{a.firstName} {a.lastName}</span> },
    { key: 'email', label: t('table.email') },
    { key: 'program', label: t('table.program'), render: (a: Applicant) => a.program?.name || '-' },
    { key: 'intake', label: t('table.intake'), render: (a: Applicant) => a.intake?.name || '-' },
    { key: 'status', label: t('table.status'), render: (a: Applicant) => <StatusBadge status={a.status} /> },
    { key: 'date', label: t('table.date'), render: (a: Applicant) => new Date(a.submittedAt).toLocaleDateString() },
    {
      key: 'actions', label: t('table.actions'), render: (a: Applicant) => (
        a.status === 'PENDING' ? (
          <button className="btn btn-sm btn-primary" onClick={() => { setSelected(a); setActionModal(true); }}>
            {t('Admin.Students.manage')}
          </button>
        ) : <span className="text-xs text-slate-400">{t('table.processed')}</span>
      ),
    },
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">{t('title')}</h1>
        <p className="page-subtitle">{t('subtitle')}</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        <input className="input max-w-xs" placeholder={t('searchPlaceholder')} value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
        <select className="input max-w-[180px]" value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}>
          <option value="">{t('Admin.Finance.filterAll')}</option>
          <option value="PENDING">{tShared('Availability.OPEN')}</option>
          <option value="APPROVED">{tShared('Availability.OPEN')}</option>
          <option value="REJECTED">{tShared('Availability.CLOSED')}</option>
        </select>
      </div>

      <DataTable columns={columns} data={data} isLoading={loading} page={page} totalPages={totalPages} onPageChange={setPage} emptyMessage={tShared('DataTable.empty')} />

      {/* Review Modal */}
      <Modal isOpen={actionModal} onClose={() => { setActionModal(false); setSelected(null); }} title={t('modal.title')}
        footer={
          <>
            <button className="btn btn-danger" onClick={() => handleAction('REJECTED')} disabled={actionLoading}>{t('modal.reject')}</button>
            <button className="btn btn-primary" onClick={() => handleAction('APPROVED')} disabled={actionLoading}>{t('modal.approve')}</button>
          </>
        }>
        {selected && (
          <div className="space-y-3 text-sm">
            <p><strong>{t('table.name')}:</strong> {selected.firstName} {selected.lastName}</p>
            <p><strong>{t('table.email')}:</strong> {selected.email}</p>
            <p><strong>{t('Admin.Students.table.phone')}:</strong> {selected.phone}</p>
            <p><strong>{t('table.program')}:</strong> {selected.program?.name}</p>
            <p><strong>{t('table.intake')}:</strong> {selected.intake?.name}</p>
            {selected.previousEdu && <p><strong>{t('modal.edu')}</strong> {selected.previousEdu}</p>}
            <div className="border-t border-slate-200 pt-3">
              <label className="label">{t('modal.rejectionNote')}</label>
              <textarea className="input" rows={3} value={rejectionNote} onChange={(e) => setRejectionNote(e.target.value)}
                placeholder={t('modal.rejectPlaceholder')} />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
