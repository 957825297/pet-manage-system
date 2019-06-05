<template>
  <div>
    <div style="margin: 15px 0;width:400px;">
      <el-input placeholder="请输入内容" v-model="formInline.user" class="input-with-select">
        <el-select v-model="formInline.region" slot="prepend" placeholder="请选择">
          <el-option label="订单号" value="_id"></el-option>
          <el-option label="宠物的主人" value="petOwnerName"></el-option>
        </el-select>
        <el-button slot="append" @click="onSubmit" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <el-table :data="Page.dataList" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="订单号">
              <span>{{ props.row.orderNum }}</span>
            </el-form-item>
            <el-form-item label="商品名">
              <span>{{ props.row.goodName }}</span>
            </el-form-item>
            <el-form-item label="宠主名">
              <span>{{ props.row.petOwnerName }}</span>
            </el-form-item>
            <el-form-item label="下单时间">
              <span>{{ props.row.time }}</span>
            </el-form-item>
            <el-form-item label="商品价格">
              <span>{{ props.row.price }}</span>
            </el-form-item>
            <el-form-item label="商品图片">
              <el-image style="width: 100px; height: 100px" :src="props.row.image"></el-image>
            </el-form-item>
            <el-form-item label="商品数量">
              <span>{{ props.row.num }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="订单号" prop="orderNum"></el-table-column>
      <el-table-column label="商品名" prop="goodName"></el-table-column>
      <el-table-column label="宠主名" prop="petOwnerName"></el-table-column>
      <el-table-column label="下单时间" prop="time"></el-table-column>
      <el-table-column label="商品价格" prop="price"></el-table-column>
      <el-table-column label="商品图片" prop="image">
        <template slot-scope="props">
          <el-image style="width: 100px; height: 100px" :src="props.row.image"></el-image>
        </template>
      </el-table-column>
      <el-table-column label="商品数量" prop="num"></el-table-column>
    </el-table>
    <div class="block">
          <Paging @pageing="pageing" :pageDate="Page" :inputVal="user" :select="region"></Paging>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "orders"
);
import Paging from "../paging";
export default {
  components: {
    Paging
  },
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      }
    };
  },
  watch: {
    ["formInline.region"]: function(a, b) {
      console.log(a, b);
    }
  },
  computed: {
    ...mapState(["Page",]),
  setPageSize(){
  },
  setNextPage(){
  }
  },
  methods: {
    ...mapActions(["renderOrder"]),
    ...mapMutations(["searchOrder","pageing"]),
    onSubmit() {
      let data = { type: this.formInline.region, value: this.formInline.user };
      this.searchOrder(data);
    }
  },
  created() {
    this.renderOrder();
  }
};
</script>

<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  width: 70px;
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
