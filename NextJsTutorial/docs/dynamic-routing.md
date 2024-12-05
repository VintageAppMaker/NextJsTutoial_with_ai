# Next.js 동적 라우팅

Next.js의 동적 라우팅 시스템을 사용하면 동적인 URL을 생성하고 처리할 수 있습니다.

## 동적 라우팅의 기본 개념

1. **파일 기반 라우팅**
   - `pages/posts/[id].js` → `/posts/1`, `/posts/2` 등
   - `pages/[category]/[id].js` → `/frontend/1`, `/backend/2` 등

2. **중첩된 동적 라우팅**
   - `pages/categories/[category]/index.js` → `/categories/frontend`, `/categories/backend` 등
   - `pages/categories/[category]/[id].js` → `/categories/frontend/1` 등

## 주요 기능

### 1. useRouter 훅

```javascript
import { useRouter } from 'next/router'

function Post() {
  const router = useRouter()
  const { id } = router.query

  return <p>Post: {id}</p>
}
```

### 2. getStaticPaths

```javascript
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } }
    ],
    fallback: false
  }
}
```

### 3. getStaticProps

```javascript
export async function getStaticProps({ params }) {
  const { id } = params
  // 데이터 fetch 로직
  return {
    props: {
      post: {/*...*/}
    }
  }
}
```

## 예제 설명

이 튜토리얼에는 두 가지 동적 라우팅 예제가 포함되어 있습니다:

1. **개별 포스트 페이지** (`pages/posts/[id].js`)
   - URL 파라미터로 포스트 ID를 받아 해당 포스트를 표시
   - getStaticPaths를 사용하여 가능한 모든 포스트 경로를 미리 생성
   - getStaticProps를 사용하여 각 포스트의 데이터를 미리 가져옴

2. **카테고리별 포스트 목록** (`pages/categories/[category]/index.js`)
   - URL 파라미터로 카테고리명을 받아 해당 카테고리의 포스트 목록을 표시
   - 중첩된 동적 라우팅의 예시
   - 카테고리별로 다른 포스트 목록을 보여줌

## 주의사항

1. fallback 옵션
   - `false`: 없는 경로는 404 반환
   - `true`: 없는 경로도 동적으로 생성
   - `blocking`: SSR처럼 서버에서 페이지 생성 완료까지 대기

2. getStaticPaths는 빌드 시에만 실행됨
3. 개발 모드에서는 매 요청마다 실행됨
