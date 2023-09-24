import Container from 'react-bootstrap/Container';
import HorizontalStack from './UI/GridsAndStacks/HorizontalStack';

export default function Footer() {
  return (
  <>  
  <Container fluid style= {{ height:'100px', background: '#ffffff', padding: '20px', position: 'sticky', bottom: 0 }}>
    <Container style={{width: '100%'}}> 
    </Container>
    <HorizontalStack />
    <p style={{fontFamily:'Roboto', textAlign: 'center', paddingTop:'10px'}}>&copy; 2023 Maureen Erbe-Maher </p>
  </Container>
  </>
)
}