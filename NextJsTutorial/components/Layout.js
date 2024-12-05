import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()

  const navigation = [
    { path: '/', label: '홈' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/posts', label: '포스트' },
  ]

  return (
    <div>
      <nav style={{
        padding: '20px',
        backgroundColor: '#f0f0f0',
        marginBottom: '20px'
      }}>
        <ul style={{
          display: 'flex',
          gap: '20px',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          {navigation.map(({ path, label }) => (
            <li key={path}>
              <Link 
                href={path}
                style={{
                  color: router.pathname === path ? '#0070f3' : '#000',
                  textDecoration: 'none'
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main style={{ padding: '0 20px' }}>
        {children}
      </main>
    </div>
  )
}
