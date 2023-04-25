<template>
  <div :id='app'>
    <TheHeader />
    <main>
      <TheContainer>
        <h1>Selection apartments</h1>
        <ApartmentFilterForm
          @submit="filter"
          class="apartments-filter"
        />
        <p v-if="!filteredApartments.length">Nothing is selected</p>
        <ApartmentsList v-else :items='filteredApartments'>
          <template v-slot:apartment="{ apartment }">
            <ApartmentsItem
              :key='apartment.id'
              :descr='apartment.descr'
              :rating='apartment.rating'
              :imageUrl='apartment.imageUrl'
              :price='apartment.price'
            />
          </template>
        </ApartmentsList>
      </TheContainer>
    </main>
    <TheFooter/>
  </div>
</template>

<script>
import apartments from './components/apartments/apartments.js'
import TheHeader from './components/shared/TheHeader.vue'
import ApartmentsList from './components/apartments/ApartmentsList.vue'
import ApartmentsItem from './components/apartments/ApartmentsItem.vue'
import ApartmentFilterForm from './components/apartments/ApartmentFilterForm.vue'
import TheContainer from './components/shared/TheContainer.vue'
import TheFooter from './components/shared/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
    TheContainer,
    TheFooter
  },
  data(){
    return {
      apartments,
      filters: {
        city: '',
        price: 0
      }
    }
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments))
    }
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city
      this.filters.price = price
    },
    filterByCityName(apartments) {
      if(!this.filters.city) return apartments
      return apartments.filter(apartment => {
        return apartment.location.city === this.filters.city
      })
    },
    filterByPrice(apartments) {
      if(!this.filters.price) return apartments
      return apartments.filter(apartment => {
        return apartment.price <= this.filters.price
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  #app {
  font-family: Montserrat, Helvetica, Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
  margin-top: 60px;
  }

  .apartments-filter {
    margin-bottom: 40px;
  }
</style>
