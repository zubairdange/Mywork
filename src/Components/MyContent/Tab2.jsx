import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import imgLogo from "../MyHome/amjad.png";
import Tauseef from "../MyHome/tauseef.jpg";
import tajjo from "../MyHome/tajjo.jpg";

export const Tab2 = ({ curentItem }) => {
  return (
    <div>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Col>
            <Card.Img variant="top" src={curentItem.cardImg} />
          </Col>
          <Col>
            <Card.Title>{curentItem.cardTitle}</Card.Title>
          </Col>

          <Card.Body>
            <Card.Text>{curentItem.cardText}</Card.Text>
            <Card.Link>{curentItem.cardLink}</Card.Link>

            {/* <Button
                variant="primary "
                href="https://www.youtube.com/results?search_query=react+js+by+mash+hamedani"
              >
                Learn React JS
              </Button> */}
          </Card.Body>
        </Card>
      </Col>

      {/* <Col>
          <Card style={{ width: "12rem" }}>
            <Card.Img variant="top" src={tajjo} />
            <Card.Body>
              <Card.Title>Tajammul</Card.Title>
              <Card.Text>Our Client</Card.Text>
              <Button
                variant="success"
                href="https://www.worldtravelguide.net/features/city-highlight/city-highlight-bucharest/"
              >
                Go{" "}
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Card style={{ width: "12rem" }}>
          <Card.Img variant="top" src={Tauseef} />
          <Card.Body>
            <Card.Title>React Developer</Card.Title>
            <Card.Text>Learn ReactJS</Card.Text>
            <Button
              variant="primary"
              href="https://www.facebook.com/mdtauseef27"
            >
              Profile
            </Button>
          </Card.Body>
        </Card> */}
    </div>
  );
};
