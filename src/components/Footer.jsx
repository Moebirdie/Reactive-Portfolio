import Container from 'react-bootstrap/Container';
import HorizontalStack from './UI/GridsAndStacks/HorizontalStack';

export default function Footer() {
  return (
  <>  
  <Container fluid className="profile-footer">
    <Container style={{width: '100%'}}> 
    </Container>
    <HorizontalStack />
    <p style={{fontFamily:'Roboto', textAlign: 'center', paddingTop:'10px'}}>&copy; 2023 Maureen Erbe-Maher </p>
  </Container>
  </>
)
}