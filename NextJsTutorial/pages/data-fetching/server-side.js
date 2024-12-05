// getServerSideProps를 사용한 서버 사이드 렌더링 예제
export default function ServerSideDataFetching({ user, timestamp }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>서버 사이드 렌더링 (Server-side Rendering)</h1>
      <p>이 페이지는 매 요청마다 서버에서 새로 생성됩니다.</p>
      
      <div style={{ marginTop: '20px' }}>
        <h2>현재 시간</h2>
        <p>{new Date(timestamp).toLocaleString()}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>랜덤 사용자 정보</h2>
        {user && (
          <div>
            <p><strong>이름:</strong> {user.name}</p>
            <p><strong>이메일:</strong> {user.email}</p>
            <p><strong>전화번호:</strong> {user.phone}</p>
            <p><strong>웹사이트:</strong> {user.website}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    // 랜덤 사용자 데이터 가져오기
    const randomId = Math.floor(Math.random() * 10) + 1
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`)
    const user = await res.json()

    return {
      props: {
        user,
        timestamp: Date.now(),
      },
    }
  } catch (error) {
    return {
      props: {
        user: null,
        timestamp: Date.now(),
      },
    }
  }
}
