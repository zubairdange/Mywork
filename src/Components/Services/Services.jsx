import React from "react";
import { Progressbar } from "./Progressbar";
import { Row, Col } from "react-bootstrap";
export const Services = () => {
  return (
    <span>
      <b>This is my services</b>;
      <Row>
        <Col></Col>
        <Progressbar />
        <Col>
          <Progressbar />
        </Col>
        <Col>
          <Progressbar />
        </Col>
      </Row>
    </span>
  );
};
