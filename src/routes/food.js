'use strict'


const express = require('express')
const {Food} = require('../models/index')
const foodRouter = express.Router()


foodRouter.get('/food' , getfood)
foodRouter.get('/food/:id' , getOnefood)
foodRouter.post('/food' , createfood)
foodRouter.put('/food/:id' , updatefood)
foodRouter.delete('/food/:id' , deletefood)

async function getfood(req,res){
const allfood = await Food.findAll()
res.status(200).json(allfood)
}

async function getOnefood(req,res){
    const id = req.params.id
    const food  = await Food.findOne({
        where:{
            id :id
        }
    })
    res.status(200).json(food )
}

async function createfood(req,res){
    const newfood = req.body
   
    const newfoodAdded = await Food.create(newfood);
    res.status(201).json(newfoodAdded)
}

async function updatefood(req,res){
    const id =req.params.id
    const obj = reg.body 
    const foundfood = await Food.findOne({where:{id:id}})
    const updatedfood = await foundfood.update(obj)
    res.status(201).json(updatedfood)
}

async function deletefood(req,res){
    const id = req.params.id 
    const deletedfood = await Food.destroy({where:{id:id}})
    res.status(204).json(deletedfood)
}

module.exports=foodRouter