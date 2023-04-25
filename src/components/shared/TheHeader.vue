<template>
	<header class='header'>
		<TheContainer>
			<TheLogo />
		</TheContainer>
	</header>
</template>

<script>
	import TheContainer from './TheContainer'
	import TheLogo from '../TheLogo.vue'

	export default {
		name: 'TheHeader',
		components: {
			TheContainer,
			TheLogo
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/variables.scss';

	.header {
		height: 60px;
		background-color: $main-background-color;
	}
</style>