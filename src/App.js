import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path = '/' element={<Shop/>}/>
        <Route path = '/mens' element={<ShopCategory category="men"/>}/>
        <Route path = '/womens' element={<ShopCategory category="women"/>}/>
        <Route path = '/kids' element={<ShopCategory category="kid"/>}/>
        <Route path = "/product" element={<Product/>}/>
          <Route path = ':productId' element={<Product/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
        <Route />
        <Route path = '/cart' element={<Cart/>}/>
        <Route path = '/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
