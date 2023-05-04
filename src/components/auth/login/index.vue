<template>
	<AuthContainer class="login">
		<TheForm ref='form' @submit.prevent="handleSubmit" class="login__form">
			<CustomInput
				v-model="formData.email"
				@input="event => formData.email = event.target.value"
				name="email"
				placeholder="Email"
				:rules="emailRules"
				class="login__input"
			/>
			<CustomInput
				v-model="formData.password"
				@input="event => formData.password = event.target.value"
				type="password"
				name="password"
				placeholder="Password"
				:rules="passwordRules"
				class="login__input"
			/>
			<BaseButton
				type="submit"
				class="login__btn"
				:loading="loading"
			>
				Log in
			</BaseButton>
		</TheForm>
	</AuthContainer>
</template>

<script>
	import AuthContainer from '../AuthContainer.vue';
	import TheForm from '../../shared/form'
	import CustomInput from '../../shared/CustomInput.vue';
	import BaseButton from '../../BaseButton.vue';
	import { emailValidation, passwordValidation, isRequired } from '../../../utils/validationRules'

	export default {
		name: 'LoginForm',
		components: {
			AuthContainer,
			TheForm,
			CustomInput,
			BaseButton
},
		data(){
			return {
				loading: false,
				formData: {
					email: '',
					password: ''
				}
			};
		},
		emits: [ "submit" ],
		computed: {
			rules(){
				return {
					emailValidation,
					passwordValidation,
					isRequired
				};
			},
			emailRules() {
				return [this.rules.isRequired, this.rules.emailValidation]
			},
			passwordRules() {
				return [this.rules.isRequired, this.rules.passwordValidation]
			}
		},
		methods: {
			handleSubmit(){
				const { form } = this.$refs
				const isFormValid = form.validate();
				if(isFormValid) {
				form.reset();
				return this.$emit('submit', this.formData)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login {
  &__form {
    display: block;
    flex-direction: column;
  }
  &__title {
    text-align: center;
  }
  &__input {
    margin-bottom: 20px;
    width: 100%;
  }
  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>