<template>
  <section>
    <!-- <div class="row">
      <div class="col l3 "></div>
      <div class="col l3">
        <img class="responsive-img" :src="require(`../assets/imgs/${images.i1}`)" alt="image 1">
        <img class="responsive-img" :src="require(`../assets/imgs/${images.i1}`)" alt="image 1">
      </div>
      <div class="col l3 ">
        <img class="responsive-img" :src="require(`../assets/imgs/${images.i2}`)"  alt="image 2">
      </div>
      <div class="col l3 "></div>
    </div> -->
    <div id="slideshow">
      <div>
        <img src="//farm6.static.flickr.com/5224/5658667829_2bb7d42a9c_m.jpg" />
      </div>
      <div>
        <img src="//farm6.static.flickr.com/5230/5638093881_a791e4f819_m.jpg" />
      </div>
      <div>
        Pretty cool eh? This slide is proof the content can be anything.
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    images: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
img {
  margin: 1rem;
}
</style>