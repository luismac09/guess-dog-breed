<template>
   <ul class="list">
      <li class="list__item">
         <button type="button" class="button button--palegreen">Bulldog</button>
      </li>
      <li class="list__item">
         <button type="button" class="button button--ghost">Chihuahua</button>
      </li>
      <li class="list__item">
         <button type="button" class="button button--lightred">
            Golden Retriever
         </button>
      </li>
      <li class="list__item">
         <button type="button" class="button button--darkblue">
            Schipperke
         </button>
      </li>
   </ul>
</template>
<script>
export default {}
</script>
<style>
.list {
   list-style: none;
   padding-left: 0;
}
.list__item {
   margin-bottom: 1em;
}
.button {
   width: 100%;
   max-width: 350px;
   border: none;
   padding: 1em 3em;
   border-radius: 1em;
   color: var(--darkblue);
   font-size: 1.2em;
   background-color: transparent;
}
.button--palegreen {
   background-color: var(--palegreen);
}
.button--ghost {
   outline: 2px solid var(--darkblue);
}
.button--lightred {
   background-color: var(--lightred);
}
.button--darkblue {
   background-color: var(--darkblue);
   color: var(--palegreen);
}
.button .button:active {
   outline: 2px solid var(--palegreen);
}

@media (hover: hover) {
   .button:hover {
      cursor: pointer;
      opacity: 70%;
   }
}
</style>
