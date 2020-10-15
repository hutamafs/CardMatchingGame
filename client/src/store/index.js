import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    equal:false,
    total:[],
    src:''
  },
  mutations: {
    compareValue(state,payload) {
      if(state.total.length == 2) {
        if(state.total[0] == state.total[1]) {
          state.equal = true;
        } else {
          // di sini suru kartu buat flip lagi

        }
      } else if(state.total.length < 2) {
          state.total.push(payload)
      }
    },
    setCard(state,payload) {
      state.src = payload
    }
  },
  actions: {
    checkValue(context,payload) {
      context.commit('compareValue',payload)
    },
    flipCard(context) {
      context.commit('setCard','cardback.png')
    }
  },
  modules: {
  }
})
