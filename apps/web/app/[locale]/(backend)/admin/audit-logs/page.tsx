'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { api } from '@/lib/api';
import { DataTable, showToast } from '@/components/ui';
import type { AuditLog } from '@/lib/types';

export default function AdminAuditLogsPage() {
  const [data, setData] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [entityFilter, setEntityFilter] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.getAuditLogs({ page, limit: 25, entity: entityFilter || undefined });
      setData(res.data); setTotalPages(res.meta.totalPages);
    } catch { showToast('error', 'Failed to load'); }
    setLoading(false);
  }, [page, entityFilter]);

  useEffect(() => { load(); }, [load]);

  const actionColors: Record<string, string> = {
    CREATE: 'text-success-600', UPDATE: 'text-info-600', DELETE: 'text-danger-600',
    APPROVE: 'text-success-600', REJECT: 'text-danger-600', VERIFY: 'text-success-600',
    SEED: 'text-slate-500',
  };

  const columns = [
    { key: 'createdAt', label: 'Time', render: (l: AuditLog) => <span className="text-xs">{new Date(l.createdAt).toLocaleString()}</span> },
    { key: 'user', label: 'User', render: (l: AuditLog) => <span className="font-medium">{l.user?.name || l.user?.email || `#${l.userId}`}</span> },
    { key: 'action', label: 'Action', render: (l: AuditLog) => <span className={`font-semibold ${actionColors[l.action] || 'text-slate-600'}`}>{l.action}</span> },
    { key: 'entity', label: 'Entity', render: (l: AuditLog) => <span className="badge badge-default">{l.entity}</span> },
    { key: 'entityId', label: 'Entity ID', render: (l: AuditLog) => <span className="text-xs font-mono">{l.entityId}</span> },
    { key: 'details', label: 'Details', render: (l: AuditLog) => l.details ? <span className="text-xs text-slate-500 max-w-[200px] truncate block">{l.details}</span> : '—' },
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Audit Logs</h1>
        <p className="page-subtitle">Track all administrative actions</p>
      </div>
      <div className="mb-4">
        <select className="input max-w-[200px]" value={entityFilter} onChange={(e) => { setEntityFilter(e.target.value); setPage(1); }}>
          <option value="">All Entities</option>
          <option value="Department">Department</option>
          <option value="Program">Program</option>
          <option value="Intake">Intake</option>
          <option value="Applicant">Applicant</option>
          <option value="FeeStructure">Fee Structure</option>
          <option value="Invoice">Invoice</option>
          <option value="Payment">Payment</option>
          <option value="Notice">Notice</option>
          <option value="System">System</option>
        </select>
      </div>
      <DataTable columns={columns} data={data} isLoading={loading} page={page} totalPages={totalPages} onPageChange={setPage} emptyMessage="No audit logs found" />
    </div>
  );
}
