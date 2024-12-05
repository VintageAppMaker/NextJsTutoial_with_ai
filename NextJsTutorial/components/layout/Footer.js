import styles from './MainLayout.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Next.js Tutorial Example © {new Date().getFullYear()}</p>
    </footer>
  )
}
