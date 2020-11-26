const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('http://localhost:3001/api');
    res.send({data:'hello react'});
});

module.exports = router;