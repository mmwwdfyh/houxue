import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/home/index.vue"),
    redirect: "/index"
  },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/home/index.vue"),
    redirect: "/home/zong",
    children: [
      {
        path: "/home/zong",
        name: "homezong",
        component: () => import("../views/home/zong.vue"),
        redirect: "/home/zong/houShou",
        children: [
          {
            path: "/home/zong/houShou",
            name: "homezonghouShou",
            component: () => import("../views/home/houShou.vue"),
          },
          {
            path: "/home/zong/xiangce",
            name: "homezongxiangce",
            component: () => import("../views/home/xiangce.vue"),
          },
        ]
      },
      {
        path: "/shop/goods/list",
        name: "shop/goods/list",
        component: () => import("../views/shangpin/index.vue"),
        redirect: "/shangpin/liebiao",
        children: [
          {
            path: "/shangpin/liebiao",
            name: "shangpin/liebiao",
            component: () => import("../views/shangpin/liebiao.vue"),
          },
          {
            path: "/shangpin/fenlei",
            name: "shangpin/fenlei",
            component: () => import("../views/shangpin/fenlei.vue"),
          },
          {
            path: "/shangpin/guige",
            name: "shangpin/fenlei",
            component: () => import("../views/shangpin/guige.vue"),
          },
          {
            path: "/shangpin/leixing",
            name: "shangpin/fenlei",
            component: () => import("../views/shangpin/leixing.vue"),
          },
          {
            path: "/shangpin/pinglun",
            name: "shangpin/fenlei",
            component: () => import("../views/shangpin/pinglun.vue"),
          },
        ]
      },
      {
        path: "/order/order/list",
        name: "order/order/list",
        component: () => import("../views/dingdan/index.vue"),
        redirect: "/dingdan/dingguan",
        children: [
          {
            path: "/dingdan/dingguan",
            name: "dingdandingguan",
            component: () => import("../views/dingdan/dingguan.vue"),
          },
          {
            path: "/dingdan/fapiao",
            name: "dingdanFapiao",
            component: () => import("../views/dingdan/fapiao.vue"),
          },
          {
            path: "/dingdan/shouhou",
            name: "dingdan/shouhou",
            component: () => import("../views/dingdan/shouhou.vue"),
          },
        ]
      },
      {
        path: "/user/user-list/list",
        name: "user/user-list/list",
        component: () => import("../views/huiyuan/index.vue"),
        redirect: "/huiyuan/huilie",
        children: [
          {
            path: "/huiyuan/huilie",
            name: "huiyuan/huilie",
            component: () => import("../views/huiyuan/huilie.vue"),
          },
          {
            path: "/huiyuan/huideng",
            name: "huiyuan/huideng",
            component: () => import("../views/huiyuan/huideng.vue"),
          },
        ]
      },
      {
        path: "/set/base",
        name: "set/base",
        component: () => import("../views/shezhi/index.vue"),
        redirect: "/shezhi/jichu",
        children: [
          {
            path: "/shezhi/jichu",
            name: "shezhi/jichu",
            component: () => import("../views/shezhi/jichu.vue"),
          },
          {
            path: "/shezhi/wuliu",
            name: "shezhi/wuliu",
            component: () => import("../views/shezhi/wuliu.vue"),
          },
          {
            path: "/shezhi/guanliyuan",
            name: "shezhi/guanliyuan",
            component: () => import("../views/shezhi/guanliyuan.vue"),
          },
          {
            path: "/shezhi/jiaoyi",
            name: "shezhi/jiaoyi",
            component: () => import("../views/shezhi/jiaoyi.vue"),
          },
        ]
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index.vue")
  },
];

// import routes from "./config/routes"



const router = new VueRouter({
  routes
});

export default router;
