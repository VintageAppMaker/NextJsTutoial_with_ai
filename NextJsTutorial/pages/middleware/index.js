import { useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import styles from '../../styles/Middleware.module.css'

export default function MiddlewareExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = () => {
    // 실제로는 서버에 인증 요청을 보내야 함
    document.cookie = 'auth-token=dummy-token; path=/'
    setIsLoggedIn(true)
  }

  const logout = () => {
    document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
    setIsLoggedIn(false)
  }

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>미들웨어 예제</h1>
        <p className={styles.description}>
          Next.js의 미들웨어를 사용하여 요청을 가로채고 수정하는 방법을 알아봅니다.
        </p>

        <div className={styles.grid}>
          <Card title="인증 미들웨어">
            <p>보호된 페이지 접근 시 인증 상태를 확인합니다.</p>
            <div className={styles.demo}>
              <div className={styles.status}>
                상태: {isLoggedIn ? '로그인됨' : '로그아웃됨'}
              </div>
              <div className={styles.actions}>
                {isLoggedIn ? (
                  <>
                    <Button variant="secondary" onClick={logout}>로그아웃</Button>
                    <Button variant="primary" onClick={() => window.location.href = '/middleware/protected'}>
                      보호된 페이지 방문
                    </Button>
                  </>
                ) : (
                  <Button variant="primary" onClick={login}>로그인</Button>
                )}
              </div>
            </div>
          </Card>

          <Card title="지역화(i18n) 미들웨어">
            <p>사용자의 선호 언어에 따라 적절한 언어 버전으로 리다이렉트합니다.</p>
            <div className={styles.demo}>
              <div className={styles.languageButtons}>
                <Button onClick={() => window.location.href = '/middleware/i18n/ko'}>한국어</Button>
                <Button onClick={() => window.location.href = '/middleware/i18n/en'}>English</Button>
                <Button onClick={() => window.location.href = '/middleware/i18n/ja'}>日本語</Button>
              </div>
            </div>
          </Card>

          <Card title="헤더 수정 미들웨어">
            <p>보안 및 캐시 관련 헤더를 자동으로 추가합니다.</p>
            <div className={styles.demo}>
              <Button onClick={() => window.location.href = '/middleware/api/test'}>
                API 요청 테스트
              </Button>
            </div>
          </Card>
        </div>

        <div className={styles.codeExample}>
          <h2>미들웨어 구현 예제</h2>
          <pre>
            <code>{`
// middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
  // 1. 인증 체크
  if (pathname.startsWith('/middleware/protected')) {
    const token = request.cookies.get('auth-token')
    if (!token) {
      return NextResponse.redirect(new URL('/middleware/login', request.url))
    }
  }

  // 2. 지역화(i18n) 처리
  if (pathname.startsWith('/middleware/i18n')) {
    const acceptLanguage = request.headers.get('accept-language') || 'en'
    const language = // ... 언어 결정 로직
    return NextResponse.redirect(new URL(\`/i18n/\${language}\`, request.url))
  }

  // 3. 헤더 수정
  const response = NextResponse.next()
  response.headers.set('X-Frame-Options', 'DENY')
  return response
}
            `}</code>
          </pre>
        </div>
      </div>
    </MainLayout>
  )
}
