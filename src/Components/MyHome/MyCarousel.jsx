import React from "react";
import { Carousel, Container } from "react-bootstrap";
import Img from "../MyHome/img1.jpg";
import Img1 from "../MyHome/lake.jpg";
import Img2 from "../MyHome/sunset.jpg";
export const MyCarousel = () => {
  return (
    <Container>
      <div style={{ zoom: "60%" }}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Img} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <h2>Learn ReactJS</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Img1} alt="Third slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <h2>React fro development</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Img2} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <h2>Welcome to PickUpBizz</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
};
