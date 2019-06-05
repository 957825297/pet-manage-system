import axios from 'axios';

export default{
    namespaced:true,
    state:{
        currentPage:1,
        pageSize:3,
        totalPages:0,
        totalCount:0,
        data:[] ,
        // type:'',
        // value:'',
        searchData:[]
    },
    mutations:{
        getPetOwnersByPage(state,payload){
            Object.assign(state,payload);
        },
        searchPetOwnersByPage(state,payload){
            Object.assign(state,payload);
        },
        setNextPage(state,payload){
          state.currentPage= payload
        },
        setPageSize(state,payload){
            state.pageSize=payload
        }
    },
    actions:{
        getPetOwnersByPageAsync(context){
            const {currentPage,pageSize}=context.state;
           axios({
               method:'get',
               url:'/petOwners/getPetOwnersByPage',
               params:{
                   currentPage,
                   pageSize
                }
           }).then((res)=>{
               console.log(res.data)
               context.commit('getPetOwnersByPage',res.data);
           });
        },
        searchPetOwnersByPageAsync(context,value){
            // console.log(value);
            const {currentPage,pageSize}=context.state;
           axios({
               method:'post',
               url:'/petOwners/searchPetOwnersByPage',
               data:{
                ...value,
                currentPage,
                pageSize
                }
           }).then((res)=>{
            //    console.log(res.data)
               context.commit('searchPetOwnersByPage',res.data);
           });
        },
        addPetOwners(context,value){
            console.log(value);
           axios({
               method:'post',
               url:'/petOwners/addPetOwners',
               data:{
                ...value,
                }
           }).then((res)=>{
               console.log(res.data)
            //    context.commit('addPetOwners',res.data);
            alert('新增成功！');
           });
        }
    }

}