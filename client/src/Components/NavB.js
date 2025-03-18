import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

function NavB({ setInputSearch }) {
  const Navigation = useNavigate();
  const handleRegister = () => {
    Navigation("/Register");
    console.log("register !");
  };
  const Products = useSelector((state) => state.ListReducer.ListProduct);
  var j = 0;
  Products.map((prod) => (prod.cart ? (j = j + 1) : j));
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand style={{ color: "blue" }} href="#">
          Rafpets
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <button className="navbar button">
              <Link to={"/"}> Home </Link>
            </button>
            <button className="navbar button">
              <Link to={"/User"}> User </Link>
            </button>
            <button className="navbar button">
              <Link to={"/Login"}> Login</Link>
            </button>

            <Button onClick={() => handleRegister()}>Register</Button>

            <Link to={"/cart"}>
              {" "}
              <Button>
                {j}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="red"
                  className="bi bi-basket2"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z" />
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z" />
                </svg>{" "}
              </Button>
            </Link>
            <Link to={"/AddProduct "}>
              <Button>Add New Product</Button>
            </Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <Button
              className="buttonStyle"
              onClick={() => setInputSearch("")}
              variant="outline-success"
            >
              Clear
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavB;
