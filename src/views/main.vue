<template>
  <div class="mainframe">
    <sidebar/>
    <follows/>
  </div>
</template>

<script>
import sidebar from '../components/sidebar'
import follows from '../components/follows'
export default {
  components: {
    sidebar,
    follows
  },

}
</script>

<style lang="sass">
.mainframe
  position: relative
  height: 100vh
  #sidebar
    width: 15vw
    height: 100%
    position: fixed
  #follows
    width: 25vw
    height: 100%
    position: fixed
    right: 0
</style>