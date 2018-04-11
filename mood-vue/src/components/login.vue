<template>
	<div class="homepage">
		<div class="video-container">
			<div :style="fixStyle" class="filter"></div>
				<video :style="fixStyle" autoplay loop class="fillWidth" v-on:canplay="canplay">
					<source src="../common/image/bgvideo.mp4" type="video/mp4">
					浏览器不支持 video 标签，建议升级浏览器。
					<!-- <source src="" type="video/webm">
					浏览器不支持 video 标签，建议升级浏览器。 -->
				</video>
				<div class="poster hidden" v-if="!videoCanPlay">
					<img src="../common/image/bg.jpeg" alt="" :style="fixStyle">
				</div>
				<div class="box">
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				videoCanPlay: false,
				fixStyle: ''
			}
		},
		methods: {
			canplay() {
				this.videoCanPlay = true
			}
		},
		mounted() {
			window.onresize = () => {
		        const windowWidth = document.body.clientWidth
		        const windowHeight = document.body.clientHeight
		        const windowAspectRatio = windowHeight / windowWidth
		        let videoWidth
		        let videoHeight
		        if (windowAspectRatio < 0.5625) {
		          videoWidth = windowWidth
		          videoHeight = videoWidth * 0.5625
		          this.fixStyle = {
		            height: windowWidth * 0.5625 + 'px',
		            width: windowWidth + 'px',
		            'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
		            'margin-left': 'initial'
		          }
		        } else {
		          videoHeight = windowHeight
		          videoWidth = videoHeight / 0.5625
		          this.fixStyle = {
		            height: windowHeight + 'px',
		            width: windowHeight / 0.5625 + 'px',
		            'margin-left': (windowWidth - videoWidth) / 2 + 'px',
		            'margin-bottom': 'initial'
		          }
		        }
	      }
	      window.onresize()
		}
	}
</script>
<style scoped>
	.homepage, .video-container {
		position: relative;
		/*相对于视口的高度。视口被均分为100单位的vh*/
		height: 100vh; 
		overflow: hidden;
	}
	.video-container .poster img,
	.video-container video {
		z-index: 0;
		position: absolute;
	}
	.video-container .filter {
		z-index: 1;
		position: absolute;
		background: rgba(0, 0, 0, 0.4);
	}
	.box {
		width: 400px;
	    height: 400px;
	    margin: auto;
	    left: 0;
	    right: 0;
	    top: 0;
	    bottom: 0;
	    background: red;
	    position: absolute;
	}
</style>