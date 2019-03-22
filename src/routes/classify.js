var express = require('express');
var router = express.Router();
const classifyApi = require('./classifyApi');
/* GET users listing. */
router.get('/api/classify', classifyApi.costom);
router.post('/api/addclassify', classifyApi.classify);
router.post('/api/getclassify', classifyApi.getclassify);

module.exports = router;