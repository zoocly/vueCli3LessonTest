import axios from "axios";

export default function request(_config) {
  const {baseURL} = _config;
  const instance = axios.create({
    baseURL: baseURL ? baseURL : 'http://123.207.32.32:8000',
    timeout: 5000,
  });
  // 拦截器
  instance.interceptors.request.use(
    (config) => {
      // console.log('request');
      /*
      * 1 config的代码格式不符合服务器要求
      * 2 请求时加入loading
      * 3 某些网络请求，如登录，需要携带token
      * */
      return config;
    },
    (error) => {
      console.log(error);
      return error;
    }
  );
  instance.interceptors.response.use(
    (res) => {
      // console.log('response');
      return res.data;
    },
    (error) => {
      console.log(error);
      return error;
    },
  );
  return instance(_config);
}
