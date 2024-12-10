import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/portrait-removebg-preview.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET'S <span className="purple"> TALK </span> ABOUT ME
            </h1>
            <p className="home-about-body">
            I fell in love with programming during my studies, and since then, I’ve been on a journey of continuous learning and discovery. I might not know everything, but I’m always eager to learn something new! 🤓
              <br />
              <br />I’m fluent in frameworks and languages like 
              <i>
                <b className="purple"> React.js, Angular, and Spring Boot. </b>
              </i>
              <br />
              <br />
              My main interests lie in building modern web applications and exploring cutting-edge technologies. Recently, I’ve started learning &nbsp;
              <i>
                <b className="purple">Machine Learning </b> and
                {" "}
                <b className="purple">
                Artificial Intelligence
                </b>
              </i>
              <br />
              <br />
              Don’t hesitate to contact me to turn your projects into reality! 🚀

             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img src={myImg} className="img-fluid" alt="avatar" style={{ width: '65%' }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/settings/profile"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/allan-rakotomamonjy-649653228/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
