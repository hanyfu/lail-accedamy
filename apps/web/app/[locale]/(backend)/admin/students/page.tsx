'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { api } from '@/lib/api';
import { DataTable, Modal, showToast } from '@/components/ui';
import type { Enrollment, Student } from '@/lib/types';
import { useTranslations } from 'next-intl';

type StudentRow = {
  id: string;
  category: 'Academic' | 'Class';
  enrollmentId?: number;
  idNo: string;
  name: string;
  email: string;
  phone: string;
  className: string;
  status: string;
  isArchived: boolean;
  totalFees: number;
  totalPaid: number;
  pendingFees: number;
  joinedAt: string;
};

export default function AdminStudentsPage() {
  const t = useTranslations('Admin.Students');
  const tStats = useTranslations('Admin.Dashboard.stats');
  const tShared = useTranslations('Shared');
  const tBtn = useTranslations('Shared.Buttons');
  const [data, setData] = useState<StudentRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [classFilter, setClassFilter] = useState('');
  const [showArchived, setShowArchived] = useState(false);
  const [courses, setCourses] = useState<Array<{ id: number; title: string }>>([]);
  const [selected, setSelected] = useState<StudentRow | null>(null);
  const [manageOpen, setManageOpen] = useState(false);
  const [managing, setManaging] = useState(false);
  const [manageStatus, setManageStatus] = useState<'STUDYING' | 'COMPLETED' | 'DROPOUT'>('STUDYING');
  const [manageArchived, setManageArchived] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [studentRes, enrollmentRes, courseRes] = await Promise.all([
        api.getStudents({ page: 1, limit: 500, search: search || undefined }),
        api.getEnrollments({
          page: 1,
          limit: 500,
          search: search || undefined,
          status: 'APPROVED,STUDYING,COMPLETED,DROPOUT',
          courseId: classFilter ? Number(classFilter) : undefined,
          isArchived: showArchived,
        }),
        api.getCourses({ page: 1, limit: 200 }),
      ]);

      setCourses(courseRes.data.map((course) => ({ id: course.id, title: course.title })));

      const academicRows: StudentRow[] =
        classFilter
          ? []
          : studentRes.data.map((student: Student) => ({
              id: `uni-${student.id}`,
              category: 'Academic',
              idNo: student.studentId,
              name: student.applicant
                ? `${student.applicant.firstName} ${student.applicant.lastName}`
                : student.user?.name || '-',
              email: student.user?.email || student.applicant?.email || '-',
              phone: student.applicant?.phone || '-',
              className: student.applicant?.program?.name || '-',
              status: 'STUDYING',
              isArchived: false,
              totalFees: student.totalFees ?? 0,
              totalPaid: student.totalPaid ?? 0,
              pendingFees: student.pendingFees ?? 0,
              joinedAt: student.enrolledAt,
            }));

      const classRows: StudentRow[] = enrollmentRes.data.map(
        (enrollment: Enrollment) => ({
          id: `class-${enrollment.id}`,
          category: 'Class',
          enrollmentId: enrollment.id,
          idNo: enrollment.idCardNo || '-',
          name: enrollment.fullName,
          email: enrollment.email,
          phone: enrollment.phone,
          className: enrollment.course?.title || '-',
          status: enrollment.status,
          isArchived: enrollment.isArchived,
          totalFees: enrollment.totalBilled,
          totalPaid: enrollment.totalPaid,
          pendingFees:
            enrollment.pendingFee ??
            Math.max(enrollment.totalBilled - enrollment.totalPaid, 0),
          joinedAt: enrollment.startedAt || enrollment.approvedAt || enrollment.createdAt,
        }),
      );

      const allRows = [...classRows, ...academicRows].sort(
        (a, b) => new Date(b.joinedAt).getTime() - new Date(a.joinedAt).getTime(),
      );

      const limit = 20;
      const start = (page - 1) * limit;
      const pagedRows = allRows.slice(start, start + limit);

      setData(pagedRows);
      setTotalPages(Math.max(1, Math.ceil(allRows.length / limit)));
    } catch { showToast('error', t('toasts.loadError')); }
    setLoading(false);
  }, [page, search, classFilter, showArchived, t]);

  useEffect(() => { load(); }, [load]);

  const openManage = (row: StudentRow) => {
    if (!row.enrollmentId) return;
    setSelected(row);
    setManageStatus(
      row.status === 'COMPLETED' || row.status === 'DROPOUT'
        ? row.status
        : 'STUDYING',
    );
    setManageArchived(row.isArchived);
    setManageOpen(true);
  };

  const handleSaveManage = async () => {
    if (!selected?.enrollmentId) return;
    setManaging(true);
    try {
      await api.updateEnrollment(selected.enrollmentId, {
        status: manageStatus,
        isArchived: manageArchived,
      });
      showToast('success', t('toasts.saveSuccess'));
      setManageOpen(false);
      setSelected(null);
      await load();
    } catch (err: any) {
      showToast('error', err?.response?.data?.message || t('toasts.saveError'));
    } finally {
      setManaging(false);
    }
  };

  const columns = [
    { key: 'category', label: t('table.type'), render: (s: StudentRow) => s.category === 'Academic' ? tStats('academic') : tStats('class') },
    { key: 'idNo', label: t('table.enrollmentId'), render: (s: StudentRow) => <span className="font-medium font-mono text-sm">{s.idNo}</span> },
    { key: 'name', label: t('table.name') },
    { key: 'className', label: t('table.class') },
    { key: 'phone', label: t('table.phone') },
    { key: 'email', label: t('table.email') },
    { key: 'status', label: t('table.status'), render: (s: StudentRow) => (
      <span className={`badge ${s.isArchived ? 'badge-default' : 'badge-active'}`}>
        {tShared(`Availability.${s.status}`)}{s.isArchived ? ` ${t('archived')}` : ''}
      </span>
    ) },
    { key: 'totalFees', label: t('table.fees'), render: (s: StudentRow) => `MVR ${s.totalFees.toLocaleString()}` },
    { key: 'totalPaid', label: t('table.paid'), render: (s: StudentRow) => `MVR ${s.totalPaid.toLocaleString()}` },
    { key: 'pendingFees', label: t('table.pending'), render: (s: StudentRow) => `MVR ${s.pendingFees.toLocaleString()}` },
    { key: 'joinedAt', label: t('table.joined'), render: (s: StudentRow) => new Date(s.joinedAt).toLocaleDateString() },
    {
      key: 'actions',
      label: '',
      render: (s: StudentRow) => {
        if (s.category !== 'Class' || !s.enrollmentId) return null;
        return (
          <button className="btn btn-sm btn-primary" onClick={() => openManage(s)}>{t('manage')}</button>
        );
      },
    },
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">{t('title')}</h1>
        <p className="page-subtitle">{t('subtitle')}</p>
      </div>

      <div className="mb-4 flex flex-wrap gap-3">
        <input className="input max-w-xs" placeholder={t('searchPlaceholder')} value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
        <select
          className="input max-w-xs"
          value={classFilter}
          onChange={(e) => { setClassFilter(e.target.value); setPage(1); }}
        >
          <option value="">{t('filterClass')}</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>{course.title}</option>
          ))}
        </select>
        <label className="inline-flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={showArchived}
            onChange={(e) => { setShowArchived(e.target.checked); setPage(1); }}
          />
          {t('showArchived')}
        </label>
      </div>

      <DataTable columns={columns} data={data} isLoading={loading} page={page} totalPages={totalPages} onPageChange={setPage} emptyMessage={tShared('DataTable.empty')} />

      <Modal
        isOpen={manageOpen}
        onClose={() => { setManageOpen(false); setSelected(null); }}
        title={t('modal.title')}
        footer={(
          <button className="btn btn-primary" onClick={handleSaveManage} disabled={managing}>
            {managing ? tBtn('saving') : tBtn('save')}
          </button>
        )}
      >
        {selected && (
          <div className="space-y-3">
            <div className="text-sm text-slate-600">
              {selected.name} • {selected.idNo} • {selected.className}
            </div>
            <div>
              <label className="label">{t('table.status')}</label>
              <select
                className="input"
                value={manageStatus}
                onChange={(e) => setManageStatus(e.target.value as 'STUDYING' | 'COMPLETED' | 'DROPOUT')}
              >
                <option value="STUDYING">{tShared('Availability.STUDYING')}</option>
                <option value="COMPLETED">{tShared('Availability.COMPLETED')}</option>
                <option value="DROPOUT">{tShared('Availability.DROPOUT')}</option>
              </select>
            </div>
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={manageArchived}
                onChange={(e) => setManageArchived(e.target.checked)}
              />
              {t('modal.archive')}
            </label>
          </div>
        )}
      </Modal>
    </div>
  );
}
