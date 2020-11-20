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
      {
        path: '/qt', redirect: (to) => {
          const path = sessionStorage.getItem('path');
          if (path.startsWith('/qt/')) {
            return path
          }else {
            return '/qt/qt1';
          }
        }
      },
      {path: 'qt1', component: QT1},
      {path: 'qt2', component: QT2},
    ]
  },
];
const router = new VueRouter({
  routes,
  mode: 'history',
});
/*
* 全局路由监听
* 分为前置 和 后置
* 后置没有next函数
* */
router.beforeEach((to, from, next) => {
  // console.log(from, to);
  sessionStorage.setItem('path', from.path);
  next();
});
router.afterEach((to, from) => {
  // console.log(to, from);
})
export default router;
