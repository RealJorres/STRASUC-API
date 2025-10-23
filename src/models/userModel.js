const pool = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
  async create({ username, password }) {
    const hashed = await bcrypt.hash(password, 10);
    const [res] = await pool.query(
      'INSERT INTO Users (username, password) VALUES (?, ?)',
      [username, hashed]
    );
    return { user_id: res.insertId, username };
  },

  async findByUsername(username) {
    const [rows] = await pool.query(
        'SELECT * FROM Users WHERE username = ?', 
        [username]
    );
    return rows[0];
  },
};

module.exports = User;
