import Link from 'next/link'
import MainLayout from '../../components/layout/MainLayout'
import Card from '../../components/ui/Card'
import styles from '../../styles/Products.module.css'

// 더미 제품 데이터
const products = [
  {
    id: 1,
    name: '스마트폰',
    category: 'electronics',
    price: 999.99,
    description: '최신 기술이 적용된 스마트폰'
  },
  {
    id: 2,
    name: '노트북',
    category: 'electronics',
    price: 1499.99,
    description: '고성능 노트북'
  },
  {
    id: 3,
    name: '헤드폰',
    category: 'accessories',
    price: 299.99,
    description: '노이즈 캔슬링 헤드폰'
  }
]

export default function ProductsPage() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>제품 목록</h1>
        <div className={styles.grid}>
          {products.map(product => (
            <Link 
              href={`/products/${product.id}`} 
              key={product.id}
              className={styles.link}
            >
              <Card>
                <h2>{product.name}</h2>
                <p className={styles.category}>{product.category}</p>
                <p className={styles.price}>${product.price}</p>
                <p>{product.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
