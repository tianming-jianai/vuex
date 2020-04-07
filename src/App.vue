<template>
  <div id="app">
    <h2>{{message}}</h2>
    <!-- <h2>{{'counter:'+$store.state.counter}}</h2> -->
    <h2>{{$store.getters.powerCounter}}</h2>
    <!-- Vue官方不推荐直接修改VueComponent=>state
    <button @click="$store.state.counter--">-</button>
    <button @click="$store.state.counter++">+</button> -->
    <button @click="substraction">-</button>
    <button @click="addition">+</button>
    <h3>{{more20stu}}</h3>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex.vue'

  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    computed: {
      more20stu() {
        return this.$store.state.students.filter(s => s.age > 20);
      }
    },
    data() {
      return {
        message: 'message',
        counter: 0
      }
    },
    methods: {
      addition() {
        this.$store.commit('increment')
      },
      substraction() {
        this.$store.commit('decrement')
      }
    }
  }
</script>

<style>

</style>
