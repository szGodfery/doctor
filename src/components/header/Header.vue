<template>
  <section class="header-area">
    <p class="title">{{title}}</p>
  </section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="less" scoped="scoped">
.header-area {
  width: 100%;
  .title {
    position: relative;
    padding: 0.4rem 0;
    line-height: 0.4rem;
    font-size: 0.28rem;
    color: #666;
    text-align: center;

    &::before {
      content: "";
      position: absolute;
      width: 0.32rem;
      height: 0.32rem;
      top: 50%;
      left: 36%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      background: url("./gap_line_left.png") no-repeat center center / 100% 100%;
    }

    &::after {
      content: "";
      position: absolute;
      width: 0.32rem;
      height: 0.32rem;
      top: 50%;
      right: 36%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      background: url("./gap_line_right.png") no-repeat center center / 100%
        100%;
    }
  }
}
</style>