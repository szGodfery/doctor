
import axios from 'axios';
axios.defaults.timeout = 180000;
axios.defaults.baseURL = 'http://m.dazhongdianjin.cn';
// 设置rem方案
!function () {
  window.onresize = adjuest
  adjuest();

  function adjuest() {
    //-> 按照设计稿标准比例,在根据当前屏幕的尺寸,动态的计算出当前页面的REM比例,保证在不同屏幕的下的响应式开发
    var desW = 750;
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + 'px';
  }
}();

let tools = (function () {
  function callServer(url, params, type) {
    if (!url) return;
    url = axios.defaults.baseURL + url;
    if (type == 'get') {
      url = addParamsForUrl(url, params);
      return new Promise((resolve, reject) => {
        axios.get(url, params).then(res => {
          if (res.data.code == 0) {
            resolve(res.data)
          }
        }).catch(error => {
          reject(error)
        })
      })
    } else {
      return new Promise((resolve, reject) => {
        axios.post(url, params).then(res => {
          if (res.data.code == 0) {
            resolve(res.data)
          }
        }).catch(error => {
          reject(error)
        })
      })
    }
  }

  function addParamsForUrl(url, params) {
    if (!params) return url
    for (var key in params) {
      if (params[key] && params[key] != 'undefined') {
        if (url.indexOf('?') != -1) {
          url += '&' + '' + key + '=' + params[key] || '' + ''
        } else {
          url += '?' + '' + key + '=' + params[key] || '' + ''
        }
      }
    }
  }
  // 判断是否为空
  function isEmpty(val) {
    if (val == null || typeof (val) == 'undefined' ||
      (typeof (val) == 'string' && (trim(val) == '' || trim(val) == 'null'))) {
      return true;
    } else {
      return false;
    }
  }

  // 清除前后空格
  function trim(val) {
    return val.replace(/(^\s*)|(\s*$)/g, '');
  }

  // 判断是安卓手机还是苹果手机
  function iosOrAndroid() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isiOS == true) {
      return isiOS;
    } else {
      return isAndroid;
    }
  }
  // 验证身份证
  function isIdentityCardNo(card) {
    var pattern = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
    return pattern.test(card);
  }
  //号码验证正则
  function regPhone(phone) {
    var regPhone = /^1[3|4|5|6|7|8][0-9]{9}$/;
    return regPhone.test(phone)
  }
  /**
   * 显示信息用于请求回调的错误信息显示
   * 需要检查reset.css中是否有tipsBox样式
   * @param {*} str 
   */

  function showMsg(str, time) {
    time = time || 1500;
    var timer1 = null,
      timer2 = null;
    // 判断是否已经存在tipsbox元素，如果存在就不用添加了
    var oldtipsbox = document.getElementById('tipsbox');
    if (oldtipsbox != null) {
      clearTimeout(timer1);
      oldtipsbox.getElementsByClassName('tips')[0].innerHTML = str;
      oldtipsbox.style.display = "flex";
      timer1 = window.setTimeout(function () {
        oldtipsbox.style.display = "none";
      }, time)
    } else {
      clearTimeout(timer2);
      var fragment = document.createDocumentFragment();
      var tipsbox = document.createElement('div');
      var tips = document.createElement('div');
      tipsbox.setAttribute("class", "tipsbox");
      tipsbox.setAttribute("id", "tipsbox");
      tips.setAttribute("class", "tips");
      tips.innerHTML = str;
      tipsbox.appendChild(tips);
      fragment.appendChild(tipsbox);
      // 把文档碎片添加到body中
      document.body.appendChild(fragment);
      //  默认显示的时间
      timer2 = window.setTimeout(function () {
        tipsbox.style.display = "none";
      }, time)
    }
  }
  return {
    callServer,
    isEmpty,
    iosOrAndroid,
    isIdentityCardNo,
    regPhone,
    showMsg
  }
})();

export default tools