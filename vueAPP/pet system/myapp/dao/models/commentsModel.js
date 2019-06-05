//评论
const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
    order: String, //订单:服务或商品 
    shop: String,//门店
    totalPrice:String,//总价
    score:String,//评分
    content:String,//评价内容
    image:String,// 上传图片
    evaluationNature:String,//评价性质
    people:String,//评论人
    ordersId:{//关联订单
        type:mongoose.Schema.Types.ObjectId,
        ref:'ordersModel'
    }
})
mongoose.model("commentsModel", commentsSchema, "comments");