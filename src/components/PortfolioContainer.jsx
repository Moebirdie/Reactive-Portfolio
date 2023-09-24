import Resume from './UI/PortfolioSections/Resume';
import About from './UI/PortfolioSections/AboutMe';
import Portfolio from './UI/PortfolioSections/Portfolio';
import Contact from './UI/PortfolioSections/Contact';
import { Container } from 'react-bootstrap';



export default function PortfolioContainer({ currentPage }) {

   const renderPage = () => {
    switch (currentPage) {
      case 'About Me':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;   
    }
  };

  return (
     <Container fluid style={{background:'#73937e', padding: '60px', maxWidth: '1440px' }}>
      <main className="mx-3" >{renderPage()}</main>
     </Container>
  );
}
