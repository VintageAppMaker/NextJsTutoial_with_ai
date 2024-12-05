import styles from '../../styles/Sass.module.scss'

export default function SassExample() {
  return (
    <div className={styles.container}>
      <h1>Sass/SCSS 예제</h1>
      
      <div className={styles.card}>
        <h2>Sass란?</h2>
        <p>
          Sass는 CSS의 확장 언어로, 변수, 중첩 규칙, 믹스인, 함수 등 
          더 강력한 기능을 제공하는 CSS 전처리기입니다.
        </p>
      </div>

      <div className={styles.examples}>
        <div className={styles.example}>
          <h3>버튼 스타일링</h3>
          <div className={styles.buttons}>
            <button className={styles.button}>기본 버튼</button>
            <button className={`${styles.button} ${styles.primary}`}>주요 버튼</button>
            <button className={`${styles.button} ${styles.secondary}`}>보조 버튼</button>
          </div>
        </div>

        <div className={styles.example}>
          <h3>카드 스타일링</h3>
          <div className={styles.cardGrid}>
            <div className={styles.gridCard}>
              <h4>카드 1</h4>
              <p>Sass를 사용한 카드 스타일링</p>
            </div>
            <div className={styles.gridCard}>
              <h4>카드 2</h4>
              <p>변수와 중첩 규칙 사용</p>
            </div>
          </div>
        </div>

        <div className={styles.example}>
          <h3>알림 메시지</h3>
          <div className={styles.alerts}>
            <div className={`${styles.alert} ${styles.success}`}>
              성공 메시지
            </div>
            <div className={`${styles.alert} ${styles.warning}`}>
              경고 메시지
            </div>
            <div className={`${styles.alert} ${styles.error}`}>
              에러 메시지
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
