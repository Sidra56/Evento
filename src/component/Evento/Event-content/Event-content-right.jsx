import React from "react";
import Share from "../../Asset/share.svg";
import { Card, ListGroup } from "react-bootstrap";
import Ball from "../../Asset/ball.svg";

const EventContentRight = () => {
  return (
    <div className="event-content-right ">
      <a href="/" className="ball-img">
        <img src={Ball} alt="ball-img" className="img-fluid" />
      </a>
      <a href="/" className="link-img">
        <img src={Share} alt="link-img" className="img-fluid" />
        <p>Compartir</p>
      </a>
      <Card
        className="event-card  "
        style={{ width: "25rem", paddingTop: "2rem" }}
      >
        <ListGroup variant="flush " style={{ padding: "0 1.5rem 0 1.5rem" }}>
          <ListGroup className="first px-2">Boletos</ListGroup>
          <ListGroup.Item className="py-4 px-2">
            General<span>$450</span>
          </ListGroup.Item>
          <ListGroup.Item className=" py-4 px-2">
            Grade A<span>$700</span>
          </ListGroup.Item>
          <ListGroup.Item className="py-4 px-2">
            Curva Principal<span className=" ">$1,350</span>
          </ListGroup.Item>
          <ListGroup.Item className="py-4 px-2">
            Platino<span>$2,000</span>
          </ListGroup.Item>
          <ListGroup.Item className=" py-3 px-2">
            Seccion VIP<span>$2,700</span>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup className=" last text-center  py-4 text-white text-bold">
          Ver Boletos
        </ListGroup>
      </Card>
    </div>
  );
};

export default EventContentRight;
