//********** Imports **********//
import express from "express";
import cors from "cors";
import * as middlewares from "./middlewares";
import aeronefsController from "./controllers/aeronefsController"; // Import du contrôleur des aéronefs

require("dotenv").config();

//********** Server **********//
const allowedOrigins = ["http://localhost:3000", "http://127.0.0.1:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

// Initializing express.
const app = express();
// Enable CORS
app.use(cors(options));
// Middleware to parse JSON in requests.
app.use(express.json());

// Route pour les aéronefs
app.use("/aeronefs", aeronefsController);

// Gestion des erreurs et routes non trouvées
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
