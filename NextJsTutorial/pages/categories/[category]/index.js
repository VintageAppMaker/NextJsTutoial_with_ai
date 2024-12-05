import { useRouter } from 'next/router'
import Link from 'next/link'

// 더미 데이터
const categories = {
  'frontend': [
    { id: 1, title: 'React 기초', category: 'frontend' },
    { id: 2, title: 'Next.js 시작하기', category: 'frontend' }
  ],
  'backend': [
    { id: 3, title: 'Node.js 기초', category: 'backend' },
    { id: 4, title: 'API 설계', category: 'backend' }
  ]
}

export default function CategoryPosts() {
  const router = useRouter()
  const { category } = router.query
  const posts = categories[category] || []

  return (
    <div style={{ padding: '20px' }}>
      <h1>{category} 카테고리의 포스트</h1>
      <div style={{ marginBottom: '20px' }}>
        <Link href="/posts">포스트 목록으로</Link>
      </div>
      {posts.length > 0 ? (
        <ul>
          {posts.map(post => (
            <li key={post.id} style={{ marginBottom: '10px' }}>
              <Link href={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>이 카테고리에는 포스트가 없습니다.</p>
      )}
    </div>
  )
}

export async function getStaticPaths() {
  // 가능한 모든 카테고리 경로를 미리 생성
  const paths = Object.keys(categories).map(category => ({
    params: { category }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { category } = params
  const posts = categories[category] || []

  return {
    props: {
      posts,
      category
    }
  }
}
