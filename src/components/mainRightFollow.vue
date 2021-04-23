<template>
  <div id="mainRightFollow">
    <div class="box">
      <div class="title">跟隨誰</div>
      <div class="card" v-for="follower of followers" :key="follower.id">
        <div class="avatar">
          <div class="img">{{follower.avatar}}</div>
        </div>
        <div class="info">
          <div class="name">{{follower.name}}</div>
          <div class="at">@{{follower.at}}</div>
        </div>
        <div class="switch">
          <div class="on" v-show="follower.followed">正在跟隨</div>
          <div class="off" v-show="!follower.followed">跟隨</div>
        </div>
      </div>
      <div class="button">顯示更多</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      followers: [
        {
          id: 1,
          avatar: '',
          name: 'Pizza hut',
          at: 'pizzahut',
          followed: true
        },
        {
          id: 2,
          avatar: '',
          name: 'Mcdonald\'s',
          at: 'Mcdonalds',
          followed: false
        },
        {
          id: 3,
          avatar: '',
          name: 'Bank of America',
          at: 'BankOfAmerica',
          followed: false
        },
        {
          id: 4,
          avatar: '',
          name: 'L\'Oreal',
          at: 'Loreal',
          followed: false
        },
        {
          id: 5,
          avatar: '',
          name: 'Nintendo',
          at: 'Nintendo',
          followed: false
        },
        {
          id: 6,
          avatar: '',
          name: 'MasterCard',
          at: 'MasterCard',
          followed: false
        },
      ]
    }
  }
}
</script>

<style lang="sass">
$font-color: rgba(#b0d7f6, .8)
#mainRightFollow
  .box
    margin:
      top: 20px
      right: 20px
    background:
      color: rgba(#8ca3b7,.1)
    border-radius: 20px
    .title
      padding: 10px 20px
      font-size: 20px
      border-bottom: 1px solid gray
    .card
      display: grid
      grid-template:
        columns: max-content 1fr auto
      border-bottom: 1px solid gray
      .avatar .img
        width: 50px
        height: 50px
        background:
          color: gray
        border-radius: 50px
        margin: 10px
      .info
        padding: 5px
        div
          font-size: 14px
        .at
          color: gray
    .switch
      display: flex
      align-items: center
      justify-content: center
      div
        text-align: center
        padding: 5px 10px
        margin:
          right: 10px
        border-radius: 10px
        &:hover
          cursor: pointer
      .on
        background:
          color: $font_color
      .off
        color: $font_color
        border: 2px solid $font_color
    .button
      padding: 10px 20px
</style>