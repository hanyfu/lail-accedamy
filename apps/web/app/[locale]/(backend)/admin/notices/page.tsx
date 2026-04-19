'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { api } from '@/lib/api';
import { DataTable, showToast, Modal } from '@/components/ui';
import type { Notice } from '@/lib/types';

export default function AdminNoticesPage() {
  const [data, setData] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<Notice | null>(null);
  const [form, setForm] = useState({ title: '', content: '', audience: 'ALL', expiryDate: '' });
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.getNotices({ page, limit: 20 });
      setData(res.data); setTotalPages(res.meta.totalPages);
    } catch { showToast('error', 'Failed to load'); }
    setLoading(false);
  }, [page]);

  useEffect(() => { load(); }, [load]);

  const openCreate = () => { setEditing(null); setForm({ title: '', content: '', audience: 'ALL', expiryDate: '' }); setModal(true); };
  const openEdit = (n: Notice) => { setEditing(n); setForm({ title: n.title, content: n.content, audience: n.audience, expiryDate: n.expiryDate?.slice(0, 10) || '' }); setModal(true); };

  const handleSave = async () => {
    if (!form.title || !form.content) { showToast('error', 'Title and content required'); return; }
    setSaving(true);
    try {
      const body: any = { title: form.title, content: form.content, audience: form.audience };
      if (form.expiryDate) body.expiryDate = form.expiryDate;
      if (editing) { await api.updateNotice(editing.id, body); showToast('success', 'Updated'); }
      else { await api.createNotice(body); showToast('success', 'Published'); }
      setModal(false); load();
    } catch (err: any) { showToast('error', err?.response?.data?.message || 'Failed'); }
    setSaving(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this notice?')) return;
    try { await api.deleteNotice(id); showToast('success', 'Deleted'); load(); }
    catch (err: any) { showToast('error', err?.response?.data?.message || 'Failed'); }
  };

  const audienceColors: Record<string, string> = { ALL: 'badge-default', APPLICANTS: 'badge-submitted', STUDENTS: 'badge-approved' };

  const columns = [
    { key: 'title', label: 'Title', render: (n: Notice) => <span className="font-medium">{n.title}</span> },
    { key: 'audience', label: 'Audience', render: (n: Notice) => <span className={`badge ${audienceColors[n.audience] || 'badge-default'}`}>{n.audience}</span> },
    { key: 'published', label: 'Published', render: (n: Notice) => n.isPublished ? <span className="text-success-600">Yes</span> : <span className="text-slate-400">No</span> },
    { key: 'expiry', label: 'Expires', render: (n: Notice) => n.expiryDate ? new Date(n.expiryDate).toLocaleDateString() : '—' },
    { key: 'created', label: 'Created', render: (n: Notice) => new Date(n.createdAt).toLocaleDateString() },
    {
      key: 'actions', label: 'Actions', render: (n: Notice) => (
        <div className="flex gap-2">
          <button className="btn btn-sm btn-secondary" onClick={() => openEdit(n)}>Edit</button>
          <button className="btn btn-sm btn-danger" onClick={() => handleDelete(n.id)}>Delete</button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="page-title">Notices</h1><p className="page-subtitle">Publish announcements for students and applicants</p></div>
        <button className="btn btn-primary" onClick={openCreate}>+ Post Notice</button>
      </div>
      <DataTable columns={columns} data={data} isLoading={loading} page={page} totalPages={totalPages} onPageChange={setPage} />
      <Modal isOpen={modal} onClose={() => setModal(false)} title={editing ? 'Edit Notice' : 'Post Notice'}
        footer={<><button className="btn btn-secondary" onClick={() => setModal(false)}>Cancel</button><button className="btn btn-primary" onClick={handleSave} disabled={saving}>{saving ? 'Saving...' : 'Publish'}</button></>}>
        <div className="space-y-4">
          <div><label className="label">Title</label><input className="input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
          <div><label className="label">Content</label><textarea className="input" rows={4} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="label">Audience</label><select className="input" value={form.audience} onChange={(e) => setForm({ ...form, audience: e.target.value })}><option value="ALL">All</option><option value="APPLICANTS">Applicants</option><option value="STUDENTS">Students</option></select></div>
            <div><label className="label">Expiry Date</label><input type="date" className="input" value={form.expiryDate} onChange={(e) => setForm({ ...form, expiryDate: e.target.value })} /></div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
