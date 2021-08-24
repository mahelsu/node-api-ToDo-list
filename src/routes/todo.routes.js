const express = require('express');
const router = express.Router();
const Traillers = require('../models/todomodel')

router.get('/todo', async (req, res) => {
    const traillers = await Traillers.find();
    res.json(traillers);
});

router.get('/todo/:id', async (req, res) => {
    const trailler = await Traillers.findById(req.params.id);
    res.json(trailler);
})

router.post('/add-do', async (req, res) =>{
    const { tittle, description } = req.body;
    const trailler = new Traillers({ tittle,   description });
    
    await trailler.save();
    res.json({status: "Tarea guardada" });  
});

router.put('/:id', async (req, res) => { 
    const { tittle, description } = req.body;
    const newTrailler = { tittle, description };

    await Traillers.findByIdAndUpdate(req.params.id, newTrailler);   
    res.json({ status: "Tarea actualizada" });
});

router.delete('/:id', async (req, res) =>{
    await Traillers.findByIdAndRemove(req.params.id);
    res.json({ status: "Tarea eliminado"});
})

module.exports = router;