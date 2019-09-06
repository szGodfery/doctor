<template>
  <div id="app">

    <Header :title="title"></Header>
    <Product-List></Product-List>
    <Tool-Btn></Tool-Btn>

  </div>
</template>

<script>
import Header from "components/header/Header";
import ProductList from "components/productList/ProductList";
import ToolBtn from "components/toolBtn/ToolBtn";

export default {
  name: "app",
  components: {
    Header,
    ProductList,
    ToolBtn
  },
  data() {
    return {
      title: "私人医生"
    };
  },
  created() {},
  mounted() {}
};
</script>

<style lang="less">
html,
body {
  height: 100%;
  background-color: #f7f7f7;
}
</style>
