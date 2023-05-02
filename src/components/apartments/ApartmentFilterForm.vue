<template>
	<form @submit.prevent="handleSubmit" class="form">
		<CustomSelect
			class="form__select"
			:items="cities"
			v-model="city"
		/>
    <CustomInput
			v-model="price"
			@input="event => price = event.target.value"
			placeholder='Price, to'
			error-message="Mustn't be empty"
			:rules="rules"
		/>
		<SubmitButton type='submit' class="form__submit">
			Apartment selection
		</SubmitButton>
	</form>
</template>

<script>
	import CustomInput from '../shared/CustomInput.vue'
	import CustomSelect from '../shared/CustomSelect.vue'
	import SubmitButton from '../BaseButton.vue'
	import { isRequired, charLimit } from '../../utils/validationRules'
	
	export default {
		name: 'ApartmentFilterForm',
		components: {
			CustomInput,
			CustomSelect,
			SubmitButton
		},
		data() {
			return {
				price: 0,
				city: ''
			};
		},
		emits: [ "submit" ],
		computed: {
			rules(){
				return [ isRequired, charLimit(10) ];
			},
			cities() {
				return [
					{ value: "", label: "All cities", selected: true},
					"Kyiv",
					"Odesa",
					"Poltava",
					"Kharkiv",
					"Dnipro",
					"Lviv",
					"Kherson",
					"Mariupol"
				]
			}
		},
		methods: {
			handleSubmit(){
				return this.$emit('submit', {
				city: this.city,
				price: this.price
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>