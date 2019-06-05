<template>
    <div class="block">
    <el-pagination
      @size-change="setPageSize"
      @current-change="setNextPage"
      :current-page="currentPage-0"
      :page-sizes="[3, 5, 10, 15]"
      :page-size="pageSize-0"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount">
    </el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("petOwnersStore");
export default {
  props:['watchFun'],
   watch:{
    currentPage(){
       this.watchFun();
    },
    pageSize(){
       this.watchFun();
    }
  },
  computed: {
    ...mapState(["currentPage", "pageSize", "totalPages", "totalCount"]),
     currentPage: {
      get: mapState(["currentPage"]).currentPage,
      set: mapMutations(["setNextPage"]).setNextPage
    },
    pageSize:{
      get: mapState(["pageSize"]).pageSize,
      set: mapMutations(["setPageSize"]).setPageSize
    }
  },
  methods: {
    ...mapMutations(["setNextPage","setPageSize"]),
  }
};
</script>

<style>
</style>
