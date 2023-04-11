<template>
  <div :id='$style.app'>
  <h1>{{ title }}</h1>
  <BaseButton @click='increment' outlined>Click me</BaseButton>
  <ApartmentsList :items='apartments'/>
  </div>
</template>

<script>
import BaseButton from './components/BaseButton.vue'
import apartments from './components/apartments/apartments.js'
import ApartmentsList from './components/apartments/ApartmentsList.vue'

export default {
  name: 'App',
  components: {
    BaseButton,
    ApartmentsList,
  },
  data(){
    return {
      apartments,
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
  font-family: Montserrat, Helvetica, Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
  margin-top: 60px;
  }
</style>
