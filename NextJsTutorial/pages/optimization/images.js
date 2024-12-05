import Image from 'next/image'
import MainLayout from '../../components/layout/MainLayout'
import Card from '../../components/ui/Card'
import styles from '../../styles/Optimization.module.css'

// 예제 이미지 목록
const images = [
  {
    src: '/images/landscape1.jpg',
    alt: '풍경 1',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/landscape2.jpg',
    alt: '풍경 2',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/portrait1.jpg',
    alt: '인물 1',
    width: 800,
    height: 1200
  }
]

export default function ImageOptimizationExample() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>이미지 최적화</h1>
        <p className={styles.description}>
          Next.js의 Image 컴포넌트를 사용한 자동 이미지 최적화 기능을 살펴봅니다.
        </p>

        <div className={styles.grid}>
          <Card title="기본 이미지 최적화">
            <div className={styles.imageWrapper}>
              <Image
                src="/images/landscape1.jpg"
                alt="최적화된 이미지"
                width={800}
                height={450}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTAxMTMwLkIzOC05LzUxRWFFS1NWW1xbMkVhaWRYakFZW1f/2wBDARUXFx4aHR4eHVdRLzItV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1f/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                priority
                className={styles.image}
              />
              <div className={styles.imageInfo}>
                <h3>자동 최적화 기능</h3>
                <ul>
                  <li>WebP/AVIF 포맷 자동 변환</li>
                  <li>디바이스에 맞는 크기 제공</li>
                  <li>지연 로딩</li>
                  <li>블러 플레이스홀더</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card title="반응형 이미지">
            <div className={styles.responsiveImage}>
              <Image
                src="/images/landscape2.jpg"
                alt="반응형 이미지"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.objectFit}
              />
            </div>
          </Card>
        </div>

        <Card title="이미지 갤러리">
          <div className={styles.gallery}>
            {images.map((image, index) => (
              <div key={index} className={styles.galleryItem}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={200}
                  className={styles.galleryImage}
                />
              </div>
            ))}
          </div>
        </Card>

        <div className={styles.codeExample}>
          <h2>사용 예제</h2>
          <pre>
            <code>{`
// 기본 이미지 최적화
<Image
  src="/images/photo.jpg"
  alt="설명"
  width={800}
  height={450}
  placeholder="blur"
  priority
/>

// 반응형 이미지
<Image
  src="/images/photo.jpg"
  alt="설명"
  fill
  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
/>

// next.config.js 설정
module.exports = {
  images: {
    domains: ['example.com'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
}
            `}</code>
          </pre>
        </div>
      </div>
    </MainLayout>
  )
}
