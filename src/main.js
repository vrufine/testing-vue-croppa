import Vue from 'vue'
import Croppa from 'vue-croppa'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Croppa)

new Vue({
  render: h => h(App),
}).$mount('#app')
