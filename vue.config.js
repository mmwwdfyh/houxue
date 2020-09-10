module.exports = {
    //设置路径
    publicPath:"./",
    devServer:{
        port: 8088, 
        host:"localhost",
        https:false,
        open:true,
        proxy:{
            [process.env.VUE_APP_BASE_API]:{
                target:process.env.VUE_APP_SERVICE_URL,
                changeOrigin:true,
                pathRewrite:{
                    ["^"+process.env.VUE_APP_BASE_API]:''
                }
            }
        }
    }
}