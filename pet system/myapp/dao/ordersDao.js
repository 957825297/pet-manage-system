const mongoose = require("mongoose");
// module.exports.getOrdersByPage = async page => {
//     const totalCount = await mongoose.model("classModel").countDocuments();
//     const totalPage = Math.ceil(totalCount / page.pageSize);
//     const studentsData = await mongoose.model("classModel")
//         .find()
//         .skip(page.pageSize * (page.currentPage - 1))
//         .limit(page.pageSize - 0);
//     return { totalCount, totalPage, studentsData, currentPage: page.currentPage, pageSize: page.pageSize }
// }

module.exports.getOrdersByPage = async page => {
  
    const studentsData = await mongoose.model("classModel")
        .find()
        
    return studentsData
}