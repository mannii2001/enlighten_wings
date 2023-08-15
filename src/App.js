import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus'

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/aboutUs' element={<Aboutus/>}/>
      <Route path='/contactUs' element={<Contactus/>}/>
     </Routes>
    </>
  );
}

export default App;
