const express = require('express')
const router = express.Router()
// route GETapi/profile
router.get('/',(req,res)=>res.send('Profile router'))

module.exports = router