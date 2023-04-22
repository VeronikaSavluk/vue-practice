<template>
	<form @submit.prevent="handleSubmit" class="form">
		<CustomSelect
			class="form__select"
			:items="cities"
			v-model="city"
		/>
    <CustomInput
			v-model="price"
			placeholder='Price, to'
		/>
		<p>{{ city }}</p>
		<SubmitButton type='submit' class="form__submit">
			Apartment selection
		</SubmitButton>
	</form>
</template>

<script>
	import CustomInput from '../shared/CustomInput.vue'
	import CustomSelect from '../shared/CustomSelect.vue'
	import SubmitButton from '../BaseButton.vue'

	export default {
		name: 'ApartmentFilterForm',
		components: {
			CustomInput,
			CustomSelect,
			SubmitButton
		},
		emits: [ "submit" ],
		computed: {
			cities() {
				return [{ value: "", label: "All cities", selected: true}, "Kyiv", "Odesa", "Poltava", "Kharkiv", "Dnipro", "Lviv", "Kherson", "Mariupol"]
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