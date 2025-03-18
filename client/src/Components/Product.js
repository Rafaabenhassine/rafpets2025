import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import {
  addCart,
  deleteProduct,
  availableProduct,
  min,
  plus,
} from "../JS/Actions/Actions";

function Product({ Prod }) {
  const dispatch = useDispatch();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Prod.posterUrl} />
      <Card.Body>
        <Card.Title>{Prod.name}</Card.Title>
        <Card.Text>Description : {Prod.description}</Card.Text>

        <Card.Text>Price : {Prod.price}</Card.Text>
        <Button
          onClick={() => dispatch(min(Prod.id))}
          style={{ borderRadius: 50 }}
        >
          -
        </Button>
        <i>{Prod.counter}</i>
        <Button
          onClick={() => dispatch(plus(Prod.id))}
          style={{ borderRadius: 50 }}
        >
          +
        </Button>
        <Button
          onClick={() => dispatch(availableProduct(Prod.id))}
          variant={Prod.available ? "success" : "danger"}
        >
          {Prod.available ? <span>available</span> : <span>unavailable</span>}
        </Button>
        <Button onClick={() => dispatch(deleteProduct(Prod.id))}>Delete</Button>
        <Button onClick={() => dispatch(addCart(Prod.id))}>
          {" "}
          {Prod.cart ? "remove from cart" : "add to cart"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
