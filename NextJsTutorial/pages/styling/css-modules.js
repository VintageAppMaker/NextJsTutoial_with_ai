import styles from '../../styles/CSSModules.module.css'

export default function CSSModulesExample() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CSS Modules 예제</h1>
      
      <div className={styles.card}>
        <h2 className={styles.subtitle}>CSS Modules란?</h2>
        <p>CSS Modules는 CSS 클래스 이름을 자동으로 고유하게 만들어 스타일 충돌을 방지합니다.</p>
      </div>

      <div className={styles.examples}>
        <div className={styles.example}>
          <h3>버튼 스타일링</h3>
          <button className={styles.button}>기본 버튼</button>
          <button className={styles.buttonPrimary}>주요 버튼</button>
          <button className={styles.buttonSecondary}>보조 버튼</button>
        </div>

        <div className={styles.example}>
          <h3>카드 스타일링</h3>
          <div className={styles.cardGrid}>
            <div className={styles.gridCard}>
              <h4>카드 1</h4>
              <p>CSS Modules를 사용한 카드 스타일링</p>
            </div>
            <div className={styles.gridCard}>
              <h4>카드 2</h4>
              <p>컴포넌트 스코프 스타일링</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
