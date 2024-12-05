import { useState, useEffect } from 'react'

export default function ApiExample() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [newUser, setNewUser] = useState({ name: '', email: '' })

  // 사용자 목록 조회
  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/users')
      const data = await res.json()
      setUsers(data)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  // 게시물 목록 조회
  const fetchPosts = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/posts')
      const data = await res.json()
      setPosts(data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
    setLoading(false)
  }

  // 새 사용자 추가
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })
      if (res.ok) {
        setNewUser({ name: '', email: '' })
        fetchUsers()
      }
    } catch (error) {
      console.error('Error creating user:', error)
    }
  }

  // 사용자 삭제
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        fetchUsers()
      }
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  useEffect(() => {
    fetchUsers()
    fetchPosts()
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>API Routes 예제</h1>

      <div style={{ marginBottom: '40px' }}>
        <h2>새 사용자 추가</h2>
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              placeholder="이름"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              style={{ marginRight: '10px' }}
            />
            <input
              type="email"
              placeholder="이메일"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              style={{ marginRight: '10px' }}
            />
            <button type="submit">추가</button>
          </div>
        </form>

        <h2>사용자 목록</h2>
        <ul>
          {users.map(user => (
            <li key={user.id} style={{ marginBottom: '10px' }}>
              {user.name} ({user.email})
              <button 
                onClick={() => handleDelete(user.id)}
                style={{ marginLeft: '10px' }}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>게시물 목록</h2>
        {loading ? (
          <p>로딩 중...</p>
        ) : (
          <ul>
            {posts.map(post => (
              <li key={post.id} style={{ marginBottom: '10px' }}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
