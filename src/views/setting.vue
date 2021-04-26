<template>
  <div id="settingframe">
    <mainLeft/>
    <setting/>
    <newTweet/>
  </div>
</template>

<script>
import mainLeft from '../components/mainLeft'
import setting from '../components/setting'
import newTweet from '../components/newTweet'
export default {
  components: {
    mainLeft,
    setting,
    newTweet
  },
}
</script>

<style lang="sass">
#settingframe
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
  #newTweet
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    grid-area: 1/1/3/3
    background-color: rgba(grey,.8)
</style>
