<template>
	<header class='header'>
		<TheContainer>
			<div class="header__content">
			<router-link :to="{name: 'home'}" >
				<TheLogo />
			</router-link>
			<AuthActions />
			<AccountActions />
			</div>
		</TheContainer>
	</header>
</template>

<script>
	import TheContainer from '../shared/TheContainer.vue'
	import TheLogo from '../TheLogo.vue'
	import AuthActions from './AuthActions.vue'
	import AccountActions from './AccountActions.vue'

	export default {
		name: 'TheHeader',
		components: {
			TheContainer,
			TheLogo,
			AuthActions,
			AccountActions
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/variables.scss';

	.header {
		height: 60px;
		background-color: $main-background-color;

		&__content {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>