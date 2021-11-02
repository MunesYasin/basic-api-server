'use strict'


const express = require('express')
const {Clothes} = require('../models/index')
const clothesRouter = express.Router()


clothesRouter.get('/clothes' , getclothes)
clothesRouter.get('/clothes/:id' , getOneclothes)
clothesRouter.post('/clothes' , createclothes)
clothesRouter.put('/clothes/:id' , updateclothes)
clothesRouter.delete('/clothes/:id' , deleteclothes)

async function getclothes(req,res){
const allclothes = await Clothes.findAll()
res.status(200).json(allclothes)
}

async function getOneclothes(req,res){
    const id = req.params.id
    const clothes = await Clothes.findOne({
        where:{
            id :id
        }
    })
    res.status(200).json(clothes)
}

async function createclothes(req,res){
    const newclothes = req.body
   console.log('============================')
   console.log(Clothes)
   console.log('============================')

    const newclothesAdded = await Clothes.create(newclothes);
    res.status(201).json(newclothesAdded)
}

async function updateclothes(req,res){
    const id =req.params.id
    const obj = req.body 
    const foundclothes = await Clothes.findOne({where:{id:id}})
    const updatedclothes = await foundclothes.update(obj)
    res.status(201).json(updatedclothes)
}

async function deleteclothes(req,res){
    const id = req.params.id 
    const deletedclothes = await Clothes.destroy({where:{id:id}})
    res.status(204).json(deleteclothes)
}

module.exports=clothesRouter