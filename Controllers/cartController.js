// Importation des dépendances
const Cart = require("../Models/cartModel"); // Modèle du panier
const Product = require("../Models/productModel"); // Modèle des produits

// Ajouter un article au panier
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    // Vérifier si le produit existe
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }

    // Vérifier si l'article est déjà dans le panier
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      // Créer un panier si aucun n'existe
      cart = new Cart({ user: req.user._id, items: [] });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );
    if (itemIndex > -1) {
      // Mettre à jour la quantité de l'article existant
      cart.items[itemIndex].quantity += quantity;
    } else {
      // Ajouter un nouvel article au panier
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();
    res.status(200).json({ message: "Produit ajouté au panier", cart });
  } catch (err) {
    res.status(500).json({
      message: "Erreur lors de l'ajout au panier",
      error: err.message,
    });
  }
};

// Afficher les articles du panier
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate(
      "items.product"
    );
    if (!cart) {
      return res.status(404).json({ message: "Panier vide" });
    }
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({
      message: "Erreur lors de la récupération du panier",
      error: err.message,
    });
  }
};

// Mettre à jour la quantité d'un article dans le panier
exports.updateCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: "Panier non trouvé" });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity = quantity;
      if (quantity === 0) {
        cart.items.splice(itemIndex, 1); // Supprimer l'article si la quantité est 0
      }
    } else {
      return res
        .status(404)
        .json({ message: "Article non trouvé dans le panier" });
    }

    await cart.save();
    res.status(200).json({ message: "Panier mis à jour", cart });
  } catch (err) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour du panier",
      error: err.message,
    });
  }
};

// Supprimer un article du panier
exports.removeFromCart = async (req, res) => {
  try {
    const { productId } = req.body;

    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: "Panier non trouvé" });
    }

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId
    );

    await cart.save();
    res.status(200).json({ message: "Produit supprimé du panier", cart });
  } catch (err) {
    res.status(500).json({
      message: "Erreur lors de la suppression du produit",
      error: err.message,
    });
  }
};

// Vider le panier
exports.clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: "Panier non trouvé" });
    }

    cart.items = [];
    await cart.save();
    res.status(200).json({ message: "Panier vidé", cart });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erreur lors du vidage du panier", error: err.message });
  }
};
