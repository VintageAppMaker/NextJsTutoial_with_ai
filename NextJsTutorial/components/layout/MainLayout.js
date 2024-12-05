import Header from './Header'
import Footer from './Footer'
import styles from './MainLayout.module.css'

export default function MainLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}
