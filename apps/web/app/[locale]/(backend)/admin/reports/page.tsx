'use client';

import React, { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { LoadingSpinner } from '@/components/ui';
import type { FinanceSummary } from '@/lib/types';

export default function AdminReportsPage() {
  const [summary, setSummary] = useState<FinanceSummary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getFinanceSummary().then((data) => { setSummary(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Reports</h1>
        <p className="page-subtitle">Financial and admissions overview</p>
      </div>

      {summary && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="stat-card">
              <div className="stat-label">Total Invoiced</div>
              <div className="stat-value text-primary-600">MVR {summary.totalInvoiced.toLocaleString()}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Total Collected</div>
              <div className="stat-value text-success-600">MVR {summary.totalCollected.toLocaleString()}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Outstanding Balance</div>
              <div className="stat-value text-danger-600">MVR {summary.outstanding.toLocaleString()}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Collection Rate</div>
              <div className="stat-value text-primary-600">
                {summary.totalInvoiced > 0 ? Math.round((summary.totalCollected / summary.totalInvoiced) * 100) : 0}%
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="stat-card">
              <div className="stat-label">Pending Payment Verifications</div>
              <div className="stat-value text-warning-600">{summary.pendingPayments}</div>
              <p className="text-xs text-slate-400 mt-1">Requires admin review</p>
            </div>
            <div className="stat-card">
              <div className="stat-label">Overdue Invoices</div>
              <div className="stat-value text-danger-600">{summary.overdueInvoices}</div>
              <p className="text-xs text-slate-400 mt-1">Past due date with outstanding balance</p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold text-slate-900 mb-4">MVP Status</h3>
            <div className="grid gap-3 text-sm text-slate-700">
              <p>Admissions and payment workflows are active.</p>
              <p>All class fees and balances are tracked in MVR.</p>
              <p>Use Payments and Enrollments tabs to verify submissions and manage student status.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
