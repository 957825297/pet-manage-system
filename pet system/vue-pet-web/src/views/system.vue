<template>
  <div>
    <el-container style="height:100vh;">
      <el-header height="100px">
        <h1>爱宠邦后台管理系统</h1>
      </el-header>
      <el-container>
        <el-aside>
          <div>
            <el-collapse v-model="activeNames" @change="handleChange" class="collapses">
              <el-collapse-item title="平台" name="1">
                <div class="texts">
                  <el-link>用户管理</el-link>
                </div>
                <div class="texts">
                  <el-link>门店管理</el-link>
                </div>
                <div class="texts">
                  <el-link>宠主管理</el-link>
                </div>
                <div class="texts">
                  <el-link>供应商管理</el-link>
                </div>
                <div class="texts">
                  <el-link>退出登陆</el-link>
                </div>
              </el-collapse-item>
            </el-collapse>
            <el-collapse v-model="activeNames" @change="handleChange"  class="collapses">
              <el-collapse-item title="门店" name="2">
                <div class="texts">
                  <el-link>门店申请</el-link>
                </div>
                <div class="texts">
                  <el-link>商品管理</el-link>
                </div>
                <div class="texts">
                  <el-link>服务管理</el-link>
                </div>
                <div class="texts">
                  <el-link>订单管理</el-link>
                </div>
                <div class="texts">
                  <el-link>评价</el-link>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-aside>
        <el-main>内容</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"],
    };
  },
  methods: {
    handleChange(val) {}
  }
};
</script>


<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  color: #333;
  text-align: center;
  height: 100%;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  /* height: 100vh; */
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-container{
    background-color: #32323d;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.texts {
  display: flex;
  justify-content: center;
  height: 50px;
}
/* .collapses{
  display: flex;
  width: 100%;
  justify-content:space-evenly;
  background-color: #32323d;
} */
</style>