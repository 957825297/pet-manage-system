<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="门店列表" name="first">
        <div style="display: inline-block;">
          <el-button type="primary" @click="addShop" plain>添加</el-button>
        </div>
        <div style="margin: 15px 0;width:400px;display: inline-block;">
          <el-input placeholder="请输入内容" v-model="formInline.vlaue" class="input-with-select">
            <el-select v-model="formInline.type" slot="prepend" placeholder="请选择">
              <el-option label="店铺 ID" value="_id"></el-option>
              <el-option label="法人" value="person"></el-option>
              <el-option label="执照号码" value="business_license_number"></el-option>
            </el-select>
            <el-button slot="append" @click="rearchShops" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <el-table :data="shopsPageDate.shopsList" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="店铺 ID">
                  <span>{{props.row._id}}</span>
                </el-form-item>
                <el-form-item label="门店名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="营业执照">
                  <img
                    :src="props.row.business_license_picture"
                    style="width:200px;height:100px"
                    alt
                  >
                </el-form-item>
                <el-form-item label="地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="定位">
                  <span>{{ props.row.position }}</span>
                </el-form-item>
                <el-form-item label="法人">
                  <span>{{ props.row.person }}</span>
                </el-form-item>
                <el-form-item label="法人电话">
                  <span>{{ props.row.personPhone }}</span>
                </el-form-item>
                <el-form-item label="联系电话">
                  <span>{{ props.row.phone }}</span>
                </el-form-item>
                <el-form-item label="头像">
                  <img :src="props.row.image" style="width:200px;height:100px" alt>
                </el-form-item>
                <el-form-item label="特色">
                  <span>{{ props.row.features }}</span>
                </el-form-item>
                <el-form-item label="商品">
                  <span>{{ props.row.goodsId }}</span>
                  <el-button round @click="updateGood(props.row._id)">圆形按钮</el-button>
                </el-form-item>
                <el-form-item label="服务">
                  <span>{{ props.row.serversId }}</span>
                </el-form-item>
                <el-form-item label="操作">
                  <el-tooltip content="删除门店" placement="bottom" effect="light">
                    <el-button
                      type="primary"
                      :data-v="props.row._id"
                      @click="deleteShop($event)"
                      icon="el-icon-delete"
                    ></el-button>
                  </el-tooltip>
                  <el-tooltip content="修改门店信息" placement="bottom" effect="light">
                    <el-button
                      type="primary"
                      icon="el-icon-edit"
                      @click="updateShop($event,props.row)"
                    ></el-button>
                  </el-tooltip>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="门店名称" prop="name"></el-table-column>
          <el-table-column label="营业执照" prop="business_license_picture"></el-table-column>
          <el-table-column label="地址" prop="address"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="审核列表" name="second">
        <div style="margin: 15px 0;width:400px">
          <el-input placeholder="请输入内容" v-model="formInline.type" class="input-with-select">
            <el-select v-model="formInline.vlaue" slot="prepend" placeholder="请选择">
              <el-option label="店铺 ID" value="_id"></el-option>
              <el-option label="宠物的主人" value="petOwnerName"></el-option>
            </el-select>
            <el-button slot="append" @click="onSubmit" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <el-table :data="reviewPageDate.shopsList" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
                <el-form-item label="通过审核">
                  <el-tooltip placement="top">
                    <div slot="content">确认通过审核？</div>
                    <el-button data-id @click="confirm(props.row._id)">确认</el-button>
                  </el-tooltip>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="门店 ID" prop="id"></el-table-column>
          <el-table-column label="门店名称" prop="name"></el-table-column>
          <el-table-column label="门店描述" prop="desc"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="添加商品" :visible.sync="dialogForm">
      <el-form :model="form">
        <el-form-item label="选择商品" :label-width="formLabelWidth">
          <el-select v-model="fo.vlaue" placeholder="请选择商品">
            <el-option
              v-for="(item,index) in goodsList"
              :key="index"
              :label="item.class"
              :value="item._id"
            >类型：{{item.class}}, 品牌：{{item.brand}}, 适用：{{item.cutting}}, 价格：{{item.price}}, 重量：{{item.exclusive}}, 包装：{{item.packing}},</el-option>
          </el-select>
          <el-button type="primary" @click="addArr">确 定 添 加</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogForm = false">取 消</el-button>
        <el-button type="primary" @click="associated">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog style="width:100%" title="收货地址" :visible.sync="dialogFormVisible">
      <div style="display:flex;justify-content: center">
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
              :on-success="uploadSuccess"
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
              :on-success="uploadSuccessImg"
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
          <el-form-item label="员工姓名">
            <el-input v-model="form.waiterName">{{form.waiterName}}</el-input>
          </el-form-item>
          <el-form-item label="员工电话">
            <el-input v-model="form.waiterPhone">{{form.waiterPhone}}</el-input>
          </el-form-item>
          <el-form-item label="员工职级">
            <el-input v-model="form.waiterOccupation">{{form.waiterOccupation}}</el-input>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <el-input v-model="form._id">{{form.address}}</el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateShopAsync">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("shops");
