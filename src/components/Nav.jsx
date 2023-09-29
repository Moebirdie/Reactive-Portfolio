// // Bringing in the required import from 'react-router-dom'
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default function Navigation({currentPage, updateCurrentPage}) {

  const handleSelect = (selectedKey) => {
    updateCurrentPage(selectedKey);
  };

  return (
    <Container fluid style={{ display:'flex', flexWrap: 'wrap', background: '#ffffff', padding: '20px', position: 'sticky', top: 0, zIndex: 20, color: '#483948'  }}>
         <Container style={{ display: 'flex', flexWrap: 'wrap'}} >
          <Navbar.Brand style={{ display:'flex' }}>
            <img
              alt=""
              src="https://uploads-ssl.webflow.com/6515fbe1ba5a602a0f9586a5/65164621f99c2aac1192ad13_ED-notag.png"
              width="80"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            <h2 style={{fontFamily: 'Poppins'}}>Maureen Maher</h2>
          </Navbar.Brand>
        </Container>

        <Container style={{ display: 'flex', justifyContent: 'right', alignContent: 'center' }}>
          <Nav
            activeKey={currentPage}
            onSelect={handleSelect}>

            <Nav.Item>
              <Nav.Link eventKey="About Me" active={currentPage === "About Me"}>About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Portfolio" active={currentPage === "Portfolio"}>Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Contact" active={currentPage === "Contact"}>Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Resume" active={currentPage === "Resume"}>Resume</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
    </Container>
  );
}
