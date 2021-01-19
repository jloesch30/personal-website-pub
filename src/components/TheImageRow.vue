<template>
  <section>
    <div class="row">
      <div class="col l3 ">
      <p>
        Hello there
      </p>
      </div>
      <div class="col l3 "></div>
      <div class="col l3 "></div>
      <div class="col l3 "></div>
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

</style>