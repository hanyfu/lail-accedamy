'use client';

import React from 'react';
import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';

// ─── StatusBadge ────────────────────────────────────────

const statusMap: Record<string, string> = {
  PENDING: 'badge-pending',
  APPROVED: 'badge-approved',
  REJECTED: 'badge-rejected',
  ACTIVE: 'badge-active',
  CLOSED: 'badge-default',
  PAID: 'badge-paid',
  PARTIAL: 'badge-partial',
  OVERDUE: 'badge-overdue',
  SUBMITTED: 'badge-submitted',
  VERIFIED: 'badge-verified',
  INACTIVE: 'badge-default',
  STUDYING: 'badge-active',
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span className={clsx('badge', statusMap[status] || 'badge-default')}>
      {status}
    </span>
  );
}

// ─── LoadingSpinner ─────────────────────────────────────

export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12' };
  return (
    <div className="flex items-center justify-center p-8">
      <div
        className={clsx(
          sizes[size],
          'animate-spin rounded-full border-2 border-slate-200 border-t-primary-600',
        )}
      />
    </div>
  );
}

// ─── EmptyState ─────────────────────────────────────────

export function EmptyState({
  title,
  description,
  action,
}: {
  title?: string;
  description?: string;
  action?: React.ReactNode;
}) {
  const t = useTranslations('Shared.EmptyState');
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      </div>
      <h3 className="text-sm font-semibold text-slate-900">{title || t('title')}</h3>
      <p className="text-sm text-slate-500 mt-1 max-w-sm">{description || t('description')}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

// ─── Modal ──────────────────────────────────────────────

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="modal-body">{children}</div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
}

// ─── Pagination ─────────────────────────────────────────

export function Pagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange: (p: number) => void;
}) {
  const t = useTranslations('Shared.Pagination');
  if (totalPages <= 1) return null;
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between px-4 py-3 border-t border-slate-200">
      <p className="text-sm text-slate-500">
        {t('pageOf', { page, total: totalPages })}
      </p>
      <div className="flex gap-2">
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
        >
          {t('prev')}
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
        >
          {t('next')}
        </button>
      </div>
    </div>
  );
}

// ─── Toast ──────────────────────────────────────────────

interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

let toastListeners: ((toasts: ToastMessage[]) => void)[] = [];
let toasts: ToastMessage[] = [];

export function showToast(type: 'success' | 'error' | 'info', message: string) {
  const id = Date.now().toString() + '-' + Math.random().toString(36).substring(2, 9);
  toasts = [...toasts, { id, type, message }];
  toastListeners.forEach((l) => l(toasts));
  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== id);
    toastListeners.forEach((l) => l(toasts));
  }, 4000);
}

export function ToastContainer() {
  const [items, setItems] = React.useState<ToastMessage[]>([]);

  React.useEffect(() => {
    toastListeners.push(setItems);
    return () => {
      toastListeners = toastListeners.filter((l) => l !== setItems);
    };
  }, []);

  if (items.length === 0) return null;

  const colors = {
    success: 'bg-success-50 border-success-500 text-success-700',
    error: 'bg-danger-50 border-danger-500 text-danger-700',
    info: 'bg-info-50 border-info-500 text-info-600',
  };

  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 max-w-sm">
      {items.map((t) => (
        <div
          key={t.id}
          className={clsx(
            'px-4 py-3 rounded-lg border text-sm font-medium shadow-lg',
            colors[t.type],
          )}
          style={{ animation: 'slideUp 200ms ease' }}
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}

// ─── DataTable ──────────────────────────────────────────

interface Column<T> {
  key: string;
  label: string;
  render?: (item: T) => React.ReactNode;
}

export function DataTable<T extends { id: number | string }>({
  columns,
  data,
  isLoading,
  page,
  totalPages,
  onPageChange,
  emptyMessage,
}: {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
  page?: number;
  totalPages?: number;
  onPageChange?: (p: number) => void;
  emptyMessage?: string;
}) {
  if (isLoading) return <LoadingSpinner />;
  if (data.length === 0) return <EmptyState description={emptyMessage} />;

  return (
    <div className="table-container">
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                {columns.map((col) => (
                  <td key={col.key}>
                    {col.render
                      ? col.render(item)
                      : String((item as any)[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {page && totalPages && onPageChange && (
        <Pagination page={page} totalPages={totalPages} onPageChange={onPageChange} />
      )}
    </div>
  );
}
