<template>
  <div>
    12322222
  </div>
</template>

<script>
import request from "@/untils/request";
import axios from 'axios';
import {awsl} from '@/services'
export default {
  name: "home",
  async mounted() {
    const res = await awsl({a:1});
    console.log(res,'ssss')
  }
}
</script>

<style scoped>

</style>