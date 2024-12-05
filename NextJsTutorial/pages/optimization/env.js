import { useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import Card from '../../components/ui/Card'
import Alert from '../../components/ui/Alert'
import styles from '../../styles/Optimization.module.css'

export default function EnvVariablesExample() {
  const [showAllEnv, setShowAllEnv] = useState(false)

  const publicEnvVars = {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
    NODE_ENV: process.env.NODE_ENV
  }

  // 서버 사이드에서만 사용 가능한 환경변수
  const serverSideEnvVars = {
    DATABASE_URL: '비공개 (서버에서만 접근 가능)',
    API_SECRET_KEY: '비공개 (서버에서만 접근 가능)',
    SMTP_PASSWORD: '비공개 (서버에서만 접근 가능)'
  }

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>환경 변수</h1>
        <p className={styles.description}>
          Next.js의 환경 변수 시스템을 사용하여 설정을 관리하는 방법을 알아봅니다.
        </p>

        <div className={styles.grid}>
          <Card title="공개 환경 변수 (클라이언트)">
            <Alert type="info">
              NEXT_PUBLIC_ 접두사가 있는 환경 변수는 클라이언트에서도 접근할 수 있습니다.
            </Alert>
            <pre className={styles.envVars}>
              {JSON.stringify(publicEnvVars, null, 2)}
            </pre>
          </Card>

          <Card title="비공개 환경 변수 (서버)">
            <Alert type="warning">
              접두사가 없는 환경 변수는 서버에서만 접근할 수 있습니다.
            </Alert>
            <pre className={styles.envVars}>
              {JSON.stringify(serverSideEnvVars, null, 2)}
            </pre>
          </Card>
        </div>

        <Card title="환경 변수 설정 방법">
          <div className={styles.codeExample}>
            <h3>1. .env.local 파일 생성</h3>
            <pre>
              <code>{`
# .env.local
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET_KEY=your-secret-key
              `}</code>
            </pre>

            <h3>2. 환경별 설정 파일</h3>
            <pre>
              <code>{`
# .env.development
API_URL=http://localhost:3000/api

# .env.production
API_URL=https://api.production.com
              `}</code>
            </pre>

            <h3>3. 코드에서 사용하기</h3>
            <pre>
              <code>{`
// 클라이언트와 서버 모두에서 접근 가능
console.log(process.env.NEXT_PUBLIC_API_URL)

// 서버에서만 접근 가능
console.log(process.env.API_SECRET_KEY)
              `}</code>
            </pre>
          </div>
        </Card>

        <Card title="환경 변수 우선순위">
          <ol className={styles.priorityList}>
            <li>process.env에 설정된 값</li>
            <li>.env.$(NODE_ENV).local</li>
            <li>.env.local (production에서는 무시됨)</li>
            <li>.env.$(NODE_ENV)</li>
            <li>.env</li>
          </ol>
        </Card>
      </div>
    </MainLayout>
  )
}
