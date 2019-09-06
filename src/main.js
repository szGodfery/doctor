import Vue from 'vue';
import App from './App.vue';
// 引入css初始化样式
import 'common/css/reset.min.css';
// 引入公共js
import tools from 'common/js/tools';
// 引入有赞插件
import 'common/js/vantCompents';

Vue.prototype.$tools = tools;
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
