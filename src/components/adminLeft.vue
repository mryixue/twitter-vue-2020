<template>
  <div id="adminLeft">
    <img class="logo" src="/logo.png">
    <nav class="nav">
      <router-link to="/admin_main/">推文清單</router-link>
      <router-link to="/admin_user/">使用者列表</router-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
$font-color: rgba(#b0d7f6, .8)
#adminLeft
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
    .router-link-active
      color: $font-color
      text-shadow: 1px 1px 0.5px black
</style>