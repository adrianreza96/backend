const express = require('express');
const neweggAPI = require('../controllers/newegg-api.controller');
const router = express.Router();

router.get("/", neweggAPI.findAll );
router.get("/:id",neweggAPI.findByProductId );

module.exports = router;