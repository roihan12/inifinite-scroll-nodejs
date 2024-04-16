import { Sequelize } from "sequelize";

const db = new Sequelize("infinite_scroll", "root", "root123", {
  host: "localhost",
  dialect: "mysql",
});


export default db