import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    equal:null
  },
  mutations: {
    compareValue(commit,payload) {
      
    }
  },
  actions: {
    checkValue(context,payload) {
      console.log(payload,'angka')
      context.commit('compareValue',payload)
    }

  },
  modules: {
  }
})
