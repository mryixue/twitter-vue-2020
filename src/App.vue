<template>
  <router-view/>
</template>

<script>
export default {
  created() {
    this.$router.push('/login')
  },
}
</script>
