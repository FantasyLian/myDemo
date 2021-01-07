<template>
  <section class="hilo" ref="hilo"></section>
</template>

<script>
import Game from "@/utils/game"
export default {
  name: 'flappybird',
  data () {
    return {
      game: new Game()
    }
  },
  mounted () {
    this.game.page = this.$refs.hilo
    this.game.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>
