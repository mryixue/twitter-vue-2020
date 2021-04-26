<template>
  <div id="followers">
    <div class="cards" v-for="tweet in tweets" :key="tweet.id">
      <div class="left">
        <!-- <img class="avatar" src="tweet.avatar"> -->
        <div class="avatar"></div>
      </div>
      <div class="right">
        <h5 class="info">{{ tweet.name }}
          <div>@{{ tweet.account }}</div>
        </h5>
        <p class="article">{{ tweet.intro }}</p>
      </div>
      <div class="switch">
        <div class="on" v-show="tweet.followed">正在跟隨</div>
        <div class="off" v-show="!tweet.followed">跟隨</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tweets: [
        {
          id: 1,
          avatar: '',
          name: 'Laure',
          account: 'LaureBill',
          intro: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
          followed: true
        },
        {
          id: 2,
          avatar: '',
          name: 'Laure',
          account: 'LaureBill',
          intro: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
          followed: true
        },
        {
          id: 3,
          avatar: '',
          name: 'Laure',
          account: 'LaureBill',
          intro: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
          followed: true
        },
        {
          id: 4,
          avatar: '',
          name: 'Laure',
          account: 'LaureBill',
          intro: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
          followed: false
        },
        {
          id: 5,
          avatar: '',
          name: 'Laure',
          account: 'LaureBill',
          intro: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
          followed: false
        },
        {
          id: 6,
          avatar: '',
          name: 'Laure',
          account: 'LaureBill',
          intro: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
          followed: false
        },
        {
          id: 7,
          avatar: '',
          name: 'Laure',
          account: 'LaureBill',
          intro: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
          followed: false
        },
        {
          id: 8,
          avatar: '',
          name: 'Laure',
          account: 'LaureBill',
          intro: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
          followed: false
        },
        {
          id: 9,
          avatar: '',
          name: 'Laure',
          account: 'LaureBill',
          intro: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
          followed: false
        },
        {
          id: 10,
          avatar: '',
          name: 'Laure',
          account: 'LaureBill',
          intro: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
          followed: false
        },
        {
          id: 11,
          avatar: '',
          name: 'Laure',
          account: 'LaureBill',
          intro: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
          followed: false
        },
      ]
    }
  }
}
</script>

<style lang="sass">
$font-color: rgba(#b0d7f6, .8)
#followers
  padding: 10px
  overflow-x: hidden
  overflow-y: auto
  h1
    font-size: 24px
  .cards
    width: 100%
    display: flex
    border-radius: 10px
    background-color: #f1f7fd
    margin: 20px 0
    padding:
      top: 20px
      bottom: 15px
    position: relative
    .left
      padding: 0 10px
      .avatar
        width: 50px
        height: 50px
        border-radius: 50px
        background-color: grey
    .right
      .info div
        color: grey
      .article
        margin:
          top: 10px
        white-space: normal
    .switch
      position: absolute
      top: 10px
      right: 20px
      div
        text-align: center
        padding: 5px 10px
        border-radius: 10px
        &:hover
          cursor: pointer
      .on
        background:
          color: $font_color
      .off
        color: $font_color
        border: 2px solid $font_color

</style>
