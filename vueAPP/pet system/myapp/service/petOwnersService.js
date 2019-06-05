const {getPetOwnersByPage,searchPetOwnersByPage,addPetOwners} = require('../dao/petOwnersDao');

//分页获取
module.exports.getPetOwnersByPage=async (data)=>{
    return await getPetOwnersByPage(data);
}

//查询
module.exports.searchPetOwnersByPage=async (data)=>{
    return await searchPetOwnersByPage(data);
}

//新增
module.exports.addPetOwners=async (data)=>{
    return await addPetOwners(data);
}
