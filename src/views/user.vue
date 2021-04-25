<template>
  <div class="mainframe">
    <mainLeft/>
    <userInfo/>
    <mainRightFollow/>
  </div>
</template>

<script>
import mainLeft from '../components/mainLeft'
import mainRightFollow from '../components/mainRightFollow'
import userInfo from '../components/userInfo'

export default {
  components: {
    mainLeft,
    mainRightFollow,
    userInfo
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
  #userInfo
    grid-area: article
  #mainRightFollow
    grid-area: right
</style>
