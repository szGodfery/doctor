import axios from 'axios';
axios.defaults.timeout = 180000;
// 测试地址
axios.defaults.baseURL = 'http://m.dazhongdianjin.cn';
const ERR_OK = 0;


// POST请求
function doPost(url) {
  return function (params) {
    return axios.post(url, params).then(res => {
      const { error, data } = res.data;
      if (error === ERR_OK) {
        return data
      }
    }).catch(error => {

    })
  }
};

// GET请求
function get(url) {
  return function (params) {
    return axios.get(url, { params }).then(res => {
      const { error, data } = res.data;
      if (error == ERR_OK) {
        return data
      }
    }).catch(error => { })
  }
};

export { doPost, get };

