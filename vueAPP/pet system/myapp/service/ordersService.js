const { getOrdersByPage,searchOrders } = require("../dao/ordersDao");
module.exports.getOrdersByPage = async (order) => {
    return await getOrdersByPage(order);
}

module.exports.searchOrders = async (order) => {
    return await searchOrders(order);
}
