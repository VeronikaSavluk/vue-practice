<template>
  <div id='app'>
    <TheNotifications />
    <TheHeader />
    <div class='content'>
      <router-view></router-view>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from './components/header'
import TheFooter from './components/shared/TheFooter.vue'
import TheNotifications from './components/notification'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    TheNotifications
  },
  mounted() {
    this.$notify({
      title: "Important message",
      text: "Hello user!",
    });
  }
}
</script>

<style lang="scss" scoped>
  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    font-family: Montserrat, Helvetica, Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .content {
    flex-grow: 1;
  }
</style>
