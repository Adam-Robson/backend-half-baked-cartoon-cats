const { Router } = require('express');
const { cats } = require('../cats-data');

module.exports = Router()
  .get('/:id', (req, res) => {
    const match = cats.find((cat) => cat.id === req.params.id);
    res.json(match);
  })
  .get('/', (req, res) => {
    const match = cats.map((cat) => {
      return { id: cat.id, name: cat.name };
    });
    return res.json(match);
  });
