import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Carousel } from "react-bootstrap";

function AppSlide() {
  return (
    <div className="carousel">
      <Carousel variant="light">
        <Carousel.Item>
          <img className="d-block w-100" src="/image/1K2.png" alt="Imgslide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/image/GMK.png" alt="Imgslide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/image/Q1.png" alt="Imgslide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AppSlide;
