import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  const locales = ['dv'];

  if (!locale || !locales.includes(locale as any)) {
    locale = 'dv';
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
