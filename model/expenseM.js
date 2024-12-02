const sequelize=require('../util/db')
const Sequelize=require('sequelize')
const expenseM=sequelize.define('Expense',{
    id:{
        type:Sequelize.INTEGER,
        autoNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    expenseamount:{
        type:Sequelize.INTEGER
    },
    description:{
        type:Sequelize.STRING
    },
    category:{
        type:Sequelize.STRING
    }
})
module.exports=expenseM;