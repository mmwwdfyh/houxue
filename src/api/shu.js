import axios from "@/utils/request"

export default {
    // 相册列表
    list(page, size) {
        return axios({
            url: `/imageclass/${page}`,
            method: "get",
        })
    },
    // 图片列表
    tu(id, page, limit, order, keyword) {
        return axios({
            url: `/imageclass/${id}/image/${page}?limit=${limit}&order=${order}&keyword=${keyword}`,
            method: "get",
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
    // 删除
    shan(id) {
        return axios({
            url: `/imageclass/${id}`,
            method: "DELETE"
        })
    },
    // 上传图片
    uploading(img, image_class_id) {
        return axios({
            url: `/image/upload`,
            method: "post",
            data: {
                img,
                image_class_id
            }
        })
    }

}