import { NextResponse } from 'next/server'

// 지원하는 언어 목록
const supportedLocales = ['en', 'ko', 'ja']

// 기본 언어
const defaultLocale = 'ko'

export function middleware(request) {
  // 현재 요청의 경로 정보
  const { pathname } = request.nextUrl

  // 미들웨어 예제 경로에 대해서만 처리
  if (pathname.startsWith('/middleware')) {
    // 인증이 필요한 페이지 처리
    if (pathname.includes('/protected')) {
      const authToken = request.cookies.get('auth-token')
      
      if (!authToken) {
        return NextResponse.redirect(new URL('/middleware/login', request.url))
      }
    }

    // i18n 처리
    if (pathname.startsWith('/middleware/i18n')) {
      // 이미 로케일이 있는 경우 건너뛰기
      if (supportedLocales.some(locale => pathname.startsWith(`/middleware/i18n/${locale}`))) {
        return NextResponse.next()
      }

      // 사용자의 선호 언어 확인
      const acceptLanguage = request.headers.get('accept-language') || ''
      const preferredLocale = acceptLanguage
        .split(',')
        .map(lang => lang.split(';')[0])
        .find(lang => supportedLocales.includes(lang.substring(0, 2)))
        ?.substring(0, 2)

      // 선호 언어나 기본 언어로 리다이렉트
      const locale = preferredLocale || defaultLocale
      return NextResponse.redirect(new URL(`/middleware/i18n/${locale}`, request.url))
    }

    // API 요청에 대한 보안 헤더 추가
    if (pathname.startsWith('/middleware/api')) {
      const response = NextResponse.next()
      
      // 보안 헤더 설정
      response.headers.set('X-Frame-Options', 'DENY')
      response.headers.set('X-Content-Type-Options', 'nosniff')
      response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
      response.headers.set('Cache-Control', 'no-store')
      
      return response
    }
  }

  return NextResponse.next()
}

// 미들웨어가 실행될 경로 설정
export const config = {
  matcher: [
    '/middleware/:path*',
    '/api/:path*'
  ]
}
