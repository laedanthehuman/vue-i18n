import Vue from 'vue'
import App from './App.vue'

import store from './store'

import i18n from './plugin'

Vue.use(i18n, store)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
