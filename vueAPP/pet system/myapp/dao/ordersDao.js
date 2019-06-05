const mongoose = require("mongoose");

module.exports.getOrdersByPage = async page => {
    const totalCount = await mongoose.model("ordersModel").countDocuments();
    const totalPage = Math.ceil(totalCount / page.pageSize);
    const dataList = await mongoose.model("ordersModel")
        .find()
        .skip(page.pageSize * (page.currentPage - 1))
        .limit(page.pageSize - 0);
    return { totalCount, totalPage, dataList, currentPage: page.currentPage, pageSize: page.pageSize }
}

module.exports.searchOrders = async page => {
    const order = await mongoose.model("ordersModel").find(page)
    return order
}