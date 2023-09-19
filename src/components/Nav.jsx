// // Bringing in the required import from 'react-router-dom'
// import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function BasicExample() {
  return (
    <Container fluid style={{background: '#e7e7df', padding: '20px'  }}>
      <Container style={{ display: 'flex', justifyContent: 'center', width: '75%'}}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="src/assets/ED-notag.png"
              width="90"
              height="60"
              className="d-inline-block align-top"
            />{' '}
            Maureen Maher
          </Navbar.Brand>
        </Container>

        <Container style={{ display: 'flex', justifyContent: 'right' }}>
          <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Nav.Link eventKey="link-1">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4">Resume</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Container>
    </Container>
  );
}
