const Order = require("../Models/orderModel"); // Modèle de commande
const Cart = require("../Models/cartModel"); // Modèle de panier, si nécessaire

// Créer une nouvelle commande
exports.createOrder = async (req, res) => {
  try {
    const { userId, items, totalPrice, shippingAddress, paymentMethod } =
      req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Le panier est vide." });
    }

    const order = new Order({
      userId,
      items,
      totalPrice,
      shippingAddress,
      paymentMethod,
      status: "En attente", // Statut initial de la commande
    });

    const savedOrder = await order.save();
    res
      .status(201)
      .json({ message: "Commande créée avec succès.", order: savedOrder });
  } catch (error) {
    console.error("Erreur lors de la création de la commande :", error);
    res.status(500).json({
      message: "Une erreur est survenue lors de la création de la commande.",
    });
  }
};

// Récupérer toutes les commandes d'un utilisateur
exports.getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    console.error("Erreur lors de la récupération des commandes :", error);
    res.status(500).json({
      message: "Une erreur est survenue lors de la récupération des commandes.",
    });
  }
};

// Récupérer une commande spécifique
exports.getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Commande non trouvée." });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Erreur lors de la récupération de la commande :", error);
    res.status(500).json({
      message:
        "Une erreur est survenue lors de la récupération de la commande.",
    });
  }
};

// Mettre à jour le statut d'une commande
exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Commande non trouvée." });
    }

    res.status(200).json({
      message: "Statut de la commande mis à jour avec succès.",
      order: updatedOrder,
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la commande :", error);
    res.status(500).json({
      message: "Une erreur est survenue lors de la mise à jour de la commande.",
    });
  }
};

// Supprimer une commande
exports.deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Commande non trouvée." });
    }

    res.status(200).json({ message: "Commande supprimée avec succès." });
  } catch (error) {
    console.error("Erreur lors de la suppression de la commande :", error);
    res.status(500).json({
      message: "Une erreur est survenue lors de la suppression de la commande.",
    });
  }
};

const express = require("express");
const router = express.Router();
const orderController = require("../Controllers/orderController");

// Routes pour les commandes
router.post("/", orderController.createOrder);
router.get("/:userId", orderController.getUserOrders);
router.get("/order/:orderId", orderController.getOrderById);
router.put(
  "/order/:orderId",

  orderController.updateOrderStatus
);
router.delete("/order/:orderId", orderController.deleteOrder);

module.exports = router;
