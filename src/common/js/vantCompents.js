import { Lazyload, Swipe, SwipeItem } from "vant";

const vantComponents = {
  install(Vue) {
    Vue.use(Lazyload)
      .use(Swipe)
      .use(SwipeItem)
  }
};
export default vantComponents;