<template>
    <main class="home">
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
              :id='apartment.id'
              :descr='apartment.descr'
              :rating='apartment.rating'
              :imageUrl='apartment.imageUrl'
              :price='apartment.price'
            />
          </template>
        </ApartmentsList>
      </TheContainer>
    </main>
</template>

<script>
import apartments from '../components/apartments/apartments.js'
import ApartmentsList from '../components/apartments/ApartmentsList.vue'
import ApartmentsItem from '../components/apartments/ApartmentsItem.vue'
import ApartmentFilterForm from '../components/apartments/ApartmentFilterForm.vue'
import TheContainer from '../components/shared/TheContainer.vue'

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
    TheContainer,
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
      this.filters.city = city,
      this.filters.price = price
    },
    filterByCityName(apartments) {
      if(!this.filters.city) return apartments;
      
      return apartments.filter(apartment => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if(!this.filters.price) return apartments;
      
      return apartments.filter(apartment => {
        return apartment.price <= this.filters.price;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .apartments-filter {
    margin-bottom: 40px;
  }
</style>