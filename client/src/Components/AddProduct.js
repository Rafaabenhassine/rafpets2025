import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../JS/Actions/Actions";

const AddProduct = () => {
  const [Product, setProduct] = useState({ id: Math.random() });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(Product);
  const handleChange = (e) => {
    setProduct({ ...Product, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    dispatch(addProduct(Product));
    navigate("/");
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter name"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Product description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="description"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            placeholder="Price"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Product Photo</Form.Label>
          <Form.Control
            name="posterUrl"
            type="text"
            placeholder="Product Photo"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            name="dispo"
            type="checkbox"
            label="Check me out"
            onChange={(e) =>
              setProduct({ ...Product, avilable: e.target.checked })
            }
          />
        </Form.Group>

        <Button onClick={() => handleClick()} variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
