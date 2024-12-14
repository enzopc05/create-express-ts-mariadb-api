import { pool } from "./bdd";

export const aeronefsModel = {
  getAll: async () => {
    const connection = await pool.getConnection();
    const rows = await connection.query("SELECT * FROM Aeronefs");
    connection.release();
    return rows;
  },
  addOne: async (model: string, status: string) => {
    const connection = await pool.getConnection();
    const result = await connection.query(
      "INSERT INTO Aeronefs (model, status) VALUES (?, ?)",
      [model, status]
    );
    connection.release();
    return result;
  },
};
