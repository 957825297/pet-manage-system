<template>
  <div>
    <h1 class="h1">用户管理</h1>
    <div class="seacchStyle">
      <el-input placeholder="请输入查询内容" v-model="input" class="searchClass">
        <div slot="prepend">
          <div class="centerClass">
            <el-select v-model="select" placeholder="请选择" style="width: 90px">
              <el-option label="姓名" value="name"></el-option>
              <el-option label="手机号" value="phone"></el-option>
              <el-option label="登录名" value="loginName"></el-option>
              <el-option label="人员身份" value="character"></el-option>
              <el-option label="状态" value="status"></el-option>
            </el-select>
          </div>
          <div class="centerClass">
            <div class="line"></div>
          </div>
        </div>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </div>
    <span style="margin-left:80px;">
      <el-tooltip content="添加平台管理员" placement="top">
        <el-button round icon="el-icon-user" plain @click="dialogFormVisible = true">平台管理员</el-button>
      </el-tooltip>
    </span>
    <template>
      <el-table :data="pageDate.usersData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="姓名:">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="登录名:">
                <span>{{ props.row.loginName }}</span>
              </el-form-item>
              <el-form-item label="手机号:">
                <span>{{ props.row.phone }}</span>
              </el-form-item>
              <el-form-item label="邮箱地址:">
                <span>{{ props.row.email }}</span>
              </el-form-item>
              <el-form-item label="密码:">
                <span>{{ props.row.password }}</span>
              </el-form-item>
              <el-form-item label="人员身份:">
                <span v-if="props.row.character===true">
                  <el-button type="info" plain size="small">平台管理员</el-button>
                </span>
                <span v-if="props.row.character===false">
                  <el-button type="warning" plain size="small">门店管理员</el-button>
                </span>
              </el-form-item>
              <el-form-item label="状态:">
                <span v-if="props.row.status=='0'">
                  <el-button type="info" plain size="small">申请中</el-button>
                </span>
                <span v-if="props.row.status=='1'">
                  <el-button type="warning" plain size="small">可以用</el-button>
                </span>
                <span v-if="props.row.status=='2'">
                  <el-button type="danger" plain size="small">不可用</el-button>
                </span>
              </el-form-item>
              <el-form-item label="门店:">
                <span>暂无门店</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="手机号" prop="phone"></el-table-column>
        <el-table-column label="人员身份">
          <template slot-scope="item">
            <span v-if="item.row.character===true">
              <el-button type="info" plain>平台管理员</el-button>
            </span>
            <span v-if="item.row.character===false">
              <el-button type="warning" plain>门店管理员</el-button>
            </span>
          </template>
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <span v-if="scope.row.status=='0'">
              <el-button type="info" plain>申请中</el-button>
            </span>
            <span v-if="scope.row.status=='1'">
              <el-button type="warning" plain>可以用</el-button>
            </span>
            <span v-if="scope.row.status=='2'">
              <el-button type="danger" plain>不可用</el-button>
            </span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-tooltip content="修改数据后请点击确认，否则修改无效" placement="top">
              <el-button
                type="primary"
                @click="isdialogTableVisible(scope.row)"
                icon="el-icon-edit"
                circle
              ></el-button>
            </el-tooltip>

            <el-button type="danger" @click="deleteRow(scope.row._id)" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <Paging @pageing="pageing" :pageDate="pageDate" :inputVal="this.input" :select="select"></Paging>

    <el-dialog title="修改用户信息" :visible.sync="dialogTableVisible">
      <template>
        <el-table :data="gridData" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="姓名:">
                  <el-input
                    size="mini"
                    placeholder="请输入内容"
                    suffix-icon="el-icon-date"
                    v-model="props.row.name"
                    maxlength="4"
                  ></el-input>
                </el-form-item>
                <el-form-item label="登录名:">
                  <el-input
                    size="mini"
                    placeholder="请输入内容"
                    suffix-icon="el-icon-date"
                    v-model="props.row.loginName"
                  ></el-input>
                </el-form-item>
                <el-form-item label="手机号:">
                  <el-input
                    size="mini"
                    placeholder="请输入内容"
                    suffix-icon="el-icon-date"
                    v-model="props.row.phone"
                    style="width:180px;"
                    maxlength="11"
                    minlength="11"
                  ></el-input>
                </el-form-item>
                <el-form-item label="邮箱地址:">
                  <el-input
                    size="mini"
                    placeholder="请输入内容"
                    suffix-icon="el-icon-date"
                    v-model="props.row.email"
                    style="width:180px;"
                  ></el-input>
                </el-form-item>
                <el-form-item label="密码:">
                  <el-input
                    size="mini"
                    placeholder="请输入内容"
                    suffix-icon="el-icon-date"
                    v-model="props.row.password"
                  ></el-input>
                </el-form-item>
                <el-form-item label="人员身份:">
                  <span v-if="props.row.character===true">
                    <el-button type="info" size="small" plain>平台管理员</el-button>
                  </span>
                  <span v-if="props.row.character===false">
                    <el-button type="warning" size="small" plain>门店管理员</el-button>
                  </span>
                </el-form-item>
                <el-form-item label="状态:">
                  <el-radio v-model="props.row.status" label="1" border size="mini">可以用</el-radio>
                  <el-radio v-model="props.row.status" label="2" border size="mini">不可用</el-radio>
                </el-form-item>
                <el-form-item label="门店:">
                  <span>暂无门店</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="姓名" prop="name"></el-table-column>
          <el-table-column label="手机号" prop="phone"></el-table-column>
          <el-table-column label="人员身份">
            <template slot-scope="item">
              <span v-if="item.row.character===true">
                <el-button type="info" plain style="width:100px; text-align: center;">平台管理员</el-button>
              </span>
              <span v-if="item.row.character===false">
                <el-button type="warning" plain style="width:100px; text-align: center;">门店管理员</el-button>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="状态">
            <template slot-scope="scope">
              <span v-if="scope.row.status=='0'">
                <el-button type="info" plain>申请中</el-button>
              </span>
              <span v-if="scope.row.status=='1'">
                <el-button type="warning" plain>可以用</el-button>
              </span>
              <span v-if="scope.row.status=='2'">
                <el-button type="danger" plain>不可用</el-button>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                type="primary"
                @click="isdialogTableVisible(scope.row)"
                icon="el-icon-edit"
                circle
              ></el-button>

              <el-button
                type="danger"
                @click="deleteRow(scope.row._id)"
                icon="el-icon-delete"
                circle
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisibleData">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="添加{管理员 OR 门店管理员}" :visible.sync="dialogFormVisible">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="姓名:" prop="name">
          <el-input v-model="ruleForm.name" style="width:200px;"></el-input>
        </el-form-item>
        <el-form-item label="登录名:" prop="loginName">
          <el-input v-model="ruleForm.loginName" style="width:200px;"></el-input>
        </el-form-item>
        <el-form-item label="手机号:" prop="phone">
          <el-input v-model="ruleForm.phone" style="width:200px;"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="邮箱:">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input type="password" v-model="ruleForm.password" style="width:200px;"></el-input>
        </el-form-item>
        <el-form-item label="状态:" prop="status">
          <el-select v-model="ruleForm.status" placeholder="请选择状态">
            <el-option label="申请中" value="0"></el-option>
            <el-option label="可以用" value="1"></el-option>
            <el-option label="不可用" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="门店:" prop="shopsId">
          <span style="width:200px;margin-right:200px;">暂无门店</span>
        </el-form-item>
        <el-form-item label="平台管理员:" prop="character">
          <el-switch v-model="ruleForm.character"></el-switch>
        </el-form-item>
        <el-form-item style="margin:auto">
          <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} = createNamespacedHelpers("users");
