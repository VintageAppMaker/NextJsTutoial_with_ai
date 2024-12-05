import { useState } from 'react'
import { useRouter } from 'next/router'
import MainLayout from '../../components/layout/MainLayout'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import styles from '../../styles/Middleware.module.css'

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)
    // 실제로는 서버에 인증 요청을 보내야 함
    document.cookie = 'auth-token=dummy-token; path=/'
    
    // 원래 가려던 페이지로 리다이렉트
    const returnUrl = router.query.returnUrl || '/middleware/protected'
    router.push(returnUrl)
  }

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>로그인</h1>
        
        <Card>
          <div className={styles.loginForm}>
            <p>이 페이지는 데모용입니다. 아무 버튼이나 클릭하여 로그인하세요.</p>
            <Button 
              variant="primary"
              onClick={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? '로그인 중...' : '로그인'}
            </Button>
          </div>
        </Card>
      </div>
    </MainLayout>
  )
}
