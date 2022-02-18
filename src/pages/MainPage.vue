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
   text-align: center;
}
.title {
   font-size: 1.8em;
}
</style>
