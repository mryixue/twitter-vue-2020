<template>
  <div id="userframe">
    <mainLeft/>
    <userTop/>
    <userTweet/>
    <mainRightFollow/>
    <newTweet/>
  </div>
</template>

<script>
import mainLeft from '../components/mainLeft'
import mainRightFollow from '../components/mainRightFollow'
import userTweet from '../components/userTweet'
import userTop from '../components/userTop'
import newTweet from '../components/newTweet'
export default {
  components: {
    mainLeft,
    mainRightFollow,
    userTweet,
    userTop,
    newTweet
  },
}
</script>

<style lang="sass">
#userframe
  width: 100vw
  height: 100vh
  display: grid
  grid-template:
    columns: 20vw 1fr 25vw
    rows: 380px 1fr
    areas: "left new right" "left article right"
  position: relative
  #mainLeft
    grid-area: left
  #userTweet
    grid-area: article
  #mainRightFollow
    grid-area: right
  #userTop
    grid-area: new
  #newTweet
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    grid-area: 1/1/3/3
    background-color: rgba(grey,.8)
</style>
