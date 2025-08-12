import { BrowserRouter, Routes, Route } from 'react-router';

// pages are imported here 
import Test from "./pages/Test.jsx"


//auth pages are here 
import Login from "./pages/auth/Login.jsx";
import SignUp from './pages/auth/SignUp.jsx';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />

          {/* Nested Route: Dashboard has children -*---*/}
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
