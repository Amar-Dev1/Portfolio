import { Container } from 'react-bootstrap';
import './Footer.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';
import amarCV from '../../assets/cv.png';
const Footer = () => {
  return (
    <Container fluid id='footer'>
      <div className="content">
        <div className="title"><h3>Dev<span className='colored-span'>Amar</span></h3>
        </div>
        <div className="social-media">
          <a href="https://linkedin.com/in/amar-yasir" target='blank'><FaLinkedin className='icon' /></a>
          <a href="https://github.com/Amar-Dev1" target='blank'> <FaGithub className='icon' /></a>
          <a href="mailto:AmarOfficial249@gmail.com" target='blank'>  <FaEnvelope className='icon' /></a>
          <a href="https://drive.google.com/file/d/16btXP1vJi5NNK0E6v3iNDoLecqAyOGd_/view?usp=sharing" target='blank'><img src={amarCV} alt="" className='cv-icon'/></a>
        </div>
      </div>
    </Container>
  )
}

export default Footer;