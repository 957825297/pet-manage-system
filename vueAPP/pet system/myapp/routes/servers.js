var express = require('express');
var router = express.Router();

const {addServices,getServices,getServicesByPage,
    deleteServiceById,searchServer,serviceUpdate } = require("../service/serversService.js");

router.post('/addServices', async (req, res) => {
    res.send(await addServices(req.body));
});

router.get('/getServices', async function (req, res, next) {
    res.send(await getServices());
});

router.post('/getServicesByPage', async function (req, res, next) {
    res.send(await getServicesByPage(req.body));
});

router.post('/deleteServiceById', async (req, res) => {
    res.send(await deleteServiceById(req.body));
});

router.get('/searchServer', async function (req, res, next) {
    res.send(await searchServer(req.query));
});


router.get('/serviceUpdate', async function (req, res, next) {
    res.send(await serviceUpdate(req.query));
  });
module.exports = router;