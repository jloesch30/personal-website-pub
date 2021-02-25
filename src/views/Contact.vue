<template>
  <the-nav></the-nav>
  <section class="header">
    <div class="container center">
      <h4>Contact Form</h4>
      <p>Feel free to use the form below to contact me directly</p>
    </div>
  </section>
  <section class="input-form">
    <contact-form
      @form-success="goodToast"
      @form-fail="badToast"
    ></contact-form>
  </section>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import TheNav from "@/components/TheNav.vue";
import M from "materialize-css";
export default {
  components: {
    TheNav,
    ContactForm,
  },
  mounted() {
    M.AutoInit();
  },
  methods: {
    goodToast() {
      M.toast({ html: "Message sent", displayLength: 3000, classes: 'rounded'});
    },
    badToast() {
      M.toast({ html: "Message did not send, please try again", displayLength: 3000, classes: 'rounded' });
    },
  },
};
</script>

<style scoped>
.input-form {
  margin: 2rem;
}
</style>