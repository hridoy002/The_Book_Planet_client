import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Header from './pages/share/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/share/Footer/Footer';
import Login from './pages/Login_Register/Login';
import Register from './pages/Login_Register/Register/Register';
import AOS from 'aos';
import 'aos/dist/aos.css';

import RequireAuth from './pages/share/RequireAuth/RequireAuth';
import UploadProduct from './pages/UploadProduct/UploadProduct';
import ProductDetail from './pages/Products/ProductDetail/ProductDetail';
import ManageInventories from './pages/ManageInvetories/ManageInventories';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './pages/About/About';
import { useEffect } from 'react';
import Select from './pages/Select/Select';
import MyItem from './pages/Select/MyItem/MyItem';



function App() {
  useEffect(()=>{
    AOS.init();
  },
  [])
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/productDetail/:itemId' element={<RequireAuth>
          <ProductDetail/>
        </RequireAuth>} />
        <Route path='/uploadProduct' element={<RequireAuth>
          <UploadProduct/>
        </RequireAuth>} />
        <Route path='/manageInventories' element={<RequireAuth>
          <ManageInventories/>
        </RequireAuth>} />
        <Route path='/select/:itemId' element={<RequireAuth>
          <Select/>
        </RequireAuth>} />
        <Route path='/myitem/' element={<RequireAuth>
            <MyItem/>
        </RequireAuth>} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
