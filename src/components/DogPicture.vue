<template>
	<div class="container-image">
		<img class="image" :src="imgSrc" alt="dog" />
	</div>
</template>
<script>
export default {
	props: {
		dog: {
			type: String,
			required: true
		}
	},
	computed: {
		imgSrc() {
			return this.dog
		}
	}
}
</script>
<style scoped>
.container-image {
	max-width: 350px;
	height: 250px;
	margin-left: auto;
	margin-right: auto;
}
.image {
	display: block;
	width: 100%;
	height: 100%;
	border-radius: 1em;
	filter: opacity(80%);
	object-fit: cover;
}
</style>
