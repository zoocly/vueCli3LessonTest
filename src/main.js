import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import 'lib-flexible/flexible'

require('./mock.js')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
