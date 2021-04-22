<template>
  <div class="adminframe">
    <adminLeft/>
    <adminRightTweets/>
  </div>
</template>

<script>
import adminLeft from '../components/adminLeft'
import adminRightTweets from '../components/adminRightTweets'
export default {
  components: {
    adminLeft,
    adminRightTweets
  }
}
</script>

<style lang="sass">
.adminframe
  position: relative
  height: 100vh
  #adminLeft
    width: 35vw
    position: fixed
  #adminRIghtTweets
    margin:
      left: 35vw
    width: 63vw
</style>