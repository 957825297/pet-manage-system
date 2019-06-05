<template>
    <el-container>
       <el-header>宠主新增</el-header>
       <el-main>
            <el-form ref="form" v-model="form" label-width="80px">
                <el-form-item label="宠主真名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="宠主电话">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="宠主昵称">
                    <el-input v-model="form.nickname"></el-input>
                </el-form-item>
                <el-form-item label="会员卡">
                    <el-input v-model="form.vipCard"></el-input>
                </el-form-item>
                <el-form-item label="会员头像">
                    <el-input v-model="form.image"></el-input>
                </el-form-item>
                <el-form-item label="会员积分">
                    <el-input v-model="form.score"></el-input>
                </el-form-item>
                <el-form-item label="送货区域">
                    <el-input v-model="form.area"></el-input>
                </el-form-item>
               <el-form-item label="送货地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="拥有宠物" >
                       <el-input v-model="form.pets"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button v-on:click="onSubmit">新增</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
       </el-main>
    </el-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers( "petOwnersStore");

export default {
     data() {
      return {
        form: {
          name: '',
          phone: '',
          nickname: '',
          vipCard: '',
          image: '',
          score: '',
          area: '',
          address: '',
          pets: '',
        }
      }
    },
    methods: {
      ...mapActions(['addPetOwners']),
      onSubmit() {
       this.addPetOwners(this.form);
      }
    }
};
</script>

<style>
</style>
