

const db = require('./database');

const User = require('./user');
const Tool = require('./tool')



User.hasMany(Tool)
Tool.belongsTo(User)


module.exports = {
  db,
  User,
  Tool
};
