<template>
  <el-form ref="form" :model="form" label-width="85px">
    <el-form-item label="品牌名称">
      <el-input class="inputs" v-model="form.brand" placeholder="请输入品牌"></el-input>
    </el-form-item>
    <el-form-item label="品类">
      <el-select v-model="form.class" placeholder="品类">
        <el-option v-for="item in option1" :key="item.value" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="规格">
      <el-select v-model="form.exclusive" placeholder="请选择规格">
        <el-option v-for="item in option2" :key="item.value" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="包装规格">
      <el-select v-model="form.packing" placeholder="请选择包装规格">
        <el-option v-for="item in option3" :key="item.value" :value="item.value"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="适用规格">
      <el-select v-model="form.cutting" placeholder="请选择服务规格">
        <el-option v-for="item in option4" :key="item.value" :value="item.value"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="价格">
      <el-input type="text" class="inputs el-input" v-model="form.price" placeholder="请输入服务价格"></el-input>元
    </el-form-item>
    <el-upload
      action="/goods/addImgs"
      list-type="picture-card"
      :on-success="handlePictureCardPreview"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" size="tiny">
      <img width="100%" :src="dialogImageUrl" alt>
    </el-dialog>
    <el-form-item>
      <el-button @click="onSubmit" class="fon">立即创建</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "goodsList"
);
export default {
  computed: {
    ...mapState(["option1", "option2", "option3", "option4"])
  },
  data() {
    return {
      form: {
        brand: "",
        class: "",
        cutting: "",
        price: "",
        images: ""
      },
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    ...mapActions(["add"]),
    handlePictureCardPreview(file, data, url) {
      this.form.images = url[0].response.data.url;
    },
    onSubmit() {
      this.add(this.form);
      this.$confirm("是否新增?", "提示", {
        confirmButtonText: "确定新增",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "新增成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消新增"
          });
        });
    }
  }
};
</script>

<style >
.inputs {
  width: 220px;
}

.el-form-item__label {
  font-weight: bold;
}
.fon {
  font-weight: bold;
}
</style>
