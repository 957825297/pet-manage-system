const { subInfo, getShopsByPage,removeShops,updateShops,searchShops } = require("../dao/shopsDao");

module.exports.subInfo = async Info => {
    return await subInfo(Info);
}

//获取门店列表
module.exports.getShopsByPage = async data => {
    return await getShopsByPage(data);
}
//删除门店
module.exports.removeShops = async data => {
    return await removeShops(data);
}
//修改门店
module.exports.updateShops = async data => {
    return await updateShops(data);
}
//查询门店
module.exports.searchShops = async data => {
    return await searchShops(data);
}
