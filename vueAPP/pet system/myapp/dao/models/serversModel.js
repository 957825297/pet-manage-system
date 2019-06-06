const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    name: String,//名称12
    date:String,//排期(XX号XX：XX)12
    category:String,//宠物类别（猫，狗等）12
    cutting:String,//体重范围（XXkg~xxkg）1
    ServiceSpe:String,//服务规格（普修，精修等）12
    hours:String,//耗时（XX小时）
    waiterLevel:String,// 服务员等级（普通，高级）12
    price:String,//价格（如：会员价9折）
    images:String,//图片（小，大）
})

mongoose.model("serviceModel", serviceSchema, "service");