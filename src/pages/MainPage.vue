<template>
   <div class="wrapper">
      <h1 class="title">Can you guess what breed of dog it is?</h1>
      <DogPicture />
      <DogOptions />
   </div>
</template>
<script>
import DogPicture from '../components/DogPicture.vue'
import DogOptions from '../components/DogOptions.vue'
import getDogs from '../helpers/getDogs'
getDogs()
export default {
   components: {
      DogPicture,
      DogOptions,
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
