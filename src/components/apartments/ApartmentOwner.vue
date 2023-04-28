<template>
	<section class="apartment-owner">
		<h3 class="apartment-owner__title">Owner contacts</h3>
		<p class="apartment-owner__info">{{ owner.name }}</p>
		<p class="apartment-owner__info">tel: {{ owner.phone }}</p>
		<p class="apartment-owner__info">email: {{ owner.email }}</p>
	</section>
</template>

<script>
	export default {
		name:'ApartmentOwner',
		props: {
			owner: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

	.apartment-owner {
  padding: 20px;
  background: $card-bg;
  font-weight: 400;
  &__title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  &__info {
    margin-top: 6px;
  }
}
</style>