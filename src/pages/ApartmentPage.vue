<template>
	<main class='apartment-page'>
		<TheContainer>
			<div class='apartment-page__content'>
			<ApartmentInfo :apartment="apartment" />
			<div class="apartment-page__additional-info">
				<ApartmentOwner
					:owner="apartment.owner"
					class='apartment-page__owner'
				/>
				<TheReview :reviews="reviewsList"/>
			</div>
		</div>
		</TheContainer>
	</main>
</template>

<script>
	import ApartmentInfo from '@/components/apartments/ApartmentInfo.vue';
	import ApartmentOwner from '@/components/apartments/ApartmentOwner.vue';
	import TheContainer from '@/components/shared/TheContainer.vue';
	import apartments from '@/components/apartments/apartments';
	import TheReview from '../components/reviews';
	import reviewsList from '../components/reviews/reviews.json';

	export default {
		name: 'ApartmentPage',
		components: {
			ApartmentInfo,
			ApartmentOwner,
			TheContainer,
			TheReview
		},
		computed: {
			reviewsList(){
				return reviewsList
			},
			apartment(){
				return apartments.find(apartment => 
				apartment.id === this.$route.params.id
			)}
		},
		mounted() {
			console.log(this.apartment)
		}
	}
</script>

<style lang="scss" scoped>
	.apartment-page {
		padding-top: 60px;
		padding-bottom: 55px;
		&__content {
			display: flex;
			align-items: flex-start;
		}
		&__additional-info {
			margin-left: 30px;
			max-width: 350px;
			flex-grow: 0;
			flex-shrink: 1;
		}
	}
</style>