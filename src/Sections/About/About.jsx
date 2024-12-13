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
                A Passionate computer science, web development student, driven to excel in software engineering and make a positive impact in the industry. I have good knowledge with : javascript, python, Bootstrap, React.js, node.js, django, mysql and git & github.</p>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="d-flex justify-content-center align-items-center"> {/* Center the image vertically and horizontally */}
            <img src={discoverShape} alt="About Amar" className='about-shape' />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default About;