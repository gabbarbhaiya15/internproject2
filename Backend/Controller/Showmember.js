const express = require('express');
const Selectedmember = require('../Model/Selected_user');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const members = await Selectedmember.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
