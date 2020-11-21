<template>
  <div id="app">
    <div class="main">
      <router-view/>
    </div>
    <TabBar/>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar/index";
export default {
  name: 'App',
  components: {
    TabBar
  },
  methods: {

  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
}
</style>
