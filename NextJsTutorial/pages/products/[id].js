import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import Card from '../../components/ui/Card'
import styles from '../../styles/Products.module.css'

// 더미 제품 데이터
const products = {
  1: {
    id: 1,
    name: '스마트폰',
    category: 'electronics',
    price: 999.99,
    description: '최신 기술이 적용된 스마트폰',
    specs: {
      display: '6.7인치 OLED',
      processor: '최신 프로세서',
      camera: '트리플 카메라',
      battery: '4500mAh'
    }
  },
  2: {
    id: 2,
    name: '노트북',
    category: 'electronics',
    price: 1499.99,
    description: '고성능 노트북',
    specs: {
      display: '15.6인치 4K',
      processor: '최신 프로세서',
      memory: '16GB RAM',
      storage: '512GB SSD'
    }
  },
  3: {
    id: 3,
    name: '헤드폰',
    category: 'accessories',
    price: 299.99,
    description: '노이즈 캔슬링 헤드폰',
    specs: {
      type: '오버이어',
      battery: '30시간',
      connectivity: 'Bluetooth 5.0',
      features: '액티브 노이즈 캔슬링'
    }
  }
}

export default function ProductPage() {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (id) {
      setProduct(products[id])
    }
  }, [id])

  if (!product) {
    return <MainLayout><div>로딩 중...</div></MainLayout>
  }

  return (
    <MainLayout>
      <div className={styles.container}>
        <Card>
          <div className={styles.productDetail}>
            <h1 className={styles.productTitle}>{product.name}</h1>
            <p className={styles.category}>{product.category}</p>
            <p className={styles.price}>${product.price}</p>
            <p className={styles.description}>{product.description}</p>
            
            <div className={styles.specs}>
              <h2>제품 스펙</h2>
              <ul>
                {Object.entries(product.specs).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </MainLayout>
  )
}
