<template>
  <div class="mainframe">
    <mainLeft/>
<<<<<<< HEAD
    <settingDetail />
    <mainRightFollow/>
=======
    <setting/>
>>>>>>> e06b1287e03fc0a590b5904a54da5beff4074b88
  </div>
</template>

<script>
import mainLeft from '../components/mainLeft'
<<<<<<< HEAD
import mainRightFollow from '../components/mainRightFollow'
import settingDetail from '../components/settingDetail'

export default {
  components: {
    mainLeft,
    mainRightFollow,
    settingDetail
  },

=======
import setting from '../components/setting'
export default {
  components: {
    mainLeft,
    setting
  },
>>>>>>> e06b1287e03fc0a590b5904a54da5beff4074b88
}
</script>

<style lang="sass">
.mainframe
  width: 100vw
  height: 100vh
  display: grid
  grid-template:
<<<<<<< HEAD
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

=======
    columns: 20vw 1fr
    areas: "left setting"
  position: relative
  #mainLeft
    grid-area: left
  #setting
    grid-area: setting
</style>
>>>>>>> e06b1287e03fc0a590b5904a54da5beff4074b88
