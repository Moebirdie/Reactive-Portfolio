// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <Container fluid style={{background:'#73937e'}}>
      <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default App;
