import createMiddleware from 'next-intl/middleware';
import {NextResponse, type NextRequest} from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['dv'],
  defaultLocale: 'dv'
});

export default function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;

  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = pathname.replace(/^\/en/, '/dv');
    return NextResponse.redirect(redirectUrl);
  }

  return intlMiddleware(request);
}

export const config = {
  // Match all app routes except API, _next, and static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
