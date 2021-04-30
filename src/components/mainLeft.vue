<template>
  <div id="mainLeft">
    <img class="logo" src="../../public/images/logo.png">
    <nav class="nav">
      <router-link to="/main">首頁</router-link>
      <router-link
        :to="{ name: 'others', params: { id: currentUser.id } }"
      >
        個人資料
      </router-link>
      <router-link
        :to="{ name: 'chatRoom', params: { id: currentUser.id } }"
      >
        聊天室
      </router-link>
      <router-link :to="{ name: 'setting' }">設定</router-link>
    </nav>
    <div class="button" @click="tweet">新推文</div>
    <div class="logout" @click="logout">
      <img src="../../public/images/logout.png">
      <span>登出</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Bus from '../bus.js'

export default {
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
  methods: {
    logout () {
      this.$store.commit('revokeAuthentication')
      this.$router.push('/login')
    },
    tweet(){
      Bus.$emit('totweet')
    }
  }
}
</script>

<style lang="sass">
$font-color: rgba(#b0d7f6, .8)
#mainLeft
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
  .button
    background:
      color: $font_color
    width: 80%
    text-align: center
    border-radius: 15px
    padding: 8px 0
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
</style>
