const mongoose=require("mongoose");

//分页获取
module.exports.getPetOwnersByPage=async (page)=>{
    const {currentPage,pageSize} = page;
    const totalCount= await mongoose.model("petOwnersModel").countDocuments();//获取总条数
    const totalPage=Math.ceil(totalCount/pageSize);
    const data= await mongoose.model("petOwnersModel")
             .find()
             .skip(pageSize*(currentPage-1))//跳过的条数
             .limit(pageSize);
    return {totalCount,totalPage,data,currentPage,pageSize};
}

//查询数据
module.exports.searchPetOwnersByPage=async (page)=>{
    const{type,value,currentPage,pageSize}=page;

    const totalCount= await mongoose.model("petOwnersModel").countDocuments();//获取总条数
    const totalPage=Math.ceil(totalCount/pageSize);
    const searchData = await mongoose.model("petOwnersModel")
    .find({[type]:{$regex:value,$options:"$i"}})
    .skip(pageSize*(currentPage-1))//跳过的条数
    .limit(pageSize);
    return {totalCount,totalPage,currentPage,pageSize,searchData}
}

//新增
module.exports.addPetOwners=async ()=>{
    return await mongoose.model("petOwnersModel").create();
}