import { BrowserRouter, Routes, Route } from 'react-router';

// pages are imported here 
import Test from "./pages/Test.jsx"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />

          {/* Nested Route: Dashboard has children */}
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
