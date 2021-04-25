<template>
  <div class="mainframe">
    <mainLeft/>
    <mainMidnew/>
    <mainMidArticle/>
    <mainRightFollow/>
    <mainModal/>
  </div>
</template>

<script>
import mainLeft from '../components/mainLeft'
import mainRightFollow from '../components/mainRightFollow'
import mainMidArticle from '../components/mainMidArticle'
import mainMidnew from '../components/mainMidnew'
import mainModal from '../components/mainModal'
export default {
  components: {
    mainLeft,
    mainRightFollow,
    mainMidArticle,
    mainMidnew,
    mainModal
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
  position: relative
  #mainLeft
    grid-area: left
  #mainMidArticle
    grid-area: article
  #mainRightFollow
    grid-area: right
  #mainMidnew
    grid-area: new
  #mainModal
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    grid-area: 1/1/3/3
    background-color: rgba(grey,.8)
</style>
