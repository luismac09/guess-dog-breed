<template>
   <div class="wrapper" v-if="dogUrl">
      <h1 class="title">Can you guess what breed of dog it is?</h1>
      <DogPicture :dog="dogUrl" />
      <DogOptions :dogs="dogList" />
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
         dogList: [],
         dogUrl: null,
      }
   },
   methods: {
      async mixDogs() {
         this.dogList = await getDogs()
         const randomPosition = Math.floor(Math.random() * 4)
         this.dogUrl = this.dogList[randomPosition].url
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
</style>
