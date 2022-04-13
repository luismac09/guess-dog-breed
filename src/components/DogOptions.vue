<template>
	<div class="container">
		<ul class="list">
			<li v-for="(dog, index) in dogs" :key="dog.id" class="list__item">
				<span class="number">{{ index + 1 }}</span
				><button
					type="button"
					class="button"
					@click="$emit('selection', dog.img)"
				>
					{{ dog.name }}
				</button>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	props: {
		dogs: {
			type: Array,
			required: true
		}
	},
	emits: ['selection']
}
</script>
<style scoped>
.container {
	max-width: 350px;
	margin-left: auto;
	margin-right: auto;
}
.list {
	list-style: none;
	padding-left: 0;
	margin-bottom: 2em;
}
.list__item {
	position: relative;
	margin-bottom: 1em;
}
.number {
	position: absolute;
	z-index: 10;
	top: 0;
	left: 0;
	width: 50px;
	height: 48px;
	border-radius: 2em;
	color: var(--palered);
	background-color: var(--darkblue);
	font-size: 1.3em;
	display: flex;
	align-items: center;
	justify-content: center;
}
.button {
	width: 100%;
	border: none;
	padding: 1em 3em;
	border-radius: 2em;
	color: var(--darkblue);
	font-family: var(--primaryfont);
	font-size: 1.15em;
	font-weight: 500;
	background-color: var(--palered);
	border: 2px solid var(--darkblue);
}
.button--lightred {
	background-color: var(--lightred);
}
.button--lightgreen {
	background-color: var(--lightgreen);
}

.button:active {
	outline: 2px solid var(--palegreen);
}

@media (hover: hover) {
	.button:hover {
		cursor: pointer;
		opacity: 80%;
		background-color: var(--lightblue);
	}
}
</style>
