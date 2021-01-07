<template>
  <div class="container">
    <flappybird></flappybird>
  </div>
</template>

<script>
// @ is an alias to /src
import Flappybird from '@/components/flappybird'

export default {
  name: 'Home',
  components: {
    Flappybird
  }
}
</script>
