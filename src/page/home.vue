<template>
  <div>
    <div class="homeNav">
      <Navbar tit="首页">
        <template #left>
          <div></div>
        </template>
      </Navbar>
    </div>
  </div>
</template>

<script>
import Navbar from 'src/components/Navbar';

export default {
  name: "home",
  components: {
    Navbar
  },
}
</script>

<style scoped>
.homeNav {
  background: var(--color-tint);
  color: white;
  font-size: var(--font-size);
}
</style>