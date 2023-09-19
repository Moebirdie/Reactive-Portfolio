// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import projectData from '../Data/projects.json';
// import Card from 'react-bootstrap/Card';




// export default function HomePage() {
//   //set use state of projects = []
//   const [projects, setProjects] = useState([]);

//   //set use effect = projectData
//   useEffect(() => {
//  setProjects(projectData);
//   }, []);
//   //showing the array of projects
// console.log(projectData);
//   // Iterate over each project to display their own card
//   return (
//     <Container>
//     <div>
//       {projects.map((project) => (
//         <Card key={project.id} style={{ width: '18rem' }}>
//           <Card.Img variant="top" src={project.image} />
//           <Card.Body>
//             <Card.Title>{project.projectName}</Card.Title>
//             <Card.Text>{project.shortSummary}</Card.Text>
//           </Card.Body>
//           <Card.Body>
//             <Card.Link href="#">{project.gitHubLink}Card Link</Card.Link>
//             <Card.Link href="#">{project.deployedAppLink}</Card.Link>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//     </Container>
//   );
//  }
