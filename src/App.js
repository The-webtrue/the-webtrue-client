import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Shared/Footer/Footer';
import Navigationbar from './component/Shared/Navbar/Navbar';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Graphics from './Pages/Graphics/Graphics';
import Home from './Pages/Home/Home';
import Service from './Pages/Service/Service';
import Software from './Pages/Software/Software';
import WebDev from './Pages/WebDev/WebDev';

function App() {
  return (
    <div>
      <Navigationbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/service' element={<Service/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path="/web" element={<WebDev/>}/>
        <Route  path="/software" element={<Software/>}/>
        <Route  path="/graphics" element={<Graphics/>}/>
       </Routes>
      <Footer/>
    </div>
  );
}

export default App;
