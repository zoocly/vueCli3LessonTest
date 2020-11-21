<template>
  <div class="tabBar">
    <Item v-for="(it, index) in list" :key="index" :data="it" :select="select" @click="click"/>
  </div>
</template>

<script>
import Item from './item';

export default {
  name: "TabBar",
  props: {
    list:{
      type:Array
    }
  },
  data() {
    return {
      select:this.list[0].code,
    }
  },
  components: {
    Item
  },
  methods: {
    click(val) {
      this.select = val;
      const path = `/${val}`;
      if (!path.startsWith(location.pathname)) {
        this.$router.push(path);
      }
    }
  }
}
</script>

<style scoped>
.tabBar {
  height: 1.25rem;
  background: #f6f6f6;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
