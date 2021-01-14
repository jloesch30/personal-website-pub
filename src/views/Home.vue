<template>
  <div>
    <the-nav></the-nav>
  </div>
  <div class="parallax-container">
    <div class="parallax">
      <img src="../assets/imgs/friends.jpg" />
    </div>
  </div>
  <div class="section white">
    <div class="row container">
      <h2 class="header">Parallax</h2>
      <p class="grey-text text-darken-3 lighten-3">
        Parallax is an effect where the background content or image in this
        case, is moved at a different speed than the foreground content while
        scrolling.Parallax is an effect where the background content or image in
        this case, is moved at a different speed than the foreground content
        while scrolling.Parallax is an effect where the background content or
        image in this case, is moved at a different speed than the foreground
        content while scrolling.Parallax is an effect where the background
        content or image in this case, is moved at a different speed than the
        foreground content while scrolling.
      </p>
    </div>
  </div>
  <div class="parallax-container">
    <div class="parallax">
      <img src="../assets/imgs/camera.jpg" />
    </div>
  </div>
  <div class="section white">
    <div class="row container">
      <h2 class="header">Parallax</h2>
      <p class="grey-text text-darken-3 lighten-3">
        Parallax is an effect where the background content or image in this
        case, is moved at a different speed than the foreground content while
        scrolling.Parallax is an effect where the background content or image in
        this case, is moved at a different speed than the foreground content
        while scrolling.Parallax is an effect where the background content or
        image in this case, is moved at a different speed than the foreground
        content while scrolling.Parallax is an effect where the background
        content or image in this case, is moved at a different speed than the
        foreground content while scrolling.
      </p>
    </div>
  </div>
</template>

<script>
import TheNav from "@/components/TheNav.vue";
import M from "materialize-css";
export default {
  components: {
    TheNav,
  },
  mounted() {
    M.AutoInit();
  },
};
</script>

<style scoped>
</style>