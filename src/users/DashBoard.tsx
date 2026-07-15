import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import orders from "../data/orders.json";

//DashBoard 컴포넌트 Props 타입 정의
interface DashBoardProps{
  userRole: string | null;
}

const DashBoard = ({userRole}: DashBoardProps) => {
  const navigate = useNavigate();

  // 관리자 권한이 아닌 경우 접근 제한
  useEffect(() => {
    if(userRole !== "admin"){
      alert("관리자 전용 페이지입니다.");
      navigate('/');
    }
  }, [userRole]);

  if(userRole !== "admin") return null;

  return(
    <div>
      <h2>관리자 DashBoard</h2>
      <h3>주문 내역</h3>
      <div className="order-table-wrap">
        <table className="order-table">
          <thead>
            <tr>
              <th>주문 ID</th>
              <th>사용자 ID</th>
              <th>상품명</th>
              <th>수량</th>
              <th>총액</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.userId}</td>
                <td>{order.productId}</td>
                <td>{order.quantity}</td>
                <td>{order.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashBoard;
