<template>
  <div>
    <div class="homeNav">
      <Navbar tit="首页">
        <template #left>
          <div></div>
        </template>
      </Navbar>
    </div>
    <Swiper>
      <SwiperItem v-for="item in banner">
        <!--          <a :href="item.link">-->
        <img :src="item.url">
        <!--          </a>-->
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import Navbar from 'src/components/Navbar';
import {Swiper, SwiperItem} from 'src/components/Swiper';
export default {
  name: "home",
  components: {
    Navbar,
    Swiper,
    SwiperItem
  },
  data(){
    return {
      banner:[
        {url:require('src/assets/swiper/1.jpg'),link:''},
        {url:require('src/assets/swiper/2.png'),link:''},
        {url:require('src/assets/swiper/3.png'),link:''},
        {url:require('src/assets/swiper/4.png'),link:''},
      ]
    }
  }
}
</script>

<style scoped>
.homeNav {
  background: var(--color-tint);
  color: white;
  font-size: var(--font-size);
}
</style>