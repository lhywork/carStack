import axios from 'axios';
import qs from 'qs';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.timeout = 5000;
// axios.defaults.baseURL ='';
/**
  * GET请求
  * @param  {[type]} url     url地址
  * @param  {[type]} params  data参数
  * @return {[type]}         [Promise]
 */
export const getData = (url, params) => {
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
export const postJSON = (url, params) => {
    return new Promise((resolve,reject) => {
      axios({
        method: 'post',
        url:url,
        data: JSON.stringify(params),
        headers: { 'Content-Type':'application/json'},
      }).then(res => {
        resolve(res)
      })
      .catch(err => {
        console.log("post请求failed")
        reject(err)
      })
  })
}
export const postFile = (url, params) => {
    return new Promise((resolve,reject) => {
      axios({
        method: 'post',
        url:url,
        data: params,
      }).then(res => {
        resolve(res)
      })
      .catch(err => {
        console.log("post请求failed")
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
  return new Promise(function (resolve, reject) {
    axios.post(url,qs.stringify(params))
    .then(function (res) {
        resolve(res.data);
    })
    .catch(function (res) {
        console.log("post请求failed");
        reject(res);       
    });
  });
};

export function formatDate(time, fmt) {
    if (arguments.length === 0) {
      return null
    }
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      if (('' + time).length === 10) time = parseInt(time) * 1000
      date = new Date(time)
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    function padLeftZero(str) {
        return ('00' + str).substr(str.length);
    }
    return fmt;
};

export function isLogin(){
  if(sessionStorage.getItem('USERNAME') && sessionStorage.getItem('USERID')){
    return true;
  }
  return false;
}