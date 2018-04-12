<template>
	<div @click="request()">click</div>
</template>
<script type="text/javascript">
// import { Loading } from "element-ui";
	export default {
		methods: {
			request() {
				this.$loading({
					fullscreen: true
				})
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