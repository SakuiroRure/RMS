const paths = [
  "/api"
]

const useStrategy = {
   target: "http://test.admin.yktour.com.cn",
   changeOrigin: true,
}

const proxyTableObj = {}

paths.forEach(path => {
  proxyTableObj[path] = Object.assign({}, useStrategy)
})

module.exports = proxyTableObj;
