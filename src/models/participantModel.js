const pool6 = require('../config/db');

const Participant = {
  async findAll(){ 
    const [rows] = await pool6.query(
      'SELECT p.*, u.suc_name, s.sport_name FROM Participant p JOIN University u ON p.suc_id=u.suc_id JOIN Sport s ON p.sport_id=s.sport_id'
    ); 
    return rows; 
  },

  async findById(id){ 
    const [rows] = await pool6.query(
      'SELECT * FROM Participant WHERE par_id=?', 
      [id]
    ); 
    return rows[0]; 
  },

  async create(data){ 
    const { par_firstname, par_lastname, suc_id, sport_id } = data; 
    const [res] = await pool6.query(
      'INSERT INTO Participant (par_firstname, par_lastname, suc_id, sport_id) VALUES (?, ?, ?, ?)', 
      [par_firstname, par_lastname, suc_id, sport_id]
    ); 
    return { par_id: res.insertId, ...data }; 
  },

  async update(id,data){ 
    const { par_firstname, par_lastname, suc_id, sport_id } = data; 
    await pool6.query(
      'UPDATE Participant SET par_firstname=?, par_lastname=?, suc_id=?, sport_id=? WHERE par_id=?', 
      [par_firstname, par_lastname, suc_id, sport_id, id]
    ); 
    return this.findById(id); 
  },

  async delete(id){ 
    await pool6.query(
      'DELETE FROM Participant WHERE par_id=?', 
      [id]
    ); 
    return true 
  }
};

module.exports = Participant;