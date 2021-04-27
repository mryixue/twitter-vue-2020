<template>
  <div id="mainMidReply">
    <div class="back">
      <a @click="$router.go(-1)">←</a>
    </div>
    <div class="article">
      <div class="info">
        <div class="left">
          <!-- <img class="avatar" :src="tweet.User.avatar | emptyImage" alt="tweet.avatar"> -->
          <div class="avatar"></div>
        </div>
        <div class="right">
          <div class="name">{{ tweet.name }}</div>
          <div class="account">@{{ tweet.account }}</div>
        </div>
      </div>
      <p class="description">{{ tweet.description }}</p>
      <div class="createTime">{{ tweet.createdAt }}</div>
      <div class="count">
        <div class="reply">{{ tweet.replyCount }} 回覆</div>
        <div class="like">{{ tweet.likeCount }} 喜歡次數</div>
      </div>
      <div class="icons">
        <img src="/reply.png" @click="reply(tweet)">
        <img src="/like.png">
      </div>
    </div>
    <div class="replies">
      <div class="reply" v-for="reply in replies" :key="reply.id">
        <div class="left">
          <!-- <img class="avatar" :src="tweet.User.avatar | emptyImage" alt="tweet.avatar"> -->
          <div class="avatar"></div>
        </div>
        <div class="right">
          <div class="name">{{ reply.name }}
            <span class="account">@{{ reply.account }}</span>
            <span class="creatTime">·{{ reply.createdAt }}</span>
          </div>
          <div class="replyAt">回覆 <span>@{{tweet.name}}</span></div>
          <p class="description">{{ reply.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from '../bus.js'
export default {
  data() {
    return {
      tweet: {
        avatar: '',
        name: 'Apple',
        account: 'apple',
        description: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
        createdAt: '2020/6/10',
        replyCount: 34,
        likeCount: 808
      },
      replies: [
        {
          id: 1,
          avatar: '',
          name: 'Mary Jane',
          account: 'mjjane',
          description: 'Great~',
          createdAt: '2020/6/10',
        },
        {
          id: 2,
          avatar: '',
          name: 'Squishy Tom',
          account: 'sushiTom',
          description: 'Good Job!',
          createdAt: '2020/6/10',
        },
        {
          id: 3,
          avatar: '',
          name: 'Squishy Tom',
          account: 'sushiTom',
          description: 'Good Job!',
          createdAt: '2020/6/10',
        },
        {
          id: 4,
          avatar: '',
          name: 'Squishy Tom',
          account: 'sushiTom',
          description: 'Good Job!',
          createdAt: '2020/6/10',
        },
        {
          id: 5,
          avatar: '',
          name: 'Squishy Tom',
          account: 'sushiTom',
          description: 'Good Job!',
          createdAt: '2020/6/10',
        },
        {
          id: 6,
          avatar: '',
          name: 'Squishy Tom',
          account: 'sushiTom',
          description: 'Good Job!',
          createdAt: '2020/6/10',
        },
      ]
    }
  },
  methods: {
    reply(tweet){
      Bus.$emit('toreply', tweet)
    }
  }
}
</script>

<style lang="sass">
$font-color: rgba(#b0d7f6, .8)
#mainMidReply
  overflow-x: hidden
  overflow-y: auto
  .back
    font-size: 24px
    &:hover
      cursor: pointer
  .article
    padding: 5px
    border: 1px solid rgba(grey,.5)
      style: solid solid none solid
    .info
      display: flex
      .left .avatar
        width: 50px
        height: 50px
        border-radius: 50px
        background-color: grey
        margin: 10px
      .right
        display: flex
        flex-direction: column
        justify-content: center
        .name
          font-weight: bold
        .account
          color: grey
    .description
      white-space: normal
      font-size: 24px
      padding: 10px
    .createTime
      color: grey
      padding:
        left: 10px
      font-size: 14px
    .count
      display: flex
      padding: 20px 10px
      div
        margin:
          right: 20px
    .icons img
      width: 25px
      margin:
        left: 10px
        right: 50px
      &:hover
        cursor: pointer
  .replies
    .reply
      display: flex
      border: 1px solid rgba(grey,.5)
        style: solid solid none solid
      font-size: 13px
      padding:
        top: 10px
        bottom: 20px
      .left .avatar
        width: 50px
        height: 50px
        border-radius: 50px
        background-color: grey
        margin: 10px
      .right
        display: flex
        flex-direction: column
        justify-content: center
        .name
          font-weight: bold
          .account,
          .creatTime          
            color: grey
        .replyAt
          margin: 5px 0
          span
            color: $font-color
            font-weight: bold
        p
          white-space: normal
</style>