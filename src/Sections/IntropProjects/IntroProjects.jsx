import ProjectsCard from '../../Components/ProjectsCard/ProjectsCard';
import './IntroProjects.css';
import { Col, Container, Row } from 'react-bootstrap';
import CardsData from '../../Components/ProjectsCard/CardsData';
import RainMotion from '../../Components/ProjectsCard/RainMotion';
const IntroProjects = () => {
  return (
    <Container fluid id='intro-projects'>
      <RainMotion backgroundStyle='blue'/>
      <Container>
        <h2 className="projects-title">My Projects 🚀</h2>
        <Row >

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
    </Container>
  )
}

export default IntroProjects
