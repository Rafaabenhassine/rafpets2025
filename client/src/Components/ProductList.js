import { React } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import "./ProductList.css";

const ProductList = () => {
  const Products = useSelector((state) => state.ListReducer.ListProduct);
  console.log(Products);
  var j = 0;
  Products.map((prod) => (prod.cart ? (j = j + 1) : j));

  return (
    <div>
      <div className="d-flex">
        {Products.map((Prod) => (
          <Product Prod={Prod} key={Prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
