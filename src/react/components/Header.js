import React from "react";
import "./Header.css";
import image1 from "../../images/kwitterHeaderImage1.jpg";
import image2 from "../../images/kwitterHeaderImage2.jpg";
import image3 from "../../images/kwitterHeaderImage3.jpg";
import logoLarge from "../../images/logoLarge.png";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { HashLink as Link } from "react-router-hash-link";

export class Header extends React.Component {
  render() {
    return (
      <div className="sliderWrapper">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="First slide" />
            <Carousel.Caption>
              <img src={logoLarge} alt="logo" className="slideLogo" />
              <h3 className="slideHeader">READY TO QUIT?</h3>
              <p className="slideParagraph">
                YOU NEED ANONYMOUS SUPPORT.
                <br />
                QUITTERS GIVES YOU THAT 1 ON 1 SUPPORT TO SUCCEED.
              </p>
              <Link to="/register#yourAnchorTag">
                <Button variant="danger" className="header-button">
                  JOIN TODAY
                </Button>
              </Link>
              &nbsp;&nbsp;
              <Link to="/#yourAnchorTag">
                <Button variant="danger" className="header-button">
                  LOGIN NOW
                </Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Third slide" />
            <Carousel.Caption>
              <img src={logoLarge} alt="logo" className="slideLogo" />
              <h3 className="slideHeader">READY TO QUIT?</h3>
              <p className="slideParagraph">
                YOU NEED ANONYMOUS SUPPORT.
                <br />
                QUITTERS GIVES YOU THAT 1 ON 1 SUPPORT TO SUCCEED.
              </p>
              <Link to="/#yourAnchorTag">
                <Button variant="danger" className="header-button">
                  JOIN TODAY
                </Button>
              </Link>
              &nbsp;&nbsp;
              <Link to="/#yourAnchorTag">
                <Button variant="danger" className="header-button">
                  LOGIN NOW
                </Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />

            <Carousel.Caption>
              <img src={logoLarge} alt="logo" className="slideLogo" />
              <h3 className="slideHeader">READY TO QUIT?</h3>
              <p className="slideParagraph">
                YOU NEED ANONYMOUS SUPPORT.
                <br />
                QUITTERS GIVES YOU THAT 1 ON 1 SUPPORT TO SUCCEED.
              </p>
              <Link to="/#yourAnchorTag">
                <Button variant="danger" className="header-button">
                  JOIN TODAY
                </Button>
              </Link>
              &nbsp;&nbsp;
              <Link to="/#yourAnchorTag">
                <Button variant="danger" className="header-button">
                  LOGIN NOW
                </Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
