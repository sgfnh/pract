const express=require('express')
const router=express.Router()
const control=require('../controller/expenseC')
router.post('/addexpense',control.addexpense)
router.get('/getexpense',control.getexpense)
//router.delete('/deleteexpense/:expenseid', control.deleteexpense)
module.exports=router;