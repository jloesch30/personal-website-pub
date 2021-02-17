<template>
  <the-nav></the-nav>
  <section class="input-form">
    <contact-form></contact-form>
  </section>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';
import TheNav from "@/components/TheNav.vue";
import M from 'materialize-css';
export default {
  components: {
    TheNav,
    ContactForm
  },
  mounted() {
    M.AutoInit();
  }
};
</script>

<style scoped>
.input-form {
  margin: 2rem
}
</style>