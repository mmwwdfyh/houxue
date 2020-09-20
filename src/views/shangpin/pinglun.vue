<template>
  <div class="wrap">
    <div class="wrap_title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">后台首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="chang">
      <div class="room">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item>
            <el-input placeholder="要搜索的商品名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" v-model="formInline.sou" @click="onSubmit">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <!-- <el-form label-position="left" inline class="demo-table-expand">
              <div class="left">
                <img :src="props.row.img" alt="">
              </div>
              <div class="right">
                <p><span></span></p>
                <p></p>
                <p><img src="" alt=""></p> 
                <div>

                </div>
              </div>
          </el-form>-->
        </template>
      </el-table-column>
      <el-table-column label="id" prop="id" width="80"></el-table-column>
      <el-table-column label="商品" prop="id" width="200">
       <!-- <template slot-scope="scope">
          <img :src="scope.rom" alt="">
          <p>{{ scope.row }}</p>
       </template> -->
      </el-table-column>
      <el-table-column label="评论信息" prop="name" width="200"></el-table-column>
      <el-table-column label="评价时间" prop="desc" width="200"></el-table-column>
      <el-table-column label="是否显示" prop="desc" width="200"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import phpo from "../../api/pinglun";
export default {
  data() {
    return {
      formInline: {
        sou: ""
      },
      foom: {
        page:1,
        limit:5,
        title:''
      },
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        }
      ]
    };
  },
  created() {
    this.getpupo();
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log(111);
    },
    // 获取数据
    getpupo() {
      phpo.puoph(this.foom.page,this.foom.limit,this.foom.title).then(res => {
        console.log(res);
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
  //   background-color: #f8f9fa;
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
.room {
  float: right;
  margin-top: 10px;
}
.chang {
  width: 1200px;
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
</style>
