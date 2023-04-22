<template>
	<select class='custom-select' v-model='city'>
	<option
		v-for="item in formatedItems"
		:key="item.value"
		:value="item.value"
		:selected="item.selected"
	>
	{{ item.label }}
	</option>
	</select>
</template>

<script>
	export default {
		name: 'CustomSelect',
		props: {
			items: {
				type: Array,
				required: true
			}
		},
		data() {
			return {
				city: ""
			}
		},
		computed: {
			formatedItems() {
				return this.items.map(item => {
					return typeof item === "object"
						? item
						: { value: item, label: item }
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

	.custom-select {
  height: 40px;
	max-width: 220px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  padding: 8px 15px;
  cursor: pointer;
  display: inline-block;

	&::placeholder {
		color: inherit;
	}
}
</style>