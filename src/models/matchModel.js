const pool4 = require('../config/db');

const Match = {
  async findAll(){ 
    const [rows] = await pool4.query(
      'SELECT m.*, s.sport_name FROM `Match` m JOIN Sport s ON m.sport_id = s.sport_id'
    ); 
    return rows; 
  },

  async findById(id){ 
    const [rows] = await pool4.query(
      'SELECT * FROM `Match` WHERE match_id=?', 
      [id]
    ); 
    return rows[0]; 
  },

  async create(data){ 
    const { sport_id, match_date_time, match_venue, match_status, match_winner_id } = data; 
    const [res] = await pool4.query(
      'INSERT INTO `Match` (sport_id, match_date_time, match_venue, match_status, match_winner_id) VALUES (?, ?, ?, ?, ?)', 
      [sport_id, match_date_time, match_venue, match_status || 'scheduled', match_winner_id || null]
    ); 
    return { match_id: res.insertId, ...data }; 
  },

  async update(id,data){ 
    const { sport_id, match_date_time, match_venue, match_status, match_winner_id } = data; 
    await pool4.query(
      'UPDATE `Match` SET sport_id=?, match_date_time=?, match_venue=?, match_status=?, match_winner_id=? WHERE match_id=?', 
      [sport_id, match_date_time, match_venue, match_status, match_winner_id, id]
    ); 
    return this.findById(id); 
  },

  async delete(id){ 
    await pool4.query(
      'DELETE FROM `Match` WHERE match_id=?', 
      [id]
    ); 
    return true 
  }
};

module.exports = Match;