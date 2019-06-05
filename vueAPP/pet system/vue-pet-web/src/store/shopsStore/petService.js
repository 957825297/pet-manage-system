import axios from "axios";
export default {
    namespaced: true,
    state: {
        option1: [
            {
                value: "美容"
            },
            {
                value: "洗澡"
            },
            {
                value: "装扮"
            },
            {
                value: "其他"
            }
        ],
        option2: [
            {
                value: "修剪"
            },
            {
                value: "美容"
            }
        ],
        option3: [
            {
                value: "普通"
            },
            {
                value: "高级"
            },
            {
                value:"顶级"
            }
        ],
        option4: [
            {
                value:"幼犬"  
            },
            {
                value: "小型"
            },
            {
                value: "中型"
            },
            {
                value: "大型"
            }
        ],
        option5: [{
            value: 'name',
            label: '服务名称'
        }, {
            value: 'category',
            label: '服务类别'
        }, {
            value: 'cutting',
            label: '适用规格'
        }, {
            value: 'price',
            label: '价格'
        }],
        Page:{  currentPage: 1,
            pageSize: 10,
            totalPages: 1,
            totalCount: 0,
            ServicesData: [],
        }
    },
    mutations: {
        getServicesByPage(state, payload) {
            state.Page = payload
        },
        changeSize(state, payload) {
            state.Page.pageSize=payload;
        },
        changeCurrent(state, payload) {
            state.Page.currentPage=payload;
        },
    },
    actions: {
        add(a, paylaod) {
            if (paylaod.name !== '' && paylaod.date !== ''
                && paylaod.category !== '' && paylaod.cutting !== ''
                && paylaod.ServiceSpe !== '' && paylaod.hours !== ''
                && paylaod.waiterLevel !== '' && paylaod.price !== '') {
                axios({
                    method: "post",
                    url: "/service/addServices",
                    data:
                        paylaod

                }).then(res => {
                    if (res.data) {
                        
                    }
                });
            } else {
                alert('请不要为空')
            }
        },
        show(context) {
            axios({
                method: "get",
                url: "/service/getServices"
            }).then(res => {
                context.commit("getServicesByPage", res.data)
            });
        },
        del(context, payload) {
            console.log(payload)
            axios({
                method: "post",
                url: "/service/deleteServiceById",
                data:
                    { _id: payload }
            }).then(res => {
                location.reload()
                // context.commit("getServicesByPage")
            })
        },
        searchServer(context, payload) {
            console.log(payload)
            axios({
                method: "get",
                url: "/service/searchServer",
                params: payload
            }).then(res => {
                console.log(res)
                context.commit("getServicesByPage", res.data)
            })

        },
        ConfirmChange(context, payload) {
            console.log(payload)
            axios({
                method: "get",
                url: "/service/serviceUpdate",
                params: payload
            }).then(res => {
                console.log(res.data)
                location.reload()
                // context.commit("getServicesByPage", res.data)
            })
        },
        getServicesByPageAsync(context) {
            const { currentPage, pageSize } = context.state;
            axios({
                method: "post",
                url: "/service/getServicesByPage",
                data: 
                    context.state.Page
                
            }).then(res => {
                console.log(res.data);
                context.commit("getServicesByPage", res.data)
            });
        }
    }
}