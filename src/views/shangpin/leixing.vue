<template>
  <div class="wrap">
    <div class="wrap_title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">后台首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品类型管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="toom">
      <button>添加类型</button>
      <button>批量删除</button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 60px;
  right: 0;
  left: 12%;
}
.wrap_title {
  width: 100%;
  height: 56px;
  font-size: 14px;
  line-height: 56px;
  border-bottom: 1px solid #dee2e6;
  background-color: #fff;
  .el-breadcrumb {
    line-height: 56px;
    margin-left: 20px;
  }
}
.toom {
  border: none;
  float: left;
  width: 100%;
  height: 60px;
  background-color: #fff;
  button:nth-of-type(1) {
    color: #ffffff;
    background-color: #67c23a;
    border-color: #67c23a;
    width: 80px;
    height: 26px;
  }
  button:nth-of-type(2) {
    background: #dd6161;
    border-color: #dd6161;
    color: #ffffff;
    width: 80px;
    height: 26px;
  }
  button:nth-of-type(3) {
    border: 1px solid #f8f9fa;
    background-color: #f8f9fa;
  }
  button:nth-of-type(4) {
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
  }
  button {
    outline: none;
    border: none;
    margin-left: 20px;
    margin-top: 20px;
  }
}
.el-table {
  margin-left: 20px;
}
</style>
