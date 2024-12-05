import styles from './UI.module.css'

export default function Button({ children, variant = 'default', size = 'medium', onClick }) {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`
  
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
