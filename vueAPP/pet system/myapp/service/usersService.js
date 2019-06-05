const { login, userUpdate,adduser,deleteUser,
    getUsersByPage,fuzzyQuery,} = require("../dao/usersDao");
//模糊查询
module.exports.fuzzyQuery = async user => {
    return await fuzzyQuery(user);
     
}
module.exports.login = async function (user) {
    // 调用的是持久层dao的login方法
    const data = await login(user);
    if (data.length > 0) {
        return data;
    } else {
        return false;
    }
}

// 修改
module.exports.userUpdate = async user => {
    const data = await userUpdate(user);
    return data;
}

// 添加
module.exports.adduser = async user => {
    const data = await adduser(user);
    return data;
}

// 删除
module.exports.deleteUser = async user => {
    const data = await deleteUser(user);
    return data;
}

//获取一部分数据
module.exports.getUsersByPage = async user => {    
    const data = await getUsersByPage(user);
    return data;
}



