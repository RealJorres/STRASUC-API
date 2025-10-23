const pool = require('../config/db');

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-');
}

const University = {
  async findAll() {
    const [rows] = await pool.query('SELECT * FROM University');
    return rows;
  },
  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM University WHERE suc_id = ?', [id]);
    return rows[0];
  },
  async create(data) {
    const { suc_name, suc_region } = data;
    const suc_acronym = slugify(suc_name);
    const [res] = await pool.query(
      'INSERT INTO University (suc_name, suc_acronym, suc_region) VALUES (?, ?, ?)',
      [suc_name, suc_acronym, suc_region]
    );
    return { suc_id: res.insertId, suc_name, suc_acronym, suc_region };
  },
  async update(id, data) {
    const { suc_name, suc_region } = data;
    const suc_acronym = slugify(suc_name);
    await pool.query(
      'UPDATE University SET suc_name=?, suc_acronym=?, suc_region=? WHERE suc_id=?',
      [suc_name, suc_acronym, suc_region, id]
    );
    return this.findById(id);
  },
  async delete(id) {
    await pool.query('DELETE FROM University WHERE suc_id=?', [id]);
    return true;
  }
};

module.exports = University;
