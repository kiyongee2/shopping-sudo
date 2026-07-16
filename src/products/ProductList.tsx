
import { useState } from "react"
import products from "../data/products.json"
import mouse from "../assets/mouse.png"
import keyboard from "../assets/keyboard.png"
import usb from "../assets/usb.png"
import monitor from "../assets/monitor.png"
import { Link } from "react-router-dom"

// 이미지 파일과 상품 데이터의 매핑을 위한 객체
export const imageMap: Record<string, string> = {
  'mouse.png': mouse,
  'keyboard.png': keyboard,
  'usb.png': usb,
  'monitor.png': monitor,
}

const ProductList = () => {
  // 검색어 상태를 관리하기 위한 useState 훅
  const [keyword, setKeyword] = useState('');

  // 상품명에 검색어가 포함된 상품만 필터링
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return(
    <div className="product-list">
      {/* 검색 영역 */}
      <div className="search-area">
        <input
          type="text"
          placeholder="상품명을 검색하세요"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      {filteredProducts.length === 0 ? (
        <p className="no-result">검색 결과가 없습니다.</p>
      ) : (
        <div className="card-container">
          {filteredProducts.map((product: any) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <div className="card">
                <img
                  src={imageMap[product.image]}
                  alt={product.name}
                  className="card-image"
                />
                <div className="card-body">
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-text">가격: {product.price}원</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList;