import { useState, useEffect } from 'react'

export default function ClientSideRenderingPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [refreshCount, setRefreshCount] = useState(0)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        // 실제로는 외부 API를 호출할 수 있습니다
        const response = await fetch('/api/products')
        const data = await response.json()
        setProducts(data)
        setError(null)
      } catch (err) {
        setError('데이터를 불러오는데 실패했습니다.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [refreshCount])

  const handleRefresh = () => {
    setRefreshCount(prev => prev + 1)
  }

  return (
    <div className="container">
      <h1>클라이언트 사이드 렌더링 (Client-side Rendering) 예제</h1>
      <p>이 페이지는 브라우저에서 데이터를 불러와 렌더링합니다.</p>
      
      <button onClick={handleRefresh} className="refresh-button">
        새로고침
      </button>

      <div className="products">
        <h2>실시간 제품 목록</h2>
        
        {loading ? (
          <div className="loading">데이터를 불러오는 중...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <h3>{product.name}</h3>
                <p>가격: ${product.price}</p>
                <p>카테고리: {product.category}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .container {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        .refresh-button {
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-bottom: 20px;
        }
        .refresh-button:hover {
          background-color: #0051cc;
        }
        .products {
          margin-top: 20px;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }
        .product-card {
          border: 1px solid #ddd;
          padding: 15px;
          border-radius: 5px;
          background-color: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .product-card h3 {
          margin: 0 0 10px 0;
          color: #333;
        }
        .loading, .error {
          text-align: center;
          padding: 20px;
          background-color: #f5f5f5;
          border-radius: 5px;
        }
        .error {
          color: red;
        }
      `}</style>
    </div>
  )
}
