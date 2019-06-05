import axios from 'axios';
export default {
    namespaced: true,
    state: {
        pageDate: {
            currenPage: 1,  //当前页
            pageSize: 5,    //每页显示条数
            totalPage: 0,    //总页数
            totalCount: 0,   //总条数                                                                                                                                    
            usersData: []  //数据存放位置
        },
        serachData: {
            currenPage: 1,  //当前页
            pageSize: 5,    //每页显示条数
            totalPage: 0,    //总页数
            totalCount: 0,   //总条数 
        },
        userData:{}
    },
    mutations: {
        upDate(state,user){
            console.log("asdasdasdasda");
            
            state.userData = user;
        },
        minusPrice(state, padyload) {
            console.log(padyload);
            state.pageDate = padyload;
        },
        addUsers(state, value) {
            axios({
                method: "post",
                url: "users/adduser",
                data: {
                    loginName: value.loginName,
                    password: value.password,
                    phone: value.phone,
                    email: value.email,
                    name: value.name,
                    character: value.character,
                    status: value.status,
                }
            })
                .then((res) => {
                    console.log(res.data);
                })
        },
        deleteItem(state, value) {
            axios({
                method: "get",
                url: "users/deleteUser",
                params: {
                    value
                }
            })
                .then((res) => {
                    state.pageDate.usersData = state.pageDate.usersData.filter((item) => {
                        return item._id !== value
                    })
                })
        },
        ModifyingData(state, value) {
            console.log(value[0]);
            axios({
                method: "get",
                url: "users/userUpdate",
                params: {
                    _id: value[0]._id,
                    loginName: value[0].loginName,
                    password: value[0].password,
                    phone: value[0].phone,
                    email: value[0].email,
                    name: value[0].name,
                    character: value[0].character,
                    status: value[0].status,
                }
            })
                .then((res) => {
                    // this.riductionAsync();
                    console.log(res.data);
                })
        },
        searchData(state, value) {
            axios({
                method: "get",
                url: "users/fuzzyQuery",
                params: {
                    type: value.type, data: value.data, currenPage: value.currenPage, pageSize: value.pageSize
                }
            })
                .then((res) => {
                    state.pageDate.usersData = res.data.usersData
                    state.searchData = res.data
                    console.log(res.data);
                })
        },
    },
    actions: {
        riductionAsync(context, value) {
            axios({
                method: "get",
                url: "users/getUsersByPage",
                params: {
                    currenPage: value.currenPage, pageSize: value.pageSize
                }
            })
                .then((res) => {
                    context.commit("minusPrice", res.data);
                })
        },
        addname(context, ruleForm) {
            axios({
                method: "get",
                url: "/users/adduser",
                params: ruleForm
            }).then((msg) => {
                console.log(msg);
            })
        },
        login(context, user) {
            axios({
                method: "get",
                url: "/users/login",
                params: user
            }).then((msg) => {
                console.log(msg);
            })
        }
    },
}