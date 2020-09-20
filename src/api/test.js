import axios from "@/utils/request"

export default {
    // 登录
    login(username, password) {
        return axios({
            url: "/login",
            method: "post",
            data: {
                username,
                password
            }
        })
    },
    // 退出登录
    logout(token) {
        return axios({
            url: "/logout",
            method: "post",
            data: {
                token
            }
        })
    },

}