// Bringing in the required import from 'react-router-dom'
import { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import PortfolioContainer from './components/PortfolioContainer';


function App() {
  const [currentPage, setCurrentPage] = useState('About Me');

  const updateCurrentPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Nav currentPage={currentPage} updateCurrentPage={updateCurrentPage} />
      <PortfolioContainer currentPage={currentPage}/>
      <Footer />
    </>
  );
}

export default App;
