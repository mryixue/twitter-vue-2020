<template>
  <div id="mainframe">
    <mainLeft/>
    <chatModal/>
  </div>
</template>

<script>
import mainLeft from '../components/mainLeft'
import chatModal from '../components/chatModal'
export default {
  components: {
    mainLeft,
    chatModal,
  },
}
</script>

<style lang="sass">
#mainframe
  width: 100vw
  height: 100vh
  display: grid
  grid-template:
    columns: 20vw 1fr
</style>
