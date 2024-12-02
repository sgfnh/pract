const Sequelize=require('sequelize')
const sequelize=new Sequelize('nodec','root','Pooja@#456',{
    dialect:"mysql",
    host:"localhost"
})
module.exports=sequelize;