export default function handler(req, res) {
  const { q } = req.query

  if (!q) {
    return res.status(400).json({ error: '검색어를 입력해주세요.' })
  }

  // 더미 검색 결과
  const results = [
    { id: 1, title: 'Next.js 시작하기', content: 'Next.js로 웹 애플리케이션을 만드는 방법' },
    { id: 2, title: 'API 라우트 사용하기', content: 'Next.js의 API 라우트 기능 소개' },
    { id: 3, title: '동적 라우팅 이해하기', content: '동적 라우트를 사용한 페이지 생성' }
  ].filter(item => 
    item.title.toLowerCase().includes(q.toLowerCase()) ||
    item.content.toLowerCase().includes(q.toLowerCase())
  )

  res.status(200).json({
    query: q,
    results,
    count: results.length
  })
}
