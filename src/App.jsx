import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, Projects } from '../index';
import { FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from 'react';
function App() {
  // start upArrow button
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= '1000') {
      setShowButton(true)
    }
    else {
      setShowButton(false)

    }
  }
  const moveScreen = () => {
    window.scrollTo({ top: 0 })
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => removeEventListener('scroll', handleScroll)
  }, [])
  // end upArrow button
  return (
    <BrowserRouter>
      <div className='boss-parent'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        {
          showButton &&
          <div className="scroll-top" onClick={moveScreen}>
            <FaArrowUp className='icon' />
          </div>
        }
      </div>
    </BrowserRouter>
  )
}
// btn to scroll to above

export default App;