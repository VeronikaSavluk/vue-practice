<template>
	<main class="login-page">
		<AuthSection>
			<LoginForm />
		</AuthSection>
	</main>
</template>

<script>
	import LoginForm from '../components/auth/login'
	import AuthSection from '@/components/auth/AuthSection.vue';
	
	export default {
		name: 'LoginPage',
		components: {
			AuthSection,
			LoginForm
		}
	}
</script>

<style lang="scss" scoped>

</style>