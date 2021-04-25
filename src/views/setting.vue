<template>
  <div class="mainframe">
    <mainLeft/>
    <setting/>
  </div>
</template>

<script>
import mainLeft from '../components/mainLeft'
import setting from '../components/setting'
export default {
  components: {
    mainLeft,
    setting
  },
}
</script>

<style lang="sass">
.mainframe
  width: 100vw
  height: 100vh
  display: grid
  grid-template:
    columns: 20vw 1fr
    areas: "left setting"
  position: relative
  #mainLeft
    grid-area: left
  #setting
    grid-area: setting
</style>
