import Vue from 'vue';
import router from './router/index'
import App from './App.vue';
// 引入css初始化样式
import 'common/css/reset.min.css';
// 引入公共js
import tools from 'common/js/tools';
Vue.prototype.$tools = tools;
// 按需引入有赞插件
import VantCompents from 'common/js/vantCompents';
Vue.use(VantCompents);

// 引入二维码插件
import VueQriously from 'vue-qriously';
Vue.use(VueQriously);

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
