// 더미 데이터 (실제로는 데이터베이스를 사용해야 함)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
]

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  const user = users.find(u => u.id === parseInt(id))

  switch (method) {
    case 'GET':
      // 특정 사용자 조회
      if (user) {
        res.status(200).json(user)
      } else {
        res.status(404).json({ message: 'User not found' })
      }
      break

    case 'PUT':
      // 사용자 정보 수정
      if (user) {
        const index = users.findIndex(u => u.id === parseInt(id))
        users[index] = { ...user, ...req.body }
        res.status(200).json(users[index])
      } else {
        res.status(404).json({ message: 'User not found' })
      }
      break

    case 'DELETE':
      // 사용자 삭제
      if (user) {
        users = users.filter(u => u.id !== parseInt(id))
        res.status(200).json({ message: 'User deleted' })
      } else {
        res.status(404).json({ message: 'User not found' })
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
