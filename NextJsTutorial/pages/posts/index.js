import Link from 'next/link'
import MainLayout from '../../components/layout/MainLayout'
import Card from '../../components/ui/Card'
import styles from '../../styles/Posts.module.css'

// 더미 데이터
const posts = [
  { id: 1, title: '첫 번째 포스트', content: '첫 번째 포스트의 내용입니다.' },
  { id: 2, title: '두 번째 포스트', content: '두 번째 포스트의 내용입니다.' },
  { id: 3, title: '세 번째 포스트', content: '세 번째 포스트의 내용입니다.' },
]

export default function Posts() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>동적 라우팅 예제</h1>
        <div className={styles.grid}>
          {posts.map(post => (
            <Link href={`/posts/${post.id}`} key={post.id} className={styles.link}>
              <Card>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
