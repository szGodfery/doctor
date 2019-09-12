import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 导入组件
import list from 'components/pages/List.vue';
import detail from 'components/pages/Detail.vue';
import share from 'components/pages/Share.vue'
// 路由规则
const routes = [
  { path: '/', redirect: '/list' },
  { path: '/list', component: list, name: 'list' },
  { path: '/detail', component: detail, name: 'detail' },
  { path: '/share', component: share, name: 'share' }
]

const router = new VueRouter({
  // 设置路由规则
  routes
})


export default router;