import axios from "@/utils/request"

export default {
    // 相册列表
    list(page, size) {
        return axios({
            url: `/imageclass/${page}`,
            method: "get",
            params: {
                size: size
            }
        })
    },
    // 图片列表
    tu(id, page, limit, order, keyword) {
        return axios({
            url: `/imageclass/${id}/image/${page}`,
            method: "get",
            params: {
                limit,
                order,
                keyword
            }
        })
    },
    // 添加相册名称
    tian(order, name) {
        return axios({
            url: "/imageclass",
            method: "post",
            data: {
                order,
                name
            }
        })
    },
    // 删除相册
    shan(id) {
        return axios({
            url: `/imageclass/${id}`,
            method: "DELETE"
        })
    },
    // 删除单张图片
    remove(id) {
        return axios({
            url: `/image/${id}`,
            method: "DELETE"
        })
    },
    // 修改相册
    chexu(id, name, order) {
        return axios({
            url: `/imageclass/${id}`,
            method: "post",
            data: {
                order,
                name
            }
        })
    },
    // 编辑图片
    biant(id, name) {
        return axios({
            url: `/image/${id}`,
            method: "post",
            data: {
                name
            }
        })
    }

}