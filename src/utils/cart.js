export const isInCart = (productId) => {
  if (
    JSON.parse(localStorage.getItem("cart")) &&
    JSON.parse(localStorage.getItem("cart")).some(
      (item) => item.product.Product_ID === productId
    )
  ) {
    return 1;
  }
  return 0;
};

export const addToCart = (product, quantity) => {
  if (JSON.parse(localStorage.getItem("cart"))) {
    return localStorage.setItem(
      "cart",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("cart")),
        { quantity, product },
      ])
    );
  } else {
    return localStorage.setItem(
      "cart",
      JSON.stringify([{ quantity, product }])
    );
  }
};

export const removeFromCart = (productId) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(
      JSON.parse(localStorage.getItem("cart")).filter(
        (item) => item.product.Product_ID !== productId
      )
    )
  );
};

export const changeQuantity = (productId, quantity) => {
  if (quantity < 1) {
    return removeFromCart(productId);
  }
  localStorage.setItem(
    "cart",
    JSON.stringify(
      JSON.parse(localStorage.getItem("cart")).map((item) => {
        if (item.product.Product_ID === productId) {
          return { ...item, quantity };
        }
        return item;
      })
    )
  );
};


export const clearCart = () => {
    localStorage.removeItem('cart')
}
