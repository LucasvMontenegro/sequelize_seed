const Sequelize = "sequelize";
const User = "../../app/models/User";
const databaseConfig = "../config/database";

const models = [User];
class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

module.exports = new Database();
