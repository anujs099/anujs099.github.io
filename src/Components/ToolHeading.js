import React from "react";
import { Col, Row } from "react-bootstrap";

export default function ToolHeading() {
  return (
    <>
      <hr />
      <Row>
        <Col md={3}>
          <h2>Actions</h2>
          <h6 className="subheading">Move,Indent,Outdent,Delete</h6>
        </Col>
        <Col md={9}>
          <h2>Standard</h2>
          <h6 className="subheading">The text of the standard</h6>
        </Col>
      </Row>
      <hr />
    </>
  );
}
