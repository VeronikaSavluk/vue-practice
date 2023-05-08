<template>
	<div class="auth-actions">
		<router-link
			class="auth-actions__link"
			:to="{ name: 'login-page'}"
		>
			Sign in
		</router-link>
		/
		<router-link
			class="auth-actions__link"
			:to="{ name: 'registration-page'}"
		>
			Register
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'AuthActions'
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/variables.scss';

	.auth-actions {
		color: #ffffff;

		&__link {
			color: inherit;
			text-decoration: none;
			transition: color 0.35s;

			&:hover {
				color: $main-color;
			}
		}
	}
</style>