<template>
  <div id="adminRIghtTweets">
    <table>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Tweet</th>
          <th>Like</th>
          <th>Following</th>
          <th>Follower</th>
        </tr>
      </thead>
      <Spinner v-if="isLoading" />
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td><img class="avatar" width="100" :src="user.avatar | emptyImage" alt="user.avatar"></td>
          <td>{{user.name}}</td>
          <td>{{user.tweetCount}}</td>
          <td>{{user.likedCount}}</td>
          <td>{{user.followingCount}}</td>
          <td>{{user.followerCount}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'
import Spinner from './../components/spinner'

export default {
  mixins: [emptyImageFilter],
  components: {
    Spinner
  },
  data() {
    return {
      users: [],
      isLoading: true,
    }
  },
  created () {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers () {
      try {
        this.isLoading = true
        const data = await adminAPI.users.get()

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.users = data.data

        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得會員資料，請稍後再試'
        })
        console.error(error.message)
      }
    },
  }
}
</script>

<style lang="sass">
#adminRIghtTweets
  padding:
    top: 10px
  table
    border-collapse: collapse
    text-align: center
    width: 100%
    td, th
      border: 1px solid #000
      padding: 5px
    tbody tr
      &:hover
        background-color: yellow
    td .avatar
      object-fit: cover
</style>
