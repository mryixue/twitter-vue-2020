<template>
  <div id="adminLeft">
    <img class="logo" src="/images/logo.png">
    <nav class="nav">
      <router-link to="/admin_main/">推文清單</router-link>
      <router-link to="/admin_user/">使用者列表</router-link>
    </nav>
    <div class="logout" @click="logout">
      <img src="/images/logout.png">
      <span>登出</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
  methods: {
    logout () {
      this.$store.commit('revokeAuthentication')
      this.$router.push('/admin')
    }
  }
}
</script>

<style lang="sass">
$font-color: rgba(#b0d7f6, .8)
#adminLeft
  display: flex
  flex-flow: column nowrap
  align-items: center
  height: 100%
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
</style>
