<template>
    <el-container>
       <el-header style="background:white">宠主查询</el-header>
       <el-main>
          <div style="margin: 15px auto 30px;">
             <el-input placeholder="请输入内容" v-model="inputText" class="input-with-select">
               <el-select v-model="select" slot="prepend" placeholder="请选择">
                  <!-- <el-option label="宠主 ID" value="宠主 ID"></el-option> -->
                  <el-option label="宠主真名" value="name"></el-option>
                  <el-option label="宠主电话" value="phone"></el-option>
                  <el-option label="宠主昵称" value="nickname"></el-option>
                  <!-- <el-option label="会员卡号" value="3"></el-option> -->
                  <!-- <el-option label="拥有宠物" value="3"></el-option> -->
               </el-select>
               <el-button slot="append" icon="el-icon-search" v-on:click="searchPetOwners"></el-button>
             </el-input>
         </div>
         <div>
           <el-table :data="searchData" style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="宠主 ID">
                    <span>{{ props.row._id }}</span>
                  </el-form-item>
                  <el-form-item label="宠主真名">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="宠主电话">
                    <span>{{ props.row.phone }}</span>
                  </el-form-item>
                  <el-form-item label="宠主昵称">
                    <span>{{ props.row.nickname }}</span>
                  </el-form-item>
                  <el-form-item label="会员卡">
                    <span>{{ props.row.vipCard }}</span>
                  </el-form-item>
                  <el-form-item label="会员头像">
                    <img :src=" props.row.image " alt="会员头像">
                  </el-form-item>
                  <el-form-item label="会员积分">
                    <span>{{ props.row.score }}</span>
                  </el-form-item>
                  <el-form-item label="送货区域">
                    <span>{{ props.row.area }}</span>
                  </el-form-item>
                  <el-form-item label="送货地址">
                    <span>{{ props.row.address }}</span>
                  </el-form-item>
                  <el-form-item label="拥有宠物">
                    <span>{{ props.row.pets }}</span>
                  </el-form-item>
                </el-form>
                </template>
                </el-table-column>
                <el-table-column
                  label="宠主 ID"
                  prop="_id">
                </el-table-column>
                <el-table-column
                  label="宠主真名"
                  prop="name">
                </el-table-column>
                <el-table-column
                  label="宠主电话"
                  prop="phone">
                </el-table-column>
           </el-table>
        </div>
       </el-main>
       <Pagination :watchFun='watchFun'/>
    </el-container>
</template>

<script>
import {createNamespacedHelpers} from 'vuex';
const {mapState,mapMutations,mapActions} =createNamespacedHelpers('petOwnersStore');
import Pagination from '../../pagination.vue';
export default {
   data() {
    return {
      inputText: '',
      select: 'name'
    }
  },
  components:{
    Pagination
  },
  computed:{
     ...mapState(['searchData'])
  },
  methods:{
    ...mapActions(['searchPetOwnersByPageAsync']),
    searchPetOwners(){
      this.searchPetOwnersByPageAsync({
        value:this.inputText,
        type:this.select});
    },
    watchFun(){
      this.searchPetOwnersByPageAsync()
    }
  }
};
</script>
   
<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
