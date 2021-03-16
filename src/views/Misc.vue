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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        beatae doloremque excepturi nihil. Sapiente hic ea, sint eveniet at
        sequi quos molestias maiores voluptates beatae, ex architecto! Officia,
        inventore accusantium.
      </p>
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
</style>