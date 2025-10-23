const MatchModel = require('../models/matchModel');
const matchController = {
  async list(req,res){ 
    try{ 
      const rows = await MatchModel.findAll(); 
      res.json(rows);
    }catch(err){ 
      console.error(err); 
      res.status(500).json({error:'Server error'});
    } 
  },

  async get(req,res){ 
    try{ 
      const row = await MatchModel.findById(req.params.id); 
      if(!row) return res.status(404).json({error:'Not found'}); 
      res.json(row);
    }catch(err){ 
      console.error(err); 
      res.status(500).json({error:'Server error'});
    } 
  },

  async create(req,res){ 
    try{ 
      const created = await MatchModel.create(req.body); 
      res.status(201).json(created);
    }catch(err){ 
      console.error(err); 
      res.status(500).json({error:'Server error'});
    } 
  },

  async update(req,res){ 
    try{ 
      const updated = await MatchModel.update(req.params.id, req.body); 
      res.json(updated);
    }catch(err){ 
      console.error(err); 
      res.status(500).json({error:'Server error'});
    } 
  },
  
  async remove(req,res){ 
    try{ 
      await MatchModel.delete(req.params.id); res.status(204).end(); 
    }catch(err){ 
      console.error(err); 
      res.status(500).json({error:'Server error'});
    } 
  }
};

module.exports = matchController;