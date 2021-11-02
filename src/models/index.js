'use strict'


const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL

const {Sequelize,DataTypes}= require('sequelize')

let sequelizeOption = process.env.NODE_ENV === 'production '? {
dialectOptions :{
    ssl :{
        require : true ,
        rejectUnauthorized : false,
    }
}
} :{}


 const clothes = require('./clothes.model')
 const food = require ('./food.model')

let sequelize = new Sequelize(POSTGRES_URI,sequelizeOption)
module.exports = {
    db:sequelize,
    Clothes : clothes(sequelize,DataTypes),
    Food : food(sequelize,DataTypes)
}