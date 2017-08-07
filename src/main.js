// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'vuetify/dist/vuetify.min.css'
import VueHighlightJS from 'vue-highlightjs'
import store from './utils/vuex'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueHighlightJS)

NProgress.configure({ easing: 'ease', speed: 500 })
NProgress.inc(0.2)

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from, next) => {
  NProgress.done()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
