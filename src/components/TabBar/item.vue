<template>
  <div class="item" @click="click">
    <div>
      <img :src='select === data.code ? data.img[1] : data.img[0]'>
    </div>
    <span :class="[select === data.code ? 'red' : '']">{{ data.name }}</span>
  </div>
</template>

<script>
export default {
  name: "item",
  props: {
    select: '',
    data: {
      default: {
        name: '暂无',
        img: []
      },
      type: Object,
      require: false,
    }
  },
  data() {
    return {}
  },
  methods: {
    click() {
      this.$emit('click', this.data.code)
    }
  }
}
</script>

<style scoped>
.item {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  width: 0.5rem;
  height: 0.5rem;
}

.red {
  color: var(--color-high-text);
}
</style>
