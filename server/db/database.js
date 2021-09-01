const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../../package.json');



const db = new Sequelize('postgres://mahfouzbasith@localhost:5432/ShareShed', {
  logging: false,
});


module.exports = db;
