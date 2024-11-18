import ProjectsCard from '../../Components/ProjectsCard/ProjectsCard';
import './IntroProjects.css';
import { Col, Container, Row } from 'react-bootstrap';
import CardsData from '../../Components/ProjectsCard/CardsData';
import { Link } from 'react-router-dom';
import backText from '../../assets/binary.png';
const IntroProjects = () => {
  return (
    <Container fluid id='intro-projects'>
      <img src={backText} alt="" className='back-text' />
      <Container className='sub-container'>
        <h2 className="projects-title">Some Cool Projects 🚀</h2>
        <Row className='d-flex justify-content-center'>
          {

            CardsData.map((card, index) => {
              return (
                <Col key={index} xl={4} lg={4} md={6} sm={12} className='d-flex justify-content-center mt-5'>
                  <ProjectsCard
                    title={card.title}
                    des={card.des}
                    img={card.img}
                    live={card.live}
                    code={card.code}
                  />
                </Col>
              )
            })
          }
        </Row>
      </Container>
      <button className='more-projects amar-btn'><Link to="/projects" className='more-link'>More</Link></button>
    </Container>
  )
}
export default IntroProjects;