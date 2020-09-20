<template>
  <div class="wrap">
    <div class="wrap_title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">后台首页</el-breadcrumb-item>
        <el-breadcrumb-item>物流设置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="运费模板" name="all"></el-tab-pane>
      <el-tab-pane label="物流跟踪" name="checking"></el-tab-pane>
    </el-tabs>
    <div class="fyh_toom">
      <div class="toom">
        <button @click="batch">添加模板</button>
      </div>
    </div>
    <el-table class="tab" :data="seach" height="320" border style="width: 100%">
      <el-table-column prop="discount" width="80" label="商品名称"></el-table-column>
      <el-table-column prop="stock" width="80" label="计费方式"></el-table-column>
      <el-table-column prop="min_price" width="120" label="排序"></el-table-column>
      <el-table-column width="360" label="操作" class="she">
        <template slot-scope="scope">
          <span>基础设置</span>
          <span>商品规格</span>
          <span>商品属性</span>
          <span>媒体设置</span>
          <span>商品详情</span>
          <span>折扣设置</span>
          <span @click="dele(scope.row.id)">删除商品</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="foom.pager"
        :page-sizes="[10,20,30]"
        :page-size="foom.limt"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import qing from "../../api/shang";
const status = [
  {
    type: 1,
    name: "上架"
  },
  {
    type: 0,
    name: "仓库"
  }
];
const ischeck = [
  {
    type: 1,
    name: "通过"
  },
  {
    type: 2,
    name: "拒绝"
  }
];
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      formInline: {
        sou: "",
        gsou: ""
      },
      foom: {
        limt: 10,
        tab: "",
        pager: 1
      },
      list: [],
      total: "",
      cate: [],
      prads: "",
      activeName: "all",
      currentPage4: 4
    };
  },
  // 遍历商品状态
  filters: {
    pay(data) {
      // console.log(data)
      let payValue = status.find((item, index) => {
        // console.log(item)
        return item.type == data;
      });
      return payValue.name;
    },
    check(data) {
      // console.log(data);
      let check = ischeck.find((item, index) => {
        // console.log(item);
        return item.type == data;
      });
      return check.name;
    }
  },
  computed: {
    seach() {
      let data = this.list;
      return data.filter(item => {
        return item.title.indexOf(this.prads) > -1;
      });
      // return data.filter(item => {
      //   return item.title.indexOf(this.prads) > -1;
      // });
    }
  },
  created() {
    this.listt();
  },
  mounted() {},
  methods: {
    handleSelect() {},
    // 搜索
    onSubmit() {
      // console.log(11);
      // this.seach()
    },
    handleClick(tab) {
      console.log(tab);
      this.activeName = tab.name;
      this.listt();
    },
    // 请求数据
    listt() {
      qing
        .commodity(this.foom.pager, this.foom.limt, this.activeName)
        .then(res => {
          console.log(res);
          // 数据
          this.list = res.data.list;

          // 总条数
          this.total = res.data.totalCount;
        });
    },
    // 删除
    dele(id) {
      qing.dele(id).then(res => {
        this.listt();
      });
    },
    // 批量删除
    batch() {
      alert(111);
    },
    // 条数
    handleSizeChange(val) {
      this.foom.limt = val;
      this.listt();
      console.log(val);
    },
    //页数
    handleCurrentChange(vale) {
      this.foom.pager = vale;
      this.listt();
      console.log(vale);
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
  // background-color: #f8f9fa;
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
.fyh_toom {
  width: 1200px;
  margin-top: 10px;
  background-color: #fff;
  .toom {
    border: none;
    float: left;
    margin-left: 20px;
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
      margin-right: 10px;
      border: none;
    }
  }
  .room {
    float: right;
  }
}
.el-menu {
  margin-left: 20px;
}
.el-tabs {
  margin-left: 20px;
}
.el-table {
  margin-left: 20px;
  img {
    width: 80px;
    height: 80px;
    float: left;
  }
}
.el-table_1_column_8 {
  span {
    margin-left: 10px;
    font-size: 14px;
  }
}
</style>
