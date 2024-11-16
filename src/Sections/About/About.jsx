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
              My Name is Amar, a Passionate computer science student and aspiring web developer, driven to excel in software engineering and make a positive impact in the industry. Continuously striving for self-improvement and staying up to date with advancements in the field. Eager to contribute to innovative projects that help people and improve lives.               </p>
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