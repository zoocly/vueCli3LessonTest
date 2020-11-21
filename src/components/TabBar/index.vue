<template>
  <div class="tabBar">
    <Item v-for="(it, index) in list" :key="index" :data="it" :select="select" @click="click"/>
  </div>
</template>

<script>
import Item from './item';

export default {
  name: "TabBar",
  data() {
    return {
      select: 'home',
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
  components: {
    Item
  },
  methods: {
    click(val) {
      this.select = val;
      const path = `/${val}`;
      if(!path.startsWith(location.pathname)){
        this.$router.push(path);
      }
    }
  }
}
</script>

<style scoped>
.tabBar {
  height: 1.25rem;
  background: #ccc;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
