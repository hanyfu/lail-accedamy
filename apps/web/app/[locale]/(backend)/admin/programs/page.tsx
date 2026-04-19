'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { api } from '@/lib/api';
import { DataTable, showToast, Modal } from '@/components/ui';
import type { Program, Department } from '@/lib/types';

export default function AdminProgramsPage() {
  const [data, setData] = useState<Program[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<Program | null>(null);
  const [form, setForm] = useState({ name: '', code: '', description: '', duration: '', departmentId: '' });
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [res, depts] = await Promise.all([
        api.getPrograms({ page, limit: 20, search: search || undefined }),
        api.getDepartments({ limit: 100 }),
      ]);
      setData(res.data);
      setTotalPages(res.meta.totalPages);
      setDepartments(depts.data);
    } catch { showToast('error', 'Failed to load'); }
    setLoading(false);
  }, [page, search]);

  useEffect(() => { load(); }, [load]);

  const openCreate = () => { setEditing(null); setForm({ name: '', code: '', description: '', duration: '', departmentId: '' }); setModal(true); };
  const openEdit = (p: Program) => { setEditing(p); setForm({ name: p.name, code: p.code, description: p.description || '', duration: p.duration || '', departmentId: String(p.departmentId) }); setModal(true); };

  const handleSave = async () => {
    if (!form.name || !form.code || !form.departmentId) { showToast('error', 'Name, code, and department are required'); return; }
    setSaving(true);
    try {
      const body = { ...form, departmentId: parseInt(form.departmentId) };
      if (editing) { await api.updateProgram(editing.id, body); showToast('success', 'Updated'); }
      else { await api.createProgram(body); showToast('success', 'Created'); }
      setModal(false); load();
    } catch (err: any) { showToast('error', err?.response?.data?.message || 'Failed'); }
    setSaving(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this program?')) return;
    try { await api.deleteProgram(id); showToast('success', 'Deleted'); load(); }
    catch (err: any) { showToast('error', err?.response?.data?.message || 'Failed'); }
  };

  const columns = [
    { key: 'name', label: 'Name', render: (p: Program) => <span className="font-medium">{p.name}</span> },
    { key: 'code', label: 'Code', render: (p: Program) => <span className="font-mono text-sm">{p.code}</span> },
    { key: 'dept', label: 'Department', render: (p: Program) => p.department?.name || '-' },
    { key: 'duration', label: 'Duration' },
    { key: 'intakes', label: 'Intakes', render: (p: Program) => p._count?.intakes ?? 0 },
    {
      key: 'actions', label: 'Actions', render: (p: Program) => (
        <div className="flex gap-2">
          <button className="btn btn-sm btn-secondary" onClick={() => openEdit(p)}>Edit</button>
          <button className="btn btn-sm btn-danger" onClick={() => handleDelete(p.id)}>Delete</button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="page-title">Programs</h1><p className="page-subtitle">Manage academic programs</p></div>
        <button className="btn btn-primary" onClick={openCreate}>+ Add Program</button>
      </div>
      <div className="mb-4"><input className="input max-w-xs" placeholder="Search..." value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} /></div>
      <DataTable columns={columns} data={data} isLoading={loading} page={page} totalPages={totalPages} onPageChange={setPage} />
      <Modal isOpen={modal} onClose={() => setModal(false)} title={editing ? 'Edit Program' : 'Create Program'}
        footer={<><button className="btn btn-secondary" onClick={() => setModal(false)}>Cancel</button><button className="btn btn-primary" onClick={handleSave} disabled={saving}>{saving ? 'Saving...' : 'Save'}</button></>}>
        <div className="space-y-4">
          <div><label className="label">Name</label><input className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
          <div><label className="label">Code</label><input className="input" value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value.toUpperCase() })} /></div>
          <div><label className="label">Department</label>
            <select className="input" value={form.departmentId} onChange={(e) => setForm({ ...form, departmentId: e.target.value })}>
              <option value="">Select...</option>
              {departments.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
            </select>
          </div>
          <div><label className="label">Duration</label><input className="input" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} placeholder="e.g., 4 years" /></div>
          <div><label className="label">Description</label><textarea className="input" rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></div>
        </div>
      </Modal>
    </div>
  );
}
