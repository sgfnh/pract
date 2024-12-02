const express=require("express")
const app=express()
app.use(express.urlencoded({ extended: false }));
const cors=require("cors");
app.use(cors("*"))
app.use(express.json()); 
const sequelize=require('./util/db')
const rout=require("./routes/signR")
const rout2=require("./routes/expenseR")
app.use('/user',rout)
app.use('/expense',rout2)
const Expense = require('./model/expenseM');
const User = require('./model/signM');
//User.hasMany(Expense)
//Expense.belongsTo(User)
sequelize.sync()
    .then(() => {
        app.listen(3000, () => {
            console.log("Server started on port 3000");
        });
    })
    .catch(err => {
        console.log("Error during DB sync:", err);
    });

