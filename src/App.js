// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import OpeningHours from './Component/OpeningHours/OpeningHours';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer';
import OurMenu from './Component/OurMenu/OurMenu';

function App() {
  return (
    <Router>
     

       
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/opening-hours' element={<OpeningHours />}></Route>
        <Route path='/menu-pricing' element={<OurMenu />}></Route>

      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
