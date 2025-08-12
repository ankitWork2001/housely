import { BrowserRouter, Routes, Route } from 'react-router';

// pages are imported here 
import Test from "./pages/Test.jsx"
import Booking from './pages/Booking/Booking.jsx';


//auth pages are here 
import Login from "./pages/auth/Login.jsx";
import SignUp from './pages/auth/SignUp.jsx';

// property page is here 
import PropertyList from './pages/Property/PropertyList.jsx';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />


          {/* Bookign routes are here  */}
          <Route path="/booking" element={<Booking/>} />

          {/* property pages are here  */}
          <Route path="/property-list" element={<PropertyList/>} />


          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
