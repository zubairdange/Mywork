import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
export const Tab1 = () => {
  const [Name, setName] = useState(" zubair  ");
  const [Location, setLocation] = useState(" Nanded  ");
  const handleChangeName = () => {
    setName("Ahmed");
    setLocation("Aurangabad");
  };
  const handleOnClear = () => {
    setName("  ");
    setLocation("   ");
  };
  return (
    <div>
      <Form.Group>
        <Form.Control
          size="lg"
          type="text"
          value={Name}
          placeholder="Large text"
        />
        <br />
        <Form.Control type="text" placeholder="Location" value={Location} />
        <br />
      </Form.Group>
      <Button variant="danger" onClick={handleChangeName}>
        Change Person
      </Button>
      <br />
      <Button variant="success" onClick={handleOnClear}>
        Clear
      </Button>
    </div>
  );
};
