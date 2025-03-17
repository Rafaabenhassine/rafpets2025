// Importation des dépendances
const Order = require("../Models/orderModel");
const Cart = require("../Models/cartModel");

// Créer une commande
exports.createOrder = async (req, res) => {
  try {
    const { shippingAddress, paymentMethod } = req.body;

    // Vérifier si l'utilisateur a un panier
    const cart = await Cart.findOne({ user: req.user._id }).populate(
      "items.product"
    );
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Votre panier est vide" });
    }

    // Calculer le total de la commande
    const orderTotal = cart.items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);

    // Créer une nouvelle commande
    const order = new Order({
      user: req.user._id,
      items: cart.items,
      shippingAddress,
      paymentMethod,
      totalAmount: orderTotal,
      status: "Pending", // Statut initial de la commande
    });

    // Enregistrer la commande dans la base de données
    await order.save();

    // Vider le panier après la création de la commande
    cart.items = [];
    await cart.save();

    res.status(201).json({ message: "Commande créée avec succès", order });
  } catch (err) {
    res.status(500).json({
      message: "Erreur lors de la création de la commande",
      error: err.message,
    });
  }
};

// Afficher les commandes d'un utilisateur
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "Aucune commande trouvée" });
    }

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({
      message: "Erreur lors de la récupération des commandes",
      error: err.message,
    });
  }
};

// Afficher une commande par son ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("items.product");
    if (!order) {
      return res.status(404).json({ message: "Commande non trouvée" });
    }

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({
      message: "Erreur lors de la récupération de la commande",
      error: err.message,
    });
  }
};

// Mettre à jour le statut d'une commande
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Commande non trouvée" });
    }

    order.status = status;
    await order.save();

    res
      .status(200)
      .json({ message: "Statut de la commande mis à jour", order });
  } catch (err) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour de la commande",
      error: err.message,
    });
  }
};

// Supprimer une commande
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Commande non trouvée" });
    }

    await order.remove();
    res.status(200).json({ message: "Commande supprimée avec succès" });
  } catch (err) {
    res.status(500).json({
      message: "Erreur lors de la suppression de la commande",
      error: err.message,
    });
  }
};
