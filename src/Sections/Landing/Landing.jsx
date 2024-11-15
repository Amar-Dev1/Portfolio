import './Landing.css';
import { Col, Container, Row } from 'react-bootstrap';
import htmlIcon from '../../assets/html-icon.png';
import myImg from '../../assets/me.png';
import RainMotion from '../../Components/ProjectsCard/RainMotion';

const Landing = () => {

    return (
        <Container fluid id='landing'>
            <RainMotion />
            <div id='background-animation'></div> {/* Ensure you have this div for the dots */}
            <img src={htmlIcon} alt="" className='random-icon random01' />
            <img src={htmlIcon} alt="" className='random-icon random02' />
            <Row className='first-row d-flex flex-column justify-content-center align-items-center mt-5'>
                <Col lg={12} md={12} sm={12} className='text-center'>
                    <h4>Yo 🖐 I'm Amar</h4>
                    <h1><span>Frontend</span> Developer</h1>
                    <button className='amar-btn landing-btn'><a href="#intro-projects">My Projects</a></button>
                    <button className='amar-btn landing-btn'><a href="#contact">Contact me !</a></button>
                    <div className="amar-img">
                        <img className='amar-img' src={myImg} alt="Amar Image" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Landing;