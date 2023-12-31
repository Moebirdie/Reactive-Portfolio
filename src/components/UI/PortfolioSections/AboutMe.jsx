// This is a static page mocking an "About Us" section for our fake user data
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AboutMe() {
  return (
    <Container className="aboutContainer">
      <Row>
        <Col sm={12} md={4} className='aboutImage'>
          <img src='https://uploads-ssl.webflow.com/6515fbe1ba5a602a0f9586a5/6516482e33d9510e36334d7d_portfoliophotosNew.png' />
          </Col>
        <Col >A versatile professional with a demonstrated history of talented cross-industry solutions in information services. Possesses an innate ability for learning software technologies and adapting those technologies for business solutions. Self-motivated to perform above expectations; embraces learning and exposure to new ideas. Excellent ability to comprehend and define customer needs. Independent and self-starter as demonstrated by working remote for the past number of years. Ability to adapt to fluid environments. Strong work ethic and company loyalty. Seasoned professional with a Bachelor of Arts (BA) from Rutgers College, Rutgers University. Strong interpersonal skills, believing that tapping and growing individual talents within a collaborative structure can exponentially grow a company’s success.</Col>
      </Row>    
    </Container>
  );
}
