import VueRouter from "vue-router";
import Vue from "vue";


import Home from '@/page/home';
import LearnRouter from '@/page/routerLesson';

// 使用vue加载vue-router
Vue.use(VueRouter);

// 组件和路由的映射关系
const routes = [
    { path:'/', redirect:'/home' },
    { path:'/home', component:Home },
    { path:'/learnRouter', component:LearnRouter },

];
const router = new VueRouter({
    routes,
    mode:'history'
});
export default router;
