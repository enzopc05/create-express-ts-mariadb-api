import express from "express";
import { aeronefsModel } from "../models/aeronefsModel";

const router = express.Router();

// Route : Récupérer tous les aéronefs
router.get("/", async (req, res) => {
  try {
    const data = await aeronefsModel.getAll();
    res.json(data);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Une erreur est survenue.";
    res.status(500).json({ error: errorMessage });
  }
});

// Route : Ajouter un nouvel aéronef
router.post("/", async (req, res) => {
  const { model, status } = req.body;
  try {
    const result = await aeronefsModel.addOne(model, status);
    res.status(201).json(result);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Une erreur est survenue.";
    res.status(500).json({ error: errorMessage });
  }
});

export default router;
