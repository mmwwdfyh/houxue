<template>
  <div class="wrap">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="商品名称">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="商品分类">
        <el-select v-model="form.category_id" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品描述">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="商品单位">
        <el-input v-model="form.unit"></el-input>
      </el-form-item>
      <el-form-item label="总库存">
        <el-input-number
          v-model="form.stock"
          controls-position="right"
          @change="handleChange"
          :min="1"
          :max="10"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="库存预测">
        <el-input-number
          v-model="form.min_stock"
          controls-position="right"
          @change="handleChange"
          :min="1"
          :max="10"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="最低销售价">
        <el-input-number
          v-model="form.min_price"
          controls-position="right"
          @change="handleChange"
          :min="1"
          :max="10"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="最低原价">
        <el-input-number
          v-model="form.min_oprice"
          controls-position="right"
          @change="handleChange"
          :min="1"
          :max="10"
        ></el-input-number>
      </el-form-item>
      <div class="right">
        <el-form-item label="库存显示">
          <el-radio-group v-model="form.stock_display" size="medium">
            <el-radio border label="1">是</el-radio>
            <el-radio border label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否上架">
          <el-radio-group v-model="form.status" size="medium">
            <el-radio border :label="0">放入仓库</el-radio>
            <el-radio border :label="1">立即上架</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-select v-model="form.express_id" placeholder="请选择">
          <!-- <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          ></el-option>-->
          <!-- <el-option label="区域二" v-model="form.ischeck" value="beijing"></el-option> -->
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
        title: "1",
        category_id: 0,
        cover: "1",
        desc: "1",
        unit: "1",
        stock: "1",
        express_id: 0,
        ischeck: 0,
        min_oprice: "1",
        min_price: "1",
        min_stock: "1",
        status: 1,
        stock_display: 1
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
      qing
        .Publish(
          this.form
          // this.form.category_id,
          // this.form.cover,
          // this.form.desc,
          // this.form.express_id,
          // this.form.ischeck,
          // this.form.min_oprice,
          // this.form.min_price,
          // this.form.min_stock,
          // this.form.status,
          // this.form.stock,
          // this.form.stock_display,
          // this.form.title,
          // this.form.unit
        )
        .then(res => {
          console.log(res);
          this.$router.push("/shangpin/liebiao");
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
