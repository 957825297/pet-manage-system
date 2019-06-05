import axios from "axios"
export default {
    namespaced: true,
    state: {
        Page: {
            currentPage: 1,
            pageSize: 5,
            totalPages: 1,
            totalCount: 0,
            dataList: []
        }
    },
    getters: {

    },
    mutations: {
        setOrder(data, arr) {
            data.Page = arr;
        },
        searchOrder(context, data = {}) {
            const { type, value } = data
            axios.get("/orders/searchOrders", {
                params: { [data.type]: data.value }
            }).then(response => {
                console.log("成功", context.Page.dataList);
                console.log("成功", response.data);
                context.Page.dataList = response.data
            })
        },
        pageing(state, value) {
            console.log(value);
            console.log(value.data == "");
            if (value.data == "") {
                axios({
                    method: "get",
                    url: "users/getOrdersByPage",
                    params: {
                        currenPage: state.currenPage, pageSize: state.pageSize
                    }
                })
                    .then((res) => {
                        state.pageDate = res.data
                    })
            } else {
                axios({
                    method: "get",
                    url: "users/fuzzyQuery",
                    params: {
                        type: value.type, data: value.data, currenPage: value.currenPage, pageSize: value.pageSize,
                        totalPage: value.totalPage, totalCount: value.totalCount,
                    }
                })
                    .then((res) => {
                        console.log(res.data);
                        state.pageDate = res.data
                    })
            }
        }
    },
    actions: {
        renderOrder(context, data = {}) {
            axios.get("/orders/getOrdersByPage", {
                params: context.state.Page
            })
                .then(response => {
                    console.log("成功", response);
                    context.commit("setOrder", response.data)
                })
                .catch(error => {
                    console.log("不成功", context);
                });
        }

    }
}