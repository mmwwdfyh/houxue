<template>
  <div class="box">
    <el-row class="tac" style="width:100%;">
      <el-col :span="12" style="width:100%;">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :router="true">
          <el-menu-item @click="tooleg(index)" v-for="(item,index) in list" :key="index">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <router-view />
  </div>
</template>

<script>
import store from "../../store/index"

export default {
  data() {
    return {
      foom: []
    };
  },
  created() {},
  computed: {
    list() {
      let d = JSON.parse(localStorage.getItem("ff_shuju"));
      let id = store.state.activeIndex;
      console.log(id);
      return d.tree[id].child;
    }
  },
  mounted() {},
  methods: {
    tooleg(id) {
      // console.log(id);
      if (id == 0) {
        this.$router.push("/home/zong/houShou");
      }
      if (id == 1) {
        this.$router.push("/home/zong/xiangce");
      }
      if (id == 2) {
        this.$router.push("/shop/goods/list");
        
      }
    }
  }
};
</script>

<style scoped lang="scss">
.box {
  width: 12%;
  height: 100%;
  position: fixed;
  top: 60px;
  left: 0;
  .el-row {
    height: 100%;
    border-right: solid 1px #e6e6e6;
    .el-menu {
      border: none;
    }
  }
  /deep/.el-menu-item.is-active {
    color: #000;
  }
}
</style>
