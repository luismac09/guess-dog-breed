<template>
	<div class="wrapper">
		<div v-if="!dogUrl" class="spinner"></div>
		<div v-else>
			<h1 class="title">Can you guess what breed of dog it is?</h1>
			<DogPicture :dog="dogUrl" />
			<DogOptions :dogs="dogs" @selection="checkAnswer($event)" />

			<div class="box">
				<p class="message">{{ message }}</p>
				<div class="box__item">
					<button
						v-if="showButton"
						type="button"
						class="button button--continue button--theme button--text"
						@click="continueGame()"
					>
						Continue
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import DogOptions from '@/components/DogOptions.vue'
import DogPicture from '@/components/DogPicture.vue'
import getDogs from '@/helpers/getDogs'

export default {
	components: {
		DogPicture,
		DogOptions
	},
	data() {
		return {
			dogs: [],
			dogUrl: null,
			dogName: null,
			showAnswer: false,
			showButton: false,
			message: '',
			activeColor: null
		}
	},
	mounted() {
		this.mixDogs()
	},
	methods: {
		async mixDogs() {
			this.dogs = await getDogs()
			const randomPosition = Math.floor(Math.random() * 4)
			this.dogUrl = this.dogs[randomPosition].img.url
			this.dogName = this.dogs[randomPosition].name
		},
		checkAnswer(selectedDog) {
			this.showAnswer = true
			if (this.dogUrl.indexOf(selectedDog.id) > -1) {
				this.message = `Correcto , es ${this.dogName} `
				this.showButton = true
			} else {
				this.message = `Incorrecto, era ${this.dogName}`
			}
		},
		continueGame() {
			this.dogs = []
			this.dogUrl = null
			this.showAnswer = false
			this.message = ''
			this.showButton = false
			this.mixDogs()
		}
	}
}
</script>
<style scoped>
.wrapper {
	width: 90%;
	max-width: 1200px;
	margin-right: auto;
	margin-left: auto;
}
@media screen and (min-width: 1024px) {
	.wrapper {
		margin-top: 6em;
	}
}
.title {
	font-size: 1.8em;
	text-align: center;
}
.box {
	max-width: 250px;
	margin-left: auto;
	margin-right: auto;
}
.box__item {
	margin-bottom: 1em;
	font-size: 1.1em;
}
.message {
	font-size: 1.2rem;
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
.button--theme {
	color: var(--darkblue);
	background-color: var(--palered);
}
.button--text {
	text-transform: uppercase;
}
@media (hover: hover) {
	.button--theme:hover {
		cursor: pointer;
		background-color: var(--darkblue);
		color: var(--palered);
	}
}
.spinner {
	margin: 18em auto 0;
	border: 4px solid rgba(201, 138, 122, 0.1);
	border-left-color: rgb(255, 81, 0);
	border-radius: 50%;
	width: 36px;
	height: 36px;
	animation: spin 1s linear infinite;
}
@keyframes spin {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>
