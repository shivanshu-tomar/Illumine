import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DeclarationComponent from "../Components/DeclarationComponent";
import DetailsComponent from "../Components/DetailsComponent";
function BodyContainer() {
  return (
    <>
      <Container>
        <div style={{ display: "block" }}>
          <center>
            <h4>Resume Details</h4>
          </center>
          <Row>
            <Col
              xs={6}
              md={3}
              style={{
                backgroundColor: "##e3d2cf",
                height: "80vh",
              }}
            >
              <DetailsComponent />
            </Col>
            <Col
              xs={12}
              md={9}
              style={{
                backgroundColor: "#868cb5",
              }}
            >
              Sample Second Col
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                backgroundColor: "#9e847e",
              }}
            >
              <DeclarationComponent></DeclarationComponent>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default BodyContainer;
