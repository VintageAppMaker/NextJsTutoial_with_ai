import Link from 'next/link'

export default function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About 페이지</h1>
      <p>Next.js의 기본 라우팅 시스템을 보여주는 예제입니다.</p>
      
      <div style={{ marginTop: '20px' }}>
        <h2>네비게이션 메뉴</h2>
        <nav style={{ display: 'flex', gap: '10px' }}>
          <Link href="/">홈</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  )
}
