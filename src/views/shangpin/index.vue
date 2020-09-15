<template>
  <div class="box">
    <el-row class="tac" style="width:100%;">
      <el-col :span="12" style="width:100%;">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :router="true">
          <el-menu-item v-for="(item,index) in list" :key="index" @click="toogle(index)">
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
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {
    list() {
      let d = JSON.parse(localStorage.getItem("ff_shuju"));
      let id = this.$store.state.activeIndex;
      return d.tree[id].child;
    }
  },
  methods: {
    toogle(id) {
      if (id == 0) {
        this.$router.push("/shangpin/liebiao");
      }
      if (id == 1) {
        this.$router.push("/shangpin/fenlei");
      }
      if (id == 2) {
        this.$router.push("/shangpin/guige");
      }
      if (id == 3) {
        this.$router.push("/shangpin/leixing");
      }
      if (id == 4) {
        this.$router.push("/shangpin/pinglun");
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
}
  /deep/.el-menu-item.is-active {
    color: #000;
  }
</style>
