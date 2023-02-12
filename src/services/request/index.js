import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class TRequest {
  constructor(baseURL, timeout) {
    // 创建axios实例
    this.instance = axios.create({
      baseURL,
      timeout
    })
    //  response interceptor响应拦截器
    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      return err
    })
  }
  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

export default new TRequest(BASE_URL, TIMEOUT)