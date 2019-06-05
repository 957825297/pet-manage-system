const mongoose = require("mongoose");

module.exports.login = async function (user) {
    const data = await mongoose.model("usersModel").find(user);
    return data;
}

// 修改
module.exports.userUpdate = async ({_id,loginName, password, phone, email,
    name, character, status,shopsId}) => {

    return await mongoose.model("usersModel").update({ _id},
        {
            _id,loginName, password, phone, email,
            name, character, status,shopsId
        },
        (err, data) => {
            return data;
        });
}
// 删除
module.exports.deleteUser = async user => {
    return await mongoose.model("usersModel").remove({ _id: user.value }, function () {
    })
}
//添加用户
module.exports.adduser = async ({loginName, password, phone, email,
     name, character, status,}) => {   
    return await mongoose.model("usersModel").create({loginName, password, phone, email,
        name, character, status,});
}

//获取部分数据
module.exports.getUsersByPage = async page => {
    const totalCount = await mongoose.model("usersModel").countDocuments();//总条数
    const totalPage = Math.ceil(totalCount / page.pageSize);  //总页数
    const usersData = await mongoose.model("usersModel")
        .find()   //查找
        // .populate("classId")  //连接的集合，
        .skip(page.pageSize * (page.currenPage - 1))
        .limit(page.pageSize - 0)
    return { totalCount, totalPage, usersData, currenPage: page.currenPage, pageSize: page.pageSize, }
}
//模糊查询

module.exports.fuzzyQuery = async (page) => {
    const totalCount = await mongoose.model("usersModel").countDocuments();//总条数
    const totalPage = Math.ceil(totalCount / page.pageSize);  //总页数
    const usersData = await mongoose.model("usersModel")
        .find({ [page.type]: { $regex: page.data, $options: "$i" } })   //查找
        // .populate("classId")  //连接的集合，
        .skip(page.pageSize * (page.currenPage - 1))
        .limit(page.pageSize - 0)
    return { totalCount, totalPage, usersData, currenPage: page.currenPage, pageSize: page.pageSize, }
}