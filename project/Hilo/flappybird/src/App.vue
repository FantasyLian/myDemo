<template>
  <div id="app">
    <flappybird />
  </div>
</template>

<script>
import Flappybird from './components/flappybird'

export default {
  name: 'App',
  components: {
    Flappybird
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
