<template>
  <div>

<!--    <div class="homeNav">-->
<!--      <Navbar tit="首页">-->
<!--        <template #left>-->
<!--          <div></div>-->
<!--        </template>-->
<!--      </Navbar>-->
<!--    </div>-->
<!--    <Swiper>-->
<!--      <SwiperItem v-for="item in banner">-->
<!--        &lt;!&ndash;          <a :href="item.link">&ndash;&gt;-->
<!--        <img :src="item.url">-->
<!--        &lt;!&ndash;          </a>&ndash;&gt;-->
<!--      </SwiperItem>-->
<!--    </Swiper>-->
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
