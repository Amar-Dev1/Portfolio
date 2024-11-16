import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, Projects } from '../index';
import { FaArrowUp } from "react-icons/fa6";
import { useEffect } from 'react';
function App() {
  const handleEvent = ()=>{
    window.scrollTo(0, 0);
  }
    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= '1000') {
          document.querySelector('.scroll-top').style.display = 'block';
        } else {
          document.querySelector('.scroll-top').style.display = 'none';
        }
      });
      return () => {
        window.removeEventListener('scroll', handleEvent);
      }
    }, [])
  
  return (
    <BrowserRouter>
      <div className='boss-parent'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <div className="scroll-top">
          <FaArrowUp onClick={handleEvent} className='icon'/>
        </div>
      </div>
    </BrowserRouter>
  )
}

// btn to scroll to above

export default App;