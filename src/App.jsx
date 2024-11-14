import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, Projects } from '../index';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;