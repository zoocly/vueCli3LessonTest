import VueRouter from "vue-router";
import Vue from "vue";


const Home  = () => import('@/page/home');
const LearnRouter = () => import('@/page/routerLesson');

// 使用vue加载vue-router
Vue.use(VueRouter);

// 组件和路由的映射关系
const routes = [
    // 重定向
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    // 动态路由, 懒加载
    {path: '/learnRouter/:id', component: LearnRouter},
];
const router = new VueRouter({
    routes,
    mode: 'history',
});
export default router;
