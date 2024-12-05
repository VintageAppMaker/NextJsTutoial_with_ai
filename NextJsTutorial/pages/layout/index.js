import MainLayout from '../../components/layout/MainLayout'
import Card from '../../components/ui/Card'
import styles from '../../styles/Layout.module.css'

export default function LayoutExample() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>레이아웃 예제</h1>
        
        <div className={styles.grid}>
          <Card title="MainLayout">
            <p>
              모든 페이지에서 공통으로 사용되는 레이아웃입니다.
              Header, Footer, 그리고 main 콘텐츠 영역을 포함합니다.
            </p>
            <ul className={styles.features}>
              <li>반응형 네비게이션 바</li>
              <li>고정된 헤더 (Sticky Header)</li>
              <li>중앙 정렬된 콘텐츠</li>
              <li>푸터 섹션</li>
            </ul>
          </Card>

          <Card title="페이지 구조">
            <div className={styles.layoutDemo}>
              <div className={styles.headerDemo}>Header</div>
              <div className={styles.mainDemo}>
                Main Content
                <div className={styles.sidebarDemo}>Sidebar</div>
              </div>
              <div className={styles.footerDemo}>Footer</div>
            </div>
          </Card>
        </div>

        <h2 className={styles.subtitle}>레이아웃 사용법</h2>
        <div className={styles.codeExample}>
          <pre>
            <code>{`
// pages/_app.js
import MainLayout from '../components/layout/MainLayout'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
            `}</code>
          </pre>
        </div>
      </div>
    </MainLayout>
  )
}
