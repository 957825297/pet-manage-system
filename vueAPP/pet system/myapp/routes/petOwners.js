var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const {getPetOwnersByPage,searchPetOwnersByPage,addPetOwners}=require("../service/petOwnersService");

//分页获取
router.get("/getPetOwnersByPage",async function(req, res, next) {
  res.send( await getPetOwnersByPage(req.query));
});

//查询
router.post("/searchPetOwnersByPage",async function(req, res, next) {
  res.send( await searchPetOwnersByPage(req.body));
});

//新增
router.post("/addPetOwners",async function(req, res, next) {
  res.send( await addPetOwners(req.body));
});

module.exports = router;
