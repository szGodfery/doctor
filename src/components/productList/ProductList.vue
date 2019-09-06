<template>
  <ul class="product-list-area">
    <li class="list-item">
      <a href="">
        <div class="img">
          <img
            src="./product1_200X200.png"
            alt=""
          >
        </div>
        <div class="list-title">
          私家医生成人关爱版
        </div>
        <div class="list-price">
          <span class="new-price">￥499</span>
          <span class="old-price">￥1099</span>
        </div>
      </a>
    </li>
    <li class="list-item">
      <a href="">
        <div class="img">
          <img
            src="./product2_200X200.png"
            alt=""
          >
        </div>
        <div class="list-title">
          私家医生儿童版
        </div>
        <div class="list-price">
          <span class="new-price">￥999</span>
          <span class="old-price">￥1899</span>
        </div>
      </a>
    </li>
    <li class="list-item">
      <a href="">
        <div class="img">
          <img
            src="./product3_200X200.png"
            alt=""
          >
        </div>
        <div class="list-title">
          私家医生成人尊享版
        </div>
        <div class="list-price">
          <span class="new-price">￥999</span>
          <span class="old-price">￥1899</span>
        </div>
      </a>
    </li>
    <li class="list-item">
      <a href="">
        <div class="img">
          <img
            src="./product4_200X200.png"
            alt=""
          >
        </div>
        <div class="list-title">
          私家医生糖友版
        </div>
        <div class="list-price">
          <span class="new-price">￥499</span>
          <span class="old-price">￥1099</span>
        </div>
      </a>
    </li>
  </ul>
</template>
<script>
export default {};
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