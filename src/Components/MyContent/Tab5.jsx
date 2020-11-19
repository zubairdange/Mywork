import React from "react";
import { Button } from "react-bootstrap";

import { ValidatedForm } from "../MyForm/ValidatedForm";

export const Tab5 = () => {
  return (
    <div>
      <Button variant="primary ">Send Email </Button>
      <p>Validated Form</p>;
      <ValidatedForm />
    </div>
  );
};
