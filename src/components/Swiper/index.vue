<template>
  <div id="hy-swiper">
    <div :style="swiperStyle" class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
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
  name: "Swiper",
  props: {
    interval: {
      type: Number,
      default: 3000,
    },
    animDuration: {
      type: Number,
      default: 300,
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      slideCount: 0, // 元素个数
      totalWidth: 0, // 组件宽度
      swiperStyle: {}, //样式
      currentIndex: 1, //当前index
      scrolling: false,
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.handleDom();
      this.startTimer();
    }, 100)
  },
  methods: {
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;

        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval);
    },
    stopTimer() {
      window.clearInterval(this.playTimer);
    },
    scrollContent(currentPosition) {
      this.scrolling = true;
      this.swiperStyle.transition = `transform ${this.animDuration}ms`;
      this.setTransform(currentPosition);
      this.checkPosition();
      this.scrolling = false;
    },
    checkPosition() {
      window.setTimeout(() => {
        this.swiperStyle.transition = '0ms';
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
        this.$emit('transitionEnd', this.currentIndex - 1);
      }, this.animDuration);
    },
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px,0,0)`;
      this.swiperStyle['-webkit-transform'] = `translate3d(${position}px,0,0)`;
      this.swiperStyle['-ms-transform'] = `translate3d(${position}px,0,0)`;
    },
    handleDom() {
      let swiperEl = document.querySelector('.swiper');
      let slideELs = swiperEl.getElementsByClassName('slide');

      this.slideCount = slideELs.length;
      this.totalWidth = swiperEl.clientWidth;

      if (this.slideCount > 1) {
        let cloneFirst = slideELs[0].cloneNode(true);
        let cloneLast = slideELs[this.slideCount - 1].cloneNode(true);
        swiperEl.insertBefore(cloneLast, slideELs[0]);
        swiperEl.appendChild(cloneFirst);
      }
      this.setTransform(-this.totalWidth);
    },
    touchStart(e) {
      if (this.scrolling) {
        return;
      }
      this.stopTimer();
      this.startX = e.touches[0].pageX;
    },
    touchMove(e) {
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition;

      this.setTransform(moveDistance);
    },
    touchEnd(e) {
      let currentMove = Math.abs(this.distance);
      if (this.distance === 0) {
        return;
      } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) {
        this.currentIndex--;
      } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) {
        this.currentIndex++;
      }
      this.scrollContent(-this.currentIndex * this.totalWidth);
      this.startTimer();
    },
    previous() {
      this.changeItem(-1);
    },
    next() {
      this.changeItem(1);
    },
    changeItem(num) {
      this.stopTimer();
      this.currentIndex += num;
      this.scrollContent(-this.currentIndex * this.totalWidth);
      this.startTimer();
    },
  }
}
</script>

<style scoped>
#hy-swiper {
  overflow: hidden;
  position: relative;
}

.swiper {
  display: flex;
}

.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 8px;
}

.indi-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #fff;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}

.indi-item.active {
  background-color: red;
}
</style>