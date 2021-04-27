<template>
  <div id="mainRightFollow">
    <div class="box">
      <div class="title">跟隨誰</div>
      <Spinner v-if="isLoading" />
      <div class="card" v-for="follower in followers" :key="follower.id">
        <img class="avatar" :src="follower.avatar | emptyImage" alt="follower.avatar">
        <div class="info">
          <div class="name">{{follower.name}}</div>
          <div class="at">@{{follower.account}}</div>
        </div>
        <div class="switch">
          <div class="on" v-show="follower.isFollowed">正在跟隨</div>
          <div class="off" v-show="!follower.isFollowed">跟隨</div>
        </div>
      </div>
      <router-link class="button" to="/followers/">顯示更多</router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
import usersAPI from './../apis/users'
import Spinner from './../components/spinner'

export default {
  mixins: [emptyImageFilter],
  components: {
    Spinner
  },
  data() {
    return {
      followers: [],
      isLoading: true,
    }
  },
  created () {
    this.fetchTopUsers ()
  },
  methods: {
    async fetchTopUsers () {
      try {
        this.isLoading = true
        const data = await usersAPI.getTopUsers ()

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.followers = data.data

        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.error(error.message)
      }
    }
  },
}
</script>

<style lang="sass">
$font-color: rgba(#b0d7f6, .8)
#mainRightFollow
  overflow-y: auto
  overflow-x: hidden
  .box
    margin: 20px
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
      .avatar
        width: 50px
        height: 50px
        background:
          color: gray
        border-radius: 50px
        margin: 10px
        object-fit: cover
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
      display: block
</style>
