<template>
  <div :id='app'>
    <TheHeader />
    <div class='content'>
      <router-view></router-view>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from './components/shared/TheHeader.vue'
import TheFooter from './components/shared/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss" scoped>
  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-family: Montserrat, Helvetica, Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .content {
    flex-grow: 1;
  }
</style>
