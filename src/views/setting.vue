<template>
  <div class="mainframe">
    <mainLeft/>
    <settingDetail />
    <mainRightFollow/>
  </div>
</template>

<script>
import mainLeft from '../components/mainLeft'
import mainRightFollow from '../components/mainRightFollow'
import settingDetail from '../components/settingDetail'

export default {
  components: {
    mainLeft,
    mainRightFollow,
    settingDetail
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
  #settingDetail
    grid-area: article
  #mainRightFollow
    grid-area: right
</style>

