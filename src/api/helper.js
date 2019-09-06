import axios from 'axios';
// 测试地址
axios.defaults.baseURL = 'http://m.dazhongdianjin.cn';
const ERR_OK = 0;
export function doPost(url) {
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

