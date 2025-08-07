import { BrowserRouter, Routes, Route } from 'react-router';

// pages are imported here 
import Test from "./pages/Test.jsx"
import Booking from './pages/Booking/Booking.jsx';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/booking" element={<Booking/>} />

          {/* Nested Route: Dashboard has children */}
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
