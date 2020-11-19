<template>
  <div>
    <p>这是路由嵌套的最外面</p>
    <router-link to="/qt/qt1">1</router-link>
    <router-link to="/qt/qt2">2</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>