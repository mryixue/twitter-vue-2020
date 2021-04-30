<template>
  <div id="chatModal">
    <div id="rooms">
      <h5>聊天室列表</h5>
      <div class="room" v-for="room in chatRooms" :key="room.id">
        <img class="avatar" :src="room.avatar" alt="avatar">
        <div class="name">{{room.name}}</div>
      </div>
    </div>
    <div id="chatting">
      <div class="message" v-for="message in messages" :key="message.id">
        <img class="avatar" :src="message.user.avatar" alt="avatar"
          v-if="message.user.UserId !== currentUser.id">
        <div class="right" :class="{currentUser: message.user.UserId == currentUser.id}">
          <div class="msg" >{{message.message}}</div>
          <div class="time">{{message.time}}</div>
        </div>
      </div>
      <form>
        <input type="text" placeholder="輸入訊息">
        <button>
          <img src="../../public/images/send.png" alt="">
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chatRooms: [
        {
          UserId: 1,
          name: 'User1',
          avatar: 'https://loremflickr.com/640/480/person?random=54&lock=372'
        },
        {
          UserId: 2,
          name: 'User2',
          avatar: 'https://loremflickr.com/640/480/person?random=65&lock=618'
        },
        {
          UserId: 3,
          name: 'User3',
          avatar: ''
        },
        {
          UserId: 4,
          name: 'User4',
          avatar: ''
        },
      ],
      messages: [
        {
          id: 1,
          message: 'yo~',
          time: '4/30',
          user: {
            UserId: 1,
            name: 'User1',
            avatar: 'https://loremflickr.com/640/480/person?random=54&lock=372'
          }
        },
        {
          id: 2,
          message: 'what\'s up!',
          time: '4/30',
          user: {
            UserId: 5,
            name: 'Caspar',
            avatar: 'https://loremflickr.com/640/480/nature?random=53&lock=594'
          }
        },
        {
          id: 3,
          message: 'nothing',
          time: '4/30',
          user: {
            UserId: 1,
            name: 'User1',
            avatar: 'https://loremflickr.com/640/480/person?random=54&lock=372'
          }
        },
        {
          id: 4,
          message: 'borring',
          time: '4/30',
          user: {
            UserId: 5,
            name: 'Caspar',
            avatar: 'https://loremflickr.com/640/480/nature?random=53&lock=594'
          }
        },
        {
          id: 5,
          message: `that\'s play!`,
          time: '4/30',
          user: {
            UserId: 5,
            name: 'Caspar',
            avatar: 'https://loremflickr.com/640/480/nature?random=53&lock=594'
          }
        },
        {
          id: 6,
          message: `111111 11111111111111 11111111111111111111111111111 1111 111111111 111111111111111111111 11111111111111 111111111111111111111 11111111111111111111111111 111111111111111111 111111111111111 1111111111111111111111 1111111111111 11111111111111 11111111111111111 111111111111111111111111`,
          time: '4/30',
          user: {
            UserId: 5,
            name: 'Caspar',
            avatar: 'https://loremflickr.com/640/480/nature?random=53&lock=594'
          }
        },
        {
          id: 7,
          message: `111111 11111111111111 11111111111111111111111111111 1111 111111111 111111111111111111111 11111111111111 111111111111111111111 11111111111111111111111111 111111111111111111 111111111111111 1111111111111111111111 1111111111111 11111111111111 11111111111111111 111111111111111111111111`,
          time: '4/30',
          user: {
            UserId: 5,
            name: 'Caspar',
            avatar: 'https://loremflickr.com/640/480/nature?random=53&lock=594'
          }
        },
      ],
      currentUser: {
        id: 5
      }
    }
  }
}
</script>

<style lang="sass">
#chatModal
  display: grid
  grid-template-columns: 30vw 50vw
  height: 100vh
  overflow: hidden
  #rooms
    margin-top: 10px 0
    background-color: #f1f7fd
    border-radius: 10px
    height: 100%
    h5
      font-size: 24px
      margin: 10px
    .room
      display: flex
      border: 1px solid rgba(grey,0.2)
      &:hover
        cursor: pointer
      .avatar
        width: 50px
        height: 50px
        border-radius: 50px
        background-color: grey
        margin: 10px
      .name
        line-height: 70px
  #chatting
    overflow-y: auto
    padding-bottom: 40px
    .message
      display: flex
      padding: 10px
      padding-left: 0px
      .avatar
        width: 50px
        height: 50px
        border-radius: 50px
        background-color: grey
        margin: 10px
      .right
        width: 100%
        display: flex
        flex-flow: column nowrap
        align-items: flex-start
        .msg
          background-color: #f1f7fd
          padding: 10px
          border-radius: 30px 30px 30px 0
          white-space: normal
          max-width: 60%
        .time
          font-size: 12px
          color: grey
        &.currentUser
          align-items: flex-end
          .msg
            border-radius: 30px 30px 0 30px
    form
      position: fixed
      bottom: 0
      right: 0
      padding: 10px
      display: flex
      align-items: center
      background-color: #fff
      input
        width: 40vw
        line-height: 30px
        padding-left: 10px
        border-radius: 30px
      button
        bottom: 0
        right: 0
        background: none
        border: none
        img
          width: 30px
</style>