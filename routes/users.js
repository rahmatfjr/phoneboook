var express = require('express');
var router = express.Router();
var models = require('../models')
var { Response } = require('../helpers/utils')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {23

    const users = await models.User.findAll()
    res.json(new Response(users))
    // console.log(users,'data keluar')
  }
  catch (err) {
    res.status(500).json(new Response(err, false))
  }
});

router.post('/', async function (req, res, next) {
  try {
    const users = await models.User.create(req.body)
    res.json(new Response(users))
  }
  catch (err) {
    res.status(500).json(new Response(err, false))
  }
});

router.put('/:id', async function (req, res, next) {
  try {
    const users = await models.User.update(req.body,{
      where: {
        id: req.params.id
      },
      returning: true,
      plain: true
    })
    res.json(new Response(users))
  }
  catch (err) {
    res.status(500).json(new Response(err, false))
  }
});

router.delete('/:id', async function (req, res, next) {
  try {
    const users = await models.User.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(new Response(users))
  }
  catch (err) {
    res.status(500).json(new Response(err, false))
  }
});

module.exports = router;

