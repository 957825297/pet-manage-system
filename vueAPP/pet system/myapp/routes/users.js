var express = require('express');
var router = express.Router();
const { login, userUpdate,adduser,deleteUser,
     getUsersByPage, fuzzyQuery, } = require("../service/usersService");

// 模糊查询
    router.get('/fuzzyQuery', async function (req, res, next) {
        res.send(await fuzzyQuery(req.query));
    });
//用户登录到并保存到session里面
router.get('/login', async function (req, res, next) {
	const data = req.query;
    const result = await login(data);
	if(result){
		req.session.user = result[0];     //保存账户密码
	}
	res.send(result);
});
//判断session是否有传递来的值
router.post('/islogin', async function (req, res, next) {
	if(req.session.user){
		res.send(req.session.user);		
	}else{
		res.send(false);	
	}
});
// 退出登录
router.post('/logout', async function (req, res, next) {
		const user=req.session.user.phone;
		req.session.user = "";
		res.send(user);	
});
// 修改
router.get('/userUpdate', async function (req, res, next) {
    res.send(await userUpdate(req.query));
});
//删除
router.get('/deleteUser', async function (req, res, next) {
    res.send(await deleteUser(req.query));
});



// 添加
router.get('/adduser', async function (req, res, next) {
    res.send(await adduser(req.query));
});

// 获取部分
router.get('/getUsersByPage', async function (req, res, next) {
    res.send(await getUsersByPage(req.query));
});


// 图片上传
router.post('/addImages', async function (req, res, next) {
    const data = await uploadFile(req, res, {
        fileType: "users", 
        path: "./public/images"
    });
    res.send(data);
});


module.exports = router;
