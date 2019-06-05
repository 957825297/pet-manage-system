<template>
  <div class="block">
    <el-pagination
      style="margin-top:20px;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageDate.currenPage-0"
      :page-sizes="[5, 10, 20, 30]"
      :page-size="pageDate.pageSize-0"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageDate.totalCount-0"
    ></el-pagination>
  </div>
</template>

<script>
export default { 
  props: {
    pageDate: {
      type: Object,
      default: {
        currenPage: {
          type: Number,
          default: 1
        }, //当前页
        totalPage: 0, //总页数
        pageSize: {
          type: Number,
          default: 5
        }, //每页显示条数
        totalCount: 0 //总条数
      }
    },
    inputVal:{
      type:String,
      default:'',
    },
    select:String,
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.$emit('pageing',{
        currenPage: this.pageDate.currenPage,
        pageSize: val,
        totalPage: this.pageDate.totalPage,
        totalCount: this.pageDate.totalCount,
        type: this.select,
        data: this.inputVal,
      });
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$emit('pageing',{
        currenPage: val,
        pageSize: this.pageDate.pageSize,
        totalPage: this.pageDate.totalPage,
        totalCount: this.pageDate.totalCount,
        type: this.select,
        data: this.inputVal,
      });
    }
  }
};
</script>

<style>
</style>
