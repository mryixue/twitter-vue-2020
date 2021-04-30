<template>
</template>

<script>
export default {
  created(){
    this.sendMessage()
  },
  methods: {
    sendMessage() {
      this.$socket.emit("hello", "取得客戶端")
      console.log('成功發送')
    }
  },
}
</script>
