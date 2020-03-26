import React from "react";
import "./Header2.css";
import image1 from "../../images/kwitterHeader2Image1.jpg";
import image2 from "../../images/kwitterHeader2Image2.jpg";
import image3 from "../../images/kwitterHeader2last.jpg";
import Carousel from "react-bootstrap/Carousel";

export class Header2 extends React.Component {
  render() {
    return (
      <div className="sliderWrapper">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="First slide" />
            <Carousel.Caption>
              <h3 className="slideHeader">READY TO QUIT?</h3>
              <p>
                YOU NEED ANONYMOUS SUPPORT.
                <br />
                QUITTERS GIVES YOU THAT 1 ON 1 SUPPORT TO SUCCEED.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Third slide" />
            <Carousel.Caption>
              <h3 className="slideHeader">READY TO QUIT?</h3>
              <p>
                YOU NEED ANONYMOUS SUPPORT.
                <br />
                QUITTERS GIVES YOU THAT 1 ON 1 SUPPORT TO SUCCEED.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />

            <Carousel.Caption>
              <h3 className="slideHeader">READY TO QUIT?</h3>
              <p>
                YOU NEED ANONYMOUS SUPPORT.
                <br />
                QUITTERS GIVES YOU THAT 1 ON 1 SUPPORT TO SUCCEED.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
