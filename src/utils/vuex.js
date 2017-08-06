import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    leftsideMini: false,
    themeBackgroundColor: 'purple'
  },
  mutations: {
    chnageLeftside (state, obj) {
      state.leftsideMini = obj.data
      console.log('chnageLeftside: ', state.leftsideMini)
    },
    changeThemebgcolor (state, obj) {
      state.themeBackgroundColor = obj.bgcolor
    }
  }
})
