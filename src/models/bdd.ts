import mariadb from "mariadb";

export const pool = mariadb.createPool({
  host: "localhost", // Change l'hôte si nécessaire
  user: "root", // Utilisateur MySQL
  password: "root", // Mot de passe MySQL
  database: "gestentretien", // Nom de la base
  connectionLimit: 5,
});
