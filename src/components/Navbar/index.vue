<template>
  <div>
    <div class="box">
      <div>
        <slot name="left">
          返回
        </slot>
      </div>
      <div class="main">
        <slot name="main">
          {{tit}}
        </slot>
      </div>
      <div>
        <slot name="right">

        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    tit:{type:String}
  },
}
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 1.375rem;
  padding: 0 0.2rem;
}

.main {
  flex: 1;
  text-align: center;
}
</style>