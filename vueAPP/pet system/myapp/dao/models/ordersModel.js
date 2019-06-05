//订单
const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    orderNum:String,//订单号：商品id
    goodName: String,//商品名
    petOwnerName :String,//宠主名
    time:String,//下单时间
    price:String,//商品价格
    image:String,//商品图片
    num: String,//订单商品数量
    petOwnersId:{//关联宠主
        type:mongoose.Schema.Types.ObjectId,
        ref:'petOwnersModel'
    },
    shopsId:{//关联店铺
        type:mongoose.Schema.Types.ObjectId,
        ref:'shopsModel'
    }
})
mongoose.model("ordersModel", ordersSchema, "orders");