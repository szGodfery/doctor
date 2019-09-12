<template>
  <div>
    <Header :title="title"></Header>
    <Product-List></Product-List>
    <Tool-Btn></Tool-Btn>
  </div>
</template>

<script>
import Header from "components/base/header/Header";
import ProductList from "components/base/productList/ProductList";
import ToolBtn from "components/base/toolBtn/ToolBtn";
export default {
  name: "list",
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
  created() {
    this.$tools.showLoading();
  },
  mounted() {
    setTimeout(() => {
      this.$tools.hideLoading();
    }, 300);
  }
};
</script>

<style lang="less" scoped>
</style>