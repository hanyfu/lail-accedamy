'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { api } from '@/lib/api';
import { DataTable, StatusBadge, showToast, Modal } from '@/components/ui';
import type { Payment } from '@/lib/types';
import { useTranslations } from 'next-intl';

export default function AdminPaymentsPage() {
  const t = useTranslations('Admin.Finance');
  const tShared = useTranslations('Shared');
  const [data, setData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');
  const [selected, setSelected] = useState<Payment | null>(null);
  const [modal, setModal] = useState(false);
  const [notes, setNotes] = useState('');
  const [processing, setProcessing] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.getPayments({ page, limit: 20, status: statusFilter || undefined });
      setData(res.data); setTotalPages(res.meta.totalPages);
    } catch { showToast('error', t('toasts.loadError')); }
    setLoading(false);
  }, [page, statusFilter, t]);

  useEffect(() => { load(); }, [load]);

  const openReview = (p: Payment) => { setSelected(p); setNotes(''); setModal(true); };

  const handleVerify = async (status: 'VERIFIED' | 'REJECTED') => {
    if (!selected) return;
    setProcessing(true);
    try {
      await api.verifyPayment(selected.id, { status, notes: notes || undefined });
      showToast('success', status === 'VERIFIED' ? t('toasts.verifySuccess') : t('toasts.rejectSuccess'));
      setModal(false); setSelected(null); load();
    } catch (err: any) { showToast('error', err?.response?.data?.message || t('Shared.Labels.error')); }
    setProcessing(false);
  };

  const columns = [
    { key: 'id', label: t('table.id'), render: (p: Payment) => `#${p.id}` },
    { key: 'invoice', label: t('table.invoice'), render: (p: Payment) => (
      <span className="font-mono text-sm">{p.invoice?.invoiceNumber || p.enrollment?.idCardNo || '-'}</span>
    ) },
    { key: 'student', label: t('table.student'), render: (p: Payment) => {
      const app = p.invoice?.student?.applicant;
      if (app) return `${app.firstName} ${app.lastName}`;
      if (p.enrollment) return p.enrollment.fullName;
      return p.invoice?.student?.user?.name || '-';
    }},
    { key: 'amount', label: t('table.amount'), render: (p: Payment) => `MVR ${p.amount.toLocaleString()}` },
    { key: 'method', label: t('table.method'), render: (p: Payment) => p.method.replace('_', ' ') },
    { key: 'reference', label: t('table.reference'), render: (p: Payment) => p.reference || '-' },
    { key: 'status', label: t('table.status'), render: (p: Payment) => <StatusBadge status={p.status} /> },
    { key: 'date', label: t('table.date'), render: (p: Payment) => new Date(p.paymentDate).toLocaleDateString() },
    {
      key: 'actions', label: '', render: (p: Payment) => p.status === 'SUBMITTED' ? (
        <button className="btn btn-sm btn-primary" onClick={() => openReview(p)}>{t('Admin.Students.manage')}</button>
      ) : null,
    },
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">{t('title')}</h1>
        <p className="page-subtitle">{t('subtitle')}</p>
      </div>
      <div className="flex gap-3 mb-4">
        <select className="input max-w-[200px]" value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}>
          <option value="">{t('filterAll')}</option>
          <option value="SUBMITTED">{tShared('Availability.OPEN')}</option>
          <option value="VERIFIED">{tShared('Availability.OPEN')}</option>
          <option value="REJECTED">{tShared('Availability.CLOSED')}</option>
        </select>
      </div>
      <DataTable columns={columns} data={data} isLoading={loading} page={page} totalPages={totalPages} onPageChange={setPage} emptyMessage={tShared('DataTable.empty')} />
      <Modal isOpen={modal} onClose={() => setModal(false)} title={t('modal.title')}
        footer={<><button className="btn btn-danger" onClick={() => handleVerify('REJECTED')} disabled={processing}>{t('modal.reject')}</button><button className="btn btn-primary" onClick={() => handleVerify('VERIFIED')} disabled={processing}>{t('modal.verify')}</button></>}>
        {selected && (
          <div className="space-y-3 text-sm">
            <div className="grid grid-cols-2 gap-2">
              <p><strong>{t('table.amount')}:</strong></p><p>MVR {selected.amount.toLocaleString()}</p>
              <p><strong>{t('table.method')}:</strong></p><p>{selected.method}</p>
              <p><strong>{t('table.reference')}:</strong></p><p>{selected.reference || '—'}</p>
              <p><strong>{t('table.invoice')}:</strong></p><p>{selected.invoice?.invoiceNumber || selected.enrollment?.idCardNo || '-'}</p>
              <p><strong>{t('table.class')}:</strong></p><p>{selected.enrollment?.course?.title || selected.invoice?.feeStructure?.name || '-'}</p>
              <p><strong>{t('table.date')}:</strong></p><p>{new Date(selected.paymentDate).toLocaleString()}</p>
            </div>
            {selected.proofUrl && (
              <div className="border-t pt-3">
                <p className="font-medium mb-1">{t('modal.proof')}</p>
                <a href={`${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '')}${selected.proofUrl}`}
                  target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline text-sm">
                  {t('modal.viewDoc')}
                </a>
              </div>
            )}
            <div className="border-t pt-3">
              <label className="label">{t('modal.notes')}</label>
              <textarea className="input" rows={2} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={t('modal.notesPlaceholder')} />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
