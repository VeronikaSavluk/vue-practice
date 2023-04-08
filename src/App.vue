<template>
  <div :id='$style.app'>
  <h1>{{title}}</h1>
  <BaseButton @click='increment' outlined>Click me</BaseButton>
  </div>
</template>

<script>
import BaseButton from './components/BaseButton.vue'

export default {
  name: 'App',
  components: {
    BaseButton
  },
  data(){
    return {
      amountOfClicks: 0
    }
  },
  computed: {
    title() {
      return `Amount of Clicks: ${this.amountOfClicks}`
    }
  },
  methods: {
  increment() {
  this.amountOfClicks += 1
  }
  }
}
</script>

<style module>
  #app {
  font-family: Avenir, Helvetica, Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
  margin-top: 60px;
  }
</style>
