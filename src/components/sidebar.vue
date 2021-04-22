<template>
  <div id="sidebar">
    <img class="logo" src="/logo.png">
    <nav class="nav">
      <router-link to="/main/">首頁</router-link>
      <router-link to="/user/">個人資料</router-link>
      <router-link to="/setting/">設定</router-link>
    </nav>
    <div class="button">推文</div>
    <div class="logout">
      <img src="/logout.png">
      <span>登出</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
</style>