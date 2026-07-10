
import { useState } from "react";
import mainImage from "../assets/hero.png"

const Home = () => {
  const [showNotice, setShowNotice] = useState(true);

  // 공지 팝업 닫기 버튼 클릭 시 상태 변경
  const handleCloseNotice = () => {
    setShowNotice(false);
  }

  return(
    <div className="main">
      {showNotice && (
        <div className="notice-popup">
          <h3>여름 특가 세일</h3>
          <p>전 상품 최대 50% 할인!</p>
          <button onClick={handleCloseNotice}>닫기</button>
        </div>
      )}
      <h2>컴퓨터 기기 쇼핑몰</h2>
      <p>최신 컴퓨터 기기와 액세서리를 한 곳에서 만나보세요!</p>
      <div className="main-image">
        <img src={mainImage} alt="메인 이미지" />
      </div>
    </div>
  )
}

export default Home;

