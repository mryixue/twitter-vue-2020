<template>
  <div id="adminRIghtTweets">
    <table>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Tweets</th>
          <th>Reply</th>
          <th>Like</th>
          <th>Following</th>
          <th>Follower</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user of users" :key="user.id">
          <td>{{user.avatar}}</td>
          <td>{{user.name}}</td>
          <td>{{user.tweets}}</td>
          <td>{{user.reply}}</td>
          <td>{{user.like}}</td>
          <td>{{user.following}}</td>
          <td>{{user.follower}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'John Doe',
          at: 'heyjohn',
          avatar: '',
          tweets: 3,
          reply: '1.5k',
          like: '20k',
          following: 34,
          follower: 59
        },
        {
          id: 2,
          name: 'Robert Fox',
          at: '@robfox',
          avatar: '',
          tweets: 3,
          reply: '1.5k',
          like: '20k',
          following: 34,
          follower: 59
        },
        {
          id: 3,
          name: 'Leslie Alexander',
          at: 'lesAlex',
          avatar: '',
          tweets: 3,
          reply: '1.5k',
          like: '20k',
          following: 34,
          follower: 59
        },
        {
          id: 4,
          name: 'Arlene McCoy',
          at: 'alcoy',
          avatar: '',
          tweets: 3,
          reply: '1.5k',
          like: '20k',
          following: 34,
          follower: 59
        },
        {
          id: 5,
          name: 'John Doe',
          at: 'heyjohn',
          avatar: '',
          tweets: 3,
          reply: '1.5k',
          like: '20k',
          following: 34,
          follower: 59
        },
        {
          id: 6,
          name: 'Robert Fox',
          at: '@robfox',
          avatar: '',
          tweets: 3,
          reply: '1.5k',
          like: '20k',
          following: 34,
          follower: 59
        },
        {
          id: 7,
          name: 'Leslie Alexander',
          at: 'lesAlex',
          avatar: '',
          tweets: 3,
          reply: '1.5k',
          like: '20k',
          following: 34,
          follower: 59
        },
        {
          id: 8,
          name: 'Arlene McCoy',
          at: 'alcoy',
          avatar: '',
          tweets: 3,
          reply: '1.5k',
          like: '20k',
          following: 34,
          follower: 59
        },
        {
          id: 9,
          name: 'John Doe',
          at: 'heyjohn',
          avatar: '',
          tweets: 3,
          reply: '1.5k',
          like: '20k',
          following: 34,
          follower: 59
        },
        {
          id: 10,
          name: 'Robert Fox',
          at: '@robfox',
          avatar: '',
          tweets: 3,
          reply: '1.5k',
          like: '20k',
          following: 34,
          follower: 59
        },
        {
          id: 11,
          name: 'Leslie Alexander',
          at: 'lesAlex',
          avatar: '',
          tweets: 3,
          reply: '1.5k',
          like: '20k',
          following: 34,
          follower: 59
        },
        {
          id: 12,
          name: 'Arlene McCoy',
          at: 'alcoy',
          avatar: '',
          tweets: 3,
          reply: '1.5k',
          like: '20k',
          following: 34,
          follower: 59
        },
      ]
    }
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
</style>