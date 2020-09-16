<template>
  <div class="wrap">
    <div class="title">
      <p>UNI-ADMIN</p>
      <el-dropdown @command="handle">
        <!-- <strong class="fyh"></strong> -->
        <span class="el-dropdown-link">
          admin
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改</el-dropdown-item>
          <el-dropdown-item command="checkout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <ul>
        <li v-for="(item,index) in room"  :key="index" :class="activefyh == index ? 'active' : ''" @click="toogle(index)">{{ item.name }}</li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
// import logout from "@/api/test";
import store from "../../store/index"
export default {
  data() {
    return {
      room: [],
      activefyh:0
    };
  },
  created() {
    let list = JSON.parse(localStorage.getItem("ff_shuju"));
    let toom = list.tree;
    this.room = toom;
    // console.log(this.room);
    // let ff = store.getters.get_token
    // console.log(ff)
  },
  mounted() {},
  methods: {
    toogle(id) {
      this.activefyh = id;
 
      let qq = store.getters.activeIndex
      console.log(qq)
      // store.state.activeIndex = id
      // id = this.qq

      const a = this.room[id].desc;
      // console.log(a)
      const str = a.replace(/_/g, "/");
      // // console.log(this.headerList[i].child);
      this.$router.push("/" + str);

      // console.log(str);
      // if (id == 5) {
      //   this.$router.push("/home");
      // }
      // if (id == 6) {
      //   this.$router.push("/shangpin");
      // }
      // if (id == 7) {
      //   this.$router.push("/dingdan");
      // }
      // if (id == 8) {
      //   this.$router.push("/huiyuan");
      // }
      // if (id == 9) {
      //   this.$router.push("/shezhi");
      // }
      // console.log(id);
    },
    handle(command) {
      switch (command) {
        case "checkout":
          this.checkout();
          break;
      }
    },
    checkout() {
      // alert(11);
      // logout.logout(this.data).then(res => {
      //   console.log(res);
      // });
      //清除本地储存的token
      localStorage.removeItem("ff_token");
      //清除本地储存的信息
      localStorage.removeItem("ff_info");
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
}
.title {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: rgb(84, 92, 100);
  clear: both;
  p {
    float: left;
    color: #fff;
    line-height: 60px;
    margin-left: 20px;
    font-size: 20px;
  }
  ul {
    float: right;
    color: #fff;
    line-height: 60px;

    li {
      float: left;
      padding: 0 20px;
    }
    li:hover {
      background-color: rgb(67, 74, 80);
    }
  }
  .el-dropdown {
    float: right;
    line-height: 60px;
    color: #fff;
    // margin-left: 38px;
    // margin-right: 28px;
    padding: 0 20px;
    .fyh {
      display: inline-block;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #c0c4cc;
      line-height: 20px;
    }
  }
  .el-dropdown:hover {
    background-color: rgb(67, 74, 80);
  }
}
.el-dropdown-menu {
  background-color: rgb(84, 92, 100);
  z-index: 100;
  min-width: 200px;
  border: none;
  padding: 5px 0;
  border-radius: 2px;
  left: 10px;
  .el-dropdown-menu__item {
    color: #fff;
  }
  .el-dropdown-menu__item:focus,
  .el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: rgb(67, 74, 80);
  }
  /deep/.popper__arrow {
    display: none;
  }
}
.active {
  color: rgb(255, 208, 75);
  background-color: rgb(84, 92, 100);
  border-bottom: 2px solid rgb(255, 208, 75);
  box-sizing: border-box;
  height: 60px;
}
</style>
