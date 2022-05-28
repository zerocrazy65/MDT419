import { Button, InputGroup } from "react-bootstrap";
import React, { useEffect, useState, useContext } from "react";
import "./AppShopingDetail.css";
import { addToCart, isInCart } from "../utils/cart";
import CartContext from "../Context/CartContext";

function AppShopingDetail(props) {
  const { KeyboardDetail } = props;
  const [quatity, setQuantity] = useState(1);
  const [isAlready, setIsAlready] = useState(false);
  const { cartCount, setCartCount } = useContext(CartContext);

  const handleDecrement = () => {
    if (quatity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevCount) => prevCount + 1);
  };

  const handleAddToCart = () => {
    addToCart(KeyboardDetail, quatity);
    setCartCount(cartCount + 1);
    setIsAlready(true);
  };

  useEffect(() => {
    setIsAlready(isInCart(KeyboardDetail?.Product_ID));
  }, [KeyboardDetail]);

  return (
    <section class="py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="row gx-4 gx-lg-5 align-items-center">
          <div class="col-md-6">
            <img
              class="card-img-top mb-5 mb-md-0"
              src={require(`../../public/image/sh/${KeyboardDetail.thumbnailUrl}`)}
              alt="keyboard"
            />
          </div>
          <div class="col-md-6">
            <div className="container">
              <div class="small mb-1">MGC: {KeyboardDetail.Product_ID}</div>
              <h3 class="display-5 fw-bolder">{KeyboardDetail.Product_Name}</h3>
              <div class="fs-5 mb-5">
                <span>{KeyboardDetail.Product_Price} Baht</span>
              </div>

              <hr></hr>
              <h6>LAYOUT</h6>
              <div class="d-flex">
                <Button variant="outline-dark">
                  Layout {KeyboardDetail.Product_Layout}
                </Button>
              </div>
              <br></br>

              <h6>TYPE</h6>
              <div class="d-flex">
                <Button variant="outline-dark">{KeyboardDetail.Product_cap}</Button>
              </div>
              <br></br>

              <h6>SWITCHES</h6>

              <div class="btn-toolbar text-center well">
                <div class="d-flex">
                  <Button variant="outline-dark">{KeyboardDetail.Product_Switches1}</Button>
                  <Button variant="outline-dark">{KeyboardDetail.Product_Switches2}</Button>
                  <Button variant="outline-dark">{KeyboardDetail.Product_Switches3}</Button>
                </div>
              </div>

              <br></br>

              <h6>QUANTITY</h6>
              <InputGroup className="mb-3">
                <Button
                  type="button"
                  variant="outline-dark"
                  onClick={handleDecrement}
                  className="input-group-text"
                >
                  -
                </Button>
                <div className="form-control text-center sm">{quatity}</div>
                <Button
                  type="button"
                  variant="outline-dark"
                  onClick={handleIncrement}
                  className="input-group-text"
                >
                  +
                </Button>
              </InputGroup>
              <br></br>

              <br></br>
              <div className="d-grid gap-2">
                {isAlready ? (
                  <Button variant="secondary" size="lg" onClick={() => {}}>
                    คุณเพิ่มสินค้านี้แล้ว
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                )}
              </div>

              <br></br>

              <p class="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium at dolorem quidem modi. Nam sequi consequatur
                obcaecati excepturi alias magni, accusamus eius blanditiis
                delectus ipsam minima ea iste laborum vero?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppShopingDetail;
