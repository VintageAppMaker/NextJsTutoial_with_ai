import Link from 'next/link'

export default function DataFetchingExamples() {
  const examples = [
    {
      title: '정적 생성 (Static Generation)',
      description: 'getStaticProps를 사용한 빌드 타임 데이터 페칭',
      path: '/data-fetching/static'
    },
    {
      title: '서버 사이드 렌더링 (Server-side Rendering)',
      description: 'getServerSideProps를 사용한 요청 시점 데이터 페칭',
      path: '/data-fetching/server-side'
    },
    {
      title: '클라이언트 사이드 데이터 페칭',
      description: 'useState + useEffect와 SWR을 사용한 클라이언트 측 데이터 페칭',
      path: '/data-fetching/client-side'
    }
  ]

  return (
    <div style={{ padding: '20px' }}>
      <h1>Next.js 데이터 페칭 예제</h1>
      <p>Next.js에서 사용할 수 있는 다양한 데이터 페칭 방법을 보여주는 예제입니다.</p>

      <div style={{ 
        display: 'grid', 
        gap: '20px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        marginTop: '30px'
      }}>
        {examples.map(example => (
          <Link 
            key={example.path} 
            href={example.path}
            style={{
              display: 'block',
              padding: '20px',
              border: '1px solid #eaeaea',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <h2 style={{ margin: '0 0 10px 0' }}>{example.title}</h2>
            <p style={{ margin: 0, color: '#666' }}>{example.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
