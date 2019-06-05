const {getComment,addComment,updateComment,removeComment} = require('../dao/commentsDao');

//获取
module.exports.getComment = async function(data) {
    const data = await getComment(data);
    return data;
};

//添加
module.exports.addComment = async function(data) {
    const data = await addComment(data);
    return data;
};
//修改
module.exports.updateComment = async function(data) {
    const data = await updateComment(data);
    return data;
};
//删除
module.exports.removeComment = async function(data) {
    const data = await removeComment(data);
    return data;
};