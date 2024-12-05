# Next.js API Routes

Next.js의 API Routes 기능을 사용하면 Next.js 앱 내에서 API 엔드포인트를 쉽게 생성할 수 있습니다.

## API Routes 기본 개념

1. **파일 기반 라우팅**
   - `pages/api` 디렉토리 내의 모든 파일은 `/api/*` 로 매핑됨
   - 예: `pages/api/users.js` → `/api/users`

2. **HTTP 메서드 처리**
   - GET, POST, PUT, DELETE 등의 HTTP 메서드 처리 가능
   - req.method를 통해 요청 메서드 구분

## API 엔드포인트 예제

### 1. 기본 API 라우트 (`pages/api/users/index.js`)
```javascript
export default function handler(req, res) {
  const { method } = req

  switch (method) {
    case 'GET':
      // 데이터 조회
      res.status(200).json(data)
      break
    case 'POST':
      // 데이터 생성
      res.status(201).json(newData)
      break
    default:
      res.status(405).end()
  }
}
```

### 2. 동적 API 라우트 (`pages/api/users/[id].js`)
```javascript
export default function handler(req, res) {
  const { query: { id }, method } = req

  switch (method) {
    case 'GET':
      // 특정 데이터 조회
      break
    case 'PUT':
      // 데이터 수정
      break
    case 'DELETE':
      // 데이터 삭제
      break
    default:
      res.status(405).end()
  }
}
```

## 주요 기능

1. **요청 처리**
   - req.query: URL 쿼리 파라미터
   - req.body: 요청 본문
   - req.cookies: 쿠키
   - req.method: HTTP 메서드

2. **응답 처리**
   - res.status(code): 상태 코드 설정
   - res.json(data): JSON 응답
   - res.send(data): 데이터 전송
   - res.redirect(url): 리다이렉트

## 예제 설명

이 튜토리얼에는 다음과 같은 API 엔드포인트가 포함되어 있습니다:

1. **사용자 API**
   - GET /api/users: 모든 사용자 조회
   - POST /api/users: 새 사용자 생성
   - GET /api/users/[id]: 특정 사용자 조회
   - PUT /api/users/[id]: 사용자 정보 수정
   - DELETE /api/users/[id]: 사용자 삭제

2. **게시물 API**
   - GET /api/posts: 모든 게시물 조회
   - POST /api/posts: 새 게시물 생성

## 보안 고려사항

1. 입력 검증
2. 인증/인가 처리
3. CORS 설정
4. 속도 제한
5. 에러 처리

## 테스트

API Routes는 다음과 같은 방법으로 테스트할 수 있습니다:

1. 브라우저에서 직접 GET 요청
2. Postman이나 curl 같은 API 테스트 도구 사용
3. 제공된 프론트엔드 페이지 (`/api-example`) 사용
