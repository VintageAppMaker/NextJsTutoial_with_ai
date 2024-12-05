# Next.js 기본 라우팅

Next.js는 파일 시스템 기반 라우팅을 제공합니다. 이는 파일 구조가 곧 URL 구조가 된다는 것을 의미합니다.

## 기본 개념

1. `pages` 디렉토리 내의 모든 파일은 라우트가 됩니다.
2. `pages/index.js` → `/`
3. `pages/about.js` → `/about`
4. `pages/blog/first-post.js` → `/blog/first-post`

## 라우팅 방법

### 1. Link 컴포넌트 사용

```jsx
import Link from 'next/link'

// 기본적인 사용법
<Link href="/">홈으로</Link>

// 동적 라우트
<Link href="/posts/[id]" as="/posts/1">첫 번째 포스트</Link>
```

### 2. 프로그래밍 방식 라우팅

```jsx
import { useRouter } from 'next/router'

const router = useRouter()

// 기본 네비게이션
router.push('/')

// 동적 라우트
router.push('/posts/[id]', '/posts/1')
```

## 라우터 객체

`useRouter` 훅을 통해 접근할 수 있는 라우터 객체는 다음과 같은 정보를 제공합니다:

- `pathname`: 현재 라우트
- `query`: URL 쿼리 파라미터
- `asPath`: 브라우저에 표시되는 실제 경로
- `isFallback`: 페이지가 fallback 렌더링 중인지 여부
- `basePath`: 설정된 base path
- `locale`: 현재 로케일
- `locales`: 지원되는 로케일 목록
- `defaultLocale`: 기본 로케일

## 예제 코드 설명

이 예제에서는 다음 기능들을 보여줍니다:

1. Link 컴포넌트를 사용한 선언적 라우팅
2. useRouter를 사용한 프로그래밍 방식 라우팅
3. 현재 라우트 정보 표시

실제 코드에서 이러한 기능들이 어떻게 구현되어 있는지 확인해보세요.
