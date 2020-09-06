<template>
  <div :class="{ hidden: hidden }" class="pagination-container">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-size="10"
      layout="total, prev, pager, next, jumper"
      background
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    total: {
      required: true,
      type: Number
    },
    pageIndex: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    layout: {
      type: String,
      default: "prev, pager, next,total, jumper"
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.pageIndex;
      }
      // set (val) {
      //   debugger
      //   this.$emit('update:pageIndex', val)
      // }
    },
    pageSizes: {
      get() {
        return this.pageSize;
      }
      // set (val) {
      //   this.$emit('update:pageSize', val)
      // }
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("update:pageSize", val);
      this.$emit("PageSizeChange", val);
      // this.$emit('PageSizeChange', { pageIndex: this.currentPage, pageSize: val })
    },
    handleCurrentChange(val) {
      this.$emit("update:pageIndex", val);
      this.$emit("PageIndexChange", val);
      // this.$emit('PageIndexChange', { pageIndex: val, pageSize: this.pageSizes })
    }
  }
};
</script>

<style scoped>
.pagination-container {
  background: #fff;
  text-align: right;
  /* position: absolute;
  bottom: 20px;
  right: 20px; */
  margin-top: 20px;
}
.pagination-container.hidden {
  display: none;
}
</style>
