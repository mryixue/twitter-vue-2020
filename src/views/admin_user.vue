<template>
  <div class="adminframe">
    <adminLeft/>
    <adminRightUser/>
  </div>
</template>

<script>
import adminLeft from '../components/adminLeft'
import adminRightUser from '../components/adminRightUser'
export default {
  components: {
    adminLeft,
    adminRightUser
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
  #adminRIghtUser
    margin:
      left: 35vw
    width: 63vw
</style>