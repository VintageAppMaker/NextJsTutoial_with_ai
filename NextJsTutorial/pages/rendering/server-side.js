export default function ServerSideRenderingPage({ products, renderedAt }) {
  return (
    <div className="container">
      <h1>서버 사이드 렌더링 (Server-side Rendering) 예제</h1>
      <p>이 페이지는 매 요청마다 서버에서 새로 생성됩니다.</p>
      <p>렌더링 시각: {new Date(renderedAt).toLocaleString()}</p>

      <div className="products">
        <h2>실시간 제품 목록</h2>
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>가격: ${product.price}</p>
            <p>카테고리: {product.category}</p>
            <p>재고: {product.stock}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        .products {
          margin-top: 20px;
        }
        .product-card {
          border: 1px solid #ddd;
          padding: 15px;
          margin-bottom: 10px;
          border-radius: 5px;
          background-color: #f9f9f9;
        }
        .product-card h3 {
          margin: 0 0 10px 0;
          color: #333;
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps() {
  // 실제로는 외부 API나 데이터베이스에서 실시간 데이터를 가져올 수 있습니다
  const products = [
    { id: 1, name: 'Gaming Laptop', price: 1299.99, category: 'Electronics', stock: Math.floor(Math.random() * 10) },
    { id: 2, name: 'Wireless Headphones', price: 199.99, category: 'Electronics', stock: Math.floor(Math.random() * 20) },
    { id: 3, name: 'Running Shoes', price: 89.99, category: 'Sports', stock: Math.floor(Math.random() * 15) },
    { id: 4, name: 'Coffee Maker', price: 79.99, category: 'Home', stock: Math.floor(Math.random() * 8) },
    { id: 5, name: 'Backpack', price: 49.99, category: 'Fashion', stock: Math.floor(Math.random() * 25) },
  ]

  return {
    props: {
      products,
      renderedAt: Date.now(),
    },
  }
}
