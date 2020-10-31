import React, { useState } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const MyForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [FirstName, setFirstName] = useState("Zubair");
  const [MidleName, setMidleName] = useState("Ahmed");
  const [LastName, setLastName] = useState("Dange");
  const [Email, setEmail] = useState("zubairdange@gmail.com");
  const [Contact, setContact] = useState("8600134340");
  const [PhysicalAdress, setPhysicalAdress] = useState("Perrburhan");
  const [PermanentAdress, setPermanentAdress] = useState("");
  const [City, setCity] = useState("");
  const [Zip, setZip] = useState("");
  const [Hight, setHight] = useState("");
  const [Weight, setWeight] = useState("");
  const [Qualification, setQualification] = useState("");
  return (
    <Container>
      <center>
        <h1>Application Form</h1>
      </center>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              onFocus={() => setFirstName("  ")}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Midle Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Midle Name"
              value={MidleName}
              onChange={(e) => setMidleName(e.target.value)}
              onFocus={() => setMidleName(" ")}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              onFocus={() => setLastName(" ")}
            />
          </Form.Group>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Select Gender</Form.Label>
              <Form.Control as="select" custom>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              Value={Email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmail(" ")}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Contact No.</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Contact No."
              Value={Contact}
              onChange={(e) => setContact(e.target.value)}
              onFocus={() => setContact("")}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="DOB">
            <Form.Label>DOB</Form.Label>

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Hight</Form.Label>
            <Form.Control
              value={Hight}
              onChange={(e) => setHight(e.currentTarget.value)}
              onFocus={() => setHight("")}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Weight</Form.Label>
            <Form.Control
              value={Weight}
              onChange={(e) => setWeight(e.currentTarget.value)}
              onFocus={() => setWeight("")}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Qualification</Form.Label>
            <Form.Control
              value={Qualification}
              onChange={(e) => setQualification(e.currentTarget.value)}
              onFocus={() => setQualification("")}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Physicsl Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            value={PhysicalAdress}
            onChange={(e) => setPhysicalAdress(e.target.value)}
            onFocus={() => setPhysicalAdress("   ")}
          />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Permanent Address</Form.Label>
          <Form.Control
            placeholder="Apartment, studio, or floor"
            value={PermanentAdress}
            onChange={(e) => setPermanentAdress(e.target.value)}
            onFocus={() => setPermanentAdress("")}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={City}
              onChange={(e) => setCity(e.currentTarget.value)}
              onFocus={() => setCity("")}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Maharashtra</option>
              <option>Telangana</option>
              <option>Andhra</option>
              <option>Gova</option>
              <option>Jharkhand</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              value={Zip}
              onChange={(e) => setZip(e.target.value)}
              onFocus={() => setZip("")}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <center>
          <Button variant="primary">Submit</Button>
          {"    "}
          <Button variant="primary">cancel</Button>
        </center>
      </Form>
    </Container>
  );
};
