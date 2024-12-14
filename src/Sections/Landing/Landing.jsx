import './Landing.css';
import { Col, Container, Row } from 'react-bootstrap';
import htmlIcon from '../../assets/html-icon.png';

const Landing = () => {

    return (
        <Container fluid id='landing'>
            <img src={htmlIcon} alt="" className='random-icon random01' />
            <img src={htmlIcon} alt="" className='random-icon random02' />
            <Row className='first-row d-flex flex-column justify-content-center'>
                <Col lg={12} md={12} sm={12} className='text-center'>
                    <h4>Yo 🖐 I'm Amar</h4>
                    <h1><span>Frontend</span> Developer</h1>
                    <button className='amar-btn landing-btn'><a href="#intro-projects">My Projects</a></button>
                    <button className='amar-btn landing-btn'><a href="#contact">Contact me !</a></button>
                    {/* <div className="amar-img">
                        <img className='amar-img' src={myImg} alt="Amar Image" />
                    </div> */}
                </Col>
            </Row>
        </Container>
    );
}

export default Landing;