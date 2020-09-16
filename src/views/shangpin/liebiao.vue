<template>
  <div class="wrap">
    <div class="wrap_title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">后台首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">全部</el-menu-item>
      <el-menu-item index="3">审核中</el-menu-item>
      <el-menu-item index="4">出售中</el-menu-item>
      <el-menu-item index="5">已下架</el-menu-item>
      <el-menu-item index="6">库存预警</el-menu-item>
      <el-menu-item index="7">回收站</el-menu-item>
    </el-menu>
    <div class="fyh_toom">
      <div class="toom">
        <button @click="$router.push('/shop/goods/fabu')">发布商品</button>
        <button @click="batch">批量删除</button>
        <button>上架</button>
        <button>下架</button>
      </div>
      <div class="room">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-input placeholder="要搜索的商品名称" v-model="prads"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">搜索</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">高级搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-table class="tab" :data="seach" height="360" border style="width: 100%">
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column width="280" label="商品">
        <template slot-scope="scope">
          <img :src="scope.row.cover" alt />
          <div class="loop">
            <p>{{ scope.row.title }}</p>
            <p>分类:{{ scope.row.category.name }}</p>
            <p>时间:{{scope.row.create_time}}</p>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="discount" width="80" label="实际销量"></el-table-column>
      <el-table-column prop="status" width="80" label="商品状态">
        <template slot-scope="scope">
          <span>{{scope.row.status | pay}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="ischeck" width="80" label="审核状态">
        <template slot-scope="scope">
          <span>{{scope.row.ischeck | check}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="stock" width="80" label="总库存"></el-table-column>
      <el-table-column prop="min_price" width="120" label="价格(元)"></el-table-column>
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
        tab: ""
      },
      list: [],
      total: "",
      cate: [],
      prads: ""
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
    // 请求数据
    listt() {
      qing.commodity(this.foom.limt, this.foom.tab).then(res => {
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
.el-table {
  margin-left: 20px;
  img {
    width: 80px;
    height: 80px;
    float: left;
  }
  .loop {
    float: right;
  }
}
.el-table_1_column_8 {
  span {
    margin-left: 10px;
    font-size: 14px;
  }
}
</style>
