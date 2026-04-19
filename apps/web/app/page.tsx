import { redirect } from 'next/navigation';

// This root page is redirected by middleware, but we provide a 
// fallback here for robustness in environments where middleware 
// might be bypassed.
export default function RootPage() {
  redirect('/dv');
}
