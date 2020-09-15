import axios from "@/utils/request"

export default {
    // 商品数据
    commodity(limit, tab) {
        return axios({
            url: `/goods/1?limit=${limit}&tab=${tab}`,
            method: "get"
        })
    },
    // 分类
    dity() {
        return axios({
            url: "/category",
            method: "get"
        })
    },
}