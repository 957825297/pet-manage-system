//商品
const mongoose = require('mongoose');

const goodsSchema = new mongoose.Schema({
    brand: String,//品牌
    class: String,//品类（猫粮，狗粮等）
    makeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'makesModel'
    },//制作方法
    cutting:String,//试用规格(幼犬、成犬、幼猫)
    exclusive:String,//专属规格（贵宾专用、比熊专用等）
    packing:String,//包装规格（1kg,5kg等）
    flavor:String,//口味
    usage:String,//特殊功用
    locality:String,//产地
    dateOfManufacture:String,//生产日期（XXXX-XX-XX）
    shelfLife:String,//保质期（XX月或XX年）
    add:String,
    supplierId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'suppliersModel'
    },//供应商
    images:String,//图片（小，大）
    price:String,//价格

})

mongoose.model("goodsModel", goodsSchema, "goods");