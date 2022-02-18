<template>
   <div class="container">
      <ul class="list">
         <li class="list__item">
            <span class="number">1</span
            ><button type="button" class="button button--lightgreen">
               Bulldog
            </button>
         </li>
         <li class="list__item">
            <span class="number">2</span
            ><button type="button" class="button">Chihuahua</button>
         </li>
         <li class="list__item">
            <span class="number">3</span
            ><button type="button" class="button button--lightred">
               Golden Retriever
            </button>
         </li>
         <li class="list__item">
            <span class="number">4</span
            ><button type="button" class="button">Schipperke</button>
         </li>
      </ul>
      <div class="box">
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
export default {}
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
   max-width: 350px;
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
.button--theme {
   background-color: var(--darkblue);
   color: var(--palered);
}
.button--text {
   text-transform: uppercase;
}
.button:active {
   outline: 2px solid var(--palegreen);
}

@media (hover: hover) {
   .button:hover {
      cursor: pointer;
      opacity: 70%;
   }
}

.box {
   width: 250px;
   margin-left: auto;
   margin-right: auto;
}
.box__item {
   margin-bottom: 1em;
   font-size: 1.1em;
}
</style>
