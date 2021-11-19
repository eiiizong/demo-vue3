/*
 * @Author: zengxm
 * @Date: 2021-11-19 17:06:46
 * @LastEditors: zengxm
 * @LastEditTime: 2021-11-19 17:06:46
 * @Description: change
 * @FilePath: /demo-vue3/src/store/index.ts
 */
import { createStore } from 'vuex'

const defaultState = {
  count: 0
}

// Create a new store instance.
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})
