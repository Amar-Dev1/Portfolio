import './Contact.css';
import { Container, Row } from 'react-bootstrap';
import connectImg from '../../assets/connect.png';
import emailjs from 'emailjs-com'
const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_y35ivh7', 'template_00gb2np', e.target, 'KQDt3-zeFUi-0lxC3')
      .then((result) => {
        console.log(result.text);
        alert('Message Sent ✅')
      }, (error) => {
        console.error(error.text);
        alert('Message Failed to Send ❌')
      }
      )
  }

  return (
    <Container id='contact'>
      <img src={connectImg} alt="" className='connect-img' />
      <div className="content">
        <Row>
          <div className="head">
            <h2 className="contact-title">Contact Me 📧</h2>
            <p>Please feel free to reach out if you’d like to collaborate or work together</p></div>
        </Row>
        <Row>
          <div className="form-wrapper">
            <form onSubmit={sendEmail}>
             <div className="inputs">
             <input type="text" name='user_name' placeholder="Your Name" required />
             <input type="email" name='user-email' placeholder="Your Email" required />
             </div>
              <textarea placeholder="Say Hello " name='message' required />
              <button type="submit" className='amar-btn'>Send</button>
            </form>
          </div>
        </Row>
      </div>

    </Container>
  )
}

export default Contact;