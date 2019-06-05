var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const { getComment,addComment,updateComment,removeComment } = require("../service/commentsService");

//获取
router.get("/getComment", async function (req, res) {
  res.send(await getComment(req.query));
});

//添加
router.post("/addComment", async function (req, res) {
  res.send(await addComment(req.body));
});

//修改
router.post("/updateComment", async function (req, res) {
  res.send(await updateComment(req.body));
});

//删除
router.post("/removeComment", async function (req, res) {
  res.send(await removeComment(req.body));
});

module.exports = router;
