import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)

//创建一个store仓库
export default new Vuex.Store({
  state: {
    count: 0,
    count1:1
  },
  getters:{
    getstate(state){
      return state.count >0 ? state.count:0
    }
  },
  //不可以操作异步
  mutations: {
    increment (state) {
      state.count++
      /*setTimeout(function () {
        state.count++
      },5000)*/
    },
    min(state){
      state.count--;
    }
  },
  //actions可以操作异步
  actions:{
    increment (context) {
      context.commit("increment")
      /*setTimeout(function(){

      },1000)*/

    },
    min(context){
      context.commit("min")

     /* setTimeout(function () {
      },1000)*/
    }
  }
})
