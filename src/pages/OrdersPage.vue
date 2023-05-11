<template>
	<main class="orders-page">
		<TheContainer>
			<section class="orders-page__content">
				<h2>Orders</h2>
				<OrdersList :items="orders"/>
			</section>
		</TheContainer>
	</main>
</template>

<script>
	import TheContainer from '@/components/shared/TheContainer.vue';
	import OrdersList from '@/components/orders/OrdersList.vue';
	
	export default {
		name:'OrdersPage',
		components: {
			TheContainer,
			OrdersList
		},
		data() {
			return {
				orders: []
			}
		}
	}
</script>

<style lang="scss" scoped>
	.orders-page {
  &__content {
    max-width: 730px;
    margin: 0 auto 100px;
  }
}
</style>