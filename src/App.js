import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus'
import ClassesPage from './Pages/ClassesPage';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import Cancellation from './Pages/Cancellation';
import Shipping from './Pages/Shipping';

function App() {
  return (
    <>
     <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route path='/aboutUs' element={<Aboutus/>}/>
      <Route path='/contactUs' element={<Contactus/>}/>
      <Route path='/classes' element={<ClassesPage/>}/>
      <Route path='/privacy_policy'element={<Privacy/>}/>
      <Route path='/terms_conditions' element={<Terms/>}/>
      <Route path='/refund_policy' element={<Cancellation/>}/>
      <Route path='/shipping_delivery' element={<Shipping/>}/>
     </Routes>
    </>
  );
}

export default App;
