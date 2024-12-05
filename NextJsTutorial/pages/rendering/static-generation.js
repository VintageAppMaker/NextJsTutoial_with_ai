export default function StaticGenerationPage({ products, generatedAt }) {
  return (
    <div className="container">
      <h1>정적 생성 (Static Generation) 예제</h1>
      <p>이 페이지는 빌드 시점에 생성됩니다.</p>
      <p>생성 시각: {new Date(generatedAt).toLocaleString()}</p>

      <div className="products">
        <h2>제품 목록</h2>
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>가격: ${product.price}</p>
            <p>카테고리: {product.category}</p>
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
        }
        .product-card h3 {
          margin: 0 0 10px 0;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  // 실제로는 외부 API나 데이터베이스에서 데이터를 가져올 수 있습니다
  const products = [
    { id: 1, name: 'Gaming Laptop', price: 1299.99, category: 'Electronics' },
    { id: 2, name: 'Wireless Headphones', price: 199.99, category: 'Electronics' },
    { id: 3, name: 'Running Shoes', price: 89.99, category: 'Sports' },
    { id: 4, name: 'Coffee Maker', price: 79.99, category: 'Home' },
    { id: 5, name: 'Backpack', price: 49.99, category: 'Fashion' },
  ]

  return {
    props: {
      products,
      generatedAt: Date.now(),
    },
    // 60초마다 페이지 재생성 (ISR - Incremental Static Regeneration)
    revalidate: 60,
  }
}
