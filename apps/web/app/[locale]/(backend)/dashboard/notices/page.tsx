'use client';

import React, { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import type { Notice } from '@/lib/types';
import { useAuth } from '@/lib/auth';

export default function DashboardNoticesPage() {
  const { user } = useAuth();
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const audience = user?.role === 'STUDENT' ? 'STUDENTS' : 'APPLICANTS';
    api.getPublicNotices(audience).then((data) => {
      setNotices(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [user]);

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Notices</h1>
        <p className="page-subtitle">Important announcements and updates</p>
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><div className="w-8 h-8 animate-spin rounded-full border-2 border-slate-200 border-t-primary-600" /></div>
      ) : notices.length === 0 ? (
        <div className="card p-8 text-center text-slate-500">No notices at this time.</div>
      ) : (
        <div className="space-y-4">
          {notices.map((notice) => (
            <div key={notice.id} className="card p-5">
              <h3 className="font-semibold text-slate-900 mb-1">{notice.title}</h3>
              <p className="text-sm text-slate-600 whitespace-pre-wrap">{notice.content}</p>
              <p className="text-xs text-slate-400 mt-3">{new Date(notice.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
