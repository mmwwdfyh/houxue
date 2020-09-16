import axios from "@/utils/request"

export default {
    // 商品规格
    gui(page,limit){
        return axios({
            url:`/skus/${page}`,
            params:{
                limit
            }
        })
    },
    // 删除
    dele(id){
        return axios({
            url:`/skus/${id}/delete`,
            method:"POST"
        })
    }
} 