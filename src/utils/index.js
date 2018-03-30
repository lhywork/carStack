import axios from 'axios';
// import { Message } from 'element-ui';

axios.defaults.timeout = 5000;
// axios.defaults.baseURL ='';

// const user_id = wx.getStorageSync('user_id') || '';
// const us_token = wx.getStorageSync('us_token') || '';

// const formatNumber = n => {
//   n = n.toString()
//   return n[1] ? n : '0' + n
// }

// module.exports.formatTime = date => {
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()
//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   const second = date.getSeconds()
//   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
// }

/**
 * 检测对象是否是空对象(不包含任何可读属性)。
 * 方法既检测对象本身的属性，也检测从原型继承的属性(因此没有使hasOwnProperty)。
 */
// module.exports.isEmpty = obj => {
//   for (var name in obj) {
//     return false;
//   }
//   return true;
// }; 
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
     axios.post(url,params)
          .then(res => {
            resolve(res.data);
          },err => {
            console.log("post请求failed")
            reject(err)
          })
   })
}

