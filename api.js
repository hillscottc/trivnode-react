const express = require('express');
const router = express.Router();
const pg = require('pg');
const config = require('./config');


// GET /api/clues -- RANDOM clues with optional limit (10)
router.get('/clues/:limit?', (req, res) => {
  const limit = req.params.limit ? req.params.limit : 10;
  const results = [];
  pg.connect(config.databaseUrl, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }
    // join with category name
    const query = client.query(
        "SELECT b.clue_id, a.category_name AS category, b.question, b.answer FROM clue AS b " +
        "JOIN category AS a ON a.category_id = b.category_id ORDER BY random() LIMIT " + limit + ";");
    query.on('row', (row) => {
      results.push(row);
    });
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});


// GET /api/clues/cat/{id} -- clues by cat id
router.get('/clues/cat/:id', (req, res) => {
  const results = [];
  pg.connect(config.databaseUrl, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }
    const query = client.query(
        "SELECT a.category_name AS category, b.question, b.answer FROM clue AS b " +
        "JOIN category AS a ON a.category_id = b.category_id " +
        "WHERE b.category_id = $1;", [req.params.id]);
    query.on('row', (row) => {
      results.push(row);
    });
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});



// GET /api/cats -- RANDOM categories with optional limit (20)
router.get('/cats/:limit?', (req, res) => {
  const limit = req.params.limit ? req.params.limit : 20;
  const results = [];
  pg.connect(config.databaseUrl, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }
    const query = client.query("SELECT * FROM category ORDER BY random() LIMIT " + limit + ";");
    query.on('row', (row)  =>{
      results.push(row);
    });
    query.on('end', ()  =>{
      done();
      return res.json(results);
    });
  });
});


module.exports = router;
