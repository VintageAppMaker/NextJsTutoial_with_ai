import styles from './UI.module.css'

export default function Card({ children, title, className = '' }) {
  return (
    <div className={`${styles.card} ${className}`}>
      {title && <h2 className={styles.cardTitle}>{title}</h2>}
      {children}
    </div>
  )
}
