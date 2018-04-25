import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

import NavigationBar from "../medium/NavigationBar";
import PageTitle from "../small/PageTitle";

const Page = props => (
  <Container>
    <Row className="text-center">
      <Col xs={12}>
        <NavigationBar />
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col xs={10} md={6} lg={4}>
        <PageTitle>{props.title}</PageTitle>
        {props.children}
      </Col>
    </Row>
  </Container>
);

export default Page;
