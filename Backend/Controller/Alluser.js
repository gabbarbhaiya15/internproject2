const express = require('express');
const Userdetail = require('../Model/User');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await Userdetail.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
