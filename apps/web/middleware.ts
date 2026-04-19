import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['dv'],

  // Used when no locale matches
  defaultLocale: 'dv',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(dv)/:path*'],
};
