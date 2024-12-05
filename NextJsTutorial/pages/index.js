import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  const examples = [
    {
      title: '기본 라우팅',
      description: 'Next.js의 파일 시스템 기반 라우팅에 대해 알아봅니다.',
      path: '/basic-routing'
    },
    {
      title: '동적 라우팅',
      description: 'Next.js의 동적 라우팅 시스템을 이해합니다.',
      subItems: [
        {
          title: '게시물',
          description: '동적 라우팅을 사용한 블로그 게시물',
          path: '/posts'
        },
        {
          title: '제품',
          description: '동적 라우팅을 사용한 제품 페이지',
          path: '/products'
        }
      ],
      path: '/dynamic-routing'
    },
    {
      title: 'API 라우트',
      description: 'Next.js의 API 라우트를 사용하여 서버리스 API를 구축합니다.',
      subItems: [
        {
          title: '기본 API',
          description: '간단한 API 엔드포인트 생성',
          path: '/api/hello'
        },
        {
          title: '동적 API',
          description: '동적 라우팅을 사용한 API',
          path: '/api/posts/1'
        },
        {
          title: '검색 API',
          description: '쿼리 파라미터를 사용한 API',
          path: '/api/search?q=nextjs'
        }
      ],
      path: '/api-routes'
    },
    {
      title: '렌더링 방식',
      description: 'Next.js의 다양한 렌더링 방식을 알아봅니다.',
      subItems: [
        {
          title: '정적 생성 (Static Generation)',
          description: '빌드 시점에 페이지가 생성되는 방식입니다.',
          path: '/rendering/static-generation'
        },
        {
          title: '서버 사이드 렌더링 (SSR)',
          description: '매 요청마다 서버에서 페이지를 생성하는 방식입니다.',
          path: '/rendering/server-side'
        },
        {
          title: '클라이언트 사이드 렌더링 (CSR)',
          description: '브라우저에서 JavaScript로 페이지를 생성하는 방식입니다.',
          path: '/rendering/client-side'
        }
      ],
      path: '/rendering'
    },
    {
      title: '스타일링',
      description: 'Next.js에서 사용할 수 있는 다양한 스타일링 방식을 알아봅니다.',
      subItems: [
        {
          title: 'CSS Modules',
          description: '컴포넌트 스코프 CSS를 사용하여 스타일 충돌을 방지합니다.',
          path: '/styling/css-modules'
        },
        {
          title: 'Styled JSX',
          description: 'Next.js의 내장 CSS-in-JS 솔루션을 사용합니다.',
          path: '/styling/styled-jsx'
        },
        {
          title: 'Tailwind CSS',
          description: '유틸리티 우선 CSS 프레임워크를 사용합니다.',
          path: '/styling/tailwind'
        },
        {
          title: 'Sass/SCSS',
          description: 'Sass 전처리기를 사용하여 더 강력한 CSS를 작성합니다.',
          path: '/styling/sass'
        }
      ],
      path: '/styling'
    },
    {
      title: '레이아웃',
      description: 'Next.js 애플리케이션의 레이아웃 구성 방법을 알아봅니다.',
      path: '/layout'
    },
    {
      title: '컴포넌트',
      description: '재사용 가능한 UI 컴포넌트 예제를 살펴봅니다.',
      subItems: [
        {
          title: '버튼',
          description: '다양한 스타일과 크기의 버튼 컴포넌트',
          path: '/components#buttons'
        },
        {
          title: '카드',
          description: '콘텐츠를 깔끔하게 표시하는 카드 컴포넌트',
          path: '/components#cards'
        },
        {
          title: '알림',
          description: '다양한 유형의 알림 메시지 컴포넌트',
          path: '/components#alerts'
        }
      ],
      path: '/components'
    },
    {
      title: '데이터 페칭',
      description: 'getStaticProps와 getServerSideProps를 사용한 데이터 페칭',
      path: '/data-fetching'
    },
    {
      title: '미들웨어',
      description: 'Next.js의 미들웨어를 사용한 요청 처리 방법을 알아봅니다.',
      subItems: [
        {
          title: '인증',
          description: '보호된 페이지에 대한 접근 제어',
          path: '/middleware/protected'
        },
        {
          title: '다국어 지원',
          description: '사용자 언어에 따른 라우팅',
          path: '/middleware/i18n'
        },
        {
          title: '보안 헤더',
          description: '자동 보안 헤더 추가',
          path: '/middleware/api/test'
        }
      ],
      path: '/middleware'
    },
    {
      title: '최적화',
      description: 'Next.js의 이미지 최적화와 환경 변수 관리',
      subItems: [
        {
          title: '이미지 최적화',
          description: '자동 이미지 최적화와 반응형 이미지',
          path: '/optimization/images'
        },
        {
          title: '환경 변수',
          description: '환경 변수를 사용한 설정 관리',
          path: '/optimization/env'
        }
      ],
      path: '/optimization'
    }
  ]

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.js Tutorial Examples
        </h1>

        <div className={styles.grid}>
          {examples.map((example) => (
            <div key={example.path}>
              <Link href={example.path} className={styles.card}>
                <h2>{example.title} &rarr;</h2>
                <p>{example.description}</p>
              </Link>
              {example.subItems && (
                <div className={styles.subGrid}>
                  {example.subItems.map((subItem) => (
                    <Link key={subItem.path} href={subItem.path} className={styles.subCard}>
                      <h3>{subItem.title} &rarr;</h3>
                      <p>{subItem.description}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
