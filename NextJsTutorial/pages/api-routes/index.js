import { useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import styles from '../../styles/ApiRoutes.module.css'

export default function ApiRoutesPage() {
  const [responseData, setResponseData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const examples = [
    {
      title: '기본 API 요청',
      description: 'GET 요청을 사용한 기본적인 API 호출',
      endpoint: '/api/hello',
      method: 'GET'
    },
    {
      title: '동적 API 라우트',
      description: '동적 세그먼트를 사용한 API',
      endpoint: '/api/posts/1',
      method: 'GET'
    },
    {
      title: '쿼리 파라미터',
      description: '쿼리 문자열을 사용한 API',
      endpoint: '/api/search?q=nextjs',
      method: 'GET'
    }
  ]

  const handleApiCall = async (endpoint, method) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(endpoint, { method })
      const data = await response.json()
      setResponseData({
        endpoint,
        data,
        status: response.status
      })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>API 라우트</h1>
        <p className={styles.description}>
          Next.js의 API 라우트 기능을 사용하여 서버리스 API를 만드는 방법을 알아봅니다.
        </p>

        <div className={styles.grid}>
          {examples.map((example, index) => (
            <Card key={index}>
              <h2>{example.title}</h2>
              <p>{example.description}</p>
              <div className={styles.endpoint}>
                <code>{example.method} {example.endpoint}</code>
              </div>
              <Button
                onClick={() => handleApiCall(example.endpoint, example.method)}
                disabled={loading}
              >
                {loading ? '요청 중...' : 'API 호출'}
              </Button>
            </Card>
          ))}
        </div>

        {responseData && (
          <div className={styles.response}>
            <h2>응답 결과</h2>
            <div className={styles.responseCard}>
              <div className={styles.responseHeader}>
                <span>Endpoint: {responseData.endpoint}</span>
                <span>Status: {responseData.status}</span>
              </div>
              <pre>
                {JSON.stringify(responseData.data, null, 2)}
              </pre>
            </div>
          </div>
        )}

        {error && (
          <div className={styles.error}>
            <h2>에러 발생</h2>
            <p>{error}</p>
          </div>
        )}

        <div className={styles.codeExample}>
          <h2>API 라우트 예제</h2>
          <div className={styles.codeBlock}>
            <h3>1. 기본 API 핸들러</h3>
            <pre>
              <code>{`
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
              `}</code>
            </pre>

            <h3>2. 동적 API 라우트</h3>
            <pre>
              <code>{`
// pages/api/posts/[id].js
export default function handler(req, res) {
  const { id } = req.query
  res.status(200).json({ id, title: \`Post \${id}\` })
}
              `}</code>
            </pre>

            <h3>3. HTTP 메서드 처리</h3>
            <pre>
              <code>{`
// pages/api/posts/index.js
export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      // 목록 조회
      return res.status(200).json({ posts: [] })
    case 'POST':
      // 새 항목 생성
      return res.status(201).json({ message: 'Created' })
    default:
      return res.status(405).json({ message: 'Method not allowed' })
  }
}
              `}</code>
            </pre>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
