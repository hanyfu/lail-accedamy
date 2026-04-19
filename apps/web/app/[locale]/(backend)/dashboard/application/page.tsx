'use client';

import React, { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { StatusBadge, LoadingSpinner } from '@/components/ui';
import type { Applicant } from '@/lib/types';

export default function ApplicationPage() {
  const [applicant, setApplicant] = useState<Applicant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getMyApplication().then((data) => {
      setApplicant(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;

  if (!applicant) {
    return (
      <div className="card p-8 text-center">
        <p className="text-slate-500">No application found.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">My Application</h1>
        <p className="page-subtitle">View your application details and status</p>
      </div>

      {/* Status Banner */}
      <div className={`rounded-lg p-4 mb-6 ${
        applicant.status === 'APPROVED' ? 'bg-success-50 border border-success-500' :
        applicant.status === 'REJECTED' ? 'bg-danger-50 border border-danger-500' :
        'bg-warning-50 border border-warning-500'
      }`}>
        <div className="flex items-center gap-3">
          <StatusBadge status={applicant.status} />
          <span className="text-sm font-medium">
            {applicant.status === 'PENDING' && 'Your application is under review.'}
            {applicant.status === 'APPROVED' && 'Congratulations! Your application has been approved.'}
            {applicant.status === 'REJECTED' && 'Unfortunately, your application was not approved.'}
          </span>
        </div>
        {applicant.rejectionNote && (
          <p className="text-sm text-danger-700 mt-2">Reason: {applicant.rejectionNote}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Personal Info */}
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900 mb-4">Personal Information</h3>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between"><dt className="text-slate-500">Full Name</dt><dd className="font-medium">{applicant.firstName} {applicant.lastName}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-500">Email</dt><dd className="font-medium">{applicant.email}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-500">Phone</dt><dd className="font-medium">{applicant.phone}</dd></div>
            {applicant.dateOfBirth && <div className="flex justify-between"><dt className="text-slate-500">Date of Birth</dt><dd className="font-medium">{new Date(applicant.dateOfBirth).toLocaleDateString()}</dd></div>}
            {applicant.nationality && <div className="flex justify-between"><dt className="text-slate-500">Nationality</dt><dd className="font-medium">{applicant.nationality}</dd></div>}
            {applicant.address && <div className="flex justify-between"><dt className="text-slate-500">Address</dt><dd className="font-medium text-right max-w-[200px]">{applicant.address}</dd></div>}
          </dl>
        </div>

        {/* Academic Info */}
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900 mb-4">Academic Information</h3>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between"><dt className="text-slate-500">Class</dt><dd className="font-medium">{applicant.program?.name}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-500">Category</dt><dd className="font-medium">{applicant.program?.department?.name}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-500">Intake</dt><dd className="font-medium">{applicant.intake?.name}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-500">Submitted</dt><dd className="font-medium">{new Date(applicant.submittedAt).toLocaleDateString()}</dd></div>
            {applicant.previousEdu && (
              <div>
                <dt className="text-slate-500 mb-1">Previous Education</dt>
                <dd className="font-medium bg-slate-50 p-2 rounded text-xs">{applicant.previousEdu}</dd>
              </div>
            )}
          </dl>
        </div>
      </div>

      {applicant.student && (
        <div className="mt-6 p-4 bg-success-50 rounded-lg border border-success-500">
          <p className="text-sm font-medium text-success-700">
            ✓ Student record created — Student ID: <strong>{applicant.student.studentId}</strong>
          </p>
        </div>
      )}
    </div>
  );
}
