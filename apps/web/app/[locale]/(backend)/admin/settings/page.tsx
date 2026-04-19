'use client';

import React, { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { showToast } from '@/components/ui';
import { useTranslations } from 'next-intl';
import type { HomeContent } from '@/lib/types';

type SettingsTab = 'website' | 'home' | 'password';

const mergeHomeContent = (
  input: Partial<HomeContent> | null | undefined,
  fallback: HomeContent,
): HomeContent => {
  if (!input) return fallback;
  return {
    hero: { ...fallback.hero, ...(input.hero || {}) },
    stats: { ...fallback.stats, ...(input.stats || {}) },
    features: { ...fallback.features, ...(input.features || {}) },
    howItWorks: { ...fallback.howItWorks, ...(input.howItWorks || {}) },
    cta: { ...fallback.cta, ...(input.cta || {}) },
  };
};

export default function AdminSettingsPage() {
  const t = useTranslations('Admin.Settings');
  const tBtn = useTranslations('Shared.Buttons');
  const tHome = useTranslations('HomePage');
  const [loading, setLoading] = useState(true);
  const [savingSite, setSavingSite] = useState(false);
  const [savingHome, setSavingHome] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<SettingsTab>('website');

  const defaultHomeContent: HomeContent = {
    hero: {
      badge: tHome('badge'),
      title1: tHome('title1'),
      title2: tHome('title2'),
      subtitle: tHome('subtitle'),
      applyNow: tHome('applyNow'),
      browseClasses: tHome('browseClasses'),
    },
    stats: {
      classes: '50+',
      students: '10K+',
      placement: '95%',
      faculty: '200+',
    },
    features: {
      title: tHome('features.title'),
      subtitle: tHome('features.subtitle'),
      item1Title: tHome('features.easyApp'),
      item1Desc: tHome('features.easyAppDesc'),
      item2Title: tHome('features.finances'),
      item2Desc: tHome('features.financesDesc'),
      item3Title: tHome('features.informed'),
      item3Desc: tHome('features.informedDesc'),
    },
    howItWorks: {
      title: tHome('howItWorks.title'),
      subtitle: tHome('howItWorks.subtitle'),
      step1: tHome('howItWorks.step1'),
      step1Desc: tHome('howItWorks.step1Desc'),
      step2: tHome('howItWorks.step2'),
      step2Desc: tHome('howItWorks.step2Desc'),
      step3: tHome('howItWorks.step3'),
      step3Desc: tHome('howItWorks.step3Desc'),
      step4: tHome('howItWorks.step4'),
      step4Desc: tHome('howItWorks.step4Desc'),
    },
    cta: {
      title: tHome('cta.title'),
      subtitle: tHome('cta.subtitle'),
      start: tHome('cta.start'),
      view: tHome('cta.view'),
    },
  };

  const [siteForm, setSiteForm] = useState({
    collegeName: '',
    tagline: '',
    logoUrl: '',
    phone: '',
    email: '',
    address: '',
    mapUrl: '',
    footerText: '',
  });
  const [homeForm, setHomeForm] = useState<HomeContent>(defaultHomeContent);

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    api
      .getSiteSettings()
      .then((data) => {
        setSiteForm({
          collegeName: data.collegeName || '',
          tagline: data.tagline || '',
          logoUrl: data.logoUrl || '',
          phone: data.phone || '',
          email: data.email || '',
          address: data.address || '',
          mapUrl: data.mapUrl || '',
          footerText: data.footerText || '',
        });
        setHomeForm(mergeHomeContent(data.homeContent, defaultHomeContent));
      })
      .catch(() => showToast('error', t('toasts.loadError')))
      .finally(() => setLoading(false));
  }, [t, tHome]);

  const handleSaveSite = async () => {
    setSavingSite(true);
    try {
      await api.updateSiteSettings(siteForm);
      showToast('success', t('toasts.saveSuccess'));
    } catch (err: any) {
      showToast('error', err?.response?.data?.message || t('toasts.saveError'));
    }
    setSavingSite(false);
  };

  const handleSaveHome = async () => {
    setSavingHome(true);
    try {
      await api.updateSiteSettings({ homeContent: homeForm });
      showToast('success', t('toasts.saveSuccess'));
    } catch (err: any) {
      showToast('error', err?.response?.data?.message || t('toasts.saveError'));
    }
    setSavingHome(false);
  };

  const handleChangePassword = async () => {
    if (!passwordForm.currentPassword || !passwordForm.newPassword) {
      showToast('error', t('toasts.passRequired'));
      return;
    }
    if (passwordForm.newPassword.length < 8) {
      showToast('error', t('toasts.passLength'));
      return;
    }
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      showToast('error', t('toasts.passMismatch'));
      return;
    }

    setSavingPassword(true);
    try {
      await api.changePassword({
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword,
      });
      showToast('success', t('toasts.passSuccess'));
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err: any) {
      showToast('error', err?.response?.data?.message || t('toasts.passError'));
    }
    setSavingPassword(false);
  };

  if (loading) return <div className="text-slate-500">{t('loading')}</div>;

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">{t('title')}</h1>
        <p className="page-subtitle">{t('subtitle')}</p>
      </div>

      <div className="grid gap-6 max-w-4xl">
        <div className="card p-3 sm:p-4">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className={`btn ${activeTab === 'website' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveTab('website')}
            >
              {t('sections.website')}
            </button>
            <button
              type="button"
              className={`btn ${activeTab === 'home' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveTab('home')}
            >
              {t('sections.homePage')}
            </button>
            <button
              type="button"
              className={`btn ${activeTab === 'password' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveTab('password')}
            >
              {t('sections.password')}
            </button>
          </div>
        </div>

        {activeTab === 'website' && (
          <div className="card p-6">
            <h3 className="font-semibold text-slate-900 mb-4">{t('sections.website')}</h3>
            <div className="grid gap-4">
              <div>
                <label className="label">{t('fields.collegeName')}</label>
                <input className="input" value={siteForm.collegeName} onChange={(e) => setSiteForm({ ...siteForm, collegeName: e.target.value })} />
              </div>
              <div>
                <label className="label">{t('fields.tagline')}</label>
                <input className="input" value={siteForm.tagline} onChange={(e) => setSiteForm({ ...siteForm, tagline: e.target.value })} />
              </div>
              <div>
                <label className="label">{t('fields.logo')}</label>
                <input className="input" value={siteForm.logoUrl} onChange={(e) => setSiteForm({ ...siteForm, logoUrl: e.target.value })} />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="label">{t('fields.phone')}</label>
                  <input className="input" value={siteForm.phone} onChange={(e) => setSiteForm({ ...siteForm, phone: e.target.value })} />
                </div>
                <div>
                  <label className="label">{t('fields.email')}</label>
                  <input className="input" value={siteForm.email} onChange={(e) => setSiteForm({ ...siteForm, email: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="label">{t('fields.address')}</label>
                <textarea className="input" rows={2} value={siteForm.address} onChange={(e) => setSiteForm({ ...siteForm, address: e.target.value })} />
              </div>
              <div>
                <label className="label">{t('fields.map')}</label>
                <input className="input" value={siteForm.mapUrl} onChange={(e) => setSiteForm({ ...siteForm, mapUrl: e.target.value })} />
              </div>
              <div>
                <label className="label">{t('fields.footer')}</label>
                <textarea className="input" rows={2} value={siteForm.footerText} onChange={(e) => setSiteForm({ ...siteForm, footerText: e.target.value })} />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="btn btn-primary" onClick={handleSaveSite} disabled={savingSite}>{savingSite ? tBtn('saving') : tBtn('save')}</button>
            </div>
          </div>
        )}

        {activeTab === 'home' && (
          <div className="card p-6 space-y-6">
            <h3 className="font-semibold text-slate-900">{t('sections.homePage')}</h3>

            <div className="grid gap-4">
              <h4 className="font-medium text-slate-800">{t('home.hero')}</h4>
              <input className="input" value={homeForm.hero.badge} onChange={(e) => setHomeForm({ ...homeForm, hero: { ...homeForm.hero, badge: e.target.value } })} placeholder={t('fields.badge')} />
              <input className="input" value={homeForm.hero.title1} onChange={(e) => setHomeForm({ ...homeForm, hero: { ...homeForm.hero, title1: e.target.value } })} placeholder={t('fields.title1')} />
              <input className="input" value={homeForm.hero.title2} onChange={(e) => setHomeForm({ ...homeForm, hero: { ...homeForm.hero, title2: e.target.value } })} placeholder={t('fields.title2')} />
              <textarea className="input" rows={2} value={homeForm.hero.subtitle} onChange={(e) => setHomeForm({ ...homeForm, hero: { ...homeForm.hero, subtitle: e.target.value } })} placeholder={t('fields.subtitle')} />
              <div className="grid md:grid-cols-2 gap-4">
                <input className="input" value={homeForm.hero.applyNow} onChange={(e) => setHomeForm({ ...homeForm, hero: { ...homeForm.hero, applyNow: e.target.value } })} placeholder={t('fields.applyButton')} />
                <input className="input" value={homeForm.hero.browseClasses} onChange={(e) => setHomeForm({ ...homeForm, hero: { ...homeForm.hero, browseClasses: e.target.value } })} placeholder={t('fields.browseButton')} />
              </div>
            </div>

            <div className="grid gap-4">
              <h4 className="font-medium text-slate-800">{t('home.stats')}</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <input className="input" value={homeForm.stats.classes} onChange={(e) => setHomeForm({ ...homeForm, stats: { ...homeForm.stats, classes: e.target.value } })} placeholder={t('fields.statsClasses')} />
                <input className="input" value={homeForm.stats.students} onChange={(e) => setHomeForm({ ...homeForm, stats: { ...homeForm.stats, students: e.target.value } })} placeholder={t('fields.statsStudents')} />
                <input className="input" value={homeForm.stats.placement} onChange={(e) => setHomeForm({ ...homeForm, stats: { ...homeForm.stats, placement: e.target.value } })} placeholder={t('fields.statsPlacement')} />
                <input className="input" value={homeForm.stats.faculty} onChange={(e) => setHomeForm({ ...homeForm, stats: { ...homeForm.stats, faculty: e.target.value } })} placeholder={t('fields.statsFaculty')} />
              </div>
            </div>

            <div className="grid gap-4">
              <h4 className="font-medium text-slate-800">{t('home.features')}</h4>
              <input className="input" value={homeForm.features.title} onChange={(e) => setHomeForm({ ...homeForm, features: { ...homeForm.features, title: e.target.value } })} placeholder={t('fields.featuresTitle')} />
              <textarea className="input" rows={2} value={homeForm.features.subtitle} onChange={(e) => setHomeForm({ ...homeForm, features: { ...homeForm.features, subtitle: e.target.value } })} placeholder={t('fields.featuresSubtitle')} />
              <div className="grid md:grid-cols-2 gap-4">
                <input className="input" value={homeForm.features.item1Title} onChange={(e) => setHomeForm({ ...homeForm, features: { ...homeForm.features, item1Title: e.target.value } })} placeholder={t('fields.feature1Title')} />
                <input className="input" value={homeForm.features.item1Desc} onChange={(e) => setHomeForm({ ...homeForm, features: { ...homeForm.features, item1Desc: e.target.value } })} placeholder={t('fields.feature1Desc')} />
                <input className="input" value={homeForm.features.item2Title} onChange={(e) => setHomeForm({ ...homeForm, features: { ...homeForm.features, item2Title: e.target.value } })} placeholder={t('fields.feature2Title')} />
                <input className="input" value={homeForm.features.item2Desc} onChange={(e) => setHomeForm({ ...homeForm, features: { ...homeForm.features, item2Desc: e.target.value } })} placeholder={t('fields.feature2Desc')} />
                <input className="input" value={homeForm.features.item3Title} onChange={(e) => setHomeForm({ ...homeForm, features: { ...homeForm.features, item3Title: e.target.value } })} placeholder={t('fields.feature3Title')} />
                <input className="input" value={homeForm.features.item3Desc} onChange={(e) => setHomeForm({ ...homeForm, features: { ...homeForm.features, item3Desc: e.target.value } })} placeholder={t('fields.feature3Desc')} />
              </div>
            </div>

            <div className="grid gap-4">
              <h4 className="font-medium text-slate-800">{t('home.howItWorks')}</h4>
              <input className="input" value={homeForm.howItWorks.title} onChange={(e) => setHomeForm({ ...homeForm, howItWorks: { ...homeForm.howItWorks, title: e.target.value } })} placeholder={t('fields.howTitle')} />
              <textarea className="input" rows={2} value={homeForm.howItWorks.subtitle} onChange={(e) => setHomeForm({ ...homeForm, howItWorks: { ...homeForm.howItWorks, subtitle: e.target.value } })} placeholder={t('fields.howSubtitle')} />
              <div className="grid md:grid-cols-2 gap-4">
                <input className="input" value={homeForm.howItWorks.step1} onChange={(e) => setHomeForm({ ...homeForm, howItWorks: { ...homeForm.howItWorks, step1: e.target.value } })} placeholder={t('fields.step1Title')} />
                <input className="input" value={homeForm.howItWorks.step1Desc} onChange={(e) => setHomeForm({ ...homeForm, howItWorks: { ...homeForm.howItWorks, step1Desc: e.target.value } })} placeholder={t('fields.step1Desc')} />
                <input className="input" value={homeForm.howItWorks.step2} onChange={(e) => setHomeForm({ ...homeForm, howItWorks: { ...homeForm.howItWorks, step2: e.target.value } })} placeholder={t('fields.step2Title')} />
                <input className="input" value={homeForm.howItWorks.step2Desc} onChange={(e) => setHomeForm({ ...homeForm, howItWorks: { ...homeForm.howItWorks, step2Desc: e.target.value } })} placeholder={t('fields.step2Desc')} />
                <input className="input" value={homeForm.howItWorks.step3} onChange={(e) => setHomeForm({ ...homeForm, howItWorks: { ...homeForm.howItWorks, step3: e.target.value } })} placeholder={t('fields.step3Title')} />
                <input className="input" value={homeForm.howItWorks.step3Desc} onChange={(e) => setHomeForm({ ...homeForm, howItWorks: { ...homeForm.howItWorks, step3Desc: e.target.value } })} placeholder={t('fields.step3Desc')} />
                <input className="input" value={homeForm.howItWorks.step4} onChange={(e) => setHomeForm({ ...homeForm, howItWorks: { ...homeForm.howItWorks, step4: e.target.value } })} placeholder={t('fields.step4Title')} />
                <input className="input" value={homeForm.howItWorks.step4Desc} onChange={(e) => setHomeForm({ ...homeForm, howItWorks: { ...homeForm.howItWorks, step4Desc: e.target.value } })} placeholder={t('fields.step4Desc')} />
              </div>
            </div>

            <div className="grid gap-4">
              <h4 className="font-medium text-slate-800">{t('home.cta')}</h4>
              <input className="input" value={homeForm.cta.title} onChange={(e) => setHomeForm({ ...homeForm, cta: { ...homeForm.cta, title: e.target.value } })} placeholder={t('fields.ctaTitle')} />
              <textarea className="input" rows={2} value={homeForm.cta.subtitle} onChange={(e) => setHomeForm({ ...homeForm, cta: { ...homeForm.cta, subtitle: e.target.value } })} placeholder={t('fields.ctaSubtitle')} />
              <div className="grid md:grid-cols-2 gap-4">
                <input className="input" value={homeForm.cta.start} onChange={(e) => setHomeForm({ ...homeForm, cta: { ...homeForm.cta, start: e.target.value } })} placeholder={t('fields.ctaStart')} />
                <input className="input" value={homeForm.cta.view} onChange={(e) => setHomeForm({ ...homeForm, cta: { ...homeForm.cta, view: e.target.value } })} placeholder={t('fields.ctaView')} />
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button className="btn btn-primary" onClick={handleSaveHome} disabled={savingHome}>{savingHome ? tBtn('saving') : tBtn('save')}</button>
            </div>
          </div>
        )}

        {activeTab === 'password' && (
          <div className="card p-6">
            <h3 className="font-semibold text-slate-900 mb-4">{t('sections.password')}</h3>
            <div className="grid gap-4">
              <div>
                <label className="label">{t('fields.currentPass')}</label>
                <input type="password" className="input" value={passwordForm.currentPassword} onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })} />
              </div>
              <div>
                <label className="label">{t('fields.newPass')}</label>
                <input type="password" className="input" value={passwordForm.newPassword} onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })} />
              </div>
              <div>
                <label className="label">{t('fields.confirmPass')}</label>
                <input type="password" className="input" value={passwordForm.confirmPassword} onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })} />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="btn btn-primary" onClick={handleChangePassword} disabled={savingPassword}>{savingPassword ? tBtn('saving') : tBtn('save')}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