import Paging from "../../paging";
export default {
  components: {
    Paging
  },
  // 数据源
  data() {
    return {
      gridData: [{}],
      dialogTableVisible: false,

      input: "",
      select: "name",

      dialogFormVisible: false,
      ruleForm: {
        name: "",
        loginName: "",
        phone: "",
        email: "",
        password: "",
        status: "",
        shopsId: "",
        character: false
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入真实姓名(长度是3~5个字符)",
            trigger: "blur"
          },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        loginName: [
          { required: true, message: "请输入微信号的名称", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "change" },
          { min: 11, max: 11, message: "长度为11位的*数字*", trigger: "change" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "长度在 6 位以上的字符", trigger: "blur" }
        ],

        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        status: [{ required: true, message: "不可漏选", trigger: "change" }]
      }
    };
  },
  computed: {
    ...mapState(["pageDate"])
  },
  mounted: function() {
    this.riductionAsync({
      currenPage: this.pageDate.currenPage,
      pageSize: this.pageDate.pageSize
    });
  },
  methods: {
    ...mapMutations([
      "dataChange",
      "deleteItem",
      "ModifyingData",
      "addUsers",
      "pageing",
    ]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.addUsers(this.ruleForm);
          this.dialogFormVisible = false;
          this.$refs[formName].resetFields();
          this.riductionAsync({
            currenPage: this.pageDate.currenPage,
            pageSize: this.pageDate.pageSize
          });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    ...mapActions(["riductionAsync", 'searchDataAsync']),
    // 删除
    deleteRow(value) {
      this.deleteItem(value);
    },
    // 点击修改时
    isdialogTableVisible(value) {
      this.gridData[0] = value;
      this.dialogTableVisible = true;
    },
    //确认修改时
    dialogTableVisibleData() {
      this.dialogTableVisible = false;
      this.ModifyingData(this.gridData);
    },
    //搜索
    search() {
      this.searchDataAsync({
        type: this.select,
        data: this.input,
        currenPage: this.pageDate.currenPage,
        pageSize: this.pageDate.pageSize
      });
    }
  }
};
</script>

<style scoped>
.h1 {
  height: 100px;
  line-height: 100px;
}

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
  text-align: center;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

.seacchStyle {
  width: 600px;
  margin-bottom: 10px;
  display: inline-block;
  float: left;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.demo-ruleForm {
  display: flex;
  flex-wrap: wrap;
}
</style>
