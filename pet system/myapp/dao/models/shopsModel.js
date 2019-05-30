//商店
const mongoose = require('mongoose');

const shopsSchema = new mongoose.Schema({
    name: String, 
    business_license_number:String,//营业执照号码
    business_license_picture:String,//营业执照图片
    address:String,//营业地址
    position:String,//定位
    x_y:String,//经纬度 
    person:String,//法人
    phone :String,//联系电话
    image:String,//头像
    features:String,// 特色
    vipRating:{//VIP等级
        type:Array,
        default:[{silver:0.9},{gold:0.8},{diamond:0.7}]
    },
    price:String,
    waiter:{
        type:Array,
        default:[]
    },
    goodsId:{//关联商品
        type:mongoose.Schema.Types.ObjectId,
        ref:'goodsModel'
    },
    serversId:{//关联服务
        type:mongoose.Schema.Types.ObjectId,
        ref:'serversModel'
    }
})
mongoose.model("shopsModel", shopsSchema, "shops");