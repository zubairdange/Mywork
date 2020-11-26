import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";
import { Radio } from "rsuite";
import { Container, Row, Col } from "react-bootstrap";

export const Progressbar = () => {
  return (
    <Container>
      <Row>
        <input type="radio" />

        <Col>
          <ProgressBar completed={90} />
        </Col>
      </Row>
    </Container>
  );
};
