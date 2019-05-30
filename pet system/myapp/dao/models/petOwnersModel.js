//宠主
const mongoose = require('mongoose');

const petOwnersSchema = new mongoose.Schema({
    phone:String,
    nickname: String,//昵称
    name: String, //真实姓名
    vipCard:{//会员卡
        type:Array,
        default:[]
    },
    image:String,//头像
    address :String,//送货地址
    area:String,//区域
    score:String,//积分
    pets:{  //拥有的宠物
        type:Array,
        default:[]
    }
})
mongoose.model("petOwnersModel", petOwnersSchema, "petOwners");