<template>
	<article class="apartment-info">
		<div class="apartment-info__heading">
			<h2 class="apartment-info__title">{{ apartment.title }}</h2>
			<StarRating :rating='apartment.rating'/>
		</div>
		<img :src="apartment.imageUrl" alt="" class="apartment-info__photo" />
		<p class="apartment-info__description">{{ apartment.descr }}</p>
	</article>
</template>

<script>
	import StarRating from '@/components/StarRating.vue';

	export default {
		name: 'ApartmentInfo',
		components: {
			StarRating
		},
		props: {
			apartment: {
				type: Object,
				required: true
			}
		},
	}
</script>

<style lang="scss" scoped>
	.apartment-info {
  &__heading {
    display: flex;
  }
  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 20px;
    margin-right: 20px;
  }
  &__photo {
    width: 730px;
  }
  &__description {
    line-height: 1.3;
    margin-top: 30px;
  }
}
</style>