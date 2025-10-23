const pool2 = require('../config/db');

const Sport = {
  async findAll() { 
    const [rows] = await pool2.query(
      'SELECT * FROM Sport'
    ); 
    return rows; 
  },

  async findById(id) { 
    const [rows] = await pool2.query(
      'SELECT * FROM Sport WHERE sport_id = ?', 
      [id]
    ); 
    return rows[0]; 
  },

  async create(data) { 
    const { sport_name, sport_scoring_type } = data; 
    const [res] = await pool2.query(
      'INSERT INTO Sport (sport_name, sport_scoring_type) VALUES (?, ?)', 
      [sport_name, sport_scoring_type]
    ); 
    return { sport_id: res.insertId, ...data }; 
  },

  async update(id,data){ 
    const { sport_name, sport_scoring_type } = data; 
    await pool2.query(
      'UPDATE Sport SET sport_name=?, sport_scoring_type=? WHERE sport_id=?',
      [sport_name, sport_scoring_type, id]
    ); 
    return this.findById(id); 
  },

  async delete(id){ 
    await pool2.query(
      'DELETE FROM Sport WHERE sport_id=?', 
      [id]
    ); 
    return true 
  }
};

module.exports = Sport;