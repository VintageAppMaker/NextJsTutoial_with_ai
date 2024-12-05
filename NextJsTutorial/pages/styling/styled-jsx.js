export default function StyledJSXExample() {
  return (
    <div className="container">
      <h1>Styled JSX 예제</h1>
      
      <div className="card">
        <h2>Styled JSX란?</h2>
        <p>Styled JSX는 Next.js에 내장된 CSS-in-JS 솔루션으로, 컴포넌트 범위의 CSS를 JSX 안에 작성할 수 있게 해줍니다.</p>
      </div>

      <div className="examples">
        <div className="example">
          <h3>버튼 스타일링</h3>
          <button className="button">기본 버튼</button>
          <button className="button primary">주요 버튼</button>
          <button className="button secondary">보조 버튼</button>
        </div>

        <div className="example">
          <h3>카드 스타일링</h3>
          <div className="card-grid">
            <div className="grid-card">
              <h4>카드 1</h4>
              <p>Styled JSX를 사용한 카드 스타일링</p>
            </div>
            <div className="grid-card">
              <h4>카드 2</h4>
              <p>컴포넌트 스코프 스타일링</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        h1 {
          color: #0070f3;
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        .card {
          padding: 1.5rem;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          margin-bottom: 2rem;
        }

        h2 {
          color: #0070f3;
          margin-bottom: 1rem;
        }

        .examples {
          display: grid;
          gap: 2rem;
        }

        .example {
          padding: 1.5rem;
          border: 1px solid #eaeaea;
          border-radius: 10px;
        }

        h3 {
          color: #0070f3;
          margin-bottom: 1rem;
        }

        .button {
          padding: 0.5rem 1rem;
          margin-right: 1rem;
          border: 1px solid #eaeaea;
          border-radius: 5px;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .button:hover {
          border-color: #0070f3;
          color: #0070f3;
        }

        .button.primary {
          background: #0070f3;
          color: white;
          border-color: #0070f3;
        }

        .button.primary:hover {
          background: #0051a2;
        }

        .button.secondary {
          background: #f5f5f5;
          color: #666;
        }

        .button.secondary:hover {
          background: #eaeaea;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .grid-card {
          padding: 1rem;
          border: 1px solid #eaeaea;
          border-radius: 5px;
          transition: transform 0.2s ease;
        }

        .grid-card:hover {
          transform: translateY(-5px);
          border-color: #0070f3;
        }

        .grid-card h4 {
          color: #0070f3;
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  )
}
