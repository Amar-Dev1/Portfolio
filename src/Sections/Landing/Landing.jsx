import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Landing.css';
import htmlIcon from '../../assets/html-icon.png';
import myImg from '../../assets/me.png';

const Landing = () => {
    useEffect(() => {
        const backgroundAnimation = document.getElementById('background-animation');
        if (backgroundAnimation) {
            for (let i = 0; i < 25; i++) {
                const dot = document.createElement('div')
                dot.classList.add('rain-dot')
                dot.style.left = `${Math.random() * 100}vw`
                dot.style.animationDelay = `${Math.random() * 5}s`
                dot.style.setProperty('--i', Math.random())
                backgroundAnimation.appendChild(dot)
            }
        }
    }, []); // Empty dependency array ensures this runs once after the component mounts
    return (
        <Container fluid id='landing'>
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