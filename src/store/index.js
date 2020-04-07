import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const store = new Vuex.Store({
  //传入我们想要的参数
  state: {
    counter: 1000,
    students: [{
        id: 110,
        name: 'why',
        age: 18
      },
      {
        id: 111,
        name: 'kobe',
        age: 20
      },
      {
        id: 112,
        name: 'james',
        age: 33
      },
      {
        id: 113,
        name: 'curry',
        age: 19
      },
      {
        id: 114,
        name: 'durant',
        age: 22
      }
    ]
  },
  mutations: {
    increment(state) { //默认参数就是上面的state对象
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {

  },
  getters: { //类似于计算属性
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20);
    },
    more20stulength(state, getters) {
      return getters.more20stu.length;
    },
    moreAgestu(state) {
      /* return function (age){
        return state.students.filter(s => s.age>age);
      } */
      return age => state.students.filter(s => s.age > age);
    }
  },
  modules: {

  }

})

//3.导出store对象
export default store
