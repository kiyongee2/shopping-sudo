
import mainImage from "../assets/hero.png"

const Home = () => {

  return(
    <div className="home">
      <h2>다팔아 쇼핑몰입니다.</h2>
      <div>
        <img src={mainImage} alt="메인 이미지" />
      </div>
    </div>
  )
}

export default Home;