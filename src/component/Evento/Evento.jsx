import React from "react";
import EventImage from "../Asset/Event-img.png"
import "./Evento.scss";
import EventLeftContent from "./Event-content/Event-content-left";
import EventRightContent from "./Event-content/Event-content-right";

const Evento = () => {
  return (
    <div className="event-page container-fluid py-5 ">
      <div className="event-body">
        <div className="event-img ">
          <img
            src={EventImage}
            width="97%"
            height="97%"
            alt="event-img"
            className="img-fluid "
          />
        </div>
        <div className="event-content">
          <EventLeftContent />
          <EventRightContent />
        </div>
      </div>
    </div>
  );
};

export default Evento;
