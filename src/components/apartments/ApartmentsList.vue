<template>
	<TheContainer>
		<div class="apartments-list">
			<ApartmentsItem
				v-for='{ id, descr, rating, imageUrl, price} in items'
				:key='id'
				:descr='descr'
				:rating='rating'
				:imageUrl='imageUrl'
				:price='price'
			/>
		</div>
	</TheContainer>
</template>

<script>
	import ApartmentsItem from './ApartmentsItem.vue'
	import TheContainer from '../shared/TheContainer.vue'

	export default {
		name: 'ApartmentsList',
		components: {
			ApartmentsItem,
			TheContainer,
		},
		props: {
			items: {
				type: Array,
				default: () => []
			}
		}
	}
</script>

<style lang="scss" scoped>
	.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
</style>