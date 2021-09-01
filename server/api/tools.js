const { User, Tool } = require('../db');

const router = require('express').Router();

// GET /api/tools
router.get('/', async (req, res, next) => {
  try {
    const tools = await Tool.findAll({
      attributes: [
        'id',
        'name',
        'status',
        'description',
      ],
    });
    res.json(tools);
  } catch (error) {
    next(error);
  }
});

//GET /api/tools/:toolId
router.get('/:toolId', async (req, res, next) => {
  try {
    const tool = await Tool.findByPk(req.params.toolId);
    res.json(tool);
  } catch (error) {
    next(error);
  }
});

// POST /api/tools
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Tool.create(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/tools/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const tool = await Tool.findByPk(req.params.id);
    await tool.destroy();
    res.send(tool);
  } catch (error) {
    next(error);
  }
});

// PUT /api/tools/:id
router.put('/:id', async (req, res, next) => {
  try {
    const tool = await Tool.findByPk(req.params.id);
    res.send(await tool.update(req.body));
  } catch (error) {
    next(error);
  }
});


module.exports = router;
