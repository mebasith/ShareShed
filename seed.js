const { green, red } = require('chalk');
const { db, User, Tool } = require('./server/db');
const seed = async () => {
  try {
    await db.sync({ force: true });
    const users = await Promise.all([
      User.create({
        name: 'Chuck'
      }),
      User.create({
        name: 'Pawel'
      })
    ]);
    // seed your database here!

    const tools = await Promise.all([
      Tool.create({
        name: 'Hammer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      }),
      Tool.create({
        name: 'Saw',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      }),
      Tool.create({
        name: 'Powerdrill',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      }),
    ]);
    const [Chuck, Pawel] = users;
    const [Hammer, Saw, Powerdrill] = tools;
    await Chuck.addTools(Hammer);
    await Pawel.addTools(Saw);
    await Chuck.addTools(Powerdrill);
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
