<template>
  <div id="mainMidnew">
    <h1 class="title">首頁</h1>
    <form @submit.prevent.stop="handleSubmit">
      <textarea
        v-model="description"
        placeholder="有什麼新鮮事？"
      >
      </textarea>
      <button
          type="submit"
          class="button"
          :disabled="isProcessing"
          :class="{isProcessing}"
        >推文</button>
    </form>
  </div>
</template>

<script>
import tweetsAPI from './../apis/tweets'
import { Toast } from './../utils/helpers'

export default {
  data () {
    return {
      description: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit () {
      try {
        if (!this.description) {
          Toast.fire({
            icon: 'warning',
            title: '您尚未填寫任何文字'
          })
          return
        }
        this.isProcessing = true

        const { data } = await tweetsAPI.create({
          description: this.description
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: '新增推文成功'
        })
        this.isProcessing = false
        this.description = ''
      } catch (error) {
        this.isProcessing = false

        Toast.fire({
          icon: 'error',
          title: '推文內容不能超過140字'
        })
        console.error(error.message)
      }
    }
  }

}
</script>

<style lang="sass">
$font-color: rgba(#b0d7f6, .8)
#mainMidnew
  padding: 10px
  h1
    font-size: 24px
  form
    position: relative
    textarea
      resize: none
      width: 100%
      height: 13vh
      font-size: 20px
      margin:
        top: 10px
      padding: 5px 10px
      border-radius: 10px
    button
      position: absolute
      right: 10px
      bottom: 10px
      background:
        color: $font_color
      width: 60px
      height: 30px
      font-size: 16px
      text-align: center
      border-radius: 15px
      margin:
        top: 20px
      &:hover
        cursor: pointer
    .isProcessing:hover
      cursor: default
</style>
