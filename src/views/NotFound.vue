<template>
  <the-nav></the-nav>
  <body>
    <div class="container">
      <h2>Not found</h2>
      <h4 class="italic">Get back here!</h4>
    </div>
  </body>
</template>

<script>
import TheNav from "../components/TheNav.vue";
export default {
  components: { TheNav },
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.italic {font-style: italic;}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>