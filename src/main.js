import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

import store from './store'

import i18n from './plugin'

Vue.use(i18n, {
  store,
  params:{
    languages:[
      {
        locale:'pt_BR',
        location: 'i18n/pt_BR.json'
      }
    ],
    locale:'pt_BR'
  },
  axios,
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
