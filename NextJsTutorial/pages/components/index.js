import { useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import Alert from '../../components/ui/Alert'
import styles from '../../styles/Components.module.css'

export default function ComponentsExample() {
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'info', message: '정보 알림입니다.' },
    { id: 2, type: 'success', message: '성공적으로 처리되었습니다.' },
    { id: 3, type: 'warning', message: '주의가 필요합니다.' },
    { id: 4, type: 'error', message: '오류가 발생했습니다.' }
  ])

  const removeAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id))
  }

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>컴포넌트 예제</h1>
        
        <section className={styles.section}>
          <h2>버튼 컴포넌트</h2>
          <Card>
            <div className={styles.buttonGrid}>
              <div>
                <h3>버튼 종류</h3>
                <div className={styles.buttonGroup}>
                  <Button>기본 버튼</Button>
                  <Button variant="primary">주요 버튼</Button>
                  <Button variant="secondary">보조 버튼</Button>
                </div>
              </div>
              
              <div>
                <h3>버튼 크기</h3>
                <div className={styles.buttonGroup}>
                  <Button size="small">작은 버튼</Button>
                  <Button>중간 버튼</Button>
                  <Button size="large">큰 버튼</Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className={styles.section}>
          <h2>카드 컴포넌트</h2>
          <div className={styles.cardGrid}>
            <Card title="기본 카드">
              <p>카드 컴포넌트는 콘텐츠를 깔끔하게 표시합니다.</p>
            </Card>
            <Card title="호버 효과">
              <p>마우스를 올리면 카드가 살짝 떠오릅니다.</p>
            </Card>
            <Card title="다양한 콘텐츠">
              <p>텍스트, 이미지, 버튼 등 다양한 콘텐츠를 포함할 수 있습니다.</p>
              <Button variant="primary">자세히 보기</Button>
            </Card>
          </div>
        </section>

        <section className={styles.section}>
          <h2>알림 컴포넌트</h2>
          <div className={styles.alertGrid}>
            {alerts.map(alert => (
              <Alert 
                key={alert.id} 
                type={alert.type}
                onClose={() => removeAlert(alert.id)}
              >
                {alert.message}
              </Alert>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