export default {
  data() {
    return {
      flag: false,
      dialogForm: false,
      dialogFormVisible: false,
      form: {
        _id: null,
        name: null,
        auditStatus: false,
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
      formLabelWidth: "120px",
      activeName: "first",
      formInline: {
        type: "",
        vlaue: ""
      },
      arr: [],
      fo: { vlaue: "" },
      now_id: "" //当前id
    };
  },
  created() {
    this.shopsListAsync();
  },
  computed: {
    ...mapState(["shopsPageDate", "reviewPageDate", "goodsList"])
  },
  methods: {
    ...mapActions([
      "shopsListAsync",
      "removeShopsAsync",
      "searchShopsAsync",
      "getShopAsync"
    ]),
    onSubmit() {
      console.log(this.shopsPageDate);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    deleteShop(event) {
      this.removeShopsAsync(event.target.getAttribute("data-v"));
    },
    updateShop(event, data) {
      this.dialogFormVisible = true;
      this.form = { ...this.form, ...data };
    },
    updateShopAsync() {
      if (this.flag) {
        axios({
          method: "post",
          url: "/shops/subInfo",
          data: {
            name: this.form.name,
            auditStatus: this.form.auditStatus,
            position: this.form.position,
            person: this.form.person,
            personPhone: this.form.personPhone,
            phone: this.form.phone,
            features: this.form.features,
            vipRating: this.form.vipRating,
            price: this.form.price,
            waiter: this.form.waiter,
            goodsId: this.form.goodsId,
            serversId: this.form.serversId,
            business_license_number: this.form.business_license_number,
            business_license_picture: this.form.business_license_picture,
            address: this.form.address,
            x_y: this.form.x_y,
            person: this.form.person,
            personPhone: this.form.personPhone,
            image: this.form.image,
            waiterName: this.form.waiterName,
            waiterPhone: this.form.waiterPhone,
            waiterOccupation: this.form.waiterOccupation
          }
        }).then(msg => {
          console.log(msg);
        });
      } else {
        this.dialogFormVisible = false;
        axios({
          method: "post",
          url: "/shops/updateShops",
          data: {
            _id: this.form._id,
            name: this.form.name,
            auditStatus: this.form.auditStatus,
            position: this.form.position,
            person: this.form.person,
            personPhone: this.form.personPhone,
            phone: this.form.phone,
            features: this.form.features,
            vipRating: this.form.vipRating,
            price: this.form.price,
            waiter: this.form.waiter,
            goodsId: this.form.goodsId,
            serversId: this.form.serversId,
            business_license_number: this.form.business_license_number,
            business_license_picture: this.form.business_license_picture,
            address: this.form.address,
            x_y: this.form.x_y,
            person: this.form.person,
            personPhone: this.form.personPhone,
            image: this.form.image,
            waiterName: this.form.waiterName,
            waiterPhone: this.form.waiterPhone,
            waiterOccupation: this.form.waiterOccupation
          }
        }).then(msg => {
          console.log(msg);
        });
      }
    },
    uploadSuccess(res, file, url) {
      this.form.business_license_picture = url[0].response.data.url;
    },
    uploadSuccessImg(res, file, url) {
      this.form.image = url[0].response.data.url;
    },
    rearchShops() {
      this.searchShopsAsync(this.formInline);
    },
    addShop() {
      this.dialogFormVisible = true;
      this.flag = true;
    },
    updateGood(id) {
      this.dialogForm = true;
      this.now_id = id;
      this.getShopAsync();
    },
    addArr() {
      if (this.fo.vlaue === "") {
        return;
      }
      this.arr.push(this.fo.vlaue);
      console.log(this.arr);
    },
    funiq(array) {
      var temp = []; //一个新的临时数组
      for (var i = 0; i < array.length; i++) {
        if (temp.indexOf(array[i]) == -1) {
          temp.push(array[i]);
        }
      }
      return temp;
    },
    associated(_id) {
      this.dialogForm = false;
      axios
        .get("shops/searchShops", {
          params: { _id: this.now_id }
        })
        .then(response => {
          console.log("成功", response.data[0]);
          this.arr = this.funiq(this.arr);
          console.log(this.arr);
          for (let i = 0; i < this.arr.length; i++) {
            const element = this.arr[i];
            axios({
              method: "post",
              url: "/shops/updateShops",
              data: {
                ...response.data[0],
                goodsId: element
              }
            }).then(msg => {
              console.log(msg);
            });
          }
        });
    },
    confirm(id) {
      axios
        .get("shops/searchShops", {
          params: { _id: id }
        })
        .then(response => {
          axios({
            method: "post",
            url: "/shops/updateShops",
            data: {
              ...response.data[0],
              auditStatus: true
            }
          }).then(msg => {
            console.log("sdasahkhdkjashdkjassadasd", msg);
          });
        });
    }
  }
};
</script>

<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
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
.el-upload-dragger {
  width: 210px;
}
</style>
