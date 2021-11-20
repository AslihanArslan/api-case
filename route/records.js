const express = require('express');
const router = express.Router();

const data = require('../middleware/errorHandler');
const recordController = require('../controller/recordController');

router.post("/records", data.requestParamsValidCheck, recordController.getRecordsResponse);

module.exports = router;