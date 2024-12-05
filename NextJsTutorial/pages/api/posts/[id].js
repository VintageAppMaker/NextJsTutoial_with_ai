// 더미 데이터
const posts = [
  { id: 1, title: '첫 번째 포스트', content: '첫 번째 포스트의 내용입니다.' },
  { id: 2, title: '두 번째 포스트', content: '두 번째 포스트의 내용입니다.' },
  { id: 3, title: '세 번째 포스트', content: '세 번째 포스트의 내용입니다.' },
]

export default function handler(req, res) {
  const { id } = req.query
  const post = posts.find(p => p.id === parseInt(id))

  if (post) {
    res.status(200).json(post)
  } else {
    res.status(404).json({ message: '포스트를 찾을 수 없습니다.' })
  }
}
