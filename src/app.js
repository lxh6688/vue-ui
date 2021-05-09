import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('s-button', Button)
Vue.component('s-icon', Icon)

new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: false,
    loading3: true,
  }
})