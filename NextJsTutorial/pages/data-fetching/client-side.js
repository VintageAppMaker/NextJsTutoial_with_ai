import { useState, useEffect } from 'react'
import useSWR from 'swr'
import axios from 'axios'

// SWR fetcher 함수
const fetcher = url => axios.get(url).then(res => res.data)

export default function ClientSideDataFetching() {
  // useState + useEffect를 사용한 데이터 페칭
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        setTodos(response.data)
      } catch (error) {
        console.error('Error fetching todos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTodos()
  }, [])

  // SWR을 사용한 데이터 페칭
  const { data: comments, error } = useSWR(
    'https://jsonplaceholder.typicode.com/comments?_limit=5',
    fetcher
  )

  return (
    <div style={{ padding: '20px' }}>
      <h1>클라이언트 사이드 데이터 페칭</h1>
      
      <div style={{ marginTop: '30px' }}>
        <h2>1. useState + useEffect 사용</h2>
        {loading ? (
          <p>할 일 목록 로딩 중...</p>
        ) : (
          <ul>
            {todos.map(todo => (
              <li key={todo.id} style={{ marginBottom: '10px' }}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  readOnly
                  style={{ marginRight: '10px' }}
                />
                {todo.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>2. SWR 사용</h2>
        {error ? (
          <p>댓글을 불러오는 중 오류가 발생했습니다.</p>
        ) : !comments ? (
          <p>댓글 로딩 중...</p>
        ) : (
          <ul>
            {comments.map(comment => (
              <li key={comment.id} style={{ marginBottom: '15px' }}>
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
                <small>{comment.email}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
