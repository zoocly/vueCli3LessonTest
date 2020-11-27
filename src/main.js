import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import 'lib-flexible/flexible'

Vue.config.productionTip = false
document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
