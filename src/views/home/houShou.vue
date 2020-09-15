<template>
  <div class="wrap">
    <div class="wrap_title">
      <ul class="list">
        <li>
          <p id="list_icon" class="el-icon-user-solid"></p>
          <div class="list_div">
            <h2>120</h2>
            <p>关注人数(个)</p>
          </div>
        </li>
        <li>
          <p id="list_icon2" class="el-icon-s-finance"></p>
          <div class="list_div">
            <h2>4183.80</h2>
            <p>订单总数(笔)</p>
          </div>
        </li>
        <li>
          <p id="list_icon3" class="el-icon-s-order"></p>
          <div class="list_div">
            <h2>100</h2>
            <p>今日订单总额(元)</p>
          </div>
        </li>
        <li>
          <p id="list_icon4" class="el-icon-s-data"></p>
          <div class="list_div">
            <h2>30</h2>
            <p>本月销量(笔)</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="wrap_room">
      <div class="room_left">
        <div class="left_title">
          <p>店铺及商品提示</p>
          <p>需要关注的店铺信息及待处理事项</p>
        </div>
        <ul class="title_list">
          <li>
            <p>64</p>
            <p>出售中</p>
          </li>
          <li>
            <p>10</p>
            <p>待回复</p>
          </li>
          <li>
            <p>0</p>
            <p>库存预警</p>
          </li>
          <li>
            <p>3</p>
            <p>仓库中</p>
          </li>
        </ul>
      </div>
      <div class="room_right"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ""
    };
  },
  created() {
  },
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
      margin-right: 22px;
      background-color: #fff;
      #list_icon {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 22px;
        background-color: #007bff;
        color: #fff;
        margin: 20px 0 0 18px;
        float: left;
      }
      #list_icon2 {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 22px;
        color: #fff;
        margin: 20px 0 0 18px;
        float: left;
        background-color: #28a745;
      }
      #list_icon3 {
        background-color: #dc3545;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 22px;
        color: #fff;
        margin: 20px 0 0 18px;
        float: left;
      }
      #list_icon4 {
        background-color: #ffc107;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 22px;
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
  .wrap_room {
    width: 100%;
    float: left;
    margin-left: 43px;
    margin-top: 16px;
    .room_left {
      width: 39.6%;
      height: 320px;
      float: left;
      border: 1px solid #ccc;
      margin-right: 20px;
      .left_title {
        height: 60px;
        line-height: 60px;
        background-color: #fff;
        p:nth-of-type(1) {
          float: left;
          margin-left: 20px;
        }
        p:nth-of-type(2) {
          float: right;
          margin-right: 20px;
        }
      }
      .title_list {
        float: left;
        width: 100%;
        height: 94px;
        background-color: #fff;
        margin-top: 3px;
        border-radius: 3px;
        li {
          float: left;
          width: 21%;
          line-height: 34px;
          text-align: center;
          background-color: #f8f9fa;
          margin: 12px 9px 0 12px;
          border-radius: 3px;
        }
        li:hover {
          background-color: #dae0e5;
        }
      }
    }
    .room_right {
      border: 1px solid #ccc;
      width: 39.6%;
      float: left;
      height: 320px;
    }
  }
}
</style>
