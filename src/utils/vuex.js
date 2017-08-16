import Vuex from 'vuex'
import Vue from 'vue'
import Cookies from 'js-cookie'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    leftsideMini: false,
    themeBackgroundColor: Cookies.get('themeName') || 'blue',
    preloadIsShow: true
  },
  mutations: {
    chnageLeftside (state, obj) {
      state.leftsideMini = obj.data
      console.log('chnageLeftside: ', state.leftsideMini)
    },
    changeThemebgcolor (state, obj) {
      state.themeBackgroundColor = obj.bgcolor
      Cookies.set('themeName', obj.bgcolor)
    },
    changePreloadIsShow (state) {
      state.preloadIsShow = !state.preloadIsShow
    }
  }
})
