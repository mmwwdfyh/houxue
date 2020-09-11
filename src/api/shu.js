import axios from "@/utils/request"

export default {
    // 相册列表
    list() {
        return axios({
            url: "http://ceshi5.dishait.cn/admin/imageclass",
            method: "get"
        })
    }

}