export default function TailwindExample() {
  return (
    <div className="container mx-auto px-8 py-8 max-w-6xl">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Tailwind CSS 예제
      </h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Tailwind CSS란?</h2>
        <p className="text-gray-700">
          Tailwind CSS는 유틸리티 우선 CSS 프레임워크로, 미리 정의된 클래스를 조합하여 
          빠르게 UI를 구축할 수 있게 해줍니다.
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">버튼 스타일링</h3>
          <div className="space-x-4">
            <button className="px-4 py-2 border border-gray-300 rounded-md hover:border-blue-500 hover:text-blue-500 transition-colors">
              기본 버튼
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              주요 버튼
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
              보조 버튼
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">카드 스타일링</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transform hover:-translate-y-1 transition-all">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">카드 1</h4>
              <p className="text-gray-600">Tailwind CSS를 사용한 카드 스타일링</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transform hover:-translate-y-1 transition-all">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">카드 2</h4>
              <p className="text-gray-600">유틸리티 클래스 기반 스타일링</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">반응형 디자인</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-lg">
                <div className="text-center text-gray-600">Item {i}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
