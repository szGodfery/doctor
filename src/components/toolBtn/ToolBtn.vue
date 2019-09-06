<template>
  <section class="btns-area">

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
        @click.stop.prevent="goToOnLineChat"
      ></a>
    </section>

    <!-- OUTSTANDING AREA-->
    <section class="outstanding-area">
      <a
        href="javascript:;"
        @click.stop.prevent="goToOutStande"
      ></a>
    </section>

  </section>
</template>
<script>
export default {
  methods: {
    goToOnLineChat() {
      _MEIQIA("showPanel");
    },
    goToOutStande() {
      this.$tools.showMsg("功能正在开发，敬请期待...");
    }
  }
};
</script>
<style lang="less" scoped>
.btns-area {
  position: fixed;
  right: 0.2rem;
  bottom: 0.2rem;
  z-index: 10;
}
// 客服样式
.customerPhone {
  width: 1rem;
  height: 1rem;
  margin-bottom: 0.1rem;
  background: url(./customerService@2x.png) no-repeat center center / 100% 100%;
  border-radius: 50%;
  z-index: 100;
  &:active {
    background-color: #f5f5f5;
    -webkit-tap-highlight-color: transparent;
  }

  a {
    cursor: pointer;
  }
}

// 在线聊天样式
.onlinechat {
  width: 1rem;
  height: 1rem;
  margin-bottom: 0.1rem;
  background: url("./online_chat@2x.png") no-repeat center center/100% 100%;
  border-radius: 50%;
  z-index: 100;

  a {
    cursor: pointer;
  }
}
// 业绩样式
.outstanding-area {
  width: 1rem;
  height: 1rem;
  background: url("./outstanding@2x.png") no-repeat center center / 100% 100%;
  border-radius: 50%;
  z-index: 100;

  &:active {
    background-color: #f5f5f5;
    -webkit-tap-highlight-color: transparent;
  }

  a {
    cursor: pointer;
  }
}
</style>