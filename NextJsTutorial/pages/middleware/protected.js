import MainLayout from '../../components/layout/MainLayout'
import Card from '../../components/ui/Card'
import Alert from '../../components/ui/Alert'
import styles from '../../styles/Middleware.module.css'

export default function ProtectedPage() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>보호된 페이지</h1>
        
        <Alert type="success">
          인증된 사용자만 접근할 수 있는 페이지입니다.
        </Alert>

        <Card title="보안 콘텐츠">
          <p>이 콘텐츠는 인증된 사용자만 볼 수 있습니다.</p>
          <p>미들웨어가 인증되지 않은 사용자를 로그인 페이지로 리다이렉트합니다.</p>
        </Card>
      </div>
    </MainLayout>
  )
}
