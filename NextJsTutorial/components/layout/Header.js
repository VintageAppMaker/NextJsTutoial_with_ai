import Link from 'next/link'
import styles from './MainLayout.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Next.js Tutorial
        </Link>
        <div className={styles.links}>
          <Link href="/components">Components</Link>
          <Link href="/layout">Layouts</Link>
          <Link href="/rendering">Rendering</Link>
          <Link href="/styling">Styling</Link>
        </div>
      </nav>
    </header>
  )
}
