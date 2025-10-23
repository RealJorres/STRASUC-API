const pool5 = require('../config/db');

const Score = {
  async findAll(){ 
    const [rows] = await pool5.query(
      'SELECT sc.*, t.team_gender, t.suc_id FROM Score sc JOIN Team t ON sc.team_id = t.team_id'
    ); 
    return rows; 
  },

  async findById(id){ 
    const [rows] = await pool5.query(
      'SELECT * FROM Score WHERE score_id=?', 
      [id]
    ); 
    return rows[0]; 
  },

  async create(data){ 
    const { match_id, team_id, score_value, period_number } = data; 
    const [res] = await pool5.query(
      'INSERT INTO Score (match_id, team_id, score_value, period_number) VALUES (?, ?, ?, ?)', 
      [match_id, team_id, score_value || 0, period_number || 1]
    ); 
    return { score_id: res.insertId, ...data }; 
  },

  async update(id,data){ 
    const { score_value, period_number } = data; 
    await pool5.query(
      'UPDATE Score SET score_value=?, period_number=? WHERE score_id=?', 
      [score_value, period_number, id]
    ); 
    return this.findById(id); 
  },

  async delete(id){ 
    await pool5.query(
      'DELETE FROM Score WHERE score_id=?', [id]
    ); 
    return true 
  }
};

module.exports = Score;