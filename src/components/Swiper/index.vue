<template>
  <div class="hy-swiper">
    <div class="swiper" @touchStart="touchStart" @touchMove="touchMove" @touchEnd="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div v-for="(item, index) in slideCount" class="indi-item" :class="{active:index === currentIndex - 1}"
             :key="index">
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props:{
    interval:{
      type:Number,
      default:3000,
    },
    animDuration:{
      type:Number,
      default: 300,
    },
    moveRatio:{
      type:Number,
      default:0.25
    },
    showIndicator:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return {
      slideCount:0, // 元素个数
      totalWidth: 0, // 组件宽度
      swiperStyle:{}, //样式
      
    }
  }
}
</script>

<style scoped>

</style>