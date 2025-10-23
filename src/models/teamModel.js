const pool3 = require('../config/db');

const Team = {
  async findAll(){ 
    const [rows] = await pool3.query(
      'SELECT t.*, u.suc_name, s.sport_name FROM Team t JOIN University u ON t.suc_id=u.suc_id JOIN Sport s ON t.sport_id=s.sport_id'
    ); 
    return rows; 
  },

  async findById(id){ 
    const [rows] = await pool3.query(
      'SELECT * FROM Team WHERE team_id=?', 
      [id]
    ); 
    return rows[0]; 
  },

  async create(data){ 
    const { suc_id, sport_id, team_gender } = data; 
    const [res] = await pool3.query(
      'INSERT INTO Team (suc_id, sport_id, team_gender) VALUES (?, ?, ?)', 
      [suc_id, sport_id, team_gender]
    ); 
    return { team_id: res.insertId, ...data }; 
  },

  async update(id,data){ 
    const { suc_id, sport_id, team_gender } = data; 
    await pool3.query(
      'UPDATE Team SET suc_id=?, sport_id=?, team_gender=? WHERE team_id=?', 
      [suc_id, sport_id, team_gender, id]
    ); 
    return this.findById(id); 
  },

  async delete(id){ 
    await pool3.query(
      'DELETE FROM Team WHERE team_id=?', 
      [id]
    ); 
    return true 
  }
};

module.exports = Team;