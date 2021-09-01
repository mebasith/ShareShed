const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('tool', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  status: {
    type: Sequelize.ENUM('open', 'shared'),
    defaultValue: 'open',
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: "[Placeholder]",
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://cdn.pixabay.com/photo/2016/02/19/11/32/tools-1209764_960_720.jpg',
  },
  possessorId: {
    type: Sequelize.INTEGER
  }
});
