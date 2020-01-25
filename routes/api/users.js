const express = require('express')
const router = express.Router()
// route GETapi/users
router.get('/',(req,res)=>res.send('User router'))

module.exports = router