<template>
  <div>
    <h1>我是Vue子组件</h1>
    <h2>{{$store.state.counter}}</h2>
    <h3>{{$store.getters.more20stu}}</h3>
    <h3>超过20随的学生的个数：{{$store.getters.more20stulength}}</h3>
    <h3>{{$store.getters.moreAgestu(22)}}</h3>
  </div>
</template>

<script>
  export default {
    name: 'HelloVuex'
  }
</script>

<style scoped>
</style>
