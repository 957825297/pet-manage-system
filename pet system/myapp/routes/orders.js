var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const { getOrdersByPage } = require("../service/ordersService");
const { uploadFile } = require("../util/upload");//图片上传后台插件工具


router.post("/getMoviesByPage", async function (req, res, next) {
  res.send(await getMoviesByPage(req.body));
});

router.get("/getOrdersByPage", async function (req, res, next) {
  res.send(await getOrdersByPage(req.query));
});

//图片上传 (默认post),不操作数据库
router.post("/addImages", async function (req, res, next) {
  const data = await uploadFile(req, res, {
    fileType: "movies",
    path: "./public/images"
  });
  res.send(data);
});
module.exports = router;
