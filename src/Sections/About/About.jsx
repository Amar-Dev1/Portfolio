import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import discoverShape from '../../assets/discover.png';

const About = () => {
  return (
    <Container fluid id="about">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col lg={6} md={12} sm={12}>
            <h2 className="title">About Me</h2>
            <div className='about-phrase'>
              <p>
                My name is <span className="my-name">Amar</span>. Passionate computer science student with a focus on web development. Experienced with: <span className='text-dark'>Python,
                Django, React.js, and Flask.</span> Always eager to learn and contribute to impactful projects. Looking for opportunities to
                grow as a software engineer and work on projects that improve lives.</p>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="d-flex justify-content-center align-items-center">
            <img src={discoverShape} alt="About Amar" className='about-shape' />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default About;
