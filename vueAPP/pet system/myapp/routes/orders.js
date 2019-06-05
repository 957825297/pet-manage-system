var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const { getOrdersByPage,searchOrders } = require("../service/ordersService");
const { uploadFile } = require("../util/upload");//图片上传后台插件工具


router.get("/getOrdersByPage", async function (req, res, next) {
  
  res.send(await getOrdersByPage(req.query));
});

router.get("/searchOrders", async function (req, res, next) {
  
  res.send(await searchOrders(req.query));
});


module.exports = router;
