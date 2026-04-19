'use client';

import React, { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { showToast } from '@/components/ui';
import { useTranslations } from 'next-intl';

export default function ApplyPage() {
  const t = useTranslations('Apply');
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
  const [syncingAvailability, setSyncingAvailability] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [courseId, setCourseId] = useState('');
  const [parentName, setParentName] = useState('');
  const [fullName, setFullName] = useState('');
  const [idCardNo, setIdCardNo] = useState('');
  const [sex, setSex] = useState<'MALE' | 'FEMALE' | ''>('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [viberPhone, setViberPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    api
      .getPublicCourses()
      .then((items) => setCourses(items))
      .catch(() => showToast('error', t('fields.errorLoading')))
      .finally(() => setLoadingCourses(false));
  }, []);

  const selectedClass = courses.find((course) => String(course.id) === courseId);
  const rawAvailability = selectedClass
    ? selectedClass.effectiveAvailability || selectedClass.availability
    : null;
  const tAvailability = useTranslations('Shared.Availability');
  const selectedAvailability = rawAvailability ? tAvailability(rawAvailability as any) : null;
  const selectedAvailableSlots = selectedClass?.availableSlots;
  const isSelectedClassUnavailable =
    rawAvailability === 'FULL' || rawAvailability === 'CLOSED';

  const syncAvailabilityForSelectedClass = async (selectedId: string) => {
    if (!selectedId) return;
    setSyncingAvailability(true);
    try {
      const items = await api.getPublicCourses();
      setCourses(items);
      const refreshed = items.find((course) => String(course.id) === selectedId);
      const refreshedAvailability = refreshed
        ? refreshed.effectiveAvailability || refreshed.availability
        : null;
      if (refreshedAvailability === 'FULL' || refreshedAvailability === 'CLOSED') {
        showToast('info', t('fields.errorUnavailable'));
      }
    } catch {
      showToast('error', t('fields.errorSync'));
    } finally {
      setSyncingAvailability(false);
    }
  };

  const resetForm = () => {
    setCourseId('');
    setParentName('');
    setFullName('');
    setIdCardNo('');
    setSex('');
    setBirthDate('');
    setEmail('');
    setPhone('');
    setViberPhone('');
    setAddress('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !courseId ||
      !parentName.trim() ||
      !fullName.trim() ||
      !idCardNo.trim() ||
      !sex ||
      !birthDate ||
      !address.trim() ||
      !phone.trim() ||
      !viberPhone.trim() ||
      !email.trim()
    ) {
      showToast('error', t('fields.errorFields'));
      return;
    }
    if (isSelectedClassUnavailable) {
      showToast('error', t('fields.errorUnavailable'));
      return;
    }

    setSubmitting(true);
    try {
      await api.submitEnrollment({
        courseId: Number(courseId),
        parentName: parentName.trim(),
        fullName: fullName.trim(),
        idCardNo: idCardNo.trim(),
        sex,
        birthDate,
        email: email.trim(),
        phone: phone.trim(),
        viberPhone: viberPhone.trim(),
        address: address.trim() || undefined,
      });
      showToast('success', t('fields.successMessage'));
      resetForm();
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? (err as any).response?.data?.message || err.message : t('fields.errorSync');
      showToast('error', errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-[#EEF2FA] py-8 px-4 sm:py-12">
      <div className="max-w-xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-sm p-5 sm:p-7">
        <h1 className="text-3xl font-semibold text-slate-900">{t('title')}</h1>
        <p className="text-slate-500 mt-2">{t('subtitle')}</p>

        <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-800 text-sm">
          {t('warning')}
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="label uppercase tracking-wide text-xs">{t('fields.classes')} <span className="text-danger-600">*</span></label>
            <select
              className="input h-12"
              value={courseId}
              onChange={(e) => {
                const selectedId = e.target.value;
                setCourseId(selectedId);
                void syncAvailabilityForSelectedClass(selectedId);
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
                    ? ` | ${course.availableSlots} ${t('fields.slotsLeft')}`
                    : '';
                return (
                <option key={course.id} value={course.id} disabled={isUnavailable}>
                  {course.title}
                  {course.duration ? ` (${course.duration})` : ''}
                  {` | MVR ${Number(course.monthlyFee || 0).toFixed(2)}/${t('fields.perMonth')}`}
                  {slotText}
                  {isUnavailable ? ` | ${t('fields.unavailable')}` : ''}
                </option>
                );
              })}
            </select>
            {selectedClass && (
              <div className="mt-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span>
                    <span className="font-medium">{t('fields.availability')}:</span>{' '}
                    {selectedAvailability}
                  </span>
                  {typeof selectedAvailableSlots === 'number' && (
                    <span>
                      <span className="font-medium">{t('fields.slotsAvailable')}:</span>{' '}
                      {selectedAvailableSlots}
                    </span>
                  )}
                  <span>
                    <span className="font-medium">{t('fields.monthlyFee')}:</span> MVR{' '}
                    {Number(selectedClass.monthlyFee || 0).toFixed(2)}
                  </span>
                  {syncingAvailability && (
                    <span className="text-xs text-slate-500">{t('fields.syncing')}</span>
                  )}
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="label uppercase tracking-wide text-xs">{t('fields.parentName')} <span className="text-danger-600">*</span></label>
            <input className="input h-12" value={parentName} onChange={(e) => setParentName(e.target.value)} placeholder={t('fields.parentNamePlaceholder')} required />
          </div>

          <div>
            <label className="label uppercase tracking-wide text-xs">{t('fields.studentName')} <span className="text-danger-600">*</span></label>
            <input className="input h-12" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder={t('fields.studentNamePlaceholder')} required />
          </div>

          <div>
            <label className="label uppercase tracking-wide text-xs">{t('fields.idCardNo')} <span className="text-danger-600">*</span></label>
            <input className="input h-12" value={idCardNo} onChange={(e) => setIdCardNo(e.target.value)} placeholder={t('fields.idCardNoPlaceholder')} required />
          </div>

          <div>
            <label className="label uppercase tracking-wide text-xs">{t('fields.sex')} <span className="text-danger-600">*</span></label>
            <select className="input h-12" value={sex} onChange={(e) => setSex(e.target.value as 'MALE' | 'FEMALE' | '')} required>
              <option value="">{t('fields.selectSex')}</option>
              <option value="MALE">{t('fields.male')}</option>
              <option value="FEMALE">{t('fields.female')}</option>
            </select>
          </div>

          <div>
            <label className="label uppercase tracking-wide text-xs">{t('fields.birthDate')} <span className="text-danger-600">*</span></label>
            <input type="date" className="input h-12" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
          </div>

          <div>
            <label className="label uppercase tracking-wide text-xs">{t('fields.email')} <span className="text-danger-600">*</span></label>
            <input type="email" className="input h-12" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('fields.emailPlaceholder')} required />
          </div>

          <div>
            <label className="label uppercase tracking-wide text-xs">{t('fields.phone')} <span className="text-danger-600">*</span></label>
            <input className="input h-12" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t('fields.phonePlaceholder')} required />
          </div>

          <div>
            <label className="label uppercase tracking-wide text-xs">{t('fields.viber')} <span className="text-danger-600">*</span></label>
            <input className="input h-12" value={viberPhone} onChange={(e) => setViberPhone(e.target.value)} placeholder={t('fields.phonePlaceholder')} required />
          </div>

          <div>
            <label className="label uppercase tracking-wide text-xs">{t('fields.address')} <span className="text-danger-600">*</span></label>
            <input className="input h-12" value={address} onChange={(e) => setAddress(e.target.value)} placeholder={t('fields.addressPlaceholder')} required />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting || isSelectedClassUnavailable}
              className="w-full h-12 rounded-xl bg-[#16A34A] text-white font-semibold hover:bg-[#15803D] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSelectedClassUnavailable
                ? t('fields.classUnavailable')
                : submitting
                  ? t('fields.submitting')
                  : t('fields.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
