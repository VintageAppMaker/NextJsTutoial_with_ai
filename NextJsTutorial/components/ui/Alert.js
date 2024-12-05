import styles from './UI.module.css'

export default function Alert({ children, type = 'info', onClose }) {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      {children}
      {onClose && (
        <button className={styles.alertClose} onClick={onClose}>
          ×
        </button>
      )}
    </div>
  )
}
