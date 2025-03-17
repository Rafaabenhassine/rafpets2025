import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import Home from "./Components/Pages/Home";
import User from "./Components/Pages/User";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./Components/ProductList";
import AddProduct from "./Components/AddProduct";
import { useState } from "react";
import NavB from "./Components/NavB";
import CartList from "./Components/CartList";

function App() {
  const [inputsearch, setInputSearch] = useState("");

  return (
    <div className="App">
      <NavB setInputSearch={setInputSearch} inputsearch={inputsearch} />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/User" element={<User />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/AddProduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
