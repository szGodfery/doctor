<template>
  <section>
    <!-- BANNER AREA -->
    <section class="product-banner-area">
      <van-swipe
        :autoplay=autoplay
        :indicator-color="indicatorColor"
        class="swiper1"
      >
        <van-swipe-item
          v-for="(item,index) in bannerList"
          :key="index"
          class="banner-link"
        >
          <img v-lazy="item.bannerUrl">
        </van-swipe-item>
      </van-swipe>
    </section>
    <!-- CARD INFO AREA -->
    <section class="card-info-area">
      <p class="card-info-title">{{cardInfoData.title}}</p>
      <div class="card-info-price-area">
        <div class="new-price-area">
          <span>¥</span><span class="new-price">{{cardInfoData.nowprice}}</span>
        </div>
        <div class="old-price-area">
          {{cardInfoData.oldprice}}
        </div>
      </div>
      <div class="feature-area">
        <span class="feature1">平安质保</span>
        <span class="feature2">正品低价</span>
      </div>
      <div class="promo-code-area">
        <span class="promo-title">唤醒健康优惠码:</span>
        <span class="promo-code">{{cardInfoData.promocode}}</span>
      </div>
    </section>
    <!-- PRODCUT DETAIL AREA -->
    <section class="product-detail-area">
      <div
        class="imgbox"
        v-for="(item,index) in prodcutDetailData"
        :key="index"
      >
        <a
          v-if="item.jumpLink"
          href="https://www.jk.cn/fe-genesis-cms/mobile/index.html#/page/ph5-pdsales-22"
        >
          <img v-lazy="item.imgUrl">
        </a>
        <img
          v-else
          v-lazy="item.imgUrl"
        >

      </div>
    </section>
    <!-- BTN ARA -->
    <div
      class="btn-area"
      @click="share"
    >
      立即分享
    </div>

    <!-- CALL SERVER AREA-->
    <section class="customerPhone">
      <a
        href="tel:4000-778-666"
        id="customerPhone"
      ></a>
    </section>

    <!-- ONLINE CHAT AREA-->
    <section class="onlinechat">
      <a
        href="javascript:;"
        id="onlinechat"
      ></a>
    </section>

    <!-- OUTSTANDING AREA-->
    <section class="outstanding-area">
      <a
        href="javascript:;"
        id="outstanding"
      ></a>
    </section>

  </section>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      // swipe options
      autoplay: 3000, //自动轮播间隔
      indicatorColor: "#ff721f", //指示器颜色
      bannerList: [],
      cardInfoData: {},
      prodcutDetailData: []
    };
  },
  created() {
    const { from, id, promocode } = this.$route.query;
    this.polishingBannerList(from);
    this.polishingCardInfoData(from, promocode);
    this.polishingPorductDetail(from);
    this.from = from;
    this.id = id;
    this.promocode = promocode;
    this.$tools.showLoading();
  },
  mounted() {
    setTimeout(() => {
      this.$tools.hideLoading();
    }, 300);
  },
  methods: {
    polishingBannerList(from) {
      let bannerUrl1 = require(`common/img/product${from}/banner1.png`),
        bannerUrl2 = require(`common/img/product${from}/banner2.png`);
      this.bannerList = [{ bannerUrl: bannerUrl1 }, { bannerUrl: bannerUrl2 }];
    },
    polishingCardInfoData(from, promocode) {
      let title = "",
        nowprice = "",
        oldprice = "";
      switch (from) {
        case "1":
          title = "私家医生成人关爱版";
          nowprice = 499;
          oldprice = 1099;
          break;
        case "2":
          title = "私家医生儿童版";
          nowprice = 999;
          oldprice = 1899;
          break;
        case "3":
          title = "私家医生成人尊享版";
          nowprice = 999;
          oldprice = 1899;
          break;

        case "4":
          title = "私家医生糖友版";
          nowprice = 499;
          oldprice = 1099;
          break;
      }
      this.cardInfoData = { title, nowprice, oldprice, promocode };
    },
    polishingPorductDetail(from) {
      let productImg = `product${from}`,
        productList = [];
      for (let i = 1; i <= 7; i++) {
        productList.push({
          imgUrl: require(`common/img/${productImg}/product${i}.png`),
          jumpLink: from == 4 && i == 7 ? true : false
        });
      }
      this.prodcutDetailData = productList;
      productList = null;
    },
    share() {
      this.$router.push({
        name: "share",
        query: { from: this.from, promocode: this.promocode, id: this.id }
      });
    }
  }
};
</script>

<style lang="less" scoped>
// BANNER AREA
.product-banner-area {
  width: 100%;
  background-color: #fff;
  .swiper1 {
    padding-bottom: 0.4rem;
  }

  .banner-link {
    img {
      width: 86%;
      margin: 0.16rem auto 0;
    }
  }

  /deep/.van-swipe__indicators {
    bottom: 0;
  }
  /deep/.van-swipe__indicator {
    background-color: #cccccc;
    width: 0.16rem;
    height: 0.16rem;
  }
}

// CARD INFO AREA
.card-info-area {
  width: 100%;
  background-color: #fff;
  .card-info-title {
    padding: 0.24rem 0.3rem 0;
    font-size: 0.34rem;
    line-height: 0.4rem;
    color: #333;
    margin-bottom: 0.24rem;
  }

  .card-info-price-area {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: 0.52rem;
    padding: 0 0.3rem;

    .new-price-area {
      color: #f60;
      margin-right: 0.12rem;

      .new-price {
        font-size: 0.3rem;
      }
    }

    .old-price-area {
      color: #999;
      text-decoration: line-through;
    }
  }

  .feature-area {
    height: 0.96rem;
    line-height: 0.96rem;
    margin-top: 0.24rem;
    padding: 0 0.24rem;
    background-color: #fafafa;
    color: #4d4d4d;

    span {
      position: relative;
      padding-left: 0.44rem;
      margin-right: 0.48rem;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 0.32rem;
        height: 0.32rem;
        border-radius: 50%;
        background: url("../../common/img/details_auth.png") no-repeat center
          center / 100% 100%;
      }
    }
  }

  .promo-code-area {
    height: 1.12rem;
    line-height: 1.12rem;
    padding: 0 0.24rem;

    .promo-title {
      color: #272727;
      font-size: 0.28rem;
      line-height: 0.28rem;
    }

    .promo-code {
      color: #ff721f;
      font-size: 0.3rem;
      line-height: 0.3rem;
      font-weight: 600;
    }
  }
}

.product-detail-area {
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.92rem;
  background-color: #f7f7f7;
  overflow-x: hidden;
  .imgbox {
    width: 100%;
  }
}

.btn-area {
  position: fixed;
  left: 0;
  bottom: 0;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  z-index: 10;
  width: 100%;
  height: 0.92rem;
  line-height: 0.92rem;
  font-size: 0.34rem;
  text-align: center;
  color: #fff;
  background-color: #ff721f;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:active {
    background-color: #ec6447;
    -webkit-tap-highlight-color: transparent;
  }
}
</style>