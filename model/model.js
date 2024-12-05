const { Sequelize} = require('sequelize');

const sequelize = new Sequelize ('users','ma060200', 'intelbras', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

