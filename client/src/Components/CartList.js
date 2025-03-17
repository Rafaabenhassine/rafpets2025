import React from "react";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const CartList = () => {
  const Products = useSelector((state) => state.ListReducer.ListProduct);
  var k = 0;
  Products.map((prod) => (k = k + prod.price * prod.counter));

  return (
    <div>
      <h1>
        Total price:<span>{k}</span>
      </h1>
      {Products.filter((el) => el.cart === true).map((prod) => (
        <Cart prod={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default CartList;
