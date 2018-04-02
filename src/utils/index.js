import axios from 'axios';

axios.defaults.timeout = 5000;
// axios.defaults.baseURL ='';
/**
  * GET请求
  * @param  {[type]} url     url地址
  * @param  {[type]} params  data参数
  * @return {[type]}         [Promise]
 */
export const getData = (url, params) => {
  // params = params || {};
  // params.user_id = user_id;
  // params.us_token = us_token;
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      console.log("get请求failed")
      reject(err)
    })
  })
}
/**
  * POST请求
  * @param  {[type]} url     url地址
  * @param  {[type]} params  data参数
  * @return {[type]}         [Promise]
 */
export const postData = (url, params) => {
  // params = params || {};
  // params.user_id = user_id;
  // params.us_token = us_token;
  return new Promise((resolve,reject) => {
     axios.post(url,params).then(res => {
        resolve(res.data);
      },err => {
        console.log("post请求failed")
        reject(err)
      })
   })
}

