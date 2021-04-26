<template>
  <div id="userTop">
    <div class="image">
      <!-- <img src=""> -->
      <div class="avatar"></div>
    </div>
    <div class="button">
      <div>編輯個人資料</div>
    </div>
    <div class="card">
      <div class="name">{{user.name}}
        <div class="account">@{{user.account}}</div>
      </div>
      <div class="intro">{{user.intro}}</div>
      <div class="follow">
        <div class="following">{{user.following}} 跟隨中</div>
        <div class="follower">{{user.follower}} 跟隨者</div>
      </div>
    </div>
    <div class="filter">
      <div :class="{tweet:links == 'tweet'}" @click="tweet">推文</div>
      <div :class="{reply:links == 'reply'}" @click="reply">推文與回覆</div>
      <div :class="{like:links == 'like'}" @click="like">喜歡的內容</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: 'tweet',
      user: {
        avatar: '',
        image: '',
        name: 'John Doe',
        account: 'heyjohn',
        intro: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
        following: 34,
        follower: 59
      }
    }
  },
  methods: {
    tweet(){
      this.links = 'tweet'
    },
    reply(){
      this.links = 'reply'
    },
    like(){
      this.links = 'like'
    },
  }
}
</script>

<style lang="sass">
$font-color: rgba(#b0d7f6, .8)
#userTop
  padding: 10px
  .image
    background-color: grey
    height: 20vh
    position: relative
    .avatar
      width: 100px
      height: 100px
      border-radius: 100px
      background-color: grey
      border: 5px solid white
      position: absolute
      bottom: -50px
      left: 10px
  .button
    height: 50px
    display: flex
    justify-content: flex-end
    align-items: center
    div
      text-align: center
      padding: 5px 10px
      margin: 10px
      border-radius: 10px
      background:
        color: $font_color
      &:hover
        cursor: pointer
  .card
    margin:
      bottom: 10px
    .name
      color: black
      .account
        color: grey
    .intro
      padding: 10px
    .follow
      display: flex
      div
        padding: 5px
  .filter
    display: grid
    grid-template:
      columns: repeat(3,1fr)
    width: 80%
    padding:
      left: 20px
    div
      text-align: center
      padding: 10px 0
      &:hover
        cursor: pointer
    .tweet,
    .reply,
    .like
      border-bottom: 5px solid $font-color
</style>