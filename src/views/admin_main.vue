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
    adminLeft, adminRightTweets
  }
}
</script>

<style lang="sass">
  $font-color: rgba(#b0d7f6, .8)
  .adminframe
    display: flex
    height: 100vh
    #adminLeft
      width: 35vw
      display: flex
      flex-flow: column nowrap
      align-items: center
      img
        width: 50px
        margin: 30px
      .nav
        display: flex
        flex-flow: column nowrap
        align-items: center
        a
          line-height: 50px
          font-size: 20px
        .router-link-exact-active
          color: $font-color
          text-shadow: 1px 1px 0.5px black
    #adminRIghtTweets
      width: 65vw
</style>