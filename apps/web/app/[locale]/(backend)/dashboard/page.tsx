'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth';
import { api } from '@/lib/api';
import { StatusBadge } from '@/components/ui';
import type { Applicant, Student, Invoice } from '@/lib/types';
import Link from 'next/link';

export default function DashboardPage() {
  const { user } = useAuth();
  const [applicant, setApplicant] = useState<Applicant | null>(null);
  const [student, setStudent] = useState<Student | null>(null);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (user?.role === 'STUDENT') {
          const s = await api.getMyStudentProfile();
          setStudent(s);
          const inv = await api.getMyInvoices();
          setInvoices(inv);
        } else {
          const a = await api.getMyApplication();
          setApplicant(a);
        }
      } catch { /* ignore */ }
      setLoading(false);
    };
    load();
  }, [user]);

  if (loading) {
    return <div className="flex justify-center py-12"><div className="w-8 h-8 animate-spin rounded-full border-2 border-slate-200 border-t-primary-600" /></div>;
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Welcome, {user?.name || 'User'}</h1>
        <p className="page-subtitle">Here&apos;s an overview of your account</p>
      </div>

      {user?.role === 'STUDENT' && student ? (
        <div className="space-y-6">
          {/* Student Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="stat-card">
              <div className="stat-label">Student ID</div>
              <div className="stat-value text-lg">{student.studentId}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Class</div>
              <div className="stat-value text-lg">{student.applicant?.program?.name}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Enrolled Since</div>
              <div className="stat-value text-lg">{new Date(student.enrolledAt).toLocaleDateString()}</div>
            </div>
          </div>

          {/* Recent Invoices */}
          <div className="card">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-semibold text-slate-900">Recent Invoices</h3>
              <Link href="/dashboard/invoices" className="text-sm text-primary-600 font-medium">View All →</Link>
            </div>
            {invoices.length === 0 ? (
              <div className="p-8 text-center text-sm text-slate-500">No invoices yet</div>
            ) : (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Invoice #</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.slice(0, 5).map((inv) => (
                    <tr key={inv.id}>
                      <td className="font-medium">{inv.invoiceNumber}</td>
                      <td>{inv.feeStructure?.name}</td>
                      <td>${inv.amount.toLocaleString()}</td>
                      <td><StatusBadge status={inv.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      ) : applicant ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="stat-card">
              <div className="stat-label">Application Status</div>
              <div className="mt-2"><StatusBadge status={applicant.status} /></div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Class</div>
              <div className="stat-value text-lg">{applicant.program?.name}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Submitted</div>
              <div className="stat-value text-lg">{new Date(applicant.submittedAt).toLocaleDateString()}</div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold text-slate-900 mb-4">Application Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="text-slate-500">Name:</span> <span className="font-medium">{applicant.firstName} {applicant.lastName}</span></div>
              <div><span className="text-slate-500">Email:</span> <span className="font-medium">{applicant.email}</span></div>
              <div><span className="text-slate-500">Phone:</span> <span className="font-medium">{applicant.phone}</span></div>
              <div><span className="text-slate-500">Intake:</span> <span className="font-medium">{applicant.intake?.name}</span></div>
              {applicant.nationality && <div><span className="text-slate-500">Nationality:</span> <span className="font-medium">{applicant.nationality}</span></div>}
              {applicant.rejectionNote && (
                <div className="col-span-2 p-3 bg-danger-50 rounded-lg text-danger-700">
                  <strong>Rejection Note:</strong> {applicant.rejectionNote}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="card p-8 text-center">
          <p className="text-slate-500">No application found. Would you like to apply?</p>
          <Link href="/apply" className="btn btn-primary mt-4">Apply Now</Link>
        </div>
      )}
    </div>
  );
}
