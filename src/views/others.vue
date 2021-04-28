<template>
</template>

<script>
export default {
  created () {
    const { id: userId } = this.$route.params
    this.$router.push('/users/' + userId)
  },
}
</script>
