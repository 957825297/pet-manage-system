const mongoose = require("mongoose");

//获取数据
module.exports.subInfo = async Info => {
    return await mongoose.model("shopsModel").create(Info)
}
//获取门店列表
module.exports.getShopsByPage = async data => {
    return await mongoose.model("shopsModel").find(data).populate("goodsId");
}
//删除门店
module.exports.removeShops = async data => {
    return await mongoose.model("shopsModel").remove(data)
}
//修改门店
module.exports.updateShops = async data => {
    console.log({_id:data._id},data);
    return await mongoose.model("shopsModel").update({_id:data._id},data)
}
//修改查询
module.exports.searchShops = async data => {
    
    return await mongoose.model("shopsModel").find(data).populate("goodsId");
}


