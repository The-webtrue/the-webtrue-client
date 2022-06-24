import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Navigationbar from './component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Service from './Pages/Service/Service';

function App() {
  return (
    <div>
      <Navigationbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/service' element={<Service/>}/>
       </Routes>
      <Footer/>
    </div>
  );
}

export default App;
