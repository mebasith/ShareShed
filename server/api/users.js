const { User, Tool } = require('../db');

const router = require('express').Router();

// GET /api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await Robot.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

//GET /api/users/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      include: [{ model: Project }],
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// POST /api/users
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await User.create(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/users/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// PUT /api/users/:id
router.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(await user.update(req.body));
  } catch (error) {
    next(error);
  }
});

// PUT /api/users/:id/:tool
router.put('/:id/:tool', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    const tool = await Tool.findByPk(req.params.project);
    await user.removeProject(tool);
    res.send(await User.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
