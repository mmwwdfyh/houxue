<template>
  <div class="wrap">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="商品名称">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="商品分类">
        <el-select v-model="form.desc" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品描述">
        <el-input type="textarea" v-model="form.unit"></el-input>
      </el-form-item>
      <el-form-item label="商品单位">
        <el-input v-model="form.stock"></el-input>
      </el-form-item>
      <el-form-item label="总库存">
        <el-input-number
          v-model="form.min_stock"
          controls-position="right"
          @change="handleChange"
          :min="1"
          :max="10"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="库存预测">
        <el-input-number
          v-model="form.min_price"
          controls-position="right"
          @change="handleChange"
          :min="1"
          :max="10"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="最低销售价">
        <el-input-number
          v-model="form.min_oprice"
          controls-position="right"
          @change="handleChange"
          :min="1"
          :max="10"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="最低原价">
        <el-input-number
          v-model="form.express_id"
          controls-position="right"
          @change="handleChange"
          :min="1"
          :max="10"
        ></el-input-number>
      </el-form-item>
      <div class="right">
        <el-form-item label="库存显示">
          <el-radio-group v-model="form.resource" size="medium">
            <el-radio border label="是"></el-radio>
            <el-radio border label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否上架">
          <el-radio-group v-model="form.stock_display" size="medium">
            <el-radio border label="放入仓库"></el-radio>
            <el-radio border label="立即上架"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-select v-model="form.status" placeholder="请选择">
          <!-- <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          ></el-option>-->
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import qing from "../../api/shang";
export default {
  data() {
    return {
      form: {
        category_id: 0,
        cover: "",
        desc: "",
        express_id: 0,
        ischeck: 0,
        min_oprice: "",
        min_price: "",
        min_stock: "",
        status: 0,
        stock: "",
        stock_display: 1,
        title: "",
        unit: ""
      }
    };
  },
  created() {
    //   this.put()
  },
  mounted() {},
  methods: {
    //   发布
    // put() {
    //   qing.Publish(this.from).then(res => {
    //     console.log(res);
    //   });
    // },
    onSubmit(data) {
      console.log(data);
      qing.Publish(this.form).then(res => {
        console.log(res);
      });
    },
    handleChange(value) {
      console.log(value);
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
  z-index: 999;
  background-color: #fff;
  margin-top: 40px;
  .el-form {
    width: 1000px;
  }
}
.right {
  position: absolute;
  right: 200px;
  bottom: 100px;
}
</style>
