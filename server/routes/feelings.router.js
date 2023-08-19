const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');




router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    const currentDate = new Date();

    let queryText = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged", "date") VALUES ($1, $2, $3, $4, $5, $6);'
    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments, req.body.flagged, currentDate])
    .then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});






module.exports = router;