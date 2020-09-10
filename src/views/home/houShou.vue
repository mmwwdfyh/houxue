<template>
  <div class="wrap">
    <div>
      <ul class="list">
        <li>
          <p id="list_icon" class="el-icon-user-solid"></p>
          <div class="list_div">
            <h2>120</h2>
            <p>关注人数(个)</p>
          </div>
        </li>
        <li>
          <p id="list_icon" class="el-icon-s-finance"></p>
          <div class="list_div">
            <h2>4183.80</h2>
            <p>订单总数(笔)</p>
          </div>
        </li>
        <li>
          <p id="list_icon" class="el-icon-s-order"></p>
          <div class="list_div">
            <h2>100</h2>
            <p>今日订单总额(元)</p>
          </div>
        </li>
        <li>
          <p id="list_icon" class="el-icon-s-data"></p>
          <div class="list_div">
            <h2>30</h2>
            <p>本月销量(笔)</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
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
  background-color: #f8f9fa;
  clear: both;
  .list {
    float: left;
    width: 100%;
    margin: 22px 0 0 44px;
    li {
      width: 19%;
      height: 82px;
      float: left;
      border: 1px solid #ccc;
      margin-right: 22px;
      #list_icon {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 22px;
        background-color: #007bff !important;
        color: #fff;
        margin: 20px 0 0 18px;
        float: left;
      }
      .list_div {
        float: left;
        margin-top: 20px;
        margin-left: 18px;
        h2 {
          margin-bottom: 10px;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
