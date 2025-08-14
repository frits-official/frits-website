import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
export function middleware(request) {
  let locales = ['en', 'vi'];
  let headers = request.headers.get('accept-language')
  let languages = new Negotiator({ headers }).languages()
  if (languages.length === 1 && languages[0] === '*') {
        languages = ['en', 'vi']
  }
  let defaultLocale = 'en'
  
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const isPathAllowed = ['/img', 'img', '/api'].some((allowedPath) =>
    pathname.startsWith(`${allowedPath}`),
  )
  if (isPathAllowed) return;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = match(languages, locales, defaultLocale)
  request.nextUrl.pathname = `/${locale}${pathname}`
  
  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)'
  ],
};