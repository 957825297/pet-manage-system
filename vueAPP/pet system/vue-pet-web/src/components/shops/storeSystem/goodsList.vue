<template>
<div>
  <el-select v-model="value1" class="se" placeholder="请选择">
    <el-option
      v-for="item in option5"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
<el-input v-model="inputss" class="input" placeholder="请输入内容">
    <el-button slot="append" @click="h" icon="el-icon-search"></el-button>
</el-input>
  <el-table :data="Page.ServicesData" border style="width: 100%">
<el-table-column fixed align= 'center'  prop="name" label="服务名称" width="140"></el-table-column>
<el-table-column  align= 'center' prop="images" label="商品图片" width="200">
        <template slot-scope="props">
          <img :src="props.row.images" class="img">
          <!-- <span>{{props.row.images}}</span> -->
        </template>
</el-table-column>
<el-table-column align= 'center' prop="category" label="服务类别" width="140"></el-table-column>
<el-table-column align= 'center' prop="cutting" label="适用规格" width="140"> </el-table-column>
<el-table-column  align= 'center' prop="ServiceSpe" label="服务规格" width="140"></el-table-column>
<el-table-column align= 'center' prop="hours" label="耗时" width="140"></el-table-column>
<el-table-column align= 'center' prop="waiterLevel" label="服务员等级" width="140"></el-table-column>
<el-table-column align= 'center'  prop="price"  label="价格"  width="140"></el-table-column>
<el-table-column align= 'center'  prop="date"  label="排期"  width="140"></el-table-column>
<el-table-column align= 'center'  fixed="right"  label="操作"  width="">
      <template slot-scope="scope">
        <el-button   size="small"   @click="editShow(scope.row)"   >修改</el-button>
        <el-button   @click="del(scope.row._id)" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  
    <div class="block">
    <el-pagination
     @size-change="handlePagesize"
      @current-change="handleCurrentChange"
      :page-sizes="[1,2,5,10]"
      :page-size="2"
      layout="total, sizes, prev, pager, next, jumper"
      :total="Page.totalCount">
    </el-pagination>
  </div>

  <!--弹窗数据-->
<el-dialog title="修改" :visible.sync="dialogFormVisible">
    <el-form ref="form" :model="form" label-width="85px">
  <el-form-item label="服务名称">
    <el-input class="input" v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="商品图片">
    <el-upload
      action="/goods/addImgs"
      list-type="picture-card"
      :on-success="handlePictureCardPreview">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" size="tiny">
      <img width="100%" :src="dialogImageUrl" alt>
    </el-dialog>
  </el-form-item>
  <el-form-item label="服务类别">
    <el-select v-model="form.category" placeholder="请选择服务类别">
      <el-option  v-for="item in option1"
      :key="item.value"
      :value="item.value"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="服务规格">
    <el-select v-model="form.ServiceSpe" placeholder="请选择服务规格">
      <el-option  v-for="item in option2"
      :key="item.value"
      :value="item.value"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="服务员等级">
    <el-select v-model="form.waiterLevel" placeholder="请选择服务员等级">
      <el-option  v-for="item in option3"
      :key="item.value"
      :value="item.value"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="排期">
   <el-time-select
  v-model="form.date"
  :picker-options="{
    start: '07:00',
    step: '00:01',
    end: '20:30'
  }"
  placeholder="选择时间">
</el-time-select>
  </el-form-item>
   <el-form-item label="适用规格">
    <el-select v-model="form.cutting" placeholder="请选择服务规格">
      <el-option  v-for="item in option4"
      :key="item.value"
      :value="item.value"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="耗时">
    <el-input type="text" class="input" v-model="form.hours"></el-input>小时
  </el-form-item>
    <el-form-item label="价格">
    <el-input type="text" class="input" v-model="form.price"></el-input>元
  </el-form-item>
</el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="Modify()">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "petService"
);
export default {
  computed: {
    ...mapState([
      "Page",
      "option5",
      "option1",
      "option2",
      "option3",
      "option4"
    ])
  },
  data() {
    return {
      value1: "",
      inputss: "",
      dialogFormVisible: false,
      form: {
        name: "",
        category: "",
        ServiceSpe: "",
        waiterLevel: "",
        date: "",
        cutting: "",
        hours: "",
        price: "",
        images: ""
      },
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    ...mapActions(["show", "del", "searchServer", "ConfirmChange","getServicesByPageAsync"]),
    ...mapMutations(["changeSize", "changeCurrent"]),
    h() {
      this.searchServer({
        name: this.value1,
        value: this.inputss
      });
    },
    editShow(val) {
      this.dialogFormVisible = true;
      this.form = Object.assign({}, val);
    },
    Modify() {
      this.dialogFormVisible = false;
      this.ConfirmChange(this.form)
    },
     handlePagesize(e) {
      this.changeSize(e);
      this.getServicesByPageAsync();
    },
    handleCurrentChange(e) {
      this.changeCurrent(e);
      this.getServicesByPageAsync();
    },
     handlePictureCardPreview(file, data, url) {
      this.form.images = url[0].response.data.url;
    }
  },
  mounted() {
    this.getServicesByPageAsync();
  }
};
</script>

<style>
.input {
  width: 220px;
}
.se {
  width: 105px;
}
.cell{
  font-weight:bold;
}
.img{
   width: 200px;
   height: 200px;
}
</style>
