import axios from "@/utils/request"

export default {
    // 商品评论
    puoph(page, limit, title) {
        return axios({
            url: `/goods_comment/${page}`,
            method: "get",
            params: {
                limit,
                title
            }
        })
    }

} 