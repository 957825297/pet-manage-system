var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");


router.post("/getMoviesByPage",async function(req, res, next) {
  res.send( await getMoviesByPage(req.body));
});

//图片上传 (默认post),不操作数据库
router.post("/addImages",async function(req, res, next) {
  const data= await uploadFile(req,res,{
    fileType:"movies",
    path:"./public/images"
  });
  res.send(data);
});
module.exports = router;
