import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/graph3.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/ecalendar.jpg";
import chatify from "../../Assets/Projects/ticket.jpg";
import suicide from "../../Assets/Projects/task.png";
import bitsOfCode from "../../Assets/Projects/vibees.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
  <ProjectCard
    imgPath={chatify}
    title={<strong><u>Webinary Event by TicketPlace</u></strong>}
    description={
      <>
        Responsible for designing and integrating a new feature using 
        <span style={{ color: "yellow" }}> Symfony 3 </span> and 
        <span style={{ color: "yellow" }}> Twig</span>: enabling users to attend online events through the Ticketplace platform, integrating the 
        <span style={{ color: "yellow" }}> Zoom API </span> to host sessions, and creating dedicated e-tickets for efficient participant management.
        <br />
        Here's the link to access TicketPlace: <a href="https://www.ticketplace.io/" target="_blank" rel="noopener noreferrer">TicketPlace</a>
      </>
    }
  />
</Col>



<Col md={4} className="project-card">
  <ProjectCard
    imgPath={bitsOfCode}
    isBlog={false}
    title={<strong><u>Vibee's virtual expo</u></strong>}
    description={
      <>
        Vibee's virtual expo allows exhibitors to showcase their stands virtually, enabling users to explore them without traveling, using an interactive interface. 
        I was responsible for integrating the interface with <span style={{ color: "yellow" }}>React.js</span>, ensuring smooth navigation and an optimal user experience.
        <br />
        Here's the link to access it: <a href="https://vibees-salon.netlify.app/" target="_blank" rel="noopener noreferrer">Vibee's Virtual Expo</a>
      </>
    }
  />
</Col>



<Col md={4} className="project-card">
  <ProjectCard
    imgPath={editor}
    isBlog={false}
    title={<strong><u>E-Calendar</u></strong>}
    description={
      <>
        This project aims to develop a personalized calendar application for a school, integrating the <span style={{ color: "yellow" }}>Google Calendar API</span>. 
        The backend is built with <span style={{ color: "yellow" }}>Next.js</span>, providing features such as event management, authentication, and synchronization with <span style={{ color: "yellow" }}>Google Calendar</span>. 
        The frontend is developed with <span style={{ color: "yellow" }}>Angular</span>, delivering an intuitive and modern user interface for teachers, students, and administrators.
      </>
    }
  />
</Col>


<Col md={4} className="project-card">
  <ProjectCard
    imgPath={leaf}
    isBlog={false}
    title={<strong><u>Diabetes Age Predictor</u></strong>}
    description={
      <>
        This project explores the application of supervised <span style={{ color: "yellow" }}>machine learning</span> to analyze the relationship between a physiological factor (age) and diabetes progression in patients. 
        Using the <span style={{ color: "yellow" }}>scikit-learn</span> "Diabetes" dataset, the project implements a simple linear regression model to predict disease progression as a function of age.
      </>
    }
  />
</Col>



<Col md={4} className="project-card">
  <ProjectCard
    imgPath={suicide}
    isBlog={false}
    title={<strong><u>Task Management</u></strong>}
    description={
      <>
        This project is a simple web application to manage tasks using <span style={{ color: "yellow" }}>Python</span>, <span style={{ color: "yellow" }}>Pandas</span>, and <span style={{ color: "yellow" }}>Gradio</span>. It allows users to create, view, update, and delete tasks through a user-friendly interface. Each task is identified by a unique ID and includes a name and status. The data is managed efficiently with <span style={{ color: "yellow" }}>Pandas</span>, while the interactive interface is powered by <span style={{ color: "yellow" }}>Gradio</span>.
      </>
    }
  />
</Col>


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
