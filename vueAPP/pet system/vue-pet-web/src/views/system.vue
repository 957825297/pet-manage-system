<template>
  <div>
    <el-container style="height:100vh;">
      <el-header height="100px">
        <h1>爱宠邦后台管理系统</h1>
      </el-header>
      <el-container>
        <el-aside>
          <el-row class="tac">
            <el-col :span="12" style="width:100%;">
              <el-menu
                default-active="$route.path"
                class="el-menu-vertical-demo"
                router="router"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
                <el-submenu index="1">
                <!-- <el-submenu index="1" v-if="data.character"> -->
                  <template slot="title" style="margin-right:10px;">
                    <i class="el-icon-s-goods"></i>
                    <span>平台管理</span>
                  </template>
                  <el-menu-item index="/user">
                    <i class="el-icon-user-solid" style="margin-left:40px;"></i>
                    <span slot="title">用户管理</span>
                  </el-menu-item>
                  <el-menu-item index="/systemsShops">
                    <i class="el-icon-unlock" style="margin-left:40px;"></i>
                    <span slot="title">门店管理</span>
                  </el-menu-item>
                  <el-submenu index="/petOwners">
                    <template slot="title">
                      <i class="el-icon-thumb" style="margin-left:20px;"></i>
                      宠主管理
                    </template>
                    <el-menu-item index="/petOwners/petOwnersList">
                      <i class="el-icon-star-off" style="margin-left:50px;"></i>
                      宠主列表
                    </el-menu-item>
                    <el-menu-item index="/petOwners/searchPetOwners">
                      <i class="el-icon-search" style="margin-left:50px;"></i>
                      宠主查询
                    </el-menu-item>
                  </el-submenu>
                  <el-menu-item index="/loginOut">
                    <i class="el-icon-error" style="margin-left:40px;"></i>
                    <span slot="title">退出登录</span>
                  </el-menu-item>
                </el-submenu>
                <!-- <el-submenu index="2" v-else> -->
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-s-home"></i>
                    <span>门店管理</span>
                  </template>
                  <el-menu-item index="/storeApplication">
                    <i class="el-icon-s-management" style="margin-left:40px;"></i>
                    <span slot="title">门店管理</span>
                  </el-menu-item>
                  <el-submenu index="3">
                    <template slot="title">
                      <i class="el-icon-thumb" style="margin-left:20px;"></i>
                      商品管理
                    </template>
                    <el-menu-item index="/addGoods">
                      <i class="el-icon-star-off" style="margin-left:50px;"></i>
                      商品添加
                    </el-menu-item>
                    <el-menu-item index="/goodsList">
                      <i class="el-icon-search" style="margin-left:50px;"></i>
                      商品列表
                    </el-menu-item>
                  </el-submenu>
                   <el-submenu index="/">
                    <template slot="title">
                      <i class="el-icon-thumb" style="margin-left:20px;"></i>
                      服务管理
                    </template>
                    <el-menu-item index="/addServer">
                      <i class="el-icon-star-off" style="margin-left:50px;"></i>
                      服务添加
                    </el-menu-item>
                    <el-menu-item index="/serverList">
                      <i class="el-icon-search" style="margin-left:50px;"></i>
                      服务列表
                    </el-menu-item>
                  </el-submenu>
                  <el-menu-item index="/order">
                    <i class="el-icon-s-promotion" style="margin-left:40px;"></i>
                    <span slot="title">订单管理</span>
                  </el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("petOwnersStore");
export default {
  data() {
    return {
      router: true,
      data: {}
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    ...mapActions(["getPetOwnersByPageAsync"])
  },
  mounted() {
    this.getPetOwnersByPageAsync();
  },
  created() {
    axios({
      method: "post",
      url: "users/islogin"
    }).then(msg => {
      console.log("阿瑟东撒的课件撒不打卡上班", msg);
      if (!msg.data) {
        this.$router.push({ path: "/login" });
      } else {
        this.$store.data = msg.data;
      }
    });
  }
};
</script>


<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-header {
  background: url("../assets/img/banner.jpg");
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100%;
  line-height: 200px;
}

.el-main {
  /* background: url('../assets/img/bg.jpg'); */
  background-repeat: no-repeat;
  color: #333;
  text-align: center;
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
.texts {
  display: flex;
  justify-content: center;
  height: 50px;
}
</style>