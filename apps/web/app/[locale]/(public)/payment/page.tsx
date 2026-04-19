'use client';

import React, { useEffect, useRef, useState } from 'react';
import { api } from '@/lib/api';
import { showToast } from '@/components/ui';
import { useTranslations } from 'next-intl';

const BANK_ACCOUNT = '7709403519101';
const BANK_HOLDER = 'MOHAMED HANEEF';

export default function PublicPaymentPage() {
  const t = useTranslations('Payment');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [selectedCourse, setSelectedCourse] = useState('');
  const [courses, setCourses] = useState<Array<{
    id: number;
    title: string;
    code: string;
    duration: string | null;
    monthlyFee: number;
    availability: 'OPEN' | 'LIMITED' | 'FULL' | 'CLOSED';
    availableSlots?: number;
    effectiveAvailability?: 'OPEN' | 'LIMITED' | 'FULL' | 'CLOSED';
  }>>([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [studentName, setStudentName] = useState('');
  const [idCardNo, setIdCardNo] = useState('');
  const [amount, setAmount] = useState('');
  const [reference, setReference] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lookingUpPending, setLookingUpPending] = useState(false);

  useEffect(() => {
    api
      .getPublicCourses()
      .then((items) => setCourses(items))
      .catch(() => showToast('error', t('fieldError')))
      .finally(() => setLoadingCourses(false));
  }, []);

  useEffect(() => {
    if (!selectedCourse || !idCardNo.trim()) return;
    const timer = window.setTimeout(() => {
      autofillPendingAmount(idCardNo, selectedCourse);
    }, 300);
    return () => window.clearTimeout(timer);
  }, [idCardNo, selectedCourse]);

  const autofillPendingAmount = async (cardNo: string, courseId: string) => {
    const trimmedId = cardNo.trim();
    if (!trimmedId || !courseId) return;
    try {
      setLookingUpPending(true);
      const info = await api.lookupEnrollmentByIdCard({
        idCardNo: trimmedId,
        courseId: Number(courseId),
      });
      if (!studentName.trim() && info.fullName) {
        setStudentName(info.fullName);
      }
      const pending = Number(info.pendingFee || 0);
      const autoAmount = pending > 0 ? pending : Number(info.classFee || 0);
      if (autoAmount > 0) {
        setAmount(autoAmount.toFixed(2));
      }
    } catch {
      // Keep manual entry fallback if lookup fails
    } finally {
      setLookingUpPending(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(BANK_ACCOUNT);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      showToast('error', t('toasts.copyError'));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedCourse || !studentName.trim() || !idCardNo.trim() || !amount || parseFloat(amount) <= 0) {
      showToast('error', t('fieldError'));
      return;
    }

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('idCardNo', idCardNo.trim());
      formData.append('courseId', selectedCourse);
      formData.append('studentName', studentName.trim());
      formData.append('amount', amount);
      formData.append('method', 'BANK_TRANSFER');

      const pickedCourse = courses.find((course) => String(course.id) === selectedCourse);
      const detailRef = `${pickedCourse?.title || selectedCourse} | ${studentName.trim()}${reference ? ` | ${reference.trim()}` : ''}`;
      formData.append('reference', detailRef);

      if (file) formData.append('proof', file);

      await api.submitPayment(formData);
      showToast('success', t('successMessage'));

      setSelectedCourse('');
      setStudentName('');
      setIdCardNo('');
      setAmount('');
      setReference('');
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? (err as any).response?.data?.message || err.message
          : t('toasts.submitError');
      showToast('error', errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-[#EEF2FA] py-8 px-4 sm:py-12">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#2F6BFF] text-white flex items-center justify-center shadow-sm">
              <span className="text-xl">💳</span>
            </div>
            <div>
              <p className="text-[28px] leading-none font-semibold text-slate-900">{t('portalTitle')}</p>
              <p className="text-xs tracking-[0.12em] text-slate-500 mt-1">{t('portalSubtitle')}</p>
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-xl shadow-sm">
            🌙
          </div>
        </div>

        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-5 sm:p-7">
          <h1 className="text-3xl font-semibold text-slate-900">{t('title')}</h1>
          <p className="text-slate-500 mt-2">{t('subtitle')}</p>

          <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.12em] font-bold text-emerald-800">{t('bankDetails')}</p>
                <p className="text-sm text-emerald-700 mt-2">{t('accountNo')}</p>
                <p className="font-mono text-3xl font-semibold text-slate-900 mt-1 tracking-wide">{BANK_ACCOUNT}</p>
                <p className="text-slate-600 text-sm mt-1">{BANK_HOLDER}</p>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="btn bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600 px-4"
              >
                {copied ? t('copied') : t('copy')}
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="label uppercase tracking-wide text-xs">{t('fields.classes')} <span className="text-danger-600">*</span></label>
              <select
                className="input h-12"
                value={selectedCourse}
                onChange={(e) => {
                  setSelectedCourse(e.target.value);
                  setStudentName('');
                  const picked = courses.find((course) => String(course.id) === e.target.value);
                  if (picked?.monthlyFee && picked.monthlyFee > 0) {
                    setAmount(String(picked.monthlyFee));
                  }
                  if (idCardNo.trim() && e.target.value) {
                    autofillPendingAmount(idCardNo, e.target.value);
                  }
                }}
                disabled={loadingCourses}
                required
              >
                <option value="">{loadingCourses ? t('fields.loadingClasses') : t('fields.selectClass')}</option>
                {courses.map((course) => {
                  const availability = course.effectiveAvailability || course.availability;
                  const isUnavailable = availability === 'FULL' || availability === 'CLOSED';
                  const slotText =
                    typeof course.availableSlots === 'number'
                      ? ` | ${course.availableSlots} ${t('slotsLeft')}`
                      : '';
                  return (
                    <option key={course.id} value={course.id} disabled={isUnavailable}>
                      {course.title}
                      {course.duration ? ` (${course.duration})` : ''}
                      {` | MVR ${Number(course.monthlyFee || 0).toFixed(2)}/${t('perMonth')}`}
                      {slotText}
                      {isUnavailable ? ` | ${t('fields.unavailable')}` : ''}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label className="label uppercase tracking-wide text-xs">{t('fields.studentName')} <span className="text-danger-600">*</span></label>
              <input
                className="input h-12"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder={selectedCourse ? t('fields.enterName') : t('fields.selectClassFirst')}
                disabled={!selectedCourse}
                required
              />
            </div>

            <div>
              <label className="label uppercase tracking-wide text-xs">{t('fields.idCard')} <span className="text-danger-600">*</span></label>
              <input
                className="input h-12"
                value={idCardNo}
                onChange={(e) => setIdCardNo(e.target.value)}
                placeholder={t('fields.idCardPlaceholder')}
                required
              />
            </div>

            <div>
              <label className="label uppercase tracking-wide text-xs">{t('fields.amount')} <span className="text-danger-600">*</span></label>
              <input
                type="number"
                step="0.01"
                min="0.01"
                className="input h-12"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder={t('fields.amountPlaceholder')}
                required
              />
              {lookingUpPending && (
                <p className="text-xs text-slate-500 mt-1">ފީގެ ބާކީ އަދަދު ޗެކްކުރަމުން...</p>
              )}
            </div>

            <div>
              <label className="label uppercase tracking-wide text-xs">{t('fields.reference')}</label>
              <input
                className="input h-12"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                placeholder={t('fields.refPlaceholder')}
              />
            </div>

            <div>
              <label className="label uppercase tracking-wide text-xs">{t('fields.slip')}</label>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.webp"
                className="input h-12 file:mr-3 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-1 file:text-sm file:font-medium"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
              <p className="text-xs text-slate-500 mt-1">{t('fields.acceptedFiles')}</p>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full h-12 rounded-xl bg-[#16A34A] text-white font-semibold hover:bg-[#15803D] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? t('fields.submitting') : t('fields.submit')}
              </button>
            </div>
          </form>
        </div>

        <p className="text-center text-xs text-slate-400 mt-5">© {new Date().getFullYear()} Lail Academy. {useTranslations('Footer')('rights')}</p>
      </div>
    </div>
  );
}
