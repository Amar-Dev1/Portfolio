import { Container } from 'react-bootstrap';
import './Header.css';
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useRef, useState } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navRef = useRef(null);

  const handleMenu = () => {
    console.log("Menu button clicked");
    setShowMenu(prevState => !prevState);
  }

  return (
    <Container fluid id='header'>
      <h3 className="logo">
        <a href="/">Amarz<span>Code</span></a>
      </h3>

      <nav className={`links ${showMenu ? 'show' : ''}`} ref={navRef}>
        {
          showMenu ? // Show the close icon when the menu is open
            <span className='icon-wrapper'><ImCross className='cross-btn icon' onClick={handleMenu} /></span> :
            null
        }
        <a onClick={handleMenu} href='/'>Home</a>
        <a onClick={handleMenu} href='#about'>About</a>
        <a onClick={handleMenu} href='#intro-projects'>Projects</a>
        <a onClick={handleMenu} href='#contact'>Contact</a>
      </nav>

      {
        !showMenu ? // Show the bar icon when the menu is closed
          <span className='icon-wrapper'><FaBars className='bar-btn icon' onClick={handleMenu} /></span> :
          null
      }
    </Container>
  );
}

export default Header;