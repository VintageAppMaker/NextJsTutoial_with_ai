import { NextResponse } from 'next/server'

// 더미 데이터
let posts = [
  { id: 1, title: 'Next.js 소개', content: 'Next.js는 React 프레임워크입니다.' },
  { id: 2, title: 'API Routes', content: 'Next.js의 API Routes 기능을 알아봅시다.' },
]

export default async function handler(req, res) {
  const { method } = req

  // API 요청 지연 시뮬레이션 (실제 API에서는 제거)
  await new Promise(resolve => setTimeout(resolve, 1000))

  try {
    switch (method) {
      case 'GET':
        // 모든 게시물 조회
        res.status(200).json(posts)
        break
      
      case 'POST':
        // 새 게시물 생성
        const newPost = {
          id: posts.length + 1,
          ...req.body,
        }
        posts.push(newPost)
        res.status(201).json(newPost)
        break
      
      default:
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
