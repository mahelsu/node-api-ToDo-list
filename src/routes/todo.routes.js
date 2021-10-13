const express = require('express');
const router = express.Router();
const ToDo = require('../models/todomodel')

router.get('/todo', async (req, res) => {
    const toDo = await ToDo.find();
    res.json(toDo);
});

router.get('/todo/:id', async (req, res) => {
    const toDo = await ToDo.findById(req.params.id);
    res.json(toDo);
})

router.post('/add-do', async (req, res) =>{
    const { tittle, description } = req.body;
    const toDo = new ToDo({ tittle,   description });
    
    await trailler.save();
    res.json({status: "Tarea guardada" });  
});

router.put('/:id', async (req, res) => { 
    const { tittle, description } = req.body;
    const newToDo = { tittle, description };

    await ToDo.findByIdAndUpdate(req.params.id, newToDo);   
    res.json({ status: "Tarea actualizada" });
});

router.delete('/:id', async (req, res) =>{
    await ToDo.findByIdAndRemove(req.params.id);
    res.json({ status: "Tarea eliminada"});
})

module.exports = router;