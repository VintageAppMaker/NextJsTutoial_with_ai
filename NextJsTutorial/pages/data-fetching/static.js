// getStaticProps를 사용한 정적 생성 예제
export default function StaticDataFetching({ posts }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>정적 생성 (Static Generation)</h1>
      <p>이 페이지는 빌드 시점에 생성되며, 데이터가 미리 포함됩니다.</p>
      
      <div style={{ marginTop: '20px' }}>
        <h2>포스트 목록</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id} style={{ marginBottom: '15px' }}>
              <h3>{post.title}</h3>
              <p>{post.body.substring(0, 100)}...</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  try {
    // JSONPlaceholder API에서 데이터 가져오기
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const posts = await res.json()

    return {
      props: {
        posts,
      },
      // 10초마다 페이지 재생성
      revalidate: 10,
    }
  } catch (error) {
    return {
      props: {
        posts: [],
      },
    }
  }
}
