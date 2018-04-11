<template>
	<div @click="request()">click</div>
</template>
<script type="text/javascript">
	export default {
		methods: {
			request() {
				this.$http.get('/train/querytrainstationlist')
				  .then(function (response) {
				    console.log(response);
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
			}
		}
	}
</script>