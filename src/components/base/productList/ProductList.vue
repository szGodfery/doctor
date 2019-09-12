<template>
  <ul class="product-list-area">
    <li
      class="list-item"
      v-for="item in list"
      :key=item.from
    >
      <router-link :to="`detail?promocode=${item.promocode}&id=${item.id}&from=${item.from}`">
        <div class="img">
          <img v-lazy="item.imgsrc">
        </div>
        <div class="list-title">
          {{item.name}}
        </div>
        <div class="list-price">
          <span class="new-price">￥{{item.nowprice}}</span>
          <span class="old-price">￥{{item.oldprice}}</span>
        </div>
      </router-link>
    </li>
  </ul>
</template>
<script>
const imgUrl1 = require("./product1_200X200.png"),
  imgUrl2 = require("./product2_200X200.png"),
  imgUrl3 = require("./product3_200X200.png"),
  imgUrl4 = require("./product4_200X200.png");
export default {
  data() {
    return {
      list: [
        {
          name: "私家医生成人关爱版",
          promocode: "ZJ040100100098",
          id: "1133986",
          from: "1",
          imgsrc: imgUrl1,
          oldprice: "1099",
          nowprice: "499"
        },
        {
          name: "私家医生儿童版",
          promocode: "ZJ040100100098",
          id: "1133986",
          from: "2",
          imgsrc: imgUrl2,
          oldprice: "1899",
          nowprice: "999"
        },
        {
          name: "私家医生成人尊享版",
          promocode: "ZJ040100100098",
          id: "1133986",
          from: "3",
          imgsrc: imgUrl3,
          oldprice: "1899",
          nowprice: "999"
        },
        {
          name: "私家医生糖友版",
          promocode: "ZJ040100100098",
          id: "1133986",
          from: "4",
          imgsrc: imgUrl4,
          oldprice: "1099",
          nowprice: "499"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.product-list-area {
  padding: 0 0.3rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;

  .list-item {
    width: 3.32rem;
    padding-bottom: 0.3rem;
    margin-bottom: 0.5rem;
    border-radius: 0.2rem;
    background-color: #fff;

    .img {
      width: 100%;
      height: 3.32rem;

      img {
        border-radius: 0.2rem 0.2rem 0 0;
      }
    }

    .list-title {
      margin: 0.1rem 0 0.6rem 0;
      padding: 0 0.1rem;
      width: 100%;
      overflow: hidden;
      color: #474747;
      font-size: 0.28rem;
      line-height: 0.36rem;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .list-price {
      width: 100%;
      padding: 0 0.1rem;
      line-height: 0.36rem;

      .new-price {
        font-size: 0.26rem;
        color: #f60;
      }

      .old-price {
        text-decoration: line-through;
        color: #666;
      }
    }
  }
}
</style>