//用户
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    loginName: String, //登录名
    password:String,//密码
    phone :String,// 手机号
    email:String,
    name:String,
    character:Boolean,// 角色：平台管理员（1：true） 或 门店管理员 （0：false）
    status:Boolean,//状态：申请中(默认值)、可用、不可用
    usersId:{//门店管理员 关联 门店
        type:mongoose.Schema.Types.ObjectId,
        ref:'usersModel'
    }
})
mongoose.model("usersModel", usersSchema, "users");