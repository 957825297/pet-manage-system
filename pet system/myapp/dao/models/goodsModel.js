//商品
const mongoose = require('mongoose');

const goodsSchema = new mongoose.Schema({
    name: String, 
    num:String,
    price:String,
    category: String,//品类
    material :String,//材质
    packingSpecification:String,//包装规格
    applicableSpecification:String,//适用规格
    exclusiveSpecification:String,//专属规格
    function:String,//功能
    supplier:String,//供应商
    featureDescription:String,//特色说明
    Origin:String,//产地
    image:{//图片：小图、大图
        type:Array,
        default:[]
    }
})
mongoose.model("goodsModel", goodsSchema, "goods");