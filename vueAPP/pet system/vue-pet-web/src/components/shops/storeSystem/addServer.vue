<template>

    <el-form ref="form" :model="form" label-width="85px" >
  <el-form-item label="服务名称">
    <el-input class="inputs " v-model="form.name" placeholder="请输入服务名称" ></el-input>
  </el-form-item>
  <el-form-item label="服务类别">
    <el-select v-model="form.category" placeholder="请选择服务类别" >
      <el-option  v-for="item in option1"
      :key="item.value"
      :value="item.value"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="服务规格">
    <el-select v-model="form.ServiceSpe" placeholder="请选择服务规格" >
      <el-option  v-for="item in option2"
      :key="item.value"
      :value="item.value"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="服务员等级">
    <el-select v-model="form.waiterLevel" placeholder="请选择服务员等级" >
      <el-option  v-for="item in option3"
      :key="item.value"
      :value="item.value"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="预约时间" >
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
    <el-select v-model="form.cutting" placeholder="请选择服务规格" >
      <el-option  v-for="item in option4"
      :key="item.value"
      :value="item.value"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="用时">
    <el-input type="text" class="inputs " v-model="form.hours" placeholder="请输入服务用时"></el-input>小时
  </el-form-item>
    <el-form-item label="价格">
    <el-input type="text" class="inputs el-input" v-model="form.price" placeholder="请输入服务价格"></el-input>元
  </el-form-item>
  <el-form-item>
    <el-button  @click="onSubmit" class="fon">立即创建</el-button>
  </el-form-item>
</el-form>

</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "petService"
);
export default {
  computed: {
    ...mapState(["option1", "option2", "option3", "option4"])
  },
  data() {
    return {
      form: {
        name: "",
        category: "",
        ServiceSpe: "",
        waiterLevel: "",
        date: "",
        cutting: "",
        hours: "",
        price: ""
      }
    };
  },
  methods: {
       ...mapActions(["add"]),
    onSubmit() {
     this.add(this.form)
        this.$confirm('是否新增?', '提示', {
          confirmButtonText: '确定新增',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '新增成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消新增'
          });          
        });
      }
    }
  }
</script>

<style >       
.inputs {
  width: 220px;
}       

.el-form-item__label{
  font-weight:bold
}
.fon{
  font-weight:bold;
}
</style>
