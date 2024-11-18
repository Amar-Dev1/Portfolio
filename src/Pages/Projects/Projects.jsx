import { Container, } from 'react-bootstrap';
import './Projects.css';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6'
const Projects = () => {
  return (
    <Container fluid id='projects'>
      <button className='amar-btn back-btn'><Link to="/"><FaArrowLeft /> Home</Link></button>
      <Container className='projects-wrapper'>
        <h2 style={{ textAlign: 'center' }}>In Progress ...</h2>
      </Container>
    </Container>
  )
}

export default Projects
