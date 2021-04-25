<template>
  <div id="mainMidArticle">
    <h1 class="title">首頁</h1>
    <div class="box">
      <div class="cards" v-for="tweet of tweets" :key="tweet.id">
        <div class="left">
          <div class="avatar"></div>
          <!-- <img class="avatar" src="tweet.avater" alt="tweet.avater"></div> -->
        </div>
        <div class="right">
          <h5 class="info">{{ tweet.name }}
            <span>@{{ tweet.at}}·{{ tweet.postTime }}</span>
          </h5>
          <p class="article">{{ tweet.article }}</p>
          <div class="icons">
            <img class="reply" src="/reply.png">{{ tweet.reply }}
            <img class="like" src="/likeOn.png">{{ tweet.like }}
          </div>
          <div class="delete">×</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tweets: [
        {
          id: 1,
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.',
          reply: 3,
          like: 8
        },
        {
          id: 2,
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.',
          reply: 3,
          like: 8
        },
        {
          id: 3,
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.',
          reply: 3,
          like: 8
        },
        {
          id: 4,
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.',
          reply: 3,
          like: 8
        },
        {
          id: 5,
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.',
          reply: 3,
          like: 8
        },
        {
          id: 6,
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.',
          reply: 3,
          like: 8
        },
        {
          id: 7,
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.',
          reply: 3,
          like: 8
        },
      ]
    }
  }
}
</script>

<style lang="sass">
#mainMidArticle
  padding: 20px
  overflow: auto
  .cards
    display: flex
    margin: 15px 0
    border-radius: 10px
    background-color: #f1f7fd
    .left .avatar
      width: 50px
      height: 50px
      margin: 10px
      background-color: gray
      border-radius: 50px
    .right
      width: 100%
      position: relative
      padding:
        top: 10px
        bottom: 30px
        left: 10px
      .info
        font-size: 18px
      .info span
        color: rgba(gray,.7)
        padding:
          left: 5px
      .article
        padding:
          top: 5px
        white-space: normal
      .icons
        .reply
          width: 20px
        .like
          width: 40px
      .delete
        font-size: 25px
        position: absolute
        right: 5px
        top: 0px
        &:hover
          cursor: pointer
</style>