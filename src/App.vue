<template>
  <router-view name="default"></router-view>
  <router-view name="footer"></router-view>
</template>

<script>
import M from 'materialize-css';
export default {
  name: "App",
  components: {},
  mounted() {
    console.log('Mounting the App');
    M.AutoInit();
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
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
