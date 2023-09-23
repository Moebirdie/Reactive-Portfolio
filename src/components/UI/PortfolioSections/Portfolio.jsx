import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import projectData from '../../../../Data/projects.json';
import CategoryData from '../../../../Data/categories.json';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Row';



export default function Portfolio() {
  //set use state of projects = []
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);

  //set use effect = projectData
  useEffect(() => {
    setProjects(projectData);
  }, []);
  useEffect(() => {
    setCategories(CategoryData);
  }, []);

  //showing the array of projects
  console.log(projectData);

  const projectsByCategory = {};
  projects.forEach((project) => {
    if (!projectsByCategory[project.categoryId]) {
      projectsByCategory[project.categoryId] = [];
    }
    projectsByCategory[project.categoryId].push(project);
  });
  // Iterate over each project to display their own card
  return (
    <Container >
      {categories.map((category) => (
        <div key={category.id}>
          <div style={{paddingTop: '80px'}}><h2>{category.categoryName}</h2></div>
          <hr />
      <Container>
        <Row xs={1} md={4} className="g-4">
          {projectsByCategory[category.id]?.map((project) => (
            <Col key={project.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.projectName}</Card.Title>
                  <Card.Text>{project.shortSummary}</Card.Text>
                </Card.Body>
                <Card.Body style={{ display: "flex", justifyContent: "space-between" }}>
                  <Card.Link href="{project.gitHubLink}">GitHub Repo</Card.Link>
                  <Card.Link href="{project.deployedAppLink}">Deployed App</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      </div>
      )
      )}
    </Container>
  )
}