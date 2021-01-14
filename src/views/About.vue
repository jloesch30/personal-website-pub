<template>
  <div>
    <the-nav></the-nav>
  </div>
  <div class="parallax bg-image-1"></div>
  <div class="container">
    <div class="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
        laborum amet minima eos accusamus quos. Doloribus ratione incidunt
        exercitationem necessitatibus atque, dignissimos voluptatum sunt, unde
        dicta enim a impedit soluta.
      </p>
    </div>
  </div>

  <div class="parallax bg-image-2"></div>
  <div class="container">
    <div class="content">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quam
        dolor minima vitae libero veniam laboriosam ducimus corrupti molestiae
        praesentium? Facilis aut eaque quia. Ad sunt harum incidunt modi! Sint!
      </p>
    </div>
  </div>

  <div>
    <the-contact></the-contact>
  </div>
</template>

<script>
import TheContact from "../components/TheContact.vue";
import TheNav from "@/components/TheNav.vue";
export default {
  data() {
    return {};
  },
  computed: {},
  components: {
    TheContact,
    TheNav,
  },
};
</script>

<style scoped>
.parallax {
  /* Set a specific height */
  height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-image-1 {
  background-image: url("../assets/imgs/camera.jpg");
}
.bg-image-2 {
  background-image: url("../assets/imgs/friends.jpg");
}
</style>