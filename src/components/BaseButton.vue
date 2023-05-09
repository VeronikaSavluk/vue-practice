<template>
	<button
		v-bind:type="type"
		:class="{ btn: true, 'btn--outlined': outlined }"
		:disabled="loading"
	>
		<Loader
			v-if="loading"
			width="36"
			height="36"
			class="btn__loader"
		/>
		<span
			class="btn__content"
			:class="contentStyle"
		>
			<slot></slot>
		</span>
	</button>
</template>

<script >
	import Loader from '../components/loaders/Circle.vue'

	export default {
		name: 'BaseButton',
		components: {
			Loader
		},
		props: {
			type: {
				type: String,
				default: 'button'
			},
			outlined: {
			type: Boolean,
			default: false
			},
			loading: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			contentStyle(){
				return {
					'btn__content--hidden': this.loading
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.btn {
		position: relative;
    display: inline-block;
    font-size: 18px;
    background: #FF662D;
    color: #FFF;
    cursor: pointer;
    min-width: 220px;
    border: 1px solid transparent;
    padding: 8px 18px;
		transition: background-color 0.35s, color 0.35s;
		font-family: Montserrat, sans-serif;
		
		&:hover {
    background: #fff;
    color: #ff662d;
    border: 1px solid #ff662d;
		}

    &--outlined {
    background: none;
    border: 1px solid #FF662D;
    color: #FF662D;
    }
		&__content {
			&--hidden {
				opacity: 0;
			}
		}
		&__loader{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
  }
</style>