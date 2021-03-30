<template>
  <div>
    <the-nav></the-nav>
  </div>
  <section class="intro-content container">
    <div class="row">
      <div class="col l12 m12 s12 center">
        <img
          :src="require('@/assets/icons/icon_cloud.png')"
          class="responsive-img technologies-image"
        />
      </div>
    </div>
    <div>
      <h5>Proficient Technologies And Resume</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        beatae doloremque excepturi nihil. Sapiente hic ea, sint eveniet at
        sequi quos molestias maiores voluptates beatae, ex architecto! Officia,
        inventore accusantium.
      </p>
    </div>
  </section>
  <div class="seperator"></div>
  <section class="resume">
    <div class="container center">
      <div>
        <embed
          width="100%"
          height="400px"
          type="application/pdf"
          src="https://drive.google.com/file/d/1wJupk0BGrQYLxanEbre5NK3F9tWZASpK/preview"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TheNav from "../components/TheNav.vue";
export default {
  components: { TheNav },
};
</script>

<style scoped>
div {
  /* outline: 2px solid red; */
}
iframe {
  margin-top: 2rem;
  width: 100%;
  height: 100%;
}
h5 {
  color: rgb(61, 138, 186);
}
img.technologies-image {
  width: 70%;
  height: auto;
}
.seperator {
  margin: 3rem;
}
</style>