<template>
  <div class="wrap">
    <div class="wrap_title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">后台首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品规格管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="toom">
      <button>添加规格</button>
      <button>批量删除</button>
    </div>
    <el-table :data="list" border style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="规格名称" width="180"></el-table-column>
      <el-table-column prop="default" label="规格值" width="260"></el-table-column>
      <el-table-column prop="order" label="排序" width="260"></el-table-column>
      <el-table-column label="status" width="200">
        <template slot-scope="scope">
          <!-- <span></span> -->
          <el-button size="mini">{{scope.row.status | check}}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="mini">修改</el-button>
          <el-button size="mini"  @click="remove(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import updata from "../../api/guige";
const status = [
  {
    type: 0,
    name: "禁用"
  },
  {
    type: 1,
    name: "启用"
  }
];
export default {
  data() {
    return {
      form: {
        page: 1,
        limit: 10
      },
      id: 0,
      list: []
    };
  },
  created() {
    this.guige();
  },
  // 遍历商品状态
  filters: {
    check(data) {
      // console.log(data);
      let checkV = status.find((item, index) => {
        // console.log(item);
        return item.type == data;
      });
      return checkV.name;
    }
  },
  mounted() {},
  methods: {
    // 数据
    guige() {
      updata.gui(this.form.page, this.form.limit).then(res => {
        console.log(res);
        this.list = res.data.list;
      });
    },
    // 删除
    remove(id) {
      //  alert(id);
        updata.dele(id).then(res => {
        console.log(res);
        this.guige()
      });
    }
  }
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
