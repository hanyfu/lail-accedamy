'use client';

import React from 'react';
import { useAuth } from '@/lib/auth';

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">My Profile</h1>
        <p className="page-subtitle">Your account information</p>
      </div>

      <div className="card p-6 max-w-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary-700">
              {user?.name?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || 'U'}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 text-lg">{user?.name || 'N/A'}</h3>
            <p className="text-sm text-slate-500">{user?.email}</p>
            <span className="badge badge-default text-xs capitalize mt-1">{user?.role?.toLowerCase()}</span>
          </div>
        </div>

        <dl className="space-y-3 text-sm">
          <div className="flex justify-between py-2 border-b border-slate-100">
            <dt className="text-slate-500">Email</dt>
            <dd className="font-medium">{user?.email}</dd>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-100">
            <dt className="text-slate-500">Name</dt>
            <dd className="font-medium">{user?.name || 'Not set'}</dd>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-100">
            <dt className="text-slate-500">Role</dt>
            <dd className="font-medium capitalize">{user?.role?.toLowerCase()}</dd>
          </div>
          <div className="flex justify-between py-2">
            <dt className="text-slate-500">Account ID</dt>
            <dd className="font-medium">#{user?.id}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
