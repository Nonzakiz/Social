const express = require('express')
const router = express.Router()
// route GETapi/posts
router.get('/',(req,res)=>res.send('Posts router'))

module.exports = router