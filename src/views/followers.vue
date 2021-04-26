<template>
  <div id="followersframe">
    <mainLeft/>
    <followers/>
    <newTweet/>
  </div>
</template>

<script>
import mainLeft from '../components/mainLeft'
import followers from '../components/followers'
import newTweet from '../components/newTweet'
export default {
  components: {
    mainLeft,
    followers,
    newTweet
  },
}
</script>

<style lang="sass">
#followersframe
  width: 100vw
  height: 100vh
  display: grid
  grid-template:
    columns: 20vw 1fr
    areas: "left followers"
  position: relative
  #mainLeft
    grid-area: left
  #followers
    grid-area: followers
  #newTweet
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    grid-area: 1/1/3/3
    background-color: rgba(grey,.8)
</style>
