const mongoose=require("mongoose");

module.exports.getMoviesByPage = async function(page) {
    const totalCount= await mongoose.model("moviesModel").countDocuments();//获取总条数
    const totalPage=Math.ceil(totalCount/page.pageSize);
    const moviesData= await mongoose.model("moviesModel")
             .find()
             .skip(page.pageSize*(page.currentPage-1))//跳过的条数
             .limit(page.pageSize);
    return {totalCount,totalPage,moviesData,currentPage:page.currentPage,pageSize:page.pageSize};
};

//查询数据
module.exports.searchMovies=async (page)=>{
    const{type,value}=page;
    const moviesData = await mongoose.model("moviesModel")
    .find({[type]:{$regex:value,$options:"$i"}})
    .skip(page.pageSize * (page.currentPage - 1))
    .limit(page.pageSize - 0);
    const totalCount = moviesData.length;
    const totalPage = Math.ceil(totalCount / page.pageSize);
    return { totalCount, totalPage, moviesData, currentPage: page.currentPage, pageSize: page.pageSize }
  }