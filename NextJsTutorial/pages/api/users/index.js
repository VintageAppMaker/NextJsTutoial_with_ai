// 더미 데이터
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
]

export default function handler(req, res) {
  const { method } = req

  switch (method) {
    case 'GET':
      // 모든 사용자 조회
      res.status(200).json(users)
      break
    
    case 'POST':
      // 새 사용자 생성
      const newUser = {
        id: users.length + 1,
        ...req.body
      }
      users.push(newUser)
      res.status(201).json(newUser)
      break
    
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
