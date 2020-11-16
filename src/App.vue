<template>
  <div id="app">
    <div>
      <div style="margin-bottom: 10px">
        <button @click="turnTo('/home')">home</button>
        <button @click="turnTo('/learnRouter')">learnRouter</button>

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
      location.hash = path;
    }
  }
};
</script>

<style>
button {
  margin-right: 4px;
}
</style>
