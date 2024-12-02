const express=require('express')
const router=express.Router()
const contro=require('../controller/signC')
router.post('/sign',contro.addD)
router.post('/login',contro.login)
//router.post('/addexpense',contro.getexpense)
module.exports=router