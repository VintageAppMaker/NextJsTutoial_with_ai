import MainLayout from '../../../components/layout/MainLayout'
import Card from '../../../components/ui/Card'
import Button from '../../../components/ui/Button'
import styles from '../../../styles/Middleware.module.css'

export default function ApiTestPage() {
  const checkHeaders = async () => {
    try {
      const response = await fetch('/api/headers')
      const headers = await response.json()
      alert(JSON.stringify(headers, null, 2))
    } catch (error) {
      alert('Error fetching headers: ' + error.message)
    }
  }

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>API 헤더 테스트</h1>
        
        <Card title="보안 헤더">
          <p>이 페이지는 미들웨어에 의해 자동으로 추가된 보안 헤더를 테스트합니다.</p>
          <ul className={styles.headerList}>
            <li>X-Frame-Options: DENY</li>
            <li>X-Content-Type-Options: nosniff</li>
            <li>Referrer-Policy: origin-when-cross-origin</li>
            <li>Cache-Control: no-store</li>
          </ul>
          <Button onClick={checkHeaders}>헤더 확인</Button>
        </Card>
      </div>
    </MainLayout>
  )
}
