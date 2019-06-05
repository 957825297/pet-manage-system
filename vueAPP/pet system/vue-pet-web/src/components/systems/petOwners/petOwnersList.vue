<template>
    <el-container>
       <el-header style="background:white">宠主管理</el-header>
       <el-main>
           <el-table :data="data" style="width: 100%">
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
       </el-main>
       <Pagination :watchFun='watchFun'/>
    </el-container>
</template>

<script>
import {createNamespacedHelpers} from 'vuex';
const {mapState,mapMutations,mapActions} =createNamespacedHelpers('petOwnersStore');
import Pagination from '../../pagination.vue';
export default {
  components:{
    Pagination
  },
  computed:{
     ...mapState(['data'])
  },
   methods: {
    ...mapActions(['getPetOwnersByPageAsync']),
    watchFun(){
      this.getPetOwnersByPageAsync()
    }
  }
};
</script>

<style>
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
