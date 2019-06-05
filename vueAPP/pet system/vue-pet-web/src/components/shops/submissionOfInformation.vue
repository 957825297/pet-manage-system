<template>
  <div style="display:flex;justify-content: left;margin-left:38\0px;">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="店铺名称">
        <el-input v-model="form.name">{{form.name}}</el-input>
      </el-form-item>
      <el-form-item label="执照号码">
        <el-input v-model="form.business_license_number">{{form.business_license_number}}</el-input>
      </el-form-item>
      <el-form-item label="执照图片">
        <el-upload
          class="upload-demo"
          drag
          action="/shops/addImgs"
          multiple
          :on-success="uploadPic"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="店铺图片">
        <el-upload
          class="upload-demo"
          drag
          action="/shops/addImgs"
          multiple
          :on-success="uploadImg"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="营业地址">
        <el-input v-model="form.address">{{form.address}}</el-input>
      </el-form-item>
      <el-form-item label="经纬度">
        <el-input v-model="form.x_y">{{form.x_y}}</el-input>
      </el-form-item>
      <el-form-item label="法人">
        <el-input v-model="form.person">{{form.person}}</el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.personPhone">{{form.personPhone}}</el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getInfo">
          <span>确定申请</span>
        </el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style>
a {
  text-decoration: none;
  color: white;
}
.el-form-item {
  width: 440px;
}
</style>


<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        business_license_number: "",
        business_license_picture: "",
        address: "",
        x_y: "",
        person: "",
        personPhone: "",
        image: "",
        waiterName: "",
        waiterPhone: "",
        waiterOccupation: ""
      }
    };
  },
  watch: {
    ["form.name"]: function(newQuestion, oldQuestion) {
      console.log(newQuestion, oldQuestion);
    },
    ["form.x_y"]: function(newQuestion, oldQuestion) {
      console.log(newQuestion, oldQuestion);
    },
    ["form.person"]: function(newQuestion, oldQuestion) {
      console.log(newQuestion, oldQuestion);
    },
    ["form.personPhone"]: function(newQuestion, oldQuestion) {
      console.log(newQuestion, oldQuestion);
    }
  },
  methods: {
    getInfo() {
      this.$router.push({ path: "/storeApplication" });
      axios({
        method: "post",
        url: "/shops/subInfo",
        data: {
          name: this.form.name,
          address: this.form.address,
          x_y: this.form.x_y,
          person: this.form.person,
          personPhone: this.form.personPhone,
          business_license_number: this.form.business_license_number,
          phone: this.form.phone,
          business_license_picture: this.form.business_license_picture,
          image: this.form.image
        }
      }).then(msg => {
        axios({
          method: "get",
          url: "users/userUpdate",
          params: {
            ...this.$store.data,
            shopsId: msg.data._id
          }
        }).then(res => {
          console.log("关联数据", res);
        });
      });
    },
    uploadPic(res, file, url) {
      this.form.business_license_picture = url[0].response.data.url;
    },
    uploadImg(res, file, url) {
      this.form.image = url[0].response.data.url;
    }
  }
};
</script>