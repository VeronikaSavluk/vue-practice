<template>
	<main class="registration-page">
		<AuthSection>
			<RegistrationForm />
		</AuthSection>
	</main>
</template>

<script>
	import RegistrationForm from '../components/auth/register'
	import AuthSection from '@/components/auth/AuthSection.vue';
	
	export default {
		name: 'RegistrationPage',
		components: {
			AuthSection,
			RegistrationForm
		}
	}
</script>

<style lang="scss" scoped>

</style>