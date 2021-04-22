<template>
  <div class="mainframe">
    <sidebar/>
  </div>
</template>

<script>
import sidebar from '../components/sidebar'
export default {
  components: {
    sidebar
  },

}
</script>

<style lang="sass">
  $font-color: rgba(#b0d7f6, .8)
  .mainframe
    position: relative
    height: 100vh
    #sidebar
      width: 20vw
      height: 100%
      position: fixed
      display: flex
      flex-flow: column nowrap
      align-items: center
      border-right: 1px solid gray
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
      .button
        background:
          color: $font_color
        width: 80%
        text-align: center
        border-radius: 15px
        padding: 3px 0
        margin:
          top: 20px
        &:hover
          cursor: pointer
      .logout
        display: flex
        align-items: center
        justify-content: center
        position: absolute
        bottom: 0px
        &:hover
          cursor: pointer
        img
          margin:
            left: 0
            right: 5px
          width: 30px
    #adminRIghtTweets
      margin:
        left: 20vw
      width: 63vw
</style>