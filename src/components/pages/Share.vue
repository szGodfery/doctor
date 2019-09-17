<template>
  <section class="share-page">
    <!-- 这个img是用于二维码中的log -->
    <!-- <img id="imgLogo" src="../img/news/logo@3x.png" style="display: none"> -->
    <div
      class="detailSharePage"
      id="detailSharePage"
    >
      <img
        :src="productImg"
        alt=""
      >
      <div class="qrcodes">
        <div class="qrcode">
          <qriously
            :value="qrcodeURL"
            :size="100"
          />
        </div>
        <div class="qrtips">{{qrStr}}</div>
      </div>
    </div>
    <div
      class="share-img-box"
      id="imgbox"
    >
      <img
        :src="posterImgPath"
        alt=""
      >

    </div>
    <!-- 保存按钮区域 -->
    <div
      class="btn-area"
      v-if="!isWeiXin"
    >
      <div
        class="save button"
        @click="savePic"
      >保存图片</div>
      <div
        class="cancel button"
        @click="cancel"
      >取消</div>
    </div>
  </section>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  inject: ["reload"],
  data() {
    return {
      qrcodeURL: "",
      posterImgPath: "", //海报图片,
      posterImgPathServe: "", //上传到服务器的海报图片地址
      isWeiXin: false //是否是微信环境 （true是微信环境）
    };
  },
  created() {
    const { from, id, promocode } = this.$route.query;
    this.mark = this.$tools.isEmpty(localStorage.getItem("mark"))
      ? "bianlimao"
      : localStorage.getItem("mark");
    this.from = from;
    this.id = id;
    this.promocode = promocode;
    this.$tools.showLoading();
    this.getProductImg(from);
    this.qrcodeURL = `http://app.szyouqikeji.cn/channel_platform/apply/applycommon.jsp?channelid=195&prdid=${id}`;
  },
  mounted() {
    setTimeout(() => {
      // 判断当前页面是否已经上传过图片了，如果有就不用调取接口
      let urlHash = location.hash,
        tempImgPath = null;
      if (urlHash.indexOf("saveImageUrl") > -1) {
        tempImgPath = urlHash.split("#saveImageUrl=")[1];
        this.posterImgPathServe = tempImgPath;
        this.posterImgPath = tempImgPath;
        this.$tools.hideLoading();
        return;
      }
      // 生成海报图片
      this.generatePoster();
    }, 500);
  },
  methods: {
    getProductImg(from) {
      let productImg = require(`common/img/share/product${from}.png`);
      this.productImg = productImg;
      let qrStr = ""; //二维码下面的描述
      switch (from) {
        case "1":
          qrStr = "扫码特惠 健康优选";
          break;
        case "2":
          qrStr = "扫码特惠 宝贝医考";
          break;
        case "3":
          qrStr = "扫码特惠 长辈优选";
          break;
        case "4":
          qrStr = "扫码特惠 健康优选";
          break;
      }
      this.qrStr = qrStr;
      // 如果是在微信浏览器中，就不用显示确定和取消按钮
      this.$tools.isWeiXin() ? (this.isWeiXin = true) : null;
    },
    generatePoster() {
      let shareDOM = document.getElementById("detailSharePage"),
        width = shareDOM.offsetWidth,
        height = shareDOM.offsetHeight,
        canvas = document.createElement("canvas"),
        scale = 2;
      canvas.width = width * scale;
      canvas.height = height * scale;
      canvas.getContext("2d").scale(scale, scale);
      let opts = {
        scale: scale,
        canvas: canvas,
        width: width,
        height: height,
        backgroundColor: "transparent",
        useCORS: true
      };

      html2canvas(shareDOM, opts).then(canvas => {
        let image = this.$tools.convertCanvasToImage(canvas);
        let myfile = this.$tools.dataURLtoFile(image.src, Date.now() + ".png");
        this.posterImgPath = image.src;
        // 上传图片到服务器
        this.$tools.uploadfile(myfile, res => {
          this.posterImgPathServe = location.origin + res.path;
          this.$tools.hideLoading();
        });
      });
    },
    savePic() {
      if (this.mark == "bianlimao") {
        let url = location.hash;
        if (url.indexOf("&time") > -1) {
          // 如果url中包含了time参数，也就是已经点击过了
          url = url.replace(
            url.substring(url.indexOf("&time"), url.length),
            ""
          );
        }

        url = this.$tools.addParamsForUrl(url, {
          time:
            new Date().getTime() + "#saveImageUrl=" + this.posterImgPathServe
        });
        window.location.replace(url);
        // 刷新当前页面
        this.reload();
      } else {
        this.$tools.showMsg("功能正在开发，敬请期待");
      }
    },
    cancel() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>

<style lang="less" scoped>
.share-page {
  min-height: 100%;
}
.detailSharePage {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;

    .title {
      width: 100%;
      padding: 0.6rem 0.75rem 0 0.75rem;
      font-size: 1.1rem;
      line-height: 1.2rem;
      text-align: left;
      font-weight: 800;
      color: #fffefe;
      margin-bottom: 0.3rem;
    }

    .productDesc {
      padding-left: 0.75rem;

      p {
        overflow: hidden;
        white-space: nowrap;
        font-size: 0.4rem;
        color: #fff;
        line-height: 0.75rem;

        &.dkcolor1 {
          color: #ff922e;
        }

        &.dkcolor2 {
          color: #0848ce;
        }

        &.dkcolor3 {
          color: #4eacf3;
        }

        &.dkcolor4 {
          color: #7e52ad;
        }

        &.dkcolor6 {
          color: #68da88;
        }

        &.dkcolor7 {
          color: #6679c1;
        }

        .fzw66 {
          font-size: 0.66rem;
          font-weight: 800;
        }

        .ziju8 {
          letter-spacing: 0.02rem;
        }
      }
    }
  }

  .advantage {
    position: absolute;
    z-index: 10;
    bottom: 0.75rem;
    left: 0.5rem;
    color: #fff;
    font-size: 0.27rem;
    width: 3.5rem;
    text-align: left;
    line-height: 0.32rem;
  }

  .qrcodes {
    position: absolute;
    z-index: 10;
    right: 0.3rem;
    bottom: 0.5rem;

    .qrtips {
      font-size: 0.2rem;
      line-height: 0.23rem;
      color: #333;
      text-align: center;
    }
  }
}

// 海报盒子样式
.share-img-box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  opacity: 0;

  img {
    width: 100%;
    height: 100%;
  }
}

// 保存按钮区域样式
.btn-area {
  position: fixed;
  z-index: 1001;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 0.32rem;
  background-color: #fff;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);

  div {
    width: 100%;
    height: 1.08rem;
    line-height: 1.08rem;
    border-top: 1px solid #f5f5f5;
  }

  .save {
    color: #ff9b00;

    &:active {
      background-color: #f5f5f5;
      -webkit-tap-highlight-color: transparent;
    }
  }

  .cancel {
    &:active {
      background-color: #f5f5f5;
      -webkit-tap-highlight-color: transparent;
    }
  }
}
</style>