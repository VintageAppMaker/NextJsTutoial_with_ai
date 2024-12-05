import Link from 'next/link'
import MainLayout from '../../components/layout/MainLayout'
import Card from '../../components/ui/Card'
import styles from '../../styles/DynamicRouting.module.css'

export default function DynamicRoutingPage() {
  const examples = [
    {
      title: '게시물',
      description: '블로그 게시물을 위한 동적 라우팅 예제입니다.',
      path: '/posts',
      features: [
        '동적 세그먼트 ([id])',
        'getStaticPaths와 getStaticProps',
        'fallback 페이지',
        'catch-all 라우트'
      ]
    },
    {
      title: '제품',
      description: '제품 페이지를 위한 동적 라우팅 예제입니다.',
      path: '/products',
      features: [
        '동적 제품 페이지',
        '카테고리별 필터링',
        '옵셔널 catch-all 라우트',
        '중첩 동적 라우트'
      ]
    }
  ]

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>동적 라우팅</h1>
        <p className={styles.description}>
          Next.js의 파일 시스템 기반 라우터를 사용하여 동적 라우트를 생성하는 방법을 알아봅니다.
        </p>

        <div className={styles.grid}>
          {examples.map((example, index) => (
            <Link href={example.path} key={index} className={styles.link}>
              <Card>
                <h2>{example.title}</h2>
                <p>{example.description}</p>
                <div className={styles.features}>
                  <h3>주요 기능:</h3>
                  <ul>
                    {example.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className={styles.codeExample}>
          <h2>파일 구조 예시</h2>
          <pre>
            <code>{`
pages/
  ├── posts/
  │   ├── index.js      # /posts
  │   └── [id].js       # /posts/1, /posts/2
  │
  └── products/
      ├── index.js      # /products
      ├── [id].js       # /products/1
      └── [...slug].js  # /products/category/electronics
            `}</code>
          </pre>
        </div>
      </div>
    </MainLayout>
  )
}
