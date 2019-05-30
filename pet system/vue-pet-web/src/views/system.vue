<template>
<div>
<el-container>
<el-header height='100px'>
<h1>信息管理系统</h1>
</el-header>
<el-container>
<el-aside width="200px">
<el-menu :default-openeds="['1', '3']">
<el-submenu index="1">
<template slot="title">
<i class="el-icon-message"></i>学生管理
</template>
<el-menu-item-group>
<el-menu-item index="1-1">
<router-link to="/system/studentsList">学生列表</router-link>
</el-menu-item>
<el-menu-item index="1-2">
<router-link to="/system/addStudents">新增学生</router-link>
</el-menu-item>
</el-menu-item-group>
</el-submenu>
<el-submenu index="2">
<template slot="title">
<i class="el-icon-menu"></i>班级管理
</template>
<el-menu-item-group>
<el-menu-item index="2-1">
<router-link to="/system/classesList">班级列表</router-link>
</el-menu-item>
<el-menu-item index="2-2">
<router-link to="/system/addClasses">新增班级</router-link>
</el-menu-item>
</el-menu-item-group>
</el-submenu>
</el-menu>
</el-aside>
<el-main>
<div>
<div>
<router-view></router-view>
</div>
</div>
</el-main>
</el-container>
</el-container>
</div>
</template>

<script>
export default {};
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
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>