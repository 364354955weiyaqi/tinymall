import Axios from 'axios'

export function request(config) {
  //创建axios实例
  const instance = Axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  })
  //配置拦截器
  instance.interceptors.request.use(config => {
    console.log(config)
    return config
  }, error => {
    console.log(error)
    return Promise.reject(error)
  })
  instance.interceptors.response.use(response => {
    console.log(response.data)
    return response.data
  },error => {
    console.log(error)
    return Promise.reject(error)
  })
  //发送网络请求并返回
  return instance(config)
}



