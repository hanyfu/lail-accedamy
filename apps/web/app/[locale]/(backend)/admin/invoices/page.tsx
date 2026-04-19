'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { api } from '@/lib/api';
import { DataTable, StatusBadge, showToast, Modal } from '@/components/ui';
import type { Invoice, Student, FeeStructure } from '@/lib/types';

export default function AdminInvoicesPage() {
  const [data, setData] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [genModal, setGenModal] = useState(false);
  const [students, setStudents] = useState<Student[]>([]);
  const [fees, setFees] = useState<FeeStructure[]>([]);
  const [genForm, setGenForm] = useState({ studentId: '', feeStructureId: '', dueDate: '' });
  const [generating, setGenerating] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.getInvoices({ page, limit: 20, search: search || undefined, status: statusFilter || undefined });
      setData(res.data); setTotalPages(res.meta.totalPages);
    } catch { showToast('error', 'Failed to load'); }
    setLoading(false);
  }, [page, search, statusFilter]);

  useEffect(() => { load(); }, [load]);

  const openGenerate = async () => {
    try {
      const [s, f] = await Promise.all([api.getStudents({ limit: 200 }), api.getFeeStructures({ limit: 200 })]);
      setStudents(s.data); setFees(f.data);
      setGenForm({ studentId: '', feeStructureId: '', dueDate: '' });
      setGenModal(true);
    } catch { showToast('error', 'Failed to load data'); }
  };

  const handleGenerate = async () => {
    if (!genForm.studentId || !genForm.feeStructureId || !genForm.dueDate) { showToast('error', 'All fields required'); return; }
    setGenerating(true);
    try {
      await api.generateInvoice({ studentId: parseInt(genForm.studentId), feeStructureId: parseInt(genForm.feeStructureId), dueDate: genForm.dueDate });
      showToast('success', 'Invoice generated'); setGenModal(false); load();
    } catch (err: any) { showToast('error', err?.response?.data?.message || 'Failed'); }
    setGenerating(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this invoice?')) return;
    try { await api.deleteInvoice(id); showToast('success', 'Deleted'); load(); }
    catch (err: any) { showToast('error', err?.response?.data?.message || 'Failed'); }
  };

  const columns = [
    { key: 'invoiceNumber', label: 'Invoice #', render: (i: Invoice) => <span className="font-medium font-mono text-sm">{i.invoiceNumber}</span> },
    { key: 'student', label: 'Student', render: (i: Invoice) => i.student?.applicant ? `${i.student.applicant.firstName} ${i.student.applicant.lastName}` : i.student?.user?.name || '-' },
    { key: 'fee', label: 'Description', render: (i: Invoice) => i.feeStructure?.name || '-' },
    { key: 'amount', label: 'Amount', render: (i: Invoice) => `$${i.amount.toLocaleString()}` },
    { key: 'paid', label: 'Paid', render: (i: Invoice) => `$${i.paidAmount.toLocaleString()}` },
    { key: 'balance', label: 'Balance', render: (i: Invoice) => <span className={i.amount - i.paidAmount > 0 ? 'text-danger-600 font-medium' : 'text-success-600'}>${(i.amount - i.paidAmount).toLocaleString()}</span> },
    { key: 'status', label: 'Status', render: (i: Invoice) => <StatusBadge status={i.status} /> },
    { key: 'due', label: 'Due', render: (i: Invoice) => new Date(i.dueDate).toLocaleDateString() },
    {
      key: 'actions', label: '', render: (i: Invoice) => i.status !== 'PAID' ? (
        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(i.id)}>Delete</button>
      ) : null,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="page-title">Invoices</h1><p className="page-subtitle">Manage student invoices</p></div>
        <button className="btn btn-primary" onClick={openGenerate}>+ Generate Invoice</button>
      </div>
      <div className="flex flex-wrap gap-3 mb-4">
        <input className="input max-w-xs" placeholder="Search invoice #..." value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
        <select className="input max-w-[180px]" value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}>
          <option value="">All Statuses</option>
          <option value="PENDING">Pending</option><option value="PARTIAL">Partial</option><option value="PAID">Paid</option><option value="OVERDUE">Overdue</option>
        </select>
      </div>
      <DataTable columns={columns} data={data} isLoading={loading} page={page} totalPages={totalPages} onPageChange={setPage} />
      <Modal isOpen={genModal} onClose={() => setGenModal(false)} title="Generate Invoice"
        footer={<><button className="btn btn-secondary" onClick={() => setGenModal(false)}>Cancel</button><button className="btn btn-primary" onClick={handleGenerate} disabled={generating}>{generating ? 'Generating...' : 'Generate'}</button></>}>
        <div className="space-y-4">
          <div><label className="label">Student</label><select className="input" value={genForm.studentId} onChange={(e) => setGenForm({ ...genForm, studentId: e.target.value })}>
            <option value="">Select student...</option>
            {students.map((s) => <option key={s.id} value={s.id}>{s.studentId} — {s.applicant ? `${s.applicant.firstName} ${s.applicant.lastName}` : s.user?.name}</option>)}
          </select></div>
          <div><label className="label">Fee Structure</label><select className="input" value={genForm.feeStructureId} onChange={(e) => setGenForm({ ...genForm, feeStructureId: e.target.value })}>
            <option value="">Select fee...</option>
            {fees.map((f) => <option key={f.id} value={f.id}>{f.name} — ${f.amount.toLocaleString()} ({f.program?.name || 'Class'})</option>)}
          </select></div>
          <div><label className="label">Due Date</label><input type="date" className="input" value={genForm.dueDate} onChange={(e) => setGenForm({ ...genForm, dueDate: e.target.value })} /></div>
        </div>
      </Modal>
    </div>
  );
}
