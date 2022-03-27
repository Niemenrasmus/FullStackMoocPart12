
const express = require('express');
const router = express.Router();
const redis = require('../redis')


router.get('/', async (_ , res) => {

    const value = await redis.getAsync("count");
    res.json({
        added_todos: Number(value) || 0
    })
})
  
module.exports = router;