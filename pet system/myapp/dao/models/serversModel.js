//服务
const mongoose = require('mongoose');

const serversSchema = new mongoose.Schema({
    name: String,
    category: String,//品类
    date: String,//排期
    applicableSpecification: String,//适用规格
    serverSpecification: String,//服务规格
    time: String,//耗时
    levelPrice: {//服务员等级-价格
        type: Array,
        default: []
    }
})
mongoose.model("serversModel", serversSchema, "servers");