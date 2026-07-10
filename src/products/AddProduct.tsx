import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData{
  name: string,
  price: number,
  description: string,
  image: File | null
}

const AddProduct = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    price: 0,
    description: '',
    image: null
  })

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | 
    HTMLTextAreaElement>) => {
    const {name, value} = e.target; // 파일이 없는 경우 구조분해 할당
    
    const files = (e.target as HTMLInputElement).files; // 파일이 있는 경우

    if(name === 'image' && files){ // 파일이 있는 경우
      setFormData({...formData, image: files[0]})
    }else{
      setFormData({...formData, [name]: value}) // 파일이 없는 경우
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //유효성 검사
    if(!formData.name || !formData.price || !formData.description
      || !formData.image){
      alert("모든 항목을 입력해주세요.");
      return;
    }

    if(formData.price <= 0){
      alert("가격은 0보다 커야합니다.");
      return;
    }

    console.log("formData:", formData);  // 등록 상품 출력
    alert("상품이 등록되었습니다.");
    navigate('/products');
  }

  return(
    <div className="add-product">
      <h2>상품 등록</h2>
      <form onSubmit = {handleSubmit}>
        <div>
          <label htmlFor="name">상품명</label>
          <input 
            type="text" 
            id="name"
            name="name"
            placeholder="상품명을 입력하세요"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">가격</label>
          <input 
            type="number" 
            id="price"
            name="price"
            placeholder="가격을 입력하세요"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">설명</label>
          <textarea
            id="description"
            name="description"
            placeholder="설명을 입력하세요"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">이미지</label>
          <input 
            type="file" 
            id="image"
            name="image"
            onChange={handleChange}
          />
        </div>
        <button type="submit">등록</button>
      </form>
    </div>
  )
}

export default AddProduct;