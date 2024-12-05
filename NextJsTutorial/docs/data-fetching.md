# Next.js 데이터 페칭

Next.js는 다양한 데이터 페칭 방법을 제공하여 각 사용 사례에 맞는 최적의 방법을 선택할 수 있게 합니다.

## 1. 정적 생성 (Static Generation)

### getStaticProps
- 빌드 시점에 데이터를 가져와 정적 페이지 생성
- SEO에 유리
- 데이터가 자주 변경되지 않는 경우에 적합

```javascript
export async function getStaticProps() {
  const data = await fetchData()
  return {
    props: { data },
    revalidate: 10 // ISR(Incremental Static Regeneration)
  }
}
```

## 2. 서버 사이드 렌더링 (Server-side Rendering)

### getServerSideProps
- 매 요청마다 서버에서 데이터를 가져옴
- 항상 최신 데이터 제공
- 요청 시점의 데이터가 필요한 경우에 적합

```javascript
export async function getServerSideProps() {
  const data = await fetchData()
  return {
    props: { data }
  }
}
```

## 3. 클라이언트 사이드 데이터 페칭

### useState + useEffect
```javascript
const [data, setData] = useState(null)

useEffect(() => {
  const fetchData = async () => {
    const result = await fetch('/api/data')
    setData(await result.json())
  }
  fetchData()
}, [])
```

### SWR
```javascript
import useSWR from 'swr'

const { data, error } = useSWR('/api/data', fetcher)
```

## 각 방법의 특징

### 1. 정적 생성 (getStaticProps)
- 장점:
  - 빠른 페이지 로드
  - CDN 캐싱 가능
  - SEO 최적화
- 단점:
  - 빌드 시간 증가
  - 실시간 데이터 표시 불가

### 2. 서버 사이드 렌더링 (getServerSideProps)
- 장점:
  - 항상 최신 데이터
  - SEO 최적화
- 단점:
  - 느린 TTFB (Time To First Byte)
  - 서버 부하 증가

### 3. 클라이언트 사이드 데이터 페칭
- 장점:
  - 빠른 페이지 전환
  - 실시간 데이터 업데이트
- 단점:
  - SEO에 불리
  - 초기 로딩 시 빈 페이지

## 사용 사례

1. **정적 생성**
   - 블로그 포스트
   - 제품 카탈로그
   - 문서 페이지

2. **서버 사이드 렌더링**
   - 대시보드
   - 개인화된 콘텐츠
   - 실시간 데이터 표시

3. **클라이언트 사이드**
   - 사용자 대시보드
   - 실시간 채팅
   - 검색 결과

## SWR 특징

- 자동 재검증
- 캐시 및 중복 요청 방지
- 오프라인 지원
- 페이지네이션 지원
- TypeScript 지원
