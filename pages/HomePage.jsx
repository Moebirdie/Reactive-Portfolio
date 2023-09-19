import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
//import Profile from '../src/components/UI/ProfileSections/ProfileTeaser';
//import ListItem from '../src/components/UI/ListItem';
import CardList from '../src/components/UI/CardList'
//import API from '../src/utils/API';
import projectData from '../Data/projects.json';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



export default function HomePage() {
  //set use state of projects = []
  const [projects, setProjects] = useState([]);

  //set use effect = projectData
  useEffect(() => {
 setProjects(projectData);
  }, []);
  //showing the array of projects
console.log(projectData);
  // Iterate over each project to display their own card
  return (
    <div>
      {projects.map((project) => (
        <Card key={project.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={project.image} />
          <Card.Body>
            <Card.Title>{project.projectName}</Card.Title>
            <Card.Text>{project.shortSummary}</Card.Text>
          </Card.Body>
          <Card.Body style={{display:"flex", justifyContent:"space-between"}}>
            <Card.Link href="{project.gitHubLink}">GitHub Repo</Card.Link>
            <Card.Link href="{project.deployedAppLink}">Deployed App</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
 }