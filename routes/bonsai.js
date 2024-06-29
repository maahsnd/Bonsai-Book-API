var express = require('express');
var router = express.Router();

/* Get single bonsai. TODO*/
router.get('/:id', function (req, res, next) {
  res.send('get bonsai');
});

/* Create bonsai. TODO*/
router.post('/', async (req, res) => {
  res.status(201).send('create bonsai');
});

/* Update bonsai TODO*/
router.put('/:id', function (req, res, next) {
  res.send('update bonsai');
});

/* Delete bonsai TODO*/
router.delete('/:id', function (req, res, next) {
  res.send('delete bonsai');
});

module.exports = router;
