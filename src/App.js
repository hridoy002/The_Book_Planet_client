import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Header from './pages/share/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/share/Footer/Footer';
import Login from './pages/Login_Register/Login';
import Register from './pages/Login_Register/Register/Register';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />

        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
