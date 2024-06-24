const express = require('express');
const Selectedmember = require('../Model/Selected_user');
const Userdetail = require('../Model/User');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { memberid } = req.body;
    const members = await Userdetail.find({ _id: { $in: memberid } });
    const newTeam = await Selectedmember.create({ members });
    res.json(newTeam);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
