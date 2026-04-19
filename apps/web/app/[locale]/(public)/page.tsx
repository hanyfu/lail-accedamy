'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useMemo, useState, useRef } from 'react';
import { api } from '@/lib/api';
import type { HomeContent } from '@/lib/types';

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

export default function HomePage() {
  const t = useTranslations('HomePage');
  const [home, setHome] = useState<HomeContent | null>(null);

  const defaultHome = useMemo<HomeContent>(
    () => ({
      hero: {
        badge: t('badge'),
        title1: t('title1'),
        title2: t('title2'),
        subtitle: t('subtitle'),
        applyNow: t('applyNow'),
        browseClasses: t('browseClasses'),
      },
      stats: {
        classes: '50+',
        students: '10K+',
        placement: '95%',
        faculty: '200+',
      },
      features: {
        title: t('features.title'),
        subtitle: t('features.subtitle'),
        item1Title: t('features.easyApp'),
        item1Desc: t('features.easyAppDesc'),
        item2Title: t('features.finances'),
        item2Desc: t('features.financesDesc'),
        item3Title: t('features.informed'),
        item3Desc: t('features.informedDesc'),
      },
      howItWorks: {
        title: t('howItWorks.title'),
        subtitle: t('howItWorks.subtitle'),
        step1: t('howItWorks.step1'),
        step1Desc: t('howItWorks.step1Desc'),
        step2: t('howItWorks.step2'),
        step2Desc: t('howItWorks.step2Desc'),
        step3: t('howItWorks.step3'),
        step3Desc: t('howItWorks.step3Desc'),
        step4: t('howItWorks.step4'),
        step4Desc: t('howItWorks.step4Desc'),
      },
      cta: {
        title: t('cta.title'),
        subtitle: t('cta.subtitle'),
        start: t('cta.start'),
        view: t('cta.view'),
      },
    }),
    [t],
  );

  const defaultHomeRef = useRef(defaultHome);
  useEffect(() => {
    defaultHomeRef.current = defaultHome;
  }, [defaultHome]);

  useEffect(() => {
    let mounted = true;
    console.log('🚀 Fetching site settings...');
    api
      .getPublicSiteSettings()
      .then((data) => {
        if (!mounted) return;
        setHome(mergeHomeContent(data.homeContent, defaultHomeRef.current));
      })
      .catch((err) => {
        if (!mounted) return;
        console.error('❌ Failed to fetch site settings:', err);
        setHome(defaultHomeRef.current);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const content = home || defaultHome;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary-300 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              {content.hero.badge}
            </span>
            {(content.hero.title1 || content.hero.title2) && (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                {content.hero.title1}{' '}
                <span className="text-primary-200">{content.hero.title2}</span>
              </h1>
            )}
            <p className="text-[24px] text-primary-100 mb-8 max-w-2xl leading-relaxed">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/apply" className="btn btn-lg bg-white text-primary-700 font-semibold hover:bg-primary-50 border-white">
                {content.hero.applyNow}
              </Link>
              <Link href="/programs" className="btn btn-lg border-white/30 text-white hover:bg-white/10">
                {content.hero.browseClasses}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: content.stats.classes, label: t('stats.classes') },
              { value: content.stats.students, label: t('stats.students') },
              { value: content.stats.placement, label: t('stats.placement') },
              { value: content.stats.faculty, label: t('stats.faculty') },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-primary-600">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{content.features.title}</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
              {content.features.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📝',
                title: content.features.item1Title,
                desc: content.features.item1Desc,
              },
              {
                icon: '💳',
                title: content.features.item2Title,
                desc: content.features.item2Desc,
              },
              {
                icon: '📢',
                title: content.features.item3Title,
                desc: content.features.item3Desc,
              },
            ].map((feature) => (
              <div key={feature.title} className="card p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{content.howItWorks.title}</h2>
            <p className="text-slate-500 mt-3">{content.howItWorks.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: content.howItWorks.step1, desc: content.howItWorks.step1Desc },
              { step: '2', title: content.howItWorks.step2, desc: content.howItWorks.step2Desc },
              { step: '3', title: content.howItWorks.step3, desc: content.howItWorks.step3Desc },
              { step: '4', title: content.howItWorks.step4, desc: content.howItWorks.step4Desc },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.cta.title}</h2>
          <p className="text-primary-100 text-lg mb-8">
            {content.cta.subtitle}
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/apply" className="btn btn-lg bg-white text-primary-700 font-semibold hover:bg-primary-50 border-white">
              {content.cta.start}
            </Link>
            <Link href="/programs" className="btn btn-lg text-white border-white/30 hover:bg-white/10">
              {content.cta.view}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
