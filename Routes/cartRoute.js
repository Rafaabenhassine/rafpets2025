const express = require("express");
const {
  addToCart,
  getCart,
  updateCart,
  removeFromCart,
  clearCart,
} = require("../Controllers/cartController");
const router = express.Router();

// Ajouter un produit au panier
router.post("/add", addToCart);

// Afficher le contenu du panier d'un utilisateur
router.get("/", getCart);

// Mettre à jour la quantité d'un produit dans le panier
router.put("/update/:productId", updateCart);

// Supprimer un produit du panier
router.delete(
  "/remove/:productId",

  removeFromCart
);

// Vider le panier
router.delete("/clear", clearCart);

module.exports = router;
