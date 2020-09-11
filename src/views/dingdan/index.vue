<template>
  <div class="box">
    <el-row class="tac" style="width:100%;">
      <el-col :span="12" style="width:100%;">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :router="true">
          <el-menu-item @click="toogle(index)" v-for="(item,index) in list" :key="index">
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
  computed: {
    list() {
      let d = JSON.parse(localStorage.getItem("ff_shuju"));
      let id = this.$store.state.activeIndex;
      return d.tree[id].child;
    }
  },
  mounted() {},
  methods: {
    toogle(id) {
      if (id == 0) {
        this.$router.push("/dingdan/dingguan");
      }
      if (id == 1) {
        this.$router.push("/dingdan/fapiao");
      }
      if (id == 2) {
        this.$router.push("/dingdan/shouhou");
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
</style>
