<template>
  <div id="adminRIghtTweets">
    <h3 class="title">推文清單</h3>
    <div class="tweets" v-for="tweet of tweets" :key="tweet.id">
      <div class="cards">
        <div class="left">
          <div class="avatar"></div>
          <!-- <img class="avatar" src="tweet.avater" alt="tweet.avater"></div> -->
        </div>
        <div class="right">
          <h5 class="info">{{ tweet.name }}
            <span>@{{ tweet.at}}·{{ tweet.postTime }}</span>
          </h5>
          <p class="article">{{ tweet.article }}</p>
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
          id: '',
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.'
        },
        {
          id: '',
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.'
        },
        {
          id: '',
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.'
        },
        {
          id: '',
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.'
        },
        {
          id: '',
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.'
        },
        {
          id: '',
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.'
        },
        {
          id: '',
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.'
        },
      ]
    }
  }
}
</script>

<style lang="sass">
  #adminRIghtTweets
    &:hover
      cursor: default
    .title
      padding: 10px 20px
    .cards
      display: flex
      box-shadow: 0px -0.5px 1px rgba(gray,.7)
      .left .avatar
        width: 50px
        height: 50px
        margin: 10px
        background-color: gray
        border-radius: 50px
      .right
        position: relative
        padding:
          top: 10px
          bottom: 30px
          left: 10px
        .info span
          color: rgba(gray,.7)
          padding:
            left: 5px
        .article
          padding:
            top: 5px
          white-space: normal
        .delete
          font-size: 25px
          position: absolute
          right: 5px
          top: 0px
          &:hover
            cursor: pointer
</style>