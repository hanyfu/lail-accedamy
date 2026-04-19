'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { api } from '@/lib/api';
import { DataTable, showToast, Modal } from '@/components/ui';
import type { FeeStructure, Program } from '@/lib/types';

export default function AdminFeeStructuresPage() {
  const [data, setData] = useState<FeeStructure[]>([]);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<FeeStructure | null>(null);
  const [form, setForm] = useState({ name: '', amount: '', currency: 'MVR', programId: '' });
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [res, progs] = await Promise.all([
        api.getFeeStructures({ page, limit: 20 }),
        api.getPrograms({ limit: 100 }),
      ]);
      setData(res.data); setTotalPages(res.meta.totalPages); setPrograms(progs.data);
    } catch { showToast('error', 'Failed to load'); }
    setLoading(false);
  }, [page]);

  useEffect(() => { load(); }, [load]);

  const openCreate = () => { setEditing(null); setForm({ name: '', amount: '', currency: 'MVR', programId: '' }); setModal(true); };
  const openEdit = (f: FeeStructure) => { setEditing(f); setForm({ name: f.name, amount: String(f.amount), currency: f.currency, programId: String(f.programId) }); setModal(true); };

  const handleSave = async () => {
    if (!form.name || !form.amount || !form.programId) { showToast('error', 'All fields required'); return; }
    setSaving(true);
    try {
      const body = { name: form.name, amount: parseFloat(form.amount), currency: form.currency, programId: parseInt(form.programId) };
      if (editing) { await api.updateFeeStructure(editing.id, body); showToast('success', 'Updated'); }
      else { await api.createFeeStructure(body); showToast('success', 'Created'); }
      setModal(false); load();
    } catch (err: any) { showToast('error', err?.response?.data?.message || 'Failed'); }
    setSaving(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this fee structure?')) return;
    try { await api.deleteFeeStructure(id); showToast('success', 'Deleted'); load(); }
    catch (err: any) { showToast('error', err?.response?.data?.message || 'Failed'); }
  };

  const columns = [
    { key: 'name', label: 'Name', render: (f: FeeStructure) => <span className="font-medium">{f.name}</span> },
    { key: 'amount', label: 'Amount', render: (f: FeeStructure) => `${f.currency} ${f.amount.toLocaleString()}` },
    { key: 'program', label: 'Class', render: (f: FeeStructure) => f.program?.name || '-' },
    { key: 'created', label: 'Created', render: (f: FeeStructure) => new Date(f.createdAt).toLocaleDateString() },
    {
      key: 'actions', label: 'Actions', render: (f: FeeStructure) => (
        <div className="flex gap-2">
          <button className="btn btn-sm btn-secondary" onClick={() => openEdit(f)}>Edit</button>
          <button className="btn btn-sm btn-danger" onClick={() => handleDelete(f.id)}>Delete</button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="page-title">Fee Structures</h1><p className="page-subtitle">Manage fee schedules for classes</p></div>
        <button className="btn btn-primary" onClick={openCreate}>+ Add Fee</button>
      </div>
      <DataTable columns={columns} data={data} isLoading={loading} page={page} totalPages={totalPages} onPageChange={setPage} />
      <Modal isOpen={modal} onClose={() => setModal(false)} title={editing ? 'Edit Fee Structure' : 'Create Fee Structure'}
        footer={<><button className="btn btn-secondary" onClick={() => setModal(false)}>Cancel</button><button className="btn btn-primary" onClick={handleSave} disabled={saving}>{saving ? 'Saving...' : 'Save'}</button></>}>
        <div className="space-y-4">
          <div><label className="label">Name</label><input className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g., Tuition Fee" /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="label">Amount</label><input type="number" className="input" step="0.01" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} /></div>
            <div><label className="label">Currency</label><select className="input" value={form.currency} onChange={(e) => setForm({ ...form, currency: e.target.value })}><option value="MVR">MVR</option><option value="USD">USD</option><option value="EUR">EUR</option><option value="GBP">GBP</option></select></div>
          </div>
          <div><label className="label">Class</label><select className="input" value={form.programId} onChange={(e) => setForm({ ...form, programId: e.target.value })}><option value="">Select...</option>{programs.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}</select></div>
        </div>
      </Modal>
    </div>
  );
}
