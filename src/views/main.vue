<template>
  <div class="mainframe">
    <mainLeft/>
    <mainMidArticle/>
    <mainRightFollow/>
  </div>
</template>

<script>
import mainLeft from '../components/mainLeft'
import mainRightFollow from '../components/mainRightFollow'
import mainMidArticle from '../components/mainMidArticle'
export default {
  components: {
    mainLeft,
    mainRightFollow,
    mainMidArticle
  },

}
</script>

<style lang="sass">
.mainframe
  position: relative
  width: 100vw
  height: 100vh
  #mainLeft
    width: 20vw
    height: 100%
    position: fixed
  #mainMidArticle
    width: 53vw
    height: 100%
    left: 20vw
    position: fixed
  #mainRightFollow
    width: 25vw
    height: 100%
    position: fixed
    right: 0
</style>