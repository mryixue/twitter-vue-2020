<template>
  <div id="mainMidnew">
    <h1 class="title">首頁</h1>
    <form>
      <textarea
        v-model="newtweet"
        placeholder="有什麼新鮮事？">
      </textarea>
      <button type="submit">推文</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newtweet: ''
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
</style>