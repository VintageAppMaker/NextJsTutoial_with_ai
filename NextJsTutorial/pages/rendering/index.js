import Link from 'next/link'

export default function RenderingExamples() {
  const examples = [
    {
      title: '정적 생성 (Static Generation)',
      description: '빌드 시점에 페이지가 생성되며, CDN에서 제공됩니다.',
      path: '/rendering/static-generation',
      color: '#0070f3'
    },
    {
      title: '서버 사이드 렌더링 (SSR)',
      description: '매 요청마다 서버에서 페이지가 생성됩니다.',
      path: '/rendering/server-side',
      color: '#0070f3'
    },
    {
      title: '클라이언트 사이드 렌더링 (CSR)',
      description: '브라우저에서 JavaScript로 페이지가 생성됩니다.',
      path: '/rendering/client-side',
      color: '#0070f3'
    }
  ]

  return (
    <div className="container">
      <h1>Next.js 렌더링 방식 예제</h1>
      <p>Next.js에서 사용할 수 있는 다양한 렌더링 방식을 보여주는 예제입니다.</p>

      <div className="grid">
        {examples.map(example => (
          <Link key={example.path} href={example.path}>
            <div className="card">
              <h2>{example.title}</h2>
              <p>{example.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .container {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 40px;
        }
        .card {
          padding: 20px;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .card:hover {
          border-color: #0070f3;
          transform: translateY(-5px);
        }
        .card h2 {
          margin: 0 0 10px 0;
          font-size: 1.5rem;
          color: #0070f3;
        }
        .card p {
          margin: 0;
          font-size: 1.1rem;
          line-height: 1.5;
          color: #666;
        }
      `}</style>
    </div>
  )
}
