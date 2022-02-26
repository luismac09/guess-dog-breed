<template>
   <div class="wrapper" v-if="dogUrl">
      <h1 class="title">Can you guess what breed of dog it is?</h1>
      <DogPicture :dog="dogUrl" />
      <DogOptions :dogs="dogs" @selection="checkAnswer($event)" />

      <div class="box" v-if="showAnswer">
         <p class="message">{{ message }}</p>
         <div class="box__item">
            <button
               type="button"
               class="button button--reset button--theme button--text"
            >
               reboot
            </button>
         </div>
         <div class="box__item">
            <button
               type="button"
               class="button button--continue button--theme button--text"
            >
               Continue
            </button>
         </div>
      </div>
   </div>
</template>
<script>
import DogPicture from '@/components/DogPicture.vue'
import DogOptions from '@/components/DogOptions.vue'
import getDogs from '@/helpers/getDogs'

export default {
   components: {
      DogPicture,
      DogOptions,
   },
   data() {
      return {
         dogs: [],
         dogUrl: null,
         showAnswer: false,
         message: '',
      }
   },
   methods: {
      async mixDogs() {
         this.dogs = await getDogs()
         const randomPosition = Math.floor(Math.random() * 4)
         this.dogUrl = this.dogs[randomPosition].img.url
      },
      checkAnswer(selectedDog) {
         this.showAnswer = true
         if (this.dogUrl.indexOf(selectedDog.id) > -1) {
            this.message = `Correcto `
         } else {
            this.message = `Incorrecto`
         }
      },
   },
   mounted() {
      this.mixDogs()
   },
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
   font-size: 1.5rem;
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
      background-color: var(--darkblue);
      color: var(--palered);
   }
}
</style>
