<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>

<style lang="less">
html,
body {
  min-height: 100%;
  background-color: #f7f7f7;
}
#app{
  min-height: 100%;
}
</style>
