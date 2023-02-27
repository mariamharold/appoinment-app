import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AddModal } from "./AddModal";
import { useState } from "react";

const Doctors = ({ doctors, setAppointments, appointments }) => {
  const [show, setShow] = useState(false);
  const [selectedDrName, setSelectedDrName] = useState("");

  const handleClick = (drName) => {
    setShow(true);
    setSelectedDrName(drName);
  };

  return (
    <Container className="p-2">
      <h3 className="display-6" style={{ color: "166,18,189" }}>
        Our Doctors
      </h3>

      <Row>
        {doctors.map((dr) => (
          <Col key={dr.id} xs={6} sm={4} md={3}>
            <img
              src={dr.img}
              alt={dr.name}
              className="img-thumbnail doctor-img"
              onClick={() => handleClick(dr.name)}
            />
            <h4>{dr.name}</h4>
            <h5>{dr.dep}</h5>
          </Col>
        ))}
      </Row>
      <AddModal
        show={show}
        handleClose={() => setShow(false)}
        drName={selectedDrName}
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </Container>
  );
};

export default Doctors;
