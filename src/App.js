import './App.css';
import Nav from './components/navbar/nav';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Shop from './pages/shop';
import ShopCategories from './pages/ShopCategories';
import Product from './pages/Product';
import Cart from './pages/cart';
import Login from './pages/login';
import Footer from './components/footer/footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategories banners = {men_banner} category = "men"/>} />
        <Route path='/womens' element={<ShopCategories banners = {women_banner} category = "women"/>} />
        <Route path='/kids' element={<ShopCategories  banners = {kids_banner} category = "kid"/>} />
        <Route path="/product" element={<Product />}>
        <Route path=':productId' element={<Product />}/>
        </Route>
         <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
