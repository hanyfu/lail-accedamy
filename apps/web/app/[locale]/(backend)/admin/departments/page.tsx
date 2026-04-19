'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { api } from '@/lib/api';
import { DataTable, showToast, Modal } from '@/components/ui';
import type { Department } from '@/lib/types';

export default function AdminDepartmentsPage() {
  const [data, setData] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<Department | null>(null);
  const [form, setForm] = useState({ name: '', code: '' });
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.getDepartments({ page, limit: 20, search: search || undefined });
      setData(res.data);
      setTotalPages(res.meta.totalPages);
    } catch { showToast('error', 'Failed to load departments'); }
    setLoading(false);
  }, [page, search]);

  useEffect(() => { load(); }, [load]);

  const openCreate = () => { setEditing(null); setForm({ name: '', code: '' }); setModal(true); };
  const openEdit = (d: Department) => { setEditing(d); setForm({ name: d.name, code: d.code }); setModal(true); };

  const handleSave = async () => {
    if (!form.name || !form.code) { showToast('error', 'All fields are required'); return; }
    setSaving(true);
    try {
      if (editing) {
        await api.updateDepartment(editing.id, form);
        showToast('success', 'Department updated');
      } else {
        await api.createDepartment(form);
        showToast('success', 'Department created');
      }
      setModal(false);
      load();
    } catch (err: any) {
      showToast('error', err?.response?.data?.message || 'Save failed');
    }
    setSaving(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this department?')) return;
    try {
      await api.deleteDepartment(id);
      showToast('success', 'Department deleted');
      load();
    } catch (err: any) {
      showToast('error', err?.response?.data?.message || 'Delete failed');
    }
  };

  const columns = [
    { key: 'name', label: 'Name', render: (d: Department) => <span className="font-medium">{d.name}</span> },
    { key: 'code', label: 'Code', render: (d: Department) => <span className="font-mono text-sm">{d.code}</span> },
    { key: 'programs', label: 'Programs', render: (d: Department) => d._count?.programs ?? 0 },
    { key: 'created', label: 'Created', render: (d: Department) => new Date(d.createdAt).toLocaleDateString() },
    {
      key: 'actions', label: 'Actions', render: (d: Department) => (
        <div className="flex gap-2">
          <button className="btn btn-sm btn-secondary" onClick={() => openEdit(d)}>Edit</button>
          <button className="btn btn-sm btn-danger" onClick={() => handleDelete(d.id)}>Delete</button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="page-title">Departments</h1><p className="page-subtitle">Manage academic departments</p></div>
        <button className="btn btn-primary" onClick={openCreate}>+ Add Department</button>
      </div>
      <div className="mb-4">
        <input className="input max-w-xs" placeholder="Search..." value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
      </div>
      <DataTable columns={columns} data={data} isLoading={loading} page={page} totalPages={totalPages} onPageChange={setPage} />
      <Modal isOpen={modal} onClose={() => setModal(false)} title={editing ? 'Edit Department' : 'Create Department'}
        footer={<><button className="btn btn-secondary" onClick={() => setModal(false)}>Cancel</button><button className="btn btn-primary" onClick={handleSave} disabled={saving}>{saving ? 'Saving...' : 'Save'}</button></>}>
        <div className="space-y-4">
          <div><label className="label">Name</label><input className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
          <div><label className="label">Code</label><input className="input" value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value.toUpperCase() })} placeholder="e.g., CS" /></div>
        </div>
      </Modal>
    </div>
  );
}
