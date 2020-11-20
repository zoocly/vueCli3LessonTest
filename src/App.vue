<template>
  <div id="app">
    <div>
      <div style="margin-bottom: 10px">
        <button @click="turnTo('/home')">home</button>
        <button @click="turnTo(`/learnRouter/${Math.floor((Math.random()*100)+1)}?name=123`)">learnRouter</button>
        <button @click="turnTo('/qt')">qt</button>
      </div>
      <router-view/>
    </div>


  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  methods: {
    turnTo(path) {
      if (location.pathname !== path) {
        this.$router.push(path);
      }
    }
  }
};
</script>

<style>
button {
  margin-right: 4px;
}
</style>
