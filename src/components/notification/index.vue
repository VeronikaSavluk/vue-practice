<template>
	<div>
		<notifications classes="vue-notification" />
	</div>
</template>

<script>
	export default {
		name: 'TheNotifications'
	}
</script>

<style lang="scss" scoped>
	::v-deep .vue-notification {
  // styling
  margin: 0 5px 5px;
  padding: 10px;
  color: #ffffff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;

	.notification-title {
    font-size: 16px;
		line-height: 1.3;
  }

  // style for content
  .notification-content {
    /*...*/
  }
  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }
}
</style>