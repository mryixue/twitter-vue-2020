<template>
  <div id="mainRightFollow">
    <div class="box">
      <div class="title">我要跟隨誰</div>
      <Spinner v-if="isLoading" />
      <div class="card" v-for="follower in followers" :key="follower.id">
        <router-link :to="{ name: 'others', params: { id: follower.id } }">
          <img class="avatar" :src="follower.avatar | emptyImage" alt="follower.avatar">
        </router-link>
        <div class="info">
          <router-link :to="{ name: 'others', params: { id: follower.id } }">
            <div class="name">{{follower.name}}</div>
          </router-link>
          <div class="at">@{{follower.account}}</div>
          <div class="switch">
            <div class="on" v-show="follower.isFollowed" @click="handleUnfollow(follower.id)">取消跟隨</div>
            <div class="off" v-show="!follower.isFollowed" @click="handleFollow(follower.id)">跟隨</div>
          </div>
        </div>
      </div>
      <router-link class="button" :to="{ name: 'followers', params: { id: currentUserId } }">顯示更多</router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
import usersAPI from './../apis/users'
import followApi from '../apis/followships'
import Spinner from './../components/spinner'
import { Toast } from '../utils/helpers'
import Bus from '../bus.js'

export default {
  mixins: [emptyImageFilter],
  components: {
    Spinner
  },
  data() {
    return {
      currentUserId: -1,
      followers: [],
      isLoading: true,
      isClickedFollow: false,
      isClickedUnfollow: false
    }
  },
  created () {
    this.fetchTopUsers ()
    Bus.$on('chanFollow', () =>{
      this.fetchTopUsers ()
    })
  },
  methods: {
    async fetchTopUsers () {
      try {
        this.isLoading = true
        const data = await usersAPI.getTopUsers ()

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.currentUserId = data.data.currentUserId
        this.followers = data.data.topUsers.filter(item => item.id != this.currentUserId)
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.error(error.message)
      }
    },

    async handleFollow(id) {
      try {
         if (this.isClickedFollow) {
          return
        }
        this.isClickedFollow = true

        const data = await followApi.followUser({ id: id.toString() })
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: '已跟隨此使用者'
        })
        const index = this.followers.findIndex(follower => follower.id === id)
        this.followers[index].isFollowed = true
        this.followers[index].followerCount++
        this.followers.sort((a, b) => b.followerCount - a.followerCount)
        this.isClickedFollow = false
        Bus.$emit('changeFollow')
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '跟隨失敗，請稍後再試'
        })
        this.isClickedFollow = false
        console.error(error.message)
      }
    },

    async handleUnfollow (id) {
      try {
         if (this.isClickedUnfollow) {
          return
        }
        this.isClickedUnfollow = true

        const data = await followApi.cancelFollow({ followingId: id.toString() })
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: '已取消跟隨此使用者'
        })
        const index = this.followers.findIndex(follower => follower.id === id)
        this.followers[index].isFollowed = false
        this.followers[index].followerCount--
        this.followers.sort((a, b) => b.followerCount - a.followerCount)
        this.isClickedUnfollow = false
        Bus.$emit('changeFollow')
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '取消跟隨失敗，請稍後再試'
        })
        this.isClickedUnfollow = false
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
        justify-content: flex-end
        div
          text-align: center
          padding: 5px 10px
          margin:
            right: 5px
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
