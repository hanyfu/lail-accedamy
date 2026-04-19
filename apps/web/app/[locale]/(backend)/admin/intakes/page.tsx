'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { api } from '@/lib/api';
import { DataTable, StatusBadge, showToast, Modal } from '@/components/ui';
import type { Intake, Program } from '@/lib/types';

export default function AdminIntakesPage() {
  const [data, setData] = useState<Intake[]>([]);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<Intake | null>(null);
  const [form, setForm] = useState({ name: '', programId: '', startDate: '', endDate: '', applicationDeadline: '', maxCapacity: '100', status: 'ACTIVE' });
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [res, progs] = await Promise.all([api.getIntakes({ page, limit: 20 }), api.getPrograms({ limit: 100 })]);
      setData(res.data); setTotalPages(res.meta.totalPages); setPrograms(progs.data);
    } catch { showToast('error', 'Failed to load'); }
    setLoading(false);
  }, [page]);

  useEffect(() => { load(); }, [load]);

  const openCreate = () => { setEditing(null); setForm({ name: '', programId: '', startDate: '', endDate: '', applicationDeadline: '', maxCapacity: '100', status: 'ACTIVE' }); setModal(true); };
  const openEdit = (i: Intake) => {
    setEditing(i);
    setForm({ name: i.name, programId: String(i.programId), startDate: i.startDate.slice(0, 10), endDate: i.endDate.slice(0, 10), applicationDeadline: i.applicationDeadline.slice(0, 10), maxCapacity: String(i.maxCapacity), status: i.status });
    setModal(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const body = { ...form, programId: parseInt(form.programId), maxCapacity: parseInt(form.maxCapacity) };
      if (editing) { await api.updateIntake(editing.id, body); showToast('success', 'Updated'); }
      else { await api.createIntake(body); showToast('success', 'Created'); }
      setModal(false); load();
    } catch (err: any) { showToast('error', err?.response?.data?.message || 'Failed'); }
    setSaving(false);
  };

  const columns = [
    { key: 'name', label: 'Name', render: (i: Intake) => <span className="font-medium">{i.name}</span> },
    { key: 'program', label: 'Program', render: (i: Intake) => i.program?.name || '-' },
    { key: 'deadline', label: 'Deadline', render: (i: Intake) => new Date(i.applicationDeadline).toLocaleDateString() },
    { key: 'capacity', label: 'Capacity', render: (i: Intake) => `${i._count?.applicants ?? 0} / ${i.maxCapacity}` },
    { key: 'status', label: 'Status', render: (i: Intake) => <StatusBadge status={i.status} /> },
    { key: 'actions', label: 'Actions', render: (i: Intake) => <button className="btn btn-sm btn-secondary" onClick={() => openEdit(i)}>Edit</button> },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="page-title">Intakes</h1><p className="page-subtitle">Manage enrollment intakes</p></div>
        <button className="btn btn-primary" onClick={openCreate}>+ Add Intake</button>
      </div>
      <DataTable columns={columns} data={data} isLoading={loading} page={page} totalPages={totalPages} onPageChange={setPage} />
      <Modal isOpen={modal} onClose={() => setModal(false)} title={editing ? 'Edit Intake' : 'Create Intake'}
        footer={<><button className="btn btn-secondary" onClick={() => setModal(false)}>Cancel</button><button className="btn btn-primary" onClick={handleSave} disabled={saving}>{saving ? 'Saving...' : 'Save'}</button></>}>
        <div className="space-y-4">
          <div><label className="label">Name</label><input className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g., Fall 2026" /></div>
          <div><label className="label">Program</label><select className="input" value={form.programId} onChange={(e) => setForm({ ...form, programId: e.target.value })}><option value="">Select...</option>{programs.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}</select></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="label">Start Date</label><input type="date" className="input" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} /></div>
            <div><label className="label">End Date</label><input type="date" className="input" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} /></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="label">Application Deadline</label><input type="date" className="input" value={form.applicationDeadline} onChange={(e) => setForm({ ...form, applicationDeadline: e.target.value })} /></div>
            <div><label className="label">Max Capacity</label><input type="number" className="input" value={form.maxCapacity} onChange={(e) => setForm({ ...form, maxCapacity: e.target.value })} /></div>
          </div>
          {editing && <div><label className="label">Status</label><select className="input" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}><option value="ACTIVE">Active</option><option value="CLOSED">Closed</option></select></div>}
        </div>
      </Modal>
    </div>
  );
}
