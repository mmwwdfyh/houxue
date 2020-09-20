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
        <div class="left_title2">
          <p>交易提示</p>
          <p>需要立即处理的交易订单</p>
        </div>
        <ul class="title_list2">
          <li>
            <p>64</p>
            <p>代付款</p>
          </li>
          <li>
            <p>10</p>
            <p>代发货</p>
          </li>
          <li>
            <p>0</p>
            <p>已发货</p>
          </li>
          <li>
            <p>3</p>
            <p>已收货</p>
          </li>
          <li>
            <p>3</p>
            <p>退款中</p>
          </li>
          <li>
            <p>3</p>
            <p>代售后</p>
          </li>
        </ul>
      </div>
      <div class="room_right">
        <div id="main" style="width: 520px; height: 320px;"></div>
      </div>
    </div>
    <div class="wrap_bottom">
      <div class="bottom_left"></div>
      <div class="bottom_right"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.fyh();
  },
  methods: {
    fyh() {
      let myChart = this.$echarts.init(document.getElementById("main"));
      //指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        toolbox: {
          show: true,
          feature: {
            mark: {
              show: true
            },
            // dataView: {
            //   show: true,
            //   readOnly: true
            // },
            magicType: {
              show: false,
              type: ["line", "bar", "stack", "tiled"]
            },
            // restore: {
            //   show: true
            // },
            saveAsImage: {
              show: true
            }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: {
                areaStyle: {
                  type: "default"
                }
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: {
                areaStyle: {
                  type: "default"
                }
              }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: {
                areaStyle: {
                  type: "default"
                }
              }
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: {
                areaStyle: {
                  type: "default"
                }
              }
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: {
                areaStyle: {
                  type: "default"
                }
              }
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
      //使用刚指定的配置项和数据显示图表
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 564px;
  overflow: hidden;
  overflow-y: scroll;
  flex-shrink: 0;
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
      // border: 1px solid #ccc;
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
        margin-top: 2px;
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
      .left_title2 {
        width: 100%;
        height: 60px;
        line-height: 60px;
        background-color: #fff;
        float: left;
        margin-top: 3px;
        p:nth-of-type(1) {
          float: left;
          margin-left: 20px;
        }
        p:nth-of-type(2) {
          float: right;
          margin-right: 20px;
        }
      }
      .title_list2 {
        float: left;
        width: 100%;
        height: 94px;
        background-color: #fff;
        margin-top: 3px;
        border-radius: 3px;
        li {
          float: left;
          width: 12.2%;
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
      background-color: #fff;
      width: 39.6%;
      float: left;
      height: 320px;
    }
  }
  .wrap_bottom {
    width: 100%;
    float: left;
    margin-left: 43px;
    margin-top: 16px;
    .bottom_left {
      width: 39.6%;
      height: 320px;
      background-color: #fff;
      float: left;
      margin-right: 20px;
    }
    .bottom_right {
      width: 39.6%;
      height: 320px;
      background-color: #fff;
      float: left;
    }
  }
}
</style>
