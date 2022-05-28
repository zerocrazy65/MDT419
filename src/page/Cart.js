import "./Cart.css";
import React, { useEffect, useState, useContext } from "react";
import { removeFromCart, changeQuantity, clearCart } from "../utils/cart";
import CartContext from "../Context/CartContext";
import { Card } from "react-bootstrap";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const { setCartCount } = useContext(CartContext);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCartItem(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  const handleChangeQuantity = (productId, quantityToChange) => {
    if (quantityToChange < 1) {
      return setCartItem((cart) =>
        cart.filter((keyboard) => keyboard.product.Product_ID !== productId)
      );
    }
    changeQuantity(productId, quantityToChange);

    const cartList = cartItem.map((item) => {
      if (item.product?.Product_ID === productId) {
        return { ...item, quantity: quantityToChange };
      }
      return item;
    });

    setCartItem(cartList);
    setCartCount(cartList.ป);
  };

  const buyItem = () => {
    // axios.post('/',cartItem).then(res => console.log('ซื้อสำเร็จ'))
    console.log(cartItem);
    clearCart();
    setCartItem([]);
    setCartCount(0);
  };

  return (
    <div>
      <section class="bg-light py-5">
        <div class="container px-5 my-5">
          <div class="text-center mb-7">
            <h1 class="fw-bolder">Pay as you grow</h1>
            <p class="lead fw-normal text-muted mb-0">
              With our no hassle pricing plans
            </p>
            <br></br>
          </div>
          <div class="row gx-5 justify-content-center"></div>

          <Card>
            <Card.Header>Cart</Card.Header>
            <Card.Body>
              {cartItem.length > 0 ? (
                <div>
                  {cartItem.map((item) => (
                    <div key={item.product.Product_ID} className="ItemInCart">
                      <blockquote className="blockquote mb-0">
                        <img
                          class="card-img-top"
                          src={`image/sh/${item.product.thumbnailUrl}`}
                          alt="keyboard"
                        />
                      </blockquote>

                      <blockquote className="blockquote mb-0">
                        <button
                          class="btn btn-dark"
                          type="button"
                          onClick={() =>
                            handleChangeQuantity(
                              item.product.Product_ID,
                              item.quantity - 1
                            )
                          }
                        >
                          <i class="fa-solid fa-minus"></i>
                        </button>
                      </blockquote>

                      <blockquote className="blockquote mb-0">
                        <p>Total : {item.quantity}</p>
                      </blockquote>

                      <blockquote className="blockquote mb-0">
                        <button
                          class="btn btn-dark"
                          onClick={() =>
                            handleChangeQuantity(
                              item.product.Product_ID,
                              item.quantity + 1
                            )
                          }
                        >
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      </blockquote>
                      <blockquote className="blockquote mb-0">
                        <button
                          class="btn btn-danger"
                          type="button"
                          onClick={() => {
                            const cartList = cartItem.filter(
                              (keyboard) =>
                                keyboard.product.Product_ID !==
                                item.product.Product_ID
                            );
                            setCartItem(cartList);
                            removeFromCart(item.product.Product_ID);
                            setCartCount(cartList.length);
                          }}
                        >
                          <i class="fa fa-trash">
                            <p> </p>
                          </i>
                        </button>
                      </blockquote>
                    </div>
                  ))}
                </div>
              ) : (
                <div>YOU NOT HAVE ITEM ON CART</div>
              )}
            </Card.Body>
          </Card>
          <br></br>
          <button type="button" class="btn btn-primary" onClick={buyItem}>
            Buy now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
