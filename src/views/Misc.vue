<template>
  <div>
    <the-nav></the-nav>
  </div>
  <section class="intro-content container">
    <div class="row">
      <div class="col l12 m12 s12">
        <img
          :src="require('@/assets/icons/icon_cloud.png')"
          class="responsive-img"
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
  <section class="resume">
    <div class="container row center">
      <div>
        <iframe
          frameborder="0"
          scrolling="no"
          width="500"
          height="300"
          src="https://drive.google.com/file/d/1wJupk0BGrQYLxanEbre5NK3F9tWZASpK/preview"
        >
        </iframe>
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
}
h5 {
  color: rgb(61, 138, 186);
}
</style>