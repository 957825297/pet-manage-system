<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item style="  display: flex;justify-content: left;align-items: center;">
        <div class="routerLink">
          <router-link to="/submissionOfInformation" style="color:white;font-size:12px">成为合伙人</router-link>
        </div>
      </el-form-item>
    </el-form>
    <el-table :data="shopsPageDate.shopsList" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="店铺 ID">
              <span>{{props.row._id}}</span>
            </el-form-item>
            <el-form-item label="店铺名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="执照号码">
              <span>{{ props.row.business_license_number }}</span>
            </el-form-item>
            <el-form-item label="执照图片">
              <span>
                <img :src="props.row.business_license_picture" style="width:80px;height:80px;">
              </span>
            </el-form-item>
            <el-form-item label="地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="定位">
              <span>{{ props.row.x_y }}</span>
            </el-form-item>
            <el-form-item label="法人">
              <span>{{ props.row.person }}</span>
            </el-form-item>
            <el-form-item label="法人电话">
              <span>{{ props.row.personPhone }}</span>
            </el-form-item>
            <el-form-item label="店铺头像">
              <span>
                <img :src="props.row.image" style="width:80px;height:80px;">
              </span>
            </el-form-item>
            <el-form-item label="申请状态">
              <span>{{ props.row.auditStatus }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="门店名称" prop="name"></el-table-column>
      <el-table-column label="申请人" prop="person"></el-table-column>
      <el-table-column label="地址" prop="address"></el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
  </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutaions, mapActions } = createNamespacedHelpers("shops");
export default {
  data() {
    return {
      formInline: {
        _id: null,
        name: null,
        auditStatus: null,
        position: null,
        person: null,
        personPhone: null,
        phone: null,
        features: null,
        vipRating: null,
        price: null,
        waiter: null,
        goodsId: null,
        serversId: null,
        business_license_number: null,
        business_license_picture: null,
        address: null,
        x_y: null,
        person: null,
        personPhone: null,
        image: null,
        waiterName: null,
        waiterPhone: null,
        waiterOccupation: null
      },
      tableData: [
        {}
      ]
    };
  },
  created() {
    this.shopsListAsync();
  },
  computed: {
    ...mapState(["shopsPageDate", "reviewPageDate"])
  },
  methods: {
    ...mapActions(["shopsListAsync"]),
    onSubmit() {
      console.log("submit!");
    }
  },
  beforeCreate() {}
};
</script>

<style>
a {
  text-decoration: none;
  color: white;
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
.routerLink {
  background-color: #409eff;
  border-radius: 5px;
  padding: 0 5px 0 5px;
  box-sizing: border-box;
}
</style>
