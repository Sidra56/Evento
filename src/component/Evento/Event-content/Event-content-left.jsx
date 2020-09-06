import React from "react";
import LocationImage from "../../Asset/location.png";
import TimeImage from "../../Asset/time.png";
import Alimentos from "../../Asset/alimentos.png";
import Ninos from "../../Asset/ninos.png";
import Armas from "../../Asset/armas.png";
import Babidas from "../../Asset/babidas.png";
import Cinturones from "../../Asset/cinturones.png";
import Camara from "../../Asset/camara.png";
import Map from "../../Asset/map.png";
import Encendedores from "../../Asset/encendedores.png";
import Facebook from "../../Asset/facebook.svg";
import Whatsapp from "../../Asset/whatsapp.svg";
import Twitter from "../../Asset/twitter.svg";
import Mochillas from "../../Asset/mochilas.png";
import Sponsor1 from "../../Asset/sponsor1.png";
import Sponsor2 from "../../Asset/sponsor2.png";
import Sponsor3 from "../../Asset/sponsor3.jpg";
import Sponsor4 from "../../Asset/sponsor4.png";
import Sponsor5 from "../../Asset/sponsor5.png";
import Weather from "../../Asset/weather.png";

const EvenContentLeft = () => {
  return (
    <div className="event-content-left">
      <div className="event-description">
        <h3 className="event-name ">Formula 1-Gran Premio de la Ciudad de Mexico</h3>
       <div className="event-about">
       <a href="/" className="event-time">
       <img src={TimeImage} alt="time-icon" />
       15 de Septiembre - 8:30 pm
     </a>
     <a href="/" className="event-location">
       <img src={LocationImage} alt="location-icon" />
       Autodromo Hermanos Rodriguez
     </a>
       </div>
       
      </div>
      <div className="event-para">
        <p className="event-para-1">
          Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cuidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.{" "}
        </p>
        <p className="event-para-2">
          Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cuidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.{" "}
        </p>
      </div>
      <div className="event-restriction">
        <h5>Restricciones</h5>
        <div className="event-restriction-data">
          <p>
            <img src={Alimentos} alt="Alimentos-img" />
            No alimentos{" "}
          </p>

          <p>
            <img src={Babidas} alt="Babidas-img" />
            No bebidas{" "}
          </p>
          <p>
            <img src={Encendedores} alt="Encendedores-img" />
            No encendedores{" "}
          </p>
          <p>
            <img src={Camara} alt="Camara-img" />
            No camara profesional{" "}
          </p>

          <p>
            <img src={Armas} alt="Armas-img" />
            No armas{" "}
          </p>
          <p>
            <img src={Ninos} alt="Ninos-img" />
            No ninos menores de 5 anos{" "}
          </p>
          <p>
            <img src={Mochillas} alt="Mochillas-img" />
            No mochilas{" "}
          </p>
          <p>
            <img src={Cinturones} alt="Cinturones-img" />
            No cinturones
          </p>
        </div>
        <div className="event-weather">
          <img src={Weather} alt="weather-img" />
          <p>12°</p>
          <div className="weather-body">
            <span>Percialmente</span>
            <span>Nublado</span>
          </div>
        </div>
      </div>
      <div className="event-ubicacion">
        <h5>Ubicacion</h5>
        <div className="event-ubicacion-data">
          <img src={Map} alt="Map-img" className="img-fluid" />
          <p className=" py-4 ">
            Av, Viad. Rio de la Piedad S/n, Granjas Mexico, Iztacalco, 08400
            Iztacalco, CDMX{" "}
          </p>
          <button className="button btn btn-dark text-center py-3 px-5">
            Como IIegar
          </button>
        </div>
      </div>
      <div className="event-pagina">
        <div className="event-pagina-link py-5">
          <h5>Pagina Official</h5>
          <a href="https://www.formula1.com">https://www.formula1.com</a>
        </div>
        <div className="event-pagina-socialmedia ">
          <a href="/">
            <img src={Facebook} alt="facebook" />{" "}
          </a>
          <a href="/">
            <img src={Whatsapp} alt="whatsapp" />{" "}
          </a>
          <a href="/">
            <img src={Twitter} alt="twitter" />{" "}
          </a>
        </div>
      </div>
      <div className="event-sponsor">
        <div className="event-sponsor-data  py-5">
          <img
            src={Sponsor1}
            className="Sponsor1 img-fluid between"
            alt="sponsor-img"
          />
          <img
            src={Sponsor2}
            className="Sponsor2 img-fluid between"
            alt="sponsor-img"
          />
          <img
            src={Sponsor3}
            className="Sponsor3 img-fluid between"
            alt="sponsor-img"
          />
          <img
            src={Sponsor4}
            className="Sponsor4 img-fluid between"
            alt="sponsor-img"
          />
          <img
            src={Sponsor5}
            className=" Sponsor5 img-fluid"
            alt="sponsor-img"
          />
        </div>
      </div>
    </div>
  );
};

export default EvenContentLeft;
