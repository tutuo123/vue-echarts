import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Image from './Image'
import Index from './Index'
import 'bootstrap/dist/css/bootstrap.css'

import store from './store'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path: '/',
  component: App
}, {
  path: '/index',
  component: App
}, {
  path: '/image',
  component: Image
}]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
// 实例化我们的Vue
new Vue({
  el: '#app',
  router,
  store,
  ...Index
})
