import { Col, Container, Row, } from 'react-bootstrap';
import './Projects.css';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import CardsData from '../../Components/ProjectsCard/CardsData';
import IntroProjectsCard from '../../Components/ProjectsCard/IntroProjectsCard';
import { useEffect } from 'react';
const Projects = () => {

  // let the screen scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <Container fluid id='projects'>
      <button className='amar-btn back-btn'><Link to="/"><FaArrowLeft /> Home</Link></button>
      <Container className='projects-wrapper'>
        <h2 className='title'>Awesome Projects I`have Built 🤓</h2>
        <Row className='mt-5 mb-5'>
          {
            CardsData.map((card, index) => {
              return (
                <Col key={index} className='d-flex justify-content-center mt-3 card-col' xxl={3} lg={4} md={6}>
                  <IntroProjectsCard
                    title={card.title}
                    des={card.des}
                    img={card.img}
                    code={card.code}
                    live={card.live}
                  />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </Container>
  )
}

export default Projects;