const sequelize=require('../util/db')
const Sequelize=require('sequelize')
const signM=sequelize.define('signUp',{
    id:{
        type:Sequelize.INTEGER,
        autoNull:false,
        unique:true,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
module.exports=signM