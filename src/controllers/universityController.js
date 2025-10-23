const UniversityModel = require('../models/universityModel');

const universityController = {
  async list(req,res){ 
    try{ 
      const data = await UniversityModel.findAll(); 
      res.json(data); }catch(err){ console.error(err); 
      res.status(500).json({error:'Server error'}); 
    } 
  },

  async get(req,res){ 
    try{ 
      const id = req.params.id; 
      const row = await UniversityModel.findById(id); 
      if(!row) return res.status(404).json({error:'Not found'}); 
      res.json(row); }catch(err){ console.error(err); 
      res.status(500).json({error:'Server error'}); 
    } 
  },

  async create(req,res){ 
    try{ 
      const data = req.body; 
      const created = await UniversityModel.create(data); 
      res.status(201).json(created); 
    }catch(err){ 
      console.error(err); 
      res.status(500).json({error:'Server error'}); 
    } 
  },
  
  async update(req,res){ 
    try{ 
      const id = req.params.id; 
      const updated = await UniversityModel.update(id, req.body); 
      res.json(updated); }catch(err){ console.error(err); 
      res.status(500).json({error:'Server error'}); 
    } 
  },

  async remove(req,res){ 
    try{ 
      const id = req.params.id; 
      await UniversityModel.delete(id); 
      res.status(204).end(); 
    }catch(err){ 
      console.error(err); 
      res.status(500).json({error:'Server error'}); 
    } 
  }
};

module.exports = universityController;