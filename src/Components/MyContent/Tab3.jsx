import React, { useState } from "react";
import Dropdown from "react-dropdown";
import { Row, Col, Container, Button } from "react-bootstrap";
import "react-dropdown/style.css";

export const Tab3 = () => {
  const [PersonName, setPersonName] = useState("Zeeshan");
  const [Location, setLocation] = useState("Mumbai");
  const Nameoptions = ["Zubair", "Tauseef", "Khwaja", "Salman"];
  const LocOptions = ["Nanded", "Latur", "Pune", "Aurangabad"];

  const handelClear = () => {
    setPersonName(" ");
    setLocation(" ");
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <b>Slect name</b>;
            <Dropdown
              options={Nameoptions}
              value={Nameoptions[0]}
              placeholder="Select an Name"
              onChange={(e) => setPersonName(e.value)}
            />
          </Col>
          <Col>
            <b>Select Location</b>;
            <Dropdown
              options={LocOptions}
              value={LocOptions[0]}
              placeholder="select Location"
              onChange={(e) => setLocation(e.value)}
            />
          </Col>
        </Row>
      </Container>
      <b>
        you Selectd Person Name:- {PersonName} and Location is:- {Location}{" "}
      </b>{" "}
      <br></br>
      <Button onClick={handelClear}>Clear Name and Location</Button>
    </div>
  );
};
