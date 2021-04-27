<template>
  <div id="replyframe">
    <mainLeft/>
    <mainMidReply/>
    <mainRightFollow/>
    <newTweet/>
    <userReplyModal/>
  </div>
</template>

<script>
import mainLeft from '../components/mainLeft'
import mainRightFollow from '../components/mainRightFollow'
import mainMidReply from '../components/mainMidReply'
import newTweet from '../components/newTweet'
import userReplyModal from '../components/userReplyModal'
export default {
  components: {
    mainLeft,
    mainRightFollow,
    mainMidReply,
    newTweet,
    userReplyModal
  },
}
</script>

<style lang="sass">
#replyframe
  width: 100vw
  height: 100vh
  display: grid
  grid-template:
    columns: 20vw 1fr 30vw
    areas: "left article right"
  position: relative
  #mainLeft
    grid-area: left
  #mainMidReply
    grid-area: article
  #mainRightFollow
    grid-area: right
  #newTweet
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    grid-area: 1/1/3/3
    background-color: rgba(grey,.8)
  #userReplyModal
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    grid-area: 1/1/3/3
    background-color: rgba(grey,.8)
</style>
