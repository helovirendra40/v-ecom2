
import './App.css'
// import AddUser from './component/addUser';
// import DisplayUsers from './component/displayUsers';
import './custom.css'
import Navbar from './component/navbar'
// import Card from './component/card'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/cart'
import Wishlist from './pages/wishlist'
import ProductDetails from './pages/productDetails'
import Category from './pages/category'


function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/cart'} element={<Cart />} />
      <Route path={'/wishlist'} element={<Wishlist />} />
      <Route path={`/product-details/:id`} element={<ProductDetails />} />
      <Route path={`/:categoryname`} element={<Category />} />
    </Routes>
    </>
  )
}

export default App
