const express = require('express');
const {getResults} = require('../controller');
const validateCheck = require('../middleware/validateCheck');
const route= express.Router();

route.get('/api/results', validateCheck, getResults);

module.exports = route;