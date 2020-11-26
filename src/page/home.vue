<template>
  <div>
    123
  </div>
</template>

<script>
import request from "@/untils/request";
import axios from 'axios';
export default {
  name: "home",
  mounted() {
    request({
      url:'/mock/news',
      baseURL:''
    }).then(res =>{
      console.log(res,'res');
    }).catch(err=>{
      console.log(err, 'err');
    })
  }
}
</script>

<style scoped>

</style>