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
      <h3 class="header">Welcome!</h3>
      <p class="p-text">
        Hello and thank you for taking the time to explore my personal website!
        I hope the content you explore will better paint a picture of who I am
        along with my passions, hobbies, and interests. If you want to connect
        further, please feel free to fill out a contact form and I will respond
        to you promptly. In the meantime, I hope you enjoy your stay and thank
        you for visiting!
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
      <p class="p-text">
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
.header {
  font-family: "Merriweather", serif;
  color: rgb(61, 138, 186);
}
.p-text {
  font-family: "Merriweather", serif;
  font-size: 16px;
}
</style>