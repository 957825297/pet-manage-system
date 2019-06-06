var express = require('express');
const { uploadFile } = require('../util/upload');//图片上传后台插件工具
var router = express.Router();

const { addServices, getServices, getServicesByPage,
    deleteServiceById, searchServer, serviceUpdate } = require("../service/goodsService.js");

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


//图片上传 (默认post),不操作数据库
router.post('/addImgs', async function (req, res, next) {
    const data = await uploadFile(req, res, {
        fileType: "students",
        path: "./public/img"
    })
    res.send(data);
});
module.exports = router;
