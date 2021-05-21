<template>
  <router-view name="default"></router-view>
</template>

<script>
import M from 'materialize-css';
export default {
  name: "App",
  components: {},
  mounted() {
    M.AutoInit();
  }
};
</script>

<style>
/* imported font families here */
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,700;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Quicksand:wght@300&display=swap');
@import url('./css/variables.css');

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: var(--ff-primary);
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 600;
  font-family: var(--ff-accent);
  color: var(--clr-primary-blue);
}


</style>
