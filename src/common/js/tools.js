
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
  };

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
  };
  // 判断是否为空
  function isEmpty(val) {
    if (val == null || typeof (val) == 'undefined' ||
      (typeof (val) == 'string' && (trim(val) == '' || trim(val) == 'null'))) {
      return true;
    } else {
      return false;
    }
  };

  // 清除前后空格
  function trim(val) {
    return val.replace(/(^\s*)|(\s*$)/g, '');
  };

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
  };
  // 验证身份证
  function isIdentityCardNo(card) {
    var pattern = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
    return pattern.test(card);
  };
  //号码验证正则
  function regPhone(phone) {
    var regPhone = /^1[3|4|5|6|7|8][0-9]{9}$/;
    return regPhone.test(phone)
  };


  //从 canvas 提取图片 base64 image
  function convertCanvasToImage(canvas) {
    //新Image对象，可以理解为DOM
    //alert(typeof(canvas));
    var image = new Image();
    // canvas.toDataURL 返回的是一串Base64编码的URL，当然,浏览器自己肯定支持
    // 指定格式 PNG
    image.src = canvas.toDataURL("image/png");
    return image;
  };

  // 把base64 转换成文件对象
  function dataURLtoFile(base64Str, fileName) {
    var arr = base64Str.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), //对base64串进行操作，去掉url头，并转换为byte
      len = bstr.length,
      ab = new ArrayBuffer(len), //将ASCII码小于0的转换为大于0
      u8arr = new Uint8Array(ab);
    while (len--) {
      u8arr[len] = bstr.charCodeAt(len)
    };
    // 创建新的 File 对象实例[utf-8内容，文件名称或者路径，[可选参数，type：文件中的内容mime类型]]
    return new File([u8arr], fileName, {
      type: mime
    })
  };

  /**
 * 文件上传,异步
 */
  function uploadfile(file, callback) {
    var formFile = new FormData();
    formFile.append('file', file);
    $.ajax({
      type: "POST",
      url: _urlIndex + "/file/upload",
      data: formFile,
      dataType: "json",
      cache: false,
      contentType: false, //不设置内容类型
      processData: false, //不处理数据
      success: function (res) {
        callback(res)
      },
      error: function () {
        showMsg('上传失败')
      }
    })
  };

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
  };


  /**
 * 显示loading
 */
  function showLoading() {
    var oldLoadingBox = document.getElementById("loadingBox");
    if (oldLoadingBox != null) {
      oldLoadingBox.style.display = 'flex';
    } else {
      var fragment = document.createDocumentFragment();
      var loadingBox = document.createElement('div');
      loadingBox.setAttribute('class', 'loadingBox');
      loadingBox.setAttribute('id', 'loadingBox');
      var containerStr = '<div class="spinner">' +
        '<div class="spinner-container container1">' +
        '<div class="circle1"></div>' +
        '<div class="circle2"></div>' +
        '<div class="circle3"></div>' +
        '<div class="circle4"></div>' +
        '</div>' +
        '<div class="spinner-container container2">' +
        '<div class="circle1"></div>' +
        '<div class="circle2"></div>' +
        '<div class="circle3"></div>' +
        '<div class="circle4"></div>' +
        '</div>' +
        '<div class="spinner-container container3">' +
        '<div class="circle1"></div>' +
        '<div class="circle2"></div>' +
        '<div class="circle3"></div>' +
        '<div class="circle4"></div>' +
        '</div>' +
        '</div>';
      loadingBox.innerHTML = containerStr;
      loadingBox.style.display = 'flex';
      fragment.appendChild(loadingBox);
      // 把文档碎片添加到body中
      document.body.appendChild(fragment);
    }
  };

  /**
   * 隐藏loading
   */
  function hideLoading() {
    var loadingBox = document.getElementById('loadingBox');
    loadingBox.style.display = 'none'
  };
  return {
    callServer,
    isEmpty,
    iosOrAndroid,
    isIdentityCardNo,
    regPhone,
    convertCanvasToImage,
    dataURLtoFile,
    uploadfile,
    showMsg,
    showLoading,
    hideLoading
  }
})();

export default tools