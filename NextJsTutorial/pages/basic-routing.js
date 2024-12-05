import Link from 'next/link'
import { useRouter } from 'next/router'

export default function BasicRouting() {
  const router = useRouter()

  return (
    <div style={{ padding: '20px' }}>
      <h1>기본 라우팅 예제</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Link 컴포넌트를 사용한 네비게이션</h2>
        <Link href="/">홈으로 돌아가기</Link>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>프로그래밍 방식의 라우팅</h2>
        <button onClick={() => router.push('/')}>
          홈으로 이동 (프로그래밍 방식)
        </button>
      </div>

      <div>
        <h2>현재 라우트 정보</h2>
        <pre>
          {JSON.stringify(router, null, 2)}
        </pre>
      </div>
    </div>
  )
}
