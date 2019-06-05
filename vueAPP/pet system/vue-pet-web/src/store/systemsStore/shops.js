import axios from 'axios';
export default {
    namespaced: true,
    state: {
        shopsPageDate: {
            currenPage: 1,  //当前页
            pageSize: 5,    //每页显示条数
            totalPage: 0,    //总页数
            totalCount: 0,   //总条数                                                                                                                                    
            shopsList: [{}]  //数据存放位置
        },
        reviewPageDate: {
            currenPage: 1,  //当前页
            pageSize: 5,    //每页显示条数
            totalPage: 0,    //总页数
            totalCount: 0,   //总条数                                                                                                                                    
            reviewList: [{}]  //数据存放位置
        },
        goodsList: []
    },
    mutations: {
        updateShops(data, arr) {
            data.shopsPageDate.shopsList = arr.filter(element => {
                return element.auditStatus === true
            });;
            data.reviewPageDate.shopsList = arr.filter(element => {
                return element.auditStatus === false
            });
        },
        setData(data, arr){
            data.goodsList = arr;
        }
    },
    actions: {
        shopsListAsync(context) {
            axios({
                method: "get",
                url: "shops/getShopsByPage",
                params: {
                }
            }).then((res) => {
                console.log("ask打开",res.data);
                context.commit("updateShops", res.data)
            })
        },
        removeShopsAsync(context, _id) {
            axios({
                method: "post",
                url: "shops/removeShops",
                data: {
                    _id
                }
            }).then((res) => {
                context.dispatch("shopsListAsync")
            })
        },
        searchShopsAsync(context, data = {}) {
            const { type, vlaue } = data
            console.log(type, vlaue);
            axios.get("shops/searchShops", {
                params: { [type]: vlaue }
            }).then(response => {
                console.log("成功", response);
                context.commit("updateShops", response.data)
            })
        },
        getShopAsync(context) {
            axios.get("goods/getServices").then(response => {
                console.log("成功32423", response.data);
                context.commit("setData", response.data)
            })
        }
    }
}