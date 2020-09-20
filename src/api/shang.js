import axios from "@/utils/request"

export default {
    // 商品数据
    commodity(page,limit, tab) {
        return axios({
            url: `/goods/${page}`,
            method: "get",
            params:{
                limit,
                tab
            }
        })
    },
    // 分类
    dity() {
        return axios({
            url: "/category",
            method: "get"
        })
    },
    // 删除
    dele(id) {
        return axios({
            url: `/goods/${id}/delete`,
            method: "post"
        })
    },
    // 批量删除
    remove(form) {
        return axios({
            url: `/goods/delete_all`,
            method: "post",
            data: {
                form
            }
        })
    },
    // 发布
    Publish(data){
        return axios({
            url:"/goods",
            method:"post",
            data:data
        })
    }
}