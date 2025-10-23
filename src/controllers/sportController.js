const SportModel = require('../models/sportModel');
const sportController = {
  async list(req,res){ 
    try{ 
      const rows = await SportModel.findAll(); 
      res.json(rows); 
    }catch(err){ 
        console.error(err); 
        res.status(500).json({error:'Server error'}); 
      } 
    },

  async get(req,res){ 
    try{ 
      const id = req.params.id; 
      const row = await SportModel.findById(id); 
      if(!row) return res.status(404).json({error:'Not found'}); 
      res.json(row);
    }catch(err){ 
      console.error(err); 
      res.status(500).json({error:'Server error'});
    } 
  },
  async create(req,res){ 
    try{ 
      const created = await SportModel.create(req.body); 
      res.status(201).json(created);
    }catch(err){ 
      console.error(err); 
      res.status(500).json({error:'Server error'});
    } 
  },

  async update(req,res){ 
    try{ 
      const id=req.params.id; 
      const updated = await SportModel.update(id, req.body); 
      res.json(updated);
    }catch(err){ 
      console.error(err); 
      res.status(500).json({error:'Server error'});
    } 
  },

  async remove(req,res){ 
    try{ 
      await SportModel.delete(req.params.id); 
      res.status(204).end(); 
    }catch(err){ 
      console.error(err); 
      res.status(500).json({error:'Server error'});
    } 
  }
};

module.exports = sportController;