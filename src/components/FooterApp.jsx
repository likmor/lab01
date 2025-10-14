import { Container, Row } from "react-bootstrap";

function FooterApp() {
  return (
    <footer>
      <Container className="">
        <Row className="flex justify-content-center align-items-center">
          <img
            alt=""
            src="/src/assets/wsei.png"
            width="130"
            height="130"
            className="d-inline-block align-top"
          />
          <b>daniil.hoiman@microsoft.wsei.edu.pl</b>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterApp;
