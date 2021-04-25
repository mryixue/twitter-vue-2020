<template>
  <div class="mainframe">
    <mainLeft/>
    <mainMidnew/>
    <mainMidArticle/>
    <mainRightFollow/>
  </div>
</template>

<script>
import mainLeft from '../components/mainLeft'
import mainRightFollow from '../components/mainRightFollow'
import mainMidArticle from '../components/mainMidArticle'
import mainMidnew from '../components/mainMidnew'
export default {
  components: {
    mainLeft,
    mainRightFollow,
    mainMidArticle,
    mainMidnew
  },

}
</script>

<style lang="sass">
.mainframe
  width: 100vw
  height: 100vh
  display: grid
  grid-template:
    columns: 20vw 1fr 25vw
    rows: 20vh 1fr
    areas: "left new right" "left article right"
  #mainLeft
    grid-area: left
  #mainMidArticle
    grid-area: article
  #mainRightFollow
    grid-area: right
</style>