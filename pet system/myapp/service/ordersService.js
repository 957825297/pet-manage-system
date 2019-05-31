const { getOrdersByPage } = require("../dao/ordersDao");
module.exports.getOrdersByPage = async (order) => {
    return await getOrdersByPage(order);
}
