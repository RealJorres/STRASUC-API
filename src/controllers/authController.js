const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const dotenv = require('dotenv');
dotenv.config();

const authController = {
  async register(req, res) {
    try {
      const { username, password } = req.body;
      const existing = await User.findByUsername(username);
      if (existing) return res.status(400).json({ error: 'Username already exists' });

      const newUser = await User.create({ username, password });
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  },

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findByUsername(username);
      if (!user) return res.status(404).json({ error: 'User not found' });

      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(401).json({ error: 'Invalid password' });

      const token = jwt.sign(
        { user_id: user.user_id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
      );

      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  },
};

module.exports = authController;
