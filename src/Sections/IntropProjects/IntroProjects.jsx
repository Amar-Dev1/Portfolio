import IntroProjectsCard from '../../Components/ProjectsCard/IntroProjectsCard';
import './IntroProjects.css';
import { Col, Container, Row } from 'react-bootstrap';
import CardsData from '../../Components/ProjectsCard/CardsData';
import { Link } from 'react-router-dom';
import backText from '../../assets/binary.png';
const IntroProjects = () => {

  const introProjects = [CardsData[0], CardsData[1], CardsData[2], CardsData[3]]

  return (
    <Container fluid id='intro-projects'>
      <img src={backText} alt="" className='back-text' />
      <Container className='sub-container'>
        <h2 className="projects-title">Some Cool Projects 🚀</h2>
        <Row className='d-flex justify-content-center g-0'>
          {
            introProjects.map((card, index) => {

              return (
                <Col key={index} className='d-flex justify-content-center m-2 card-col' md={6} lg={4} xl={4} xxl={3}>
                  <IntroProjectsCard
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