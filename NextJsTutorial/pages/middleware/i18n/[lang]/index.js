import { useRouter } from 'next/router'
import MainLayout from '../../../../components/layout/MainLayout'
import Card from '../../../../components/ui/Card'
import styles from '../../../../styles/Middleware.module.css'

const translations = {
  en: {
    title: 'Internationalization Example',
    description: 'This page demonstrates language-based routing using middleware.',
    currentLanguage: 'Current Language',
    content: 'This content is displayed in English.'
  },
  ko: {
    title: '다국어 지원 예제',
    description: '미들웨어를 사용한 언어 기반 라우팅을 보여줍니다.',
    currentLanguage: '현재 언어',
    content: '이 콘텐츠는 한국어로 표시됩니다.'
  },
  ja: {
    title: '国際化の例',
    description: 'ミドルウェアを使用した言語ベースのルーティングを示します。',
    currentLanguage: '現在の言語',
    content: 'このコンテンツは日本語で表示されます。'
  }
}

export default function I18nPage() {
  const router = useRouter()
  const { lang } = router.query
  const t = translations[lang] || translations.en

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.description}>{t.description}</p>

        <Card>
          <div className={styles.languageInfo}>
            <h3>{t.currentLanguage}: {lang}</h3>
            <p>{t.content}</p>
          </div>
        </Card>
      </div>
    </MainLayout>
  )
}
