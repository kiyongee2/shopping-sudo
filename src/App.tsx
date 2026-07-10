
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import Home from './layouts/Home'
import ProductList from './products/ProductList'
import ProductInfo from './products/ProductInfo'
import AddProduct from './products/AddProduct'
import SignIn from './users/SignIn'
import SignUp from './users/SignUp'
import { useState } from 'react'
import DashBoard from './users/DashBoard'

function App() {
  //로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //로그인한 사용자 ID 상태 관리
  const [userId, setUserId] = useState<string | null>(null);

  // 로그인한 사용자 권한 관리
  const [userRole, setUserRole] = useState<string | null>(null);


  //로그인 상태 업데이트 함수
  const handleLogin = (username: string, role: string) => {
    setIsLoggedIn(true);
    setUserId(username);
    setUserRole(role);
  }

  // 로그아웃 상태 함수
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId(null);
    setUserRole(null);
  }

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Header 
            isLoggedIn={isLoggedIn} 
            userId={userId} 
            userRole={userRole}
            onLogout={handleLogout} 
          />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/products/:id' element={<ProductInfo />} />
            <Route path='/products/add' element={<AddProduct />} />
            <Route path='/signin' element={<SignIn onLogin={handleLogin} />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/dashboard' element={<DashBoard userRole={userRole} />} />
          </Routes>
        </BrowserRouter>
        
      </section>
    </>
  )
}

export default App
