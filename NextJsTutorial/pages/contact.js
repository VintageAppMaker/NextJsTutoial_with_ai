import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Contact() {
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    // 폼 제출 후 홈페이지로 프로그래매틱 라우팅
    router.push('/')
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact 페이지</h1>
      
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">이름:</label>
          <input type="text" id="name" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">이메일:</label>
          <input type="email" id="email" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="message">메시지:</label>
          <textarea id="message" style={{ marginLeft: '10px' }} />
        </div>
        <button type="submit">제출</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <Link href="/">홈으로 돌아가기</Link>
      </div>
    </div>
  )
}
