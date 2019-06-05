var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const { subInfo, getShopsByPage,removeShops,updateShops,searchShops } = require("../service/shopsService");
const { uploadFile } = require('../util/upload');//图片上传后台插件工具


router.post("/getMoviesByPage", async function (req, res, next) {
  res.send(await getMoviesByPage(req.body));
});

//图片上传 (默认post),不操作数据库
router.post('/addImgs', async function (req, res, next) {
  const data = await uploadFile(req, res, {
      fileType: "students",
      path: "./public/img"
  })
  res.send(data);
});

//渲染数据
router.post('/subInfo', async function (req, res, next) {
  res.send(await subInfo(req.body))
})
module.exports = router;

//获取门店列表
router.get('/getShopsByPage', async function (req, res) {
  res.send(await getShopsByPage(req.query))
})
module.exports = router;

//删除门店
router.post('/removeShops', async function (req, res) {
  res.send(await removeShops(req.body))
})

//修改门店信息
router.post('/updateShops', async function (req, res) {
  console.log(req.body);
  
  res.send(await updateShops(req.body))
})


//查询门店信息
router.get('/searchShops', async function (req, res) {
  res.send(await searchShops(req.query))
})


module.exports = router;