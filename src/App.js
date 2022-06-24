import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Shared/Footer/Footer';
import Navigationbar from './component/Shared/Navbar/Navbar';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Service from './Pages/Service/Service';

function App() {
  return (
    <div>
      <Navigationbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/service' element={<Service/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact/>}/>
       </Routes>
      <Footer/>
    </div>
  );
}

export default App;
