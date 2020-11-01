import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MyContent } from "../MyContent/MyContent";
import { MyHome } from "../MyHome/MyHome";
import { AboutUs } from "../AboutUs/AboutUs";
import { MyBlogs } from "../MyBlogs/MyBlogs";
import { Services } from "../Services/Services";

export const MyNavBar = () => {
  return (
    <React.Fragment>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar sticky="top" />
        <Navbar.Brand>
          <i> Mywork</i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="home">My Home</Nav.Link>
            <Nav.Link href="link">Services</Nav.Link>
            <Nav.Link href="mycontent">My Content</Nav.Link>
            <Nav.Link href="about">About us</Nav.Link>
            <Nav.Link href="blogs">My Blogs</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button
              variant="outline-success"
              herf="https://www.google.com/search?q=Bat"
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Router>
        <Switch>
          <Route path="/mycontent">
            <MyContent />
          </Route>
          <Route path="/home">
            <MyHome />
          </Route>
          <Route path="/link">
            <Services />
          </Route>
          <Route path="/blogs">
            <MyBlogs />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};
