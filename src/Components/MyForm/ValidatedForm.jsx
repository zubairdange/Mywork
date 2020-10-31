import React, { useState } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { string as yupString, object as yupObject } from "yup";
import { useFormik } from "formik";
import moment from "moment";
export const ValidatedForm = () => {
  //const [startDate, setStartDate] = useState(new Date());
  const [City, setCity] = useState("");
  const [Zip, setZip] = useState("");
  const [Hight, setHight] = useState("");
  const [Weight, setWeight] = useState("");
  const [Qualification, setQualification] = useState("");
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
  const validationSchema = yupObject().shape({
    firstName: yupString()
      .min(3, "Too short")
      .max(20, "Too long")
      .required("First name is required"),
    middleName: yupString().required("Middle name is required"),
    LastName: yupString()
      .min(3, "Too short")
      .max(20, "Too long")
      .required("Lastst name is required"),
    Email: yupString()
      .required("Emai Id is required")
      .email("* must be a valid email address"),
    Contact: yupString()
      .matches(phoneRegExp, "*Phone number is not valid")
      .required("contact no.is required"),
    phAddress: yupString().required("physical address is required"),
    perAddress: yupString().required("Permanant address is required"),
    fatherName: yupString()
      .min(3, "Too short")
      .max(20, "Too long")
      .required("Father`s name is required"),
    MothersName: yupString()
      .min(3, "Too short")
      .max(20, "Too long")
      .required("Mother name is required"),
  });

  const formik = useFormik({
    initialValues: {},
    validationSchema,
  });

  return (
    <Container>
      <center>
        <h1>Application Form</h1>
      </center>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              value={formik.values.firstName}
              maxLength={20}
              onChange={(e) =>
                formik.setFieldValue("firstName", e.target.value)
              }
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.firstName && formik.errors.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.firstName}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Midle Name"
              value={formik.values.MiddleName}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="LastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              value={formik.values.LastName}
              maxLength={20}
              onChange={(e) => formik.setFieldValue("LastName", e.target.value)}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.LastName && formik.errors.LastName}
            />
            {formik.touched.LastName && formik.errors.LastName && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.LastName}
              </Form.Control.Feedback>
            )}
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
          <Form.Group as={Col} controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={formik.values.Email}
              onChange={(e) => formik.setFieldValue("Email", e.target.value)}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.Email && formik.errors.Email}
            />
            {formik.touched.Email && formik.errors.Email && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.Email}
              </Form.Control.Feedback>
            )}{" "}
          </Form.Group>
          <Form.Group as={Col} controlId="Contact">
            <Form.Label>Contact No.</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Contact No."
              value={formik.values.Contact}
              onChange={(e) => formik.setFieldValue("Contact", e.target.value)}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.Contact && formik.errors.Contact}
            />
            {formik.touched.Contact && formik.errors.Contact && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.Contact}
              </Form.Control.Feedback>
            )}{" "}
          </Form.Group>
          <Form.Group as={Col} controlId="Date">
            <Form.Label
              style={{ paddingRight: "10px" }}
            >{`Date Of Birth :   `}</Form.Label>
            <br />
            <DatePicker
              id="DOB"
              selected={formik.values.DOB}
              className="form-control"
              onChange={(date) => formik.setFieldValue("DOB", date)}
              //showYearDropdown
              //showMonthDropdown
              maxDate={new Date()}
              onBlur={formik.handleBlur}
            />

            {formik.values.DOB &&
              moment().diff(moment(formik.values.DOB), "years") < 18 && (
                <React.Fragment>
                  <br />
                  <small class="text-danger">Age should above 18</small>
                </React.Fragment>
              )}
            {formik.values.DOB &&
              moment().diff(moment(formik.values.DOB), "years") > 30 && (
                <React.Fragment>
                  <br />
                  <small class="text-danger">Age should below 30</small>
                </React.Fragment>
              )}
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

        {/*<Form.Group controlId="phAddress">
          <Form.Label>Physical Address</Form.Label>
          <Form.Control
            placeholder="Enter Physical Address"
            value={formik.values.phAddress}
            onChange={(e) => formik.setFieldValue("phAddress", e.target.value)}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.phAddress && formik.errors.phAddress}
          />
          {formik.touched.phAddress && formik.errors.phAddress && (
            <Form.Control.Feedback type="invalid">
              {formik.errors.phAddress}
            </Form.Control.Feedback>
          )}{" "}
          </Form.Group>*/}
        <p>Family Details:-</p>
        <Form.Row>
          <Form.Group as={Col} controlId="fatherName">
            <Form.Label>Father name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Father Name"
              value={formik.values.fatherName}
              maxLength={20}
              onChange={(e) =>
                formik.setFieldValue("fatherName", e.target.value)
              }
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.fatherName && formik.errors.fatherName}
            />
            {formik.touched.fatherName && formik.errors.fatherName && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.fatherName}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          /{" "}
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="fatherName">
            <Form.Label>Mother name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mother Name"
              value={formik.values.fatherName}
              maxLength={20}
              onChange={(e) =>
                formik.setFieldValue("MotherName", e.target.value)
              }
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.MotherName && formik.errors.MotherName}
            />
            {formik.touched.MotherName && formik.errors.MotherName && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.MotherName}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          /{" "}
        </Form.Row>

        <Form.Group controlId="perAddress">
          <Form.Label>Permanent Address</Form.Label>
          <Form.Control
            placeholder="Enter permanent address"
            value={formik.values.perAddress}
            onChange={(e) => formik.setFieldValue("perAddress", e.target.value)}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.perAddress && formik.errors.perAddress}
          />
          {formik.touched.perAddress && formik.errors.perAddress && (
            <Form.Control.Feedback type="invalid">
              {formik.errors.perAddress}
            </Form.Control.Feedback>
          )}{" "}
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
      </Form>

      <center>
        <Button variant="primary">Submit</Button>
        {"    "}
        <Button variant="primary">cancel</Button>
      </center>
    </Container>
  );
};
