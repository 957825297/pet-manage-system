const mongoose = require("mongoose");

// module.exports.getMoviesByPage = async function(page) {
//     const totalCount= await mongoose.model("moviesModel").countDocuments();//获取总条数
//     const totalPage=Math.ceil(totalCount/page.pageSize);
//     const moviesData= await mongoose.model("moviesModel")
//              .find()
//              .skip(page.pageSize*(page.currentPage-1))//跳过的条数
//              .limit(page.pageSize);
//     return {totalCount,totalPage,moviesData,currentPage:page.currentPage,pageSize:page.pageSize};
// };

//查询数据
module.exports.getComment = async (page) => {
    const commentsData = await mongoose.model("commentsModel").find(page)
    return commentsData
}

//添加
module.exports.addComment = async (page) => {
    const commentsData = await mongoose.model("commentsModel").create(page)
    return commentsData
}

//修改
module.exports.updateComment = async (page) => {
    const commentsData = await mongoose.model("commentsModel").update(page)
    return commentsData
}

//删除
module.exports.removeComment = async (page) => {
    const commentsData = await mongoose.model("commentsModel").remove(page)
    return commentsData
}

