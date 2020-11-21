<template>
  <div id="app">
    <div class="main">
      <router-view/>
    </div>
    <TabBar :list="list"/>
  </div>
</template>

<script>
import TabBar from "components/TabBar/index";

export default {
  name: 'App',
  components: {
    TabBar
  },
  data() {
    return {
      list: [
        {
          name: '首页',
          code: 'home',
          img: [require('@/assets/tabBar/home.svg'), require('@/assets/tabBar/home_red.svg')]
        },
        {
          name: '分类',
          code: 'classification',
          img: [require('@/assets/tabBar/fenlei.svg'), require('@/assets/tabBar/fenlei_red.svg')]
        },
        {
          name: '购物车',
          code: 'shopping',
          img: [require('@/assets/tabBar/shoppingCar.svg'), require('@/assets/tabBar/shoppingCar_red.svg')]
        },
        {
          name: '我的',
          code: 'profile',
          img: [require('@/assets/tabBar/user.svg'), require('@/assets/tabBar/user_red.svg')]
        }
      ]
    }
  },
  methods: {}
};
</script>

<style>
@import "main.css";

#app {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
}
</style>
