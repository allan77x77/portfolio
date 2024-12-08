import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import ".//about.css"

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Allan RAKOTOMAMONJY </span>
            from <span className="purple"> Madagascar</span>
            <br />
            
            <br />
  I completed my bachelor's program and now I'm in MSc in AI with machine learning. My main goal is to combine <span className="purple">creativity</span> and technical expertise to deliver <span className="purple">high-quality</span> products. Whether it's automating processes, developing interactive tools, or enhancing your digital presence, I am here to <span className="purple">turn your ideas into reality</span>. I place great importance on ease of use, performance, and an appealing design.
  <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="emoji feuille">🍃⛺</span> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="emoji basket">🏀</span> Basket-ball
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="emoji avion">✈️</span> Travelling
            </li>
          </ul>
          

          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
