import { Container } from 'react-bootstrap';
import './Header.css';
import { FaBars,FaRegFaceSmileWink } from "react-icons/fa6";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";
import { ImCross } from "react-icons/im";
import { useRef, useState } from 'react';
import myImg from '../../assets/me.png'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navRef = useRef(null);

  const handleMenu = () => {
    console.log("Menu button clicked");
    setShowMenu(prevState => !prevState);
  }

  return (
    <Container fluid id='header'>

      <div className="profile-wrapper">
        <div className="profile-img">
          <img src={myImg} alt="profile" className="profile-image" />
        </div>
        <div className="profile-detail">
          <li><FaRegFaceSmileWink/><a href="#about"> Who am I ?</a></li><hr style={{ padding: "0", margin: "0" }} />
          <li><MdOutlineRocketLaunch/><a href="#intro-projects"> Projects</a></li><hr style={{ padding: "0", margin: "0" }} />
          <li><TbFileCv/><a href="https://drive.google.com/file/d/16btXP1vJi5NNK0E6v3iNDoLecqAyOGd_/view?usp=sharing" target='blank'> CV</a></li>
        </div>
      </div>

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