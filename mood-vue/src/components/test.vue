<template>
	<div @click="request()">click</div>
</template>
<script type="text/javascript">
	export default {
		methods: {
			request() {
				this.$loading({
					fullscreen: true
				})
				// this.$http.get('/train/querytrainstationlist')
				//   .then(function (response) {
				//     console.log(response);
				//   })
				//   .catch(function (error) {
				//     console.log(error);
				//   });
				this.$http.post('https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode', {
					access_token: '8_muoNsr8LDe2JXEOvbpVcw-ZzqhrVhj0IOZ7wuFHVazyf5amssKqvhaCqAGv8Te9P4fFGO22X1Fjv-FtiaLn8CBqihmaJYlAq0eKpUUw5jD_U5Gsgme9e-A0D91AHCSaAEAWRH',
				    path: '/pages/activity/activityShare/activityShare'
				  })
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