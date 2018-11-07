<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <area-linkage></area-linkage>
  </div>
</template>

<script>
import Linkage from './Linkage';
export default {
  name: 'HelloWorld',
  components: { 'area-linkage': Linkage },
  data () {
    return {
      msg: '省、市、区县、街道四级联动'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
