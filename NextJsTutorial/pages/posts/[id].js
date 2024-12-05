import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import Card from '../../components/ui/Card'
import styles from '../../styles/Posts.module.css'

export default function Post() {
  const router = useRouter()
  const { id } = router.query
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      fetch(`/api/posts/${id}`)
        .then(res => res.json())
        .then(data => {
          setPost(data)
          setLoading(false)
        })
        .catch(error => {
          console.error('Error fetching post:', error)
          setLoading(false)
        })
    }
  }, [id])

  if (loading) return <MainLayout><div>로딩 중...</div></MainLayout>
  if (!post) return <MainLayout><div>포스트를 찾을 수 없습니다.</div></MainLayout>

  return (
    <MainLayout>
      <div className={styles.container}>
        <Card>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.content}>{post.content}</div>
        </Card>
      </div>
    </MainLayout>
  )
}
