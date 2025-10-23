const ParticipantModel = require('../models/participantModel');
const participantController = {
  async list(req,res){ 
    try{ 
      const rows = await ParticipantModel.findAll(); 
      res.json(rows);
    }catch(err){ 
      console.error(err); 
      res.status(500).json({error:'Server error'});
    } 
  },

  async get(req,res){ 
    try{ 
      const row = await ParticipantModel.findById(req.params.id); 
      if(!row) return res.status(404).json({error:'Not found'}); 
      res.json(row);
    }catch(err){ 
      console.error(err); 
      res.status(500).json({error:'Server error'});
    } 
  },
  
  async create(req,res){ 
    try{ 
      const created = await ParticipantModel.create(req.body); 
      res.status(201).json(created);
    }catch(err){ 
      console.error(err); 
      res.status(500).json({error:'Server error'});
    } 
  },

  async update(req,res){ 
    try{ 
      const updated = await ParticipantModel.update(req.params.id, req.body); 
      res.json(updated);
    }catch(err){ 
      console.error(err); 
      res.status(500).json({error:'Server error'});
    } 
  },

  async remove(req,res){ 
    try{ 
      await ParticipantModel.delete(req.params.id); 
      res.status(204).end(); 
    }catch(err){ 
      console.error(err); 
      res.status(500).json({error:'Server error'});
    } 
  }
};

module.exports = participantController;