import VueRouter from "vue-router";
import Vue from "vue";


const Home = () => import('@/page/home');
const LearnRouter = () => import('@/page/routerLesson');
const QT = () => import('@/page/test')
const QT1 = () => import('@/page/test/qiantao1');
const QT2 = () => import('@/page/test/qiantao2');

// 使用vue加载vue-router
Vue.use(VueRouter);

// 组件和路由的映射关系
const routes = [
  // 重定向
  {path: '/', redirect: '/home'},
  {path: '/home', component: Home},
  // 动态路由, 懒加载
  {path: '/learnRouter/:id', component: LearnRouter},
  // 路由嵌套
  {
    path: '/qt',
    component: QT,
    children: [
      {path: '', redirect: 'qt1'},
      {path: 'qt1', component: QT1},
      {path: 'qt2', component: QT2},
    ]
  },
];
const router = new VueRouter({
  routes,
  mode: 'history',
});
export default router;
