<template>
	<AuthContainer class="register">
		<TheForm ref='form' @submit.prevent="handleSubmit" class="register__form">
			<CustomInput
				v-model="formData.name"
				@input="event => formData.name = event.target.value"
				name="name"
				placeholder="Name"
				:rules="nameRules"
				class="register__input"
			/>
			<CustomInput
				v-model="formData.email"
				@input="event => formData.email = event.target.value"
				name="email"
				placeholder="Email"
				:rules="emailRules"
				class="register__input"
			/>
			<CustomInput
				v-model="formData.password"
				@input="event => formData.password = event.target.value"
				type="password"
				name="password"
				placeholder="Password"
				:rules="passwordRules"
				class="register__input"
			/>
			<CustomInput
				v-model="formData.confirmPassword"
				@input="event => formData.confirmPassword = event.target.value"
				type="password"
				name="confirmPassword"
				placeholder="Confirm password"
				:rules="confirmPasswordRules"
				class="register__input"
			/>
			<BaseButton
				type="submit"
				class="register__btn"
				:loading="loading"
			>
				Register
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
		name: 'RegisterForm',
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
					name: '',
					email: '',
					password: '',
					confirmPassword: ''
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
			nameRules() {
				return [this.rules.isRequired]
			},
			emailRules() {
				return [this.rules.isRequired, this.rules.emailValidation]
			},
			passwordRules() {
				return [this.rules.isRequired, this.rules.passwordValidation]
			},
			confirmPasswordRules() {
				return [
					(val) => ({
						hasPassed: val === this.formData.password,
						message: `Passwords don't match`
					})
				];
			}
		},
		methods: {
			handleSubmit(){
				const { form } = this.$refs;
				const isFormValid = form.validate();
				const { name, email, password } = this.formData;
				
				if(isFormValid) {
					form.reset();
					return this.$emit('submit', {name, email, password})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.register {
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