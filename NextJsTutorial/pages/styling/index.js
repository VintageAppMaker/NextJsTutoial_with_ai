import Link from 'next/link'
import styles from '../../styles/Styling.module.css'

export default function StylingExamples() {
  const examples = [
    {
      title: 'CSS Modules',
      description: '컴포넌트 스코프 CSS를 사용하여 스타일 충돌을 방지합니다.',
      path: '/styling/css-modules'
    },
    {
      title: 'Styled JSX',
      description: 'Next.js의 내장 CSS-in-JS 솔루션을 사용합니다.',
      path: '/styling/styled-jsx'
    },
    {
      title: 'Tailwind CSS',
      description: '유틸리티 우선 CSS 프레임워크를 사용합니다.',
      path: '/styling/tailwind'
    },
    {
      title: 'Sass/SCSS',
      description: 'Sass 전처리기를 사용하여 더 강력한 CSS를 작성합니다.',
      path: '/styling/sass'
    }
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Next.js 스타일링 예제</h1>
      <p className={styles.description}>
        Next.js에서 사용할 수 있는 다양한 스타일링 방식을 살펴봅니다.
      </p>

      <div className={styles.grid}>
        {examples.map(example => (
          <Link key={example.path} href={example.path} className={styles.card}>
            <h2>{example.title} &rarr;</h2>
            <p>{example.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
