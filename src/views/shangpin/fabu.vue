<template>
  <div class="wrap"></div>
</template>

<script>
// import qing from "../../api/shang";
export default {
  data() {
    return {
      from: {
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
    // }
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
  background-color: red;
}
</style>
