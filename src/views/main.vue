<template>
  <div id="mainframe">
    <mainLeft/>
    <mainMidnew/>
    <mainMidArticle/>
    <mainRightFollow/>
    <newTweet/>
  </div>
</template>

<script>
import mainLeft from '../components/mainLeft'
import mainRightFollow from '../components/mainRightFollow'
import mainMidArticle from '../components/mainMidArticle'
import mainMidnew from '../components/mainMidnew'
import newTweet from '../components/newTweet'
export default {
  components: {
    mainLeft,
    mainRightFollow,
    mainMidArticle,
    mainMidnew,
    newTweet
  },
}
</script>

<style lang="sass">
#mainframe
  width: 100vw
  height: 100vh
  display: grid
  grid-template:
    columns: 20vw 1fr 30vw
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
  #newTweet
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    grid-area: 1/1/3/3
    background-color: rgba(grey,.8)
</style>
