<template>
  <router-view name="default"></router-view>
  <!-- <router-view name="footer"></router-view> -->
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

* {
  margin: 0;
  padding: 0;
  font-family: 'Merriweather', serif;
}

body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
</style>
