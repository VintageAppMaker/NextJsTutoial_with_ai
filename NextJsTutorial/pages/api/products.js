// 더미 제품 데이터
const products = [
  { id: 1, name: 'Gaming Laptop', price: 1299.99, category: 'Electronics' },
  { id: 2, name: 'Wireless Headphones', price: 199.99, category: 'Electronics' },
  { id: 3, name: 'Running Shoes', price: 89.99, category: 'Sports' },
  { id: 4, name: 'Coffee Maker', price: 79.99, category: 'Home' },
  { id: 5, name: 'Backpack', price: 49.99, category: 'Fashion' },
]

export default function handler(req, res) {
  // 의도적으로 약간의 지연 추가 (실제 API 시뮬레이션)
  setTimeout(() => {
    res.status(200).json(products)
  }, 1000)
}
